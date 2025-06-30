'use client'

import React from 'react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/futuristic-data-server-glowing-security-lock-cybersecurity-protection-encryption-modern-tech-dark-background-room-rack-367512547.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-8">
            CYBERSECURITY
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-widest text-blue-200">
              Aashish Karn
            </span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 text-sm md:text-base font-light">
            <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded border border-gray-700/50">
              <div className="text-blue-300 mb-2 font-medium">SECURITY</div>
              <div>Tor Networks</div>
            </div>
            <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded border border-gray-700/50">
              <div className="text-blue-300 mb-2 font-medium">DEVELOPMENT</div>
              <div>Full Stack</div>
            </div>
            <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded border border-gray-700/50">
              <div className="text-blue-300 mb-2 font-medium">SYSTEMS</div>
              <div>Kali Linux</div>
            </div>
            <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded border border-gray-700/50">
              <div className="text-blue-300 mb-2 font-medium">TESTING</div>
              <div>Ethical Hacking</div>
            </div>
          </div>

          <div className="mt-16 text-gray-300 text-lg">
            <div className="mb-2">Expert in Tor • Cybersecurity • IT Networking</div>
            <div>FullStack Developer • Kali Linux • Offensive Security • Ethical Hacking • IoT Devices</div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16">
            <a href="#portfolio" className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Education & Location Info */}
      <div className="absolute bottom-8 left-8 z-10 text-white text-sm bg-black/40 backdrop-blur-sm p-4 rounded border border-gray-700/50">
        <div className="space-y-1">
          <div className="text-blue-300 font-medium">Education</div>
          <div>Cosmos College - Computer Engineering</div>
          <div>MIT - Intermediate</div>
          <div>New English Boarding School</div>
          <div className="text-blue-300 font-medium mt-3">Location</div>
          <div>Janakpur / Lalitpur</div>
        </div>
      </div>
    </section>
  )
}
