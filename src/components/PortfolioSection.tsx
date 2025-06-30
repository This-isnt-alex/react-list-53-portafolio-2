'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: "Corporate Network Penetration Test",
    type: "Red Team Engagement",
    description: "Comprehensive security assessment of a Fortune 500 company's network infrastructure, identifying critical vulnerabilities and providing remediation strategies.",
    technologies: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "Kali Linux"],
    results: ["15 Critical vulnerabilities found", "Network segmentation bypass", "Privilege escalation achieved", "Executive security report delivered"],
    status: "Completed",
    confidential: true
  },
  {
    title: "IoT Device Security Audit",
    type: "Vulnerability Assessment",
    description: "Security analysis of smart home devices and industrial IoT systems, focusing on firmware analysis and network communication security.",
    technologies: ["Firmware Analysis", "Hardware Hacking", "MQTT", "CoAP", "Radio Frequency Analysis"],
    results: ["12 Zero-day vulnerabilities", "Firmware reverse engineering", "Communication protocol flaws", "Security hardening guidelines"],
    status: "Completed",
    confidential: false
  },
  {
    title: "Web Application Security Testing",
    type: "OWASP Assessment",
    description: "Comprehensive web application security testing including OWASP Top 10 vulnerabilities, SQL injection, XSS, and authentication bypasses.",
    technologies: ["OWASP ZAP", "SQLMap", "Burp Suite", "Custom Scripts", "Browser Exploitation"],
    results: ["SQL Injection vulnerabilities", "XSS attack vectors", "Authentication bypass", "Session management flaws"],
    status: "Completed",
    confidential: false
  },
  {
    title: "Advanced Persistent Threat Simulation",
    type: "APT Simulation",
    description: "Simulated advanced persistent threat campaign to test organization's detection and response capabilities over 30-day engagement.",
    technologies: ["Cobalt Strike", "PowerShell Empire", "Custom Malware", "Social Engineering", "MITRE ATT&CK"],
    results: ["Persistent access maintained", "Data exfiltration simulation", "Detection evasion techniques", "Incident response evaluation"],
    status: "Ongoing",
    confidential: true
  },
  {
    title: "Blockchain Security Audit",
    type: "Smart Contract Audit",
    description: "Security review of DeFi protocol smart contracts, identifying vulnerabilities in token economics and transaction logic.",
    technologies: ["Solidity", "Mythril", "Slither", "Ganache", "Web3.js"],
    results: ["Reentrancy vulnerabilities", "Integer overflow issues", "Access control flaws", "Gas optimization"],
    status: "Completed",
    confidential: false
  },
  {
    title: "Cloud Infrastructure Security",
    type: "Cloud Penetration Test",
    description: "Assessment of AWS cloud infrastructure including IAM policies, S3 bucket configurations, and container security.",
    technologies: ["AWS CLI", "ScoutSuite", "Prowler", "Docker", "Kubernetes"],
    results: ["IAM misconfiguration", "S3 bucket exposure", "Container escape", "Privilege escalation"],
    status: "Completed",
    confidential: true
  }
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            PORTFOLIO
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cybersecurity projects, penetration testing engagements, and security research demonstrating expertise across various domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-blue-300 border-blue-500/50">
                    {project.type}
                  </Badge>
                  <Badge
                    variant={project.status === 'Completed' ? 'default' : project.status === 'Ongoing' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                  {project.title}
                  {project.confidential && (
                    <span className="ml-2 text-xs text-gray-500">[NDA Protected]</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-blue-300 text-sm font-medium mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-2">Key Results:</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Additional case studies available upon request. All projects conducted with proper authorization and ethical guidelines.
          </p>
        </div>
      </div>
    </section>
  )
}
