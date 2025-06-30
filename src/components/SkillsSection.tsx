'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skillCategories = {
  security: [
    { name: "Penetration Testing", level: 95, icon: "🎯" },
    { name: "Vulnerability Assessment", level: 92, icon: "🔍" },
    { name: "Ethical Hacking", level: 90, icon: "👨‍💻" },
    { name: "Network Security", level: 88, icon: "🌐" },
    { name: "Malware Analysis", level: 85, icon: "🦠" },
    { name: "Digital Forensics", level: 82, icon: "🔬" },
    { name: "Social Engineering", level: 87, icon: "🎭" },
    { name: "Incident Response", level: 84, icon: "🚨" }
  ],
  technical: [
    { name: "Kali Linux", level: 95, icon: "🐉" },
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Bash/Shell", level: 92, icon: "💻" },
    { name: "PowerShell", level: 80, icon: "🔷" },
    { name: "SQL", level: 88, icon: "🗄️" },
    { name: "C/C++", level: 75, icon: "⚙️" },
    { name: "Assembly", level: 70, icon: "🔧" }
  ],
  tools: [
    { name: "Metasploit", level: 92, icon: "🚀" },
    { name: "Burp Suite", level: 90, icon: "🕷️" },
    { name: "Nmap", level: 95, icon: "📡" },
    { name: "Wireshark", level: 88, icon: "🦈" },
    { name: "OWASP ZAP", level: 85, icon: "⚡" },
    { name: "Ghidra", level: 80, icon: "🔍" },
    { name: "Cobalt Strike", level: 85, icon: "🎯" },
    { name: "Bloodhound", level: 82, icon: "🩸" }
  ],
  cloud: [
    { name: "AWS Security", level: 85, icon: "☁️" },
    { name: "Azure Security", level: 80, icon: "🌩️" },
    { name: "Docker Security", level: 88, icon: "🐳" },
    { name: "Kubernetes", level: 75, icon: "⚓" },
    { name: "Terraform", level: 70, icon: "🏗️" },
    { name: "CI/CD Security", level: 82, icon: "🔄" }
  ]
}

const certifications = [
  { name: "OSCP", status: "Obtained", year: "2024", color: "bg-red-500" },
  { name: "CEH", status: "Obtained", year: "2023", color: "bg-blue-500" },
  { name: "CISSP", status: "In Progress", year: "2025", color: "bg-yellow-500" },
  { name: "GCIH", status: "Planned", year: "2025", color: "bg-gray-500" },
  { name: "OSWE", status: "Planned", year: "2025", color: "bg-gray-500" },
  { name: "CISM", status: "Planned", year: "2026", color: "bg-gray-500" }
]

export default function SkillsSection() {
  const [animatedLevels, setAnimatedLevels] = useState<{[key: string]: number}>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated: {[key: string]: number} = {}
      for (const skill of Object.values(skillCategories).flat()) {
        animated[skill.name] = skill.level
      }
      setAnimatedLevels(animated)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            EXPERTISE
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive cybersecurity skills across multiple domains, backed by industry certifications and hands-on experience.
          </p>
        </div>

        <Tabs defaultValue="security" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-gray-700/50">
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-600">Security</TabsTrigger>
            <TabsTrigger value="technical" className="data-[state=active]:bg-blue-600">Technical</TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-blue-600">Tools</TabsTrigger>
            <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-600">Cloud</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-blue-300 text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress
                        value={animatedLevels[skill.name] || 0}
                        className="h-2 bg-gray-700"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-light text-white mb-8 text-center tracking-wider">
            CERTIFICATIONS & CREDENTIALS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50 text-center">
                <CardContent className="p-4">
                  <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{cert.name}</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.status}</p>
                  <p className="text-gray-500 text-xs">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-light text-white mb-8 text-center tracking-wider">
            TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tor", "Onion Services", "Cryptocurrency", "Blockchain", "IoT Security",
              "Mobile Security", "Hardware Hacking", "RFID/NFC", "Wireless Security",
              "Social Engineering", "OSINT", "Threat Intelligence", "Zero-Day Research",
              "Exploit Development", "Reverse Engineering", "Malware Development",
              "Red Team Operations", "Purple Team", "Threat Hunting", "SIEM/SOAR"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="text-blue-300 border-blue-500/50 hover:bg-blue-500/20 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
