'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Get basePath from environment, default to '/CV' if not set
// Empty string means custom domain (root path)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/CV'

// Helper function to get image path with basePath
const getImagePath = (imagePath: string) => {
  // Remove leading slash from imagePath if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  // If basePath is empty (custom domain), use root path
  if (basePath === '' || basePath === undefined) {
    return `/${cleanPath}`
  }
  // Otherwise, combine basePath with image path
  return `${basePath}/${cleanPath}`
}

export default function Home() {
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentSection, setCurrentSection] = useState('home')
  const inputRef = useRef<HTMLInputElement>(null)

  const backgroundCommands = [
    'ssh deploy@prod git pull origin main',
    'git status ansible-playbook site.yml',
    'docker-compose up -d',
    'kubectl get pods',
    'terraform plan',
    'ansible-playbook deploy.yml',
    'journalctl -u app.service',
    'git pull origin main',
    'docker ps',
    'kubectl apply -f deployment.yaml',
  ]

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setCommandHistory([...commandHistory, `$ ${cmd}`, getCommandOutput(trimmedCmd)])
    setCommand('')

    // Navigate to sections
    if (trimmedCmd === 'about' || trimmedCmd === 'whoami') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('about')
    } else if (trimmedCmd === 'skills') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('skills')
    } else if (trimmedCmd === 'experience' || trimmedCmd === 'exp') {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('experience')
    } else if (trimmedCmd === 'projects' || trimmedCmd === 'proj') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('projects')
    } else if (trimmedCmd === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('contact')
    } else if (trimmedCmd === 'certifications') {
      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection('education')
    } else if (trimmedCmd === 'stats') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        'GitHub stats feature coming soon!',
      ])
      setCommand('')
      return
    } else if (trimmedCmd === 'clear') {
      setCommandHistory([])
    } else if (trimmedCmd === 'ls') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        'projects/  repositories/  about.txt  skills.txt  experience/  certifications/',
      ])
      setCommand('')
      return
    } else if (trimmedCmd === 'help') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        'Available commands: ls, whoami, skills, contact, clear, projects, about, experience, certifications',
      ])
      setCommand('')
      return
    } else if (trimmedCmd !== '') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        `Command not found: ${cmd}. Type 'help' for available commands.`,
      ])
      setCommand('')
      return
    }
  }

  const getCommandOutput = (cmd: string): string => {
    switch (cmd) {
      case 'about':
      case 'whoami':
        return 'Opening about section...'
      case 'skills':
        return 'Opening skills section...'
      case 'experience':
      case 'exp':
        return 'Opening experience section...'
      case 'projects':
      case 'proj':
        return 'Opening projects section...'
      case 'contact':
        return 'Opening contact section...'
      case 'certifications':
        return 'Opening certifications section...'
      default:
        return ''
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(command)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('nguyentronghiensgu@gmail.com')
    alert('Email copied to clipboard!')
  }

  const toggleTheme = () => {
    // Future: implement theme toggle
    alert('Theme toggle coming soon!')
  }

  return (
    <div className="main-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-header">
          <div className="profile-name">
            HIỂN NGUYỄN
            <span className="status-indicator"></span>
          </div>
          <div className="profile-title">DevOps Manager | DevSecOps & Platform Architect</div>
          <div className="profile-image">
            <Image
              src={getImagePath('hien.jpg')}
              alt="Hiển Nguyễn"
              width={120}
              height={120}
              className="profile-image-photo"
              priority
              unoptimized
            />
          </div>
        </div>

        <nav>
          <ul className="nav-menu">
            <li>
              <a
                href="#home"
                className={currentSection === 'home' ? 'active' : ''}
                onClick={() => setCurrentSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={currentSection === 'about' ? 'active' : ''}
                onClick={() => setCurrentSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={currentSection === 'skills' ? 'active' : ''}
                onClick={() => setCurrentSection('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={currentSection === 'experience' ? 'active' : ''}
                onClick={() => setCurrentSection('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={currentSection === 'projects' ? 'active' : ''}
                onClick={() => setCurrentSection('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={currentSection === 'contact' ? 'active' : ''}
                onClick={() => setCurrentSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-actions">
          <button className="action-btn" onClick={toggleTheme}>
            Toggle Dark/Light
          </button>
          <button className="action-btn" onClick={copyEmail}>
            Copy Email
          </button>
          <a
            href={getImagePath('HienNguyen_DevSecOps_CV.pdf')}
            download="HienNguyen_DevSecOps_CV.pdf"
            className="action-btn"
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
          >
            Download PDF CV
          </a>
        </div>
      </aside>

      {/* Terminal Area */}
      <main className="terminal-area">
        <div className="terminal-bg-text">
          {backgroundCommands.map((cmd, i) => (
            <div key={i} style={{ opacity: 0.1, marginBottom: '0.5rem' }}>
              {cmd}
            </div>
          ))}
        </div>

        <div className="terminal-content">
          {/* Welcome Section */}
          <section id="home" className="welcome-section">
            <h1 className="welcome-title">Welcome to the portfolio of Hiển Nguyễn</h1>
            <div className="professional-summary">
              <div className="summary-line">
                <strong>HIỂN NGUYỄN</strong>
              </div>
              <div className="summary-line">
                <strong>DevOps Manager | DevSecOps & Platform Architect</strong>
              </div>
              <div className="summary-line">
                <span className="summary-emoji">📍</span>
                <strong>Location:</strong> Ho Chi Minh City, Vietnam
              </div>
              <div className="summary-line">
                <span className="summary-emoji">📧</span>
                <strong>Email:</strong> nguyentronghiensgu@gmail.com
              </div>
              <div className="summary-line">
                <span className="summary-emoji">📞</span>
                <strong>Phone:</strong> (+84) 932 670 908
              </div>
              <div className="summary-line">
                <span className="summary-emoji">🔗</span>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/nguyen-trong-hien-17083488/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--terminal-green)' }}
                >
                  https://www.linkedin.com/in/nguyen-trong-hien-17083488/
                </a>
              </div>
            </div>
          </section>

          {/* Professional Summary Section */}
          <section id="about" className="welcome-section">
            <h2 className="skills-title">PROFESSIONAL SUMMARY</h2>
            <div className="professional-summary">
              <div className="summary-line">
                DevOps Manager with 10+ years leading high-performing teams and driving platform
                transformation at scale. Proven track record of building secure, reliable infrastructure
                supporting millions of users while reducing costs and improving delivery velocity.
                Specialized in DevSecOps governance, Kubernetes platforms, and Zero Trust security.
              </div>
            </div>
          </section>

          {/* Key Achievements Section */}
          <section className="welcome-section" style={{ marginTop: '2rem' }}>
            <h2 className="skills-title">KEY ACHIEVEMENTS</h2>
            <div className="professional-summary">
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                color: 'var(--terminal-text)'
              }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  • Built DevOps practice from ground up, scaling team 3→8 engineers
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  • Achieved 99.95% uptime across mission-critical platforms
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  • Reduced deployment cycle time by 75% through GitOps adoption
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  • Led ISO 27001 & SOC 2 compliance for infrastructure layer
                </li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section">
            <h2 className="skills-title">CORE COMPETENCIES</h2>

            {/* PRIMARY - Nổi bật, box to hơn, đậm hơn */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ 
                color: 'var(--terminal-green-bright)', 
                marginBottom: '1.5rem', 
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>
                PRIMARY
              </h3>
              <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div className="skill-item" style={{ 
                  padding: '1.5rem',
                  border: '2px solid var(--terminal-green-bright)',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 255, 0, 0.05)'
                }}>
                  <div className="skill-name" style={{ 
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    DevSecOps Strategy & Governance
                  </div>
                </div>
                <div className="skill-item" style={{ 
                  padding: '1.5rem',
                  border: '2px solid var(--terminal-green-bright)',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 255, 0, 0.05)'
                }}>
                  <div className="skill-name" style={{ 
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Platform Engineering (Kubernetes)
                  </div>
                </div>
                <div className="skill-item" style={{ 
                  padding: '1.5rem',
                  border: '2px solid var(--terminal-green-bright)',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 255, 0, 0.05)'
                }}>
                  <div className="skill-name" style={{ 
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Anycast Networking & Application Security
                  </div>
                </div>
                <div className="skill-item" style={{ 
                  padding: '1.5rem',
                  border: '2px solid var(--terminal-green-bright)',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 255, 0, 0.05)'
                }}>
                  <div className="skill-name" style={{ 
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    Cloud & Identity Security (Zero Trust)
                  </div>
                </div>
              </div>
            </div>

            {/* SECONDARY - Nhỏ hơn, phía dưới */}
            <div style={{ marginBottom: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--terminal-border)' }}>
              <h3 style={{ 
                color: 'var(--terminal-green)', 
                marginBottom: '1rem', 
                fontSize: '1rem',
                opacity: 0.8
              }}>
                SECONDARY
              </h3>
              <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="skill-item" style={{ padding: '1rem' }}>
                  <div className="skill-name" style={{ fontSize: '0.95rem' }}>
                    CI/CD & GitOps
                  </div>
                </div>
                <div className="skill-item" style={{ padding: '1rem' }}>
                  <div className="skill-name" style={{ fontSize: '0.95rem' }}>
                    Observability & Reliability Engineering
                  </div>
                </div>
                <div className="skill-item" style={{ padding: '1rem' }}>
                  <div className="skill-name" style={{ fontSize: '0.95rem' }}>
                    Distributed Systems Architecture
                  </div>
                </div>
                <div className="skill-item" style={{ padding: '1rem' }}>
                  <div className="skill-name" style={{ fontSize: '0.95rem' }}>
                    Compliance & Audit Readiness
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--terminal-border)' }}>
              <h3 style={{ color: 'var(--terminal-green)', marginBottom: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>
                Tools & Technologies
              </h3>
              <div style={{ color: 'var(--terminal-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Kubernetes, Docker, Helm, ArgoCD, GitLab CI, Jenkins, GitHub Actions, AWS, VNG Cloud, 
                HAProxy, Nginx, APISIX, Prometheus, Grafana, Loki, Tempo, PostgreSQL, MySQL, Redis, 
                Kafka, Azure AD / Entra ID, Microsoft 365, SonarQube
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="experience-section">
            <h2 className="experience-title">PROFESSIONAL EXPERIENCE</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">DevOps Manager</div>
                    <div className="timeline-company">VNG Corporation – Ho Chi Minh City, Vietnam</div>
                    <div className="timeline-date">Jun 2020 – Present</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Led enterprise-wide DevSecOps transformation across VNG-DB (GreenNode) and
                      multiple mission-critical platforms, ensuring secure, compliant, and reliable
                      delivery.
                    </li>
                    <li>
                      Acted as the primary technical decision-maker for platform, security, and
                      delivery standards across multiple product teams.
                    </li>
                    <li>
                      Architected and governed Kubernetes-based platforms (on-prem and cloud) using
                      security-by-design and platform engineering principles.
                    </li>
                    <li>
                      Owned the CI/CD and GitOps standards for Kubernetes-based platforms, with
                      embedded security controls, approval workflows, and environment governance.
                    </li>
                    <li>
                      Integrated DevSecOps practices into delivery pipelines, including code quality
                      gates, dependency governance, container image hardening, secret management, and
                      change traceability.
                    </li>
                    <li>
                      Established platform-level security guardrails covering identity, network
                      segmentation, access control, and runtime protection for containerized
                      workloads.
                    </li>
                    <li>
                      Established centralized observability and security monitoring capabilities,
                      enabling proactive detection of reliability and security risks across
                      enterprise platforms.
                    </li>
                    <li>
                      Collaborated closely with security, audit, and compliance teams to support ISO
                      27001, SOX, and SOC 2 requirements from infrastructure and pipeline
                      perspectives.
                    </li>
                    <li>
                      Built and mentored a DevOps team of 8 engineers, establishing shared DevSecOps
                      standards and reducing dependency on individual expertise.
                    </li>
                    <li>
                      Drove cross-team adoption of platform and security standards, improving delivery
                      consistency and reducing ad-hoc operational work.
                    </li>
                    <li>
                      Delivered platform capabilities that reduced operational risk and enabled scalable
                      growth for multiple business units.
                    </li>
                    <li>
                      Participated in capacity planning and infrastructure cost governance across cloud
                      and on-prem environments.
                    </li>
                    <li>
                      Oversaw enterprise identity and access management (Office 365, Azure AD / Entra
                      ID, Zero Trust) for thousands of corporate users.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">Senior DevOps Engineer / Team Lead</div>
                    <div className="timeline-company">VNG Corporation – Ho Chi Minh City, Vietnam</div>
                    <div className="timeline-date">Apr 2017 – Jun 2020</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Introduced DevSecOps foundations into infrastructure and application delivery,
                      focusing on secure deployments, auditability, and operational consistency.
                    </li>
                    <li>
                      Owned high-availability database platform architecture and operations,
                      ensuring data resilience and operational continuity for mission-critical
                      workloads.
                    </li>
                    <li>
                      Established containerization standards and security-hardened image governance
                      for enterprise systems.
                    </li>
                    <li>
                      Owned CI/CD standards with integrated quality and security gates, improving
                      delivery confidence and traceability.
                    </li>
                    <li>
                      Governed large-scale enterprise storage architecture with strong access
                      control and authentication standards.
                    </li>
                    <li>
                      Executed collaboration platform migration (Google Workspace → Office 365),
                      implementing Azure AD synchronization and Zero Trust access models.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">Senior System Engineer</div>
                    <div className="timeline-company">VNG Corporation – Ho Chi Minh City, Vietnam</div>
                    <div className="timeline-date">Apr 2015 – Apr 2017</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Owned secure enterprise infrastructure services architecture, including mail
                      relay, directory services, and remote access platforms.
                    </li>
                    <li>
                      Defined security-focused system architectures for internal communication and
                      identity management.
                    </li>
                    <li>
                      Established containerization standards for internal services, improving isolation
                      and reliability.
                    </li>
                    <li>
                      Owned high-availability platform architecture for streaming and web services
                      supporting corporate use cases.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">System Administrator</div>
                    <div className="timeline-company">VNG Corporation</div>
                    <div className="timeline-date">Apr 2014 – Apr 2015</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Owned enterprise IT systems governance with a focus on stability, access
                      control, and operational automation standards.
                    </li>
                    <li>
                      Established standardized deployment and maintenance procedures for internal
                      platforms.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">System Administrator</div>
                    <div className="timeline-company">YeuTheThao.com</div>
                    <div className="timeline-date">Aug 2012 – Jan 2014</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Owned high-traffic web infrastructure architecture, ensuring scalability
                      and reliability for consumer-facing applications.
                    </li>
                    <li>
                      Established DDoS mitigation and system hardening standards for web
                      infrastructure.
                    </li>
                    <li>
                      Governed on-premises mail and directory services architecture and operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects-section">
            <h2 className="projects-title">KEY PROJECTS</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Virtual WAF (vWAF) Anycast Platform</div>
                  <div className="project-role">Architect / DevSecOps Lead</div>
                </div>
                <ul className="project-details">
                  <li>
                    Provided a centralized, reusable security platform for protecting
                    internet-facing enterprise applications at scale
                  </li>
                  <li>
                    Protected 100+ applications handling 50M+ requests/day
                  </li>
                  <li>
                    Reduced security incident response time by 70%
                  </li>
                  <li>
                    Owned the end-to-end architecture of a multi-node, multi-region Anycast WAF
                    platform designed to protect high-traffic, internet-facing applications
                  </li>
                  <li>
                    Defined security capabilities including HTTP Flood DDoS protection, bot
                    mitigation, intelligent semantic analysis, and rule-based threat detection
                  </li>
                  <li>
                    Established automated certificate lifecycle management for large-scale domains,
                    delivering a resilient security layer capable of sustaining large traffic volumes
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">
                    Enterprise Email & Identity Migration (Google Workspace → Microsoft 365)
                  </div>
                  <div className="project-role">Architect / DevSecOps Lead</div>
                </div>
                <ul className="project-details">
                  <li>
                    Led enterprise-wide migration of email and collaboration services from Google
                    Workspace to Microsoft 365 with minimal business disruption
                  </li>
                  <li>
                    Migrated 5,000+ users with 99.8% success rate
                  </li>
                  <li>
                    Zero business disruption during cutover weekend
                  </li>
                  <li>
                    Owned identity architecture design using Microsoft Entra ID synchronized with
                    the HR system, enabling centralized identity lifecycle management
                  </li>
                  <li>
                    Established joiner/mover/leaver automation and identity lifecycle governance
                  </li>
                  <li>
                    Defined Zero Trust access policies including MFA, Conditional Access, and RBAC
                  </li>
                  <li>
                    Hardened Microsoft 365 and Azure tenant security posture to meet enterprise
                    security standards
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Dcorp (F&B Platform) – Freelance</div>
                  <div className="project-role">Architect / DevOps</div>
                </div>
                <ul className="project-details">
                  <li>
                    Architected and delivered a cloud-native application platform for F&B operations,
                    ensuring scalability and reliability
                  </li>
                  <li>
                    Owned platform architecture including API gateway integration and centralized
                    authentication services
                  </li>
                  <li>
                    Established secure CI/CD standards and high-availability database architecture
                  </li>
                  <li>
                    Defined observability and auto-scaling strategies to ensure platform reliability
                    and performance
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Payment System – U.S. Nails Chain – Freelance</div>
                  <div className="project-role">Architect / DevOps</div>
                </div>
                <ul className="project-details">
                  <li>
                    Architected a cloud-native payment processing system, ensuring security,
                    compliance, and scalability for financial transactions
                  </li>
                  <li>
                    Owned event-driven architecture design for transaction processing, enabling
                    high-throughput and fault-tolerant operations
                  </li>
                  <li>
                    Established CI/CD governance and observability standards, ensuring delivery
                    confidence and operational visibility
                  </li>
                  <li>
                    Delivered high-availability platform architecture with load balancing,
                    auto-scaling, and distributed tracing capabilities
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section id="education" className="projects-section">
            <h2 className="projects-title">EDUCATION & CERTIFICATIONS</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Education</div>
                </div>
                <div className="project-tech">Bachelor of Systems Engineering</div>
                <ul className="project-details">
                  <li>Sai Gon University</li>
                  <li>2008 – 2012</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Certifications</div>
                </div>
                <div className="project-tech">AWS Certified Solutions Architect – Associate</div>
                <ul className="project-details">
                  <li>
                    <a
                      href="https://www.credly.com/badges/af54d66f-028e-4d7f-af9a-d78703ae970c"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--terminal-green)' }}
                    >
                      View Certification →
                    </a>
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Languages</div>
                </div>
                <ul className="project-details">
                  <li>Vietnamese: Native</li>
                  <li>English: Intermediate</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Ho Chi Minh City, Vietnam</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:nguyentronghiensgu@gmail.com">nguyentronghiensgu@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">
                  <a href="tel:+84932670908">(+84) 932 670 908</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">
                  <a
                    href="https://www.linkedin.com/in/nguyen-trong-hien-17083488/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Command Section */}
          <div className="command-section">
            <div className="command-instructions">
              Type &apos;help&apos; for available commands or use navigation menu
            </div>
            <div className="command-prompt">
              <span className="prompt-symbol">$</span>
              <input
                ref={inputRef}
                type="text"
                className="command-input"
                placeholder="Enter command..."
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            {commandHistory.length > 0 && (
              <div className="command-output">
                {commandHistory.map((line, index) => (
                  <div
                    key={index}
                    className={`command-line ${line.startsWith('$') ? 'prompt' : 'output'}`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
