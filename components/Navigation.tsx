'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) {
          const offsetTop = (target as HTMLElement).offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
          setIsMenuOpen(false)
        }
      }
    }

    const links = document.querySelectorAll('.nav-menu a')
    links.forEach(link => {
      link.addEventListener('click', handleClick as any)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as any)
      })
    }
  }, [])

  useEffect(() => {
    // Navbar background on scroll
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement
      if (navbar) {
        if (window.pageYOffset > 100) {
          navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        } else {
          navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }
      }

      // Active section highlighting
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach(section => {
        const sectionHeight = section.clientHeight
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || '')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">HN</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

