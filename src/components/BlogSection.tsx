'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    title: "Advanced Tor Network Security: Beyond Basic Anonymity",
    excerpt: "Deep dive into Tor network security vulnerabilities, traffic analysis techniques, and advanced de-anonymization methods used by nation-state actors.",
    category: "Tor Security",
    readTime: "12 min read",
    date: "2024-01-15",
    tags: ["Tor", "Anonymity", "Traffic Analysis", "Privacy"],
    difficulty: "Advanced",
    views: 2847,
    featured: true
  },
  {
    title: "IoT Penetration Testing: Complete Methodology",
    excerpt: "Comprehensive guide to testing IoT devices including firmware analysis, hardware hacking, and wireless protocol exploitation.",
    category: "IoT Security",
    readTime: "18 min read",
    date: "2024-01-08",
    tags: ["IoT", "Hardware Hacking", "Firmware", "Embedded Systems"],
    difficulty: "Intermediate",
    views: 1923,
    featured: true
  },
  {
    title: "Building Custom Metasploit Modules for Zero-Day Exploits",
    excerpt: "Step-by-step tutorial on developing custom Metasploit modules for newly discovered vulnerabilities and exploitation techniques.",
    category: "Exploit Development",
    readTime: "25 min read",
    date: "2024-01-01",
    tags: ["Metasploit", "Exploit Development", "Ruby", "Zero-Day"],
    difficulty: "Advanced",
    views: 3156,
    featured: true
  },
  {
    title: "Social Engineering in the Digital Age: Psychology of Cybercrime",
    excerpt: "Analysis of modern social engineering techniques, psychological manipulation tactics, and defense strategies for organizations.",
    category: "Social Engineering",
    readTime: "15 min read",
    date: "2023-12-20",
    tags: ["Social Engineering", "Psychology", "Phishing", "Human Factor"],
    difficulty: "Beginner",
    views: 4521,
    featured: false
  },
  {
    title: "Kubernetes Security: Container Escape Techniques",
    excerpt: "Exploration of container escape vulnerabilities in Kubernetes environments and secure deployment practices.",
    category: "Cloud Security",
    readTime: "20 min read",
    date: "2023-12-15",
    tags: ["Kubernetes", "Container Security", "Cloud", "DevSecOps"],
    difficulty: "Advanced",
    views: 1678,
    featured: false
  },
  {
    title: "OSINT for Cybersecurity: Advanced Reconnaissance Techniques",
    excerpt: "Advanced open-source intelligence gathering techniques for cybersecurity professionals and ethical hackers.",
    category: "OSINT",
    readTime: "14 min read",
    date: "2023-12-08",
    tags: ["OSINT", "Reconnaissance", "Intelligence", "Information Gathering"],
    difficulty: "Intermediate",
    views: 2834,
    featured: false
  },
  {
    title: "Blockchain Security Audit: Smart Contract Vulnerabilities",
    excerpt: "Comprehensive guide to auditing smart contracts, identifying common vulnerabilities, and secure coding practices.",
    category: "Blockchain Security",
    readTime: "22 min read",
    date: "2023-12-01",
    tags: ["Blockchain", "Smart Contracts", "Solidity", "DeFi"],
    difficulty: "Advanced",
    views: 1945,
    featured: false
  },
  {
    title: "Building a Home Cybersecurity Lab: Complete Setup Guide",
    excerpt: "Detailed tutorial on setting up a comprehensive cybersecurity lab at home using VirtualBox, VMware, and cloud resources.",
    category: "Lab Setup",
    readTime: "16 min read",
    date: "2023-11-25",
    tags: ["Lab Setup", "Virtualization", "Training", "Kali Linux"],
    difficulty: "Beginner",
    views: 5672,
    featured: false
  },
  {
    title: "APT Simulation: Mimicking Advanced Persistent Threats",
    excerpt: "How to simulate advanced persistent threat campaigns for red team exercises and security awareness training.",
    category: "Red Team",
    readTime: "28 min read",
    date: "2023-11-18",
    tags: ["APT", "Red Team", "MITRE ATT&CK", "Threat Simulation"],
    difficulty: "Expert",
    views: 1234,
    featured: false
  }
]

const categories = ["All", "Tor Security", "IoT Security", "Exploit Development", "Social Engineering", "Cloud Security", "OSINT", "Blockchain Security", "Lab Setup", "Red Team"]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-500"
    case "Intermediate": return "bg-yellow-500"
    case "Advanced": return "bg-orange-500"
    case "Expert": return "bg-red-500"
    default: return "bg-gray-500"
  }
}

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === category))
    }
  }

  const featuredPosts = blogPosts.filter(post => post.featured)
  const displayPosts = selectedCategory === "All" ? filteredPosts : filteredPosts

  return (
    <section id="blog" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wider">
            CYBERSECURITY INSIGHTS
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            In-depth articles, tutorials, and research on cutting-edge cybersecurity topics.
            Sharing knowledge to advance the security community.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-8 tracking-wider">
            FEATURED ARTICLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-blue-300 border-blue-500/50">
                      {post.category}
                    </Badge>
                    <Badge className={`${getDifficultyColor(post.difficulty)} text-white text-xs`}>
                      {post.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <div className="flex items-center space-x-4">
                      <span>{post.readTime}</span>
                      <span>👁️ {post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={`text-sm ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-8 tracking-wider">
            {selectedCategory === "All" ? "ALL ARTICLES" : `${selectedCategory.toUpperCase()} ARTICLES`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-blue-300 border-blue-500/50 text-xs">
                      {post.category}
                    </Badge>
                    <Badge className={`${getDifficultyColor(post.difficulty)} text-white text-xs`}>
                      {post.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-base group-hover:text-blue-300 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <div className="flex items-center space-x-3">
                      <span>{post.readTime}</span>
                      <span>👁️ {post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center">
          <Card className="bg-black/40 backdrop-blur-sm border-gray-700/50 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-xl">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Subscribe to get notified about new cybersecurity articles, tutorials, and research findings.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                🔒 Your email is secure. No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
