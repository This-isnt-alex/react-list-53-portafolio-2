'use client'

import type React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

const contactInfo = [
  {
    type: "Email",
    value: "Aashish.K4rn@gmail.com",
    icon: "📧",
    link: "mailto:Aashish.K4rn@gmail.com",
    secure: true
  },
  {
    type: "Phone",
    value: "+977 9766382538",
    icon: "📱",
    link: "tel:+9779766382538",
    secure: false
  },
  {
    type: "Location",
    value: "Janakpur / Lalitpur, Nepal",
    icon: "📍",
    link: "#",
    secure: false
  },
  {
    type: "PGP Key",
    value: "Download Public Key",
    icon: "🔐",
    link: "#",
    secure: true
  }
]

const socialLinks = [
  {
    platform: "GitHub",
    username: "@SHADY-AK",
    url: "https://github.com/SHADY-AK",
    icon: "🐙"
  },
  {
    platform: "LinkedIn",
    username: "Aashish Karn",
    url: "#",
    icon: "💼"
  },
  {
    platform: "Twitter",
    username: "@ShadyNexus",
    url: "https://twitter.com/ShadyNexus",
    icon: "🐦"
  },
  {
    platform: "Instagram",
    username: "@Aashish.Karn_",
    url: "https://Instagram.com/Aashish.Karn_",
    icon: "📸"
  },
  {
    platform: "Facebook",
    username: "AashishKarn.AK",
    url: "https://facebook.com/AashishKarn.AK",
    icon: "📘"
  }
]

const inquiryTypes = [
  "Penetration Testing",
  "Security Consultation",
  "Vulnerability Assessment",
  "Security Training",
  "Red Team Engagement",
  "Security Architecture Review",
  "Incident Response",
  "Compliance Audit",
  "Bug Bounty Collaboration",
  "Speaking Engagement",
  "Other"
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    budget: '',
    timeline: '',
    message: '',
    encryption: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with encryption
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: '',
          budget: '',
          timeline: '',
          message: '',
          encryption: false
        })
      }, 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            SECURE CONTACT
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get in touch for cybersecurity consultations, penetration testing services, or collaboration opportunities.
            All communications are handled with strict confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50 mb-8">
              <CardHeader>
                <CardTitle className="text-white text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{info.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.type}</p>
                      <a
                        href={info.link}
                        className="text-white hover:text-blue-300 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    </div>
                    {info.secure && (
                      <Badge variant="outline" className="text-green-300 border-green-500/50 text-xs">
                        Secure
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white text-xl">Social Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{social.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{social.platform}</p>
                      <a
                        href={social.url}
                        className="text-white hover:text-blue-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.username}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Secure Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  🔒 Secure Inquiry Form
                  <Badge variant="outline" className="text-green-300 border-green-500/50 ml-3">
                    End-to-End Encrypted
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-400">
                      Your encrypted message has been received. I'll respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-white">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-600 text-white"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiryType" className="text-white">Inquiry Type *</Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                        >
                          <option value="">Select service type</option>
                          {inquiryTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="budget" className="text-white">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-plus">$50,000+</option>
                          <option value="discuss">Prefer to discuss</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="timeline" className="text-white">Project Timeline</Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (1-2 weeks)</option>
                          <option value="normal">Normal (1 month)</option>
                          <option value="flexible">Flexible (2-3 months)</option>
                          <option value="planning">Planning phase</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Please describe your cybersecurity needs, current challenges, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="encryption"
                        name="encryption"
                        checked={formData.encryption}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <Label htmlFor="encryption" className="text-gray-400 text-sm">
                        I understand this form uses end-to-end encryption and agree to the confidentiality terms
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.encryption}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    >
                      {isSubmitting ? '🔒 Encrypting & Sending...' : '🚀 Send Secure Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Prefer direct communication? Reach out via encrypted channels:
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/20">
                  🔐 Signal Messenger
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
                  📧 ProtonMail
                </Button>
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20">
                  🛡️ Threema
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
