'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'Portfolio', href: '#portfolio', icon: '💼' },
  { name: 'Skills', href: '#skills', icon: '⚡' },
  { name: 'Resume', href: '#resume', icon: '📄' },
  { name: 'Blog', href: '#blog', icon: '📝' },
  { name: 'Contact', href: '#contact', icon: '📧' }
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/SHADY-AK', icon: '🐙' },
  { name: 'LinkedIn', url: '#', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com/ShadyNexus', icon: '🐦' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* Main Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-700/50'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-white font-medium text-xl tracking-wide">
              <span className="text-blue-300">AASHISH</span> KARN
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="hidden lg:inline mr-2">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Side Contact Panel */}
      <aside className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 bg-black/90 backdrop-blur-md p-6 rounded-l-lg border-l border-blue-500/30 shadow-lg">
        <div className="space-y-6 text-sm text-gray-300">
          <div>
            <div className="text-white font-medium mb-3 text-blue-200">Connect.</div>
            <div className="space-y-2">
              <a href="mailto:Aashish.K4rn@gmail.com" className="block hover:text-blue-300 transition-colors">
                Aashish.K4rn@gmail.com
              </a>
              <a href="tel:9766382538" className="block hover:text-blue-300 transition-colors">
                +977 9766382538
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-3 text-blue-200">Social.</div>
            <div className="space-y-2">
              <a href="https://github.com/SHADY-AK" className="block hover:text-blue-300 transition-colors">
                GitHub
              </a>
              <a href="https://facebook.com/AashishKarn.AK" className="block hover:text-blue-300 transition-colors">
                Facebook
              </a>
              <a href="https://Instagram.com/Aashish.Karn_" className="block hover:text-blue-300 transition-colors">
                Instagram
              </a>
              <a href="https://twitter.com/ShadyNexus" className="block hover:text-blue-300 transition-colors">
                @ShadyNexus
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300"
          style={{
            width: typeof window !== 'undefined'
              ? `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              : '0%'
          }}
        />
      </div>

      {/* Quick Navigation Dots */}
      <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'bg-blue-400 border-blue-400 scale-125'
                  : 'border-gray-500 hover:border-blue-400'
              }`}
              title={item.name}
            />
          ))}
        </div>
      </nav>
    </>
  )
}
