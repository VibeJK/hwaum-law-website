"use client"

import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="https://hwaumlaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative w-32 h-32">
              <Image
                src="/logo.png"
                alt="법률사무소 화음 로고"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#expertise"
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              전문성
            </a>
            <a
              href="#services"
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              서비스
            </a>
            <a
              href="#process"
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              프로세스
            </a>
            <a
              href="#contact"
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              상담문의
            </a>
          </nav>
          
          {/* Mobile Menu Button - for future implementation */}
          <div className="md:hidden">
            <button className="text-dark hover:text-primary transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}