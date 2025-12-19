'use client'

import { useEffect } from 'react'

export default function Animations() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      '.skill-category, .project-card, .timeline-item, .education-card, .contact-card'
    )

    animateElements.forEach(el => {
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(20px)'
      ;(el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector('.hero') as HTMLElement
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Console message
    console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; color: #6366f1;')
    console.log(
      '%cWebsite created by Hiền Nguyễn - Cloud Architect & Lead DevOps Engineer',
      'color: #6b7280;'
    )

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

