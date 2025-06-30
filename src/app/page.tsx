'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import SkillsSection from '@/components/SkillsSection'
import ResumeSection from '@/components/ResumeSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Projects Section */}
      <PortfolioSection />

      {/* Skills & Expertise Section */}
      <SkillsSection />

      {/* Resume & Experience Section */}
      <ResumeSection />

      {/* Blog & Articles Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-white text-xl font-medium mb-4">
                <span className="text-blue-300">AASHISH</span> KARN
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Cybersecurity specialist focused on penetration testing, ethical hacking, and advanced security research.
                Dedicated to helping organizations strengthen their security posture through comprehensive assessments and strategic consulting.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/SHADY-AK" className="text-gray-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href="https://facebook.com/AashishKarn.AK" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Facebook
                </a>
                <a href="https://Instagram.com/Aashish.Karn_" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Instagram
                </a>
                <a href="https://twitter.com/ShadyNexus" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Penetration Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Security Consulting</li>
                <li>Red Team Engagement</li>
                <li>Security Training</li>
                <li>Compliance Audit</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tor Networks</li>
                <li>Kali Linux</li>
                <li>Ethical Hacking</li>
                <li>IoT Security</li>
                <li>Cloud Security</li>
                <li>Blockchain Audit</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Aashish Karn. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">🔒 Secure Site</span>
              <span className="text-gray-500 text-sm">🛡️ Privacy Protected</span>
              <span className="text-gray-500 text-sm">⚡ Fast & Optimized</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
