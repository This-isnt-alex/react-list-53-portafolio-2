'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const experience = [
  {
    title: "Senior Cybersecurity Analyst",
    company: "SecureNet Solutions",
    period: "2023 - Present",
    location: "Kathmandu, Nepal",
    description: "Lead penetration testing engagements for enterprise clients, conduct security assessments, and develop custom security tools.",
    achievements: [
      "Led 15+ successful penetration testing engagements",
      "Discovered and responsibly disclosed 3 zero-day vulnerabilities",
      "Developed automated security scanning tools saving 40% assessment time",
      "Trained junior security analysts on ethical hacking techniques"
    ]
  },
  {
    title: "Cybersecurity Consultant",
    company: "TechGuard Consulting",
    period: "2022 - 2023",
    location: "Lalitpur, Nepal",
    description: "Provided cybersecurity consulting services to SMEs, conducted security audits, and implemented security frameworks.",
    achievements: [
      "Assessed security posture for 20+ organizations",
      "Implemented ISO 27001 compliance frameworks",
      "Reduced client security incidents by 65%",
      "Conducted security awareness training programs"
    ]
  },
  {
    title: "Junior Penetration Tester",
    company: "CyberShield Corp",
    period: "2021 - 2022",
    location: "Kathmandu, Nepal",
    description: "Performed web application testing, network assessments, and vulnerability research under senior guidance.",
    achievements: [
      "Completed 30+ web application security assessments",
      "Identified critical vulnerabilities in client systems",
      "Contributed to internal tool development",
      "Maintained 98% client satisfaction rating"
    ]
  }
]

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Cosmos College of Management and Technology",
    period: "2018 - 2022",
    location: "Lalitpur, Nepal",
    gpa: "3.8/4.0",
    highlights: [
      "Computer Networks and Security specialization",
      "Thesis: 'Advanced Persistent Threat Detection using Machine Learning'",
      "President, Cybersecurity Club",
      "Winner, National Ethical Hacking Competition 2021"
    ]
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "MIT International College",
    period: "2016 - 2018",
    location: "Kathmandu, Nepal",
    gpa: "3.9/4.0",
    highlights: [
      "Science and Mathematics focus",
      "Computer Science excellence award",
      "School IT support team lead"
    ]
  },
  {
    degree: "Secondary Education",
    institution: "New English Boarding School",
    period: "2006 - 2016",
    location: "Janakpur, Nepal",
    gpa: "3.7/4.0",
    highlights: [
      "Computer Club founder and president",
      "Mathematics Olympiad participant",
      "School website developer"
    ]
  }
]

const achievements = [
  { title: "CVE-2024-XXXX", description: "Discovered and reported critical vulnerability in IoT firmware", year: "2024" },
  { title: "Bug Bounty Hunter", description: "Recognized researcher on HackerOne and Bugcrowd platforms", year: "2023" },
  { title: "DEFCON CTF Finalist", description: "Top 50 team placement in international CTF competition", year: "2023" },
  { title: "Security Research Publication", description: "Published paper on Tor network security analysis", year: "2022" },
  { title: "National Hacking Championship", description: "1st place in Nepal's premier ethical hacking competition", year: "2021" },
  { title: "Open Source Contributor", description: "Contributor to major cybersecurity tools and frameworks", year: "2020-Present" }
]

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // Create a mock PDF download
    const element = document.createElement('a')
    element.href = '#'
    element.download = 'Aashish_Karn_Cybersecurity_Resume.pdf'
    element.click()

    // Show download message
    alert('Resume download will be available soon. Please contact directly for current resume.')
  }

  return (
    <section id="resume" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            PROFESSIONAL BACKGROUND
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Comprehensive professional experience in cybersecurity, from junior analyst to senior consultant, backed by strong educational foundation.
          </p>
          <Button
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            📄 Download Full Resume
          </Button>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-white mb-8 tracking-wider">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">{exp.period}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div>
                    <h4 className="text-blue-300 text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-white mb-8 tracking-wider">
            EDUCATION
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-lg mb-1">{edu.degree}</CardTitle>
                      <p className="text-blue-300">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">{edu.period}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                      <Badge variant="outline" className="text-blue-300 border-blue-500/50 mt-1">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div>
          <h3 className="text-2xl font-light text-white mb-8 tracking-wider">
            ACHIEVEMENTS & RECOGNITION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                    <Badge variant="outline" className="text-blue-300 border-blue-500/50">
                      {achievement.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm mb-4">
            References and detailed project documentation available upon request
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
              📜 Request References
            </Button>
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
              📊 View Detailed Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
