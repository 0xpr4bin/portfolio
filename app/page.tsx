import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code,
  FileCode2,
  Github,
  Globe,
  Laptop,
  LinkedinIcon,
  Mail,
  MapPin,
  Shield,
  ShieldAlert,
  Terminal,
  User,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-xl">Prabin Sigdel</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-gray-900"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Terminal className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-emerald-500">Senior Security Researcher</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400">CRTP (Certified Red Team Professional)</h2>
            </div>

            <p className="text-gray-300 text-lg">
              Experienced penetration tester proficient in identifying and exploiting vulnerabilities to enhance
              cybersecurity. Skilled in conducting thorough assessments of networks, applications, and systems to
              fortify defenses.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                <Shield className="mr-1 h-3 w-3" /> Application Security
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                <Globe className="mr-1 h-3 w-3" /> Network Security
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-emerald-500/50 bg-emerald-500/10 text-emerald-400">
                <Laptop className="mr-1 h-3 w-3" /> Cloud Security
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-1" />
                <span>0xpr4bin00@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://np.linkedin.com/in/0xpr4bin" target="_blank">
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://hackerone.com/0xpr4binx" target="_blank">
                  <Shield className="mr-2 h-4 w-4" />
                  HackerOne
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/30 bg-gray-800 flex items-center justify-center">
              <Shield className="w-32 h-32 text-emerald-500/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 flex items-end justify-center pb-6">
                <span className="text-xl font-bold text-emerald-400">Prabin Sigdel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <BriefcaseBusiness className="mr-2 h-6 w-6 text-emerald-500" />
              Professional Experience
            </h2>
            <p className="text-gray-400">My journey in cybersecurity</p>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Security Analyst</h3>
                      <p className="text-emerald-400">CryptoGen Nepal</p>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
                      06/2023 - Present
                    </Badge>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>
                        Performed Vulnerability Assessments (VA) and Penetration Testing (PT) across network systems,
                        applications, and cloud infrastructures, identifying vulnerabilities, misconfigurations, and
                        weaknesses.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>
                        Generated comprehensive reports outlining findings, exploitation steps, and remediation
                        recommendations ensuring clear understanding and prioritization of security measures.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>
                        Contributed to security research efforts by staying updated on the latest trends, and developed
                        custom tools and scripts to enhance offensive security capabilities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                      <span>
                        Collaborated with teams to implement recommended security measures and provide ongoing support,
                        ensuring the strengthening of overall security posture.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-16">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-emerald-500" />
              Education & Certifications
            </h2>
            <p className="text-gray-400">Academic background and professional certifications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Bachelor's Degree - Computer Science & Information Technology</h4>
                        <p className="text-emerald-400">Tribhuvan University</p>
                      </div>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
                        2018 - 2022
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-emerald-500" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">CRTP</h4>
                    <p className="text-gray-300 text-sm">
                      Altered Security's Certified Red Team Professional (CRTP) is a hands-on red team certification.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Certified Appsec Practitioner</h4>
                    <p className="text-gray-300 text-sm">
                      Hands on exam provided by Appsec, covering vulnerability assessment and penetration testing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Code className="mr-2 h-6 w-6 text-emerald-500" />
              Projects
            </h2>
            <p className="text-gray-400">Security tools and applications I've developed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
                    Cryptography & Steganography Tool
                  </h3>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
                    Security Tool
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4">
                  Developed a tool for encryption and decryption as well as steganography, allowing secure communication
                  and data hiding.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Cryptography</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/0xpr4bin/crypStego" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-emerald-500/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
                    Network Scanner
                  </h3>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
                    Security Tool
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4">
                  Developed a tool to scan networks for open ports and perform traffic analysis, helping identify
                  potential security vulnerabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Networking</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/0xpr4bin/netScan" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <FileCode2 className="mr-2 h-6 w-6 text-emerald-500" />
              Skills & Expertise
            </h2>
            <p className="text-gray-400">Technical skills and personal strengths</p>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="strengths">Personal Strengths</TabsTrigger>
            </TabsList>
            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-emerald-500" />
                      Security Assessment
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Vulnerability Assessment</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Penetration Testing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Application Security</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Network Security</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-emerald-500" />
                      Infrastructure Security
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Cloud Security Audit</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Active Directory Security</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>CICD Security</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Network Traffic Analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Code className="mr-2 h-5 w-5 text-emerald-500" />
                      Technical Skills
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Cryptography</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Steganography</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Python Development</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Security Tool Development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="strengths">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <User className="mr-2 h-5 w-5 text-emerald-500" />
                      Leadership
                    </h3>
                    <p className="text-gray-300">
                      Led teams on project-based initiatives, fostering collaboration and achieving collective goals
                      through effective coordination and guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-emerald-500" />
                      Analytical Skills
                    </h3>
                    <p className="text-gray-300">
                      Ability to analyze complex systems and identify potential security vulnerabilities by evaluating
                      various factors and scenarios.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Terminal className="mr-2 h-5 w-5 text-emerald-500" />
                      Problem-solving
                    </h3>
                    <p className="text-gray-300">
                      Effectively analyzed complex issues and developed innovative solutions to overcome challenges and
                      achieve project objectives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Languages */}
        <section className="py-8">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Globe className="mr-2 h-6 w-6 text-emerald-500" />
              Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">English</h3>
                  <p className="text-gray-400">Advanced</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Nepali</h3>
                  <p className="text-gray-400">Native</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Mail className="mr-2 h-6 w-6 text-emerald-500" />
              Get In Touch
            </h2>
            <p className="text-gray-400">Interested in working together? Reach out to me.</p>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                    <p className="text-gray-300">
                      Feel free to reach out for collaboration, security consulting, or just to say hello.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="font-medium">0xpr4bin00@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-medium">Kathmandu, Nepal</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <LinkedinIcon className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">LinkedIn</p>
                        <Link
                          href="https://np.linkedin.com/in/0xpr4bin"
                          target="_blank"
                          className="font-medium hover:text-emerald-400 transition-colors"
                        >
                          linkedin.com/in/0xpr4bin
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/10 p-3 rounded-full">
                        <Github className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">GitHub</p>
                        <Link
                          href="https://github.com/0xpr4bin"
                          target="_blank"
                          className="font-medium hover:text-emerald-400 transition-colors"
                        >
                          github.com/0xpr4bin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ShieldAlert className="h-5 w-5 text-emerald-500" />
              <span className="font-bold">Prabin Sigdel</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/0xpr4bin" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://np.linkedin.com/in/0xpr4bin" target="_blank">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://hackerone.com/0xpr4binx" target="_blank">
                  <Shield className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Prabin Sigdel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
