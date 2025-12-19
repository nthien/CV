'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/CV'

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
              src={`${basePath}/hien.jpg`}
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
                DevOps Manager and Platform Architect with 10+ years of experience designing,
                operating, and governing secure, highly available, large-scale infrastructure
                platforms. Strong expertise in DevSecOps, Kubernetes, Anycast networking, CI/CD
                governance, and enterprise cloud security.
              </div>
              <div className="summary-line" style={{ marginTop: '1rem' }}>
                Proven leader in building enterprise-grade platforms supporting high-traffic,
                multi-region workloads and strict compliance requirements (ISO 27001, SOX, SOC 2).
                Experienced in leading DevOps teams, defining secure-by-design delivery standards,
                and aligning engineering, security, and compliance stakeholders.
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section">
            <h2 className="skills-title">CORE COMPETENCIES</h2>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                DevSecOps & Platform Engineering
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">DevSecOps Strategy & Governance</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Secure-by-Design CI/CD & GitOps</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Platform Guardrails & Policy Enforcement</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Release Governance & Audit Readiness</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Cloud & Container Platforms
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Kubernetes (On-prem & Cloud)</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Docker, Helm, ArgoCD</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">AWS (EKS, ECR, ALB, S3, CloudFront)</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">VNG Cloud</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                CI/CD & Automation
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">GitLab CI / GitLab Runner</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Jenkins</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">GitHub Actions</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">SonarQube, Artifact Management</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Security & Networking
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Anycast Architecture</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">vWAF, DDoS Protection</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '93%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Nginx, HAProxy, APISIX</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">OAuth2, JWT, Zero Trust</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Observability & Reliability
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Prometheus, Grafana, Loki, Tempo</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">SLO / SLA Management</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Performance & Capacity Planning</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--terminal-green-bright)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Data & Messaging
              </h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">PostgreSQL (HA with Patroni)</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">MySQL (Multi-master)</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Redis</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Apache Kafka, Amazon SQS</div>
                  <div className="skill-bar-container">
                    <div className="skill-bar" style={{ width: '93%' }}></div>
                  </div>
                </div>
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
                    <div className="timeline-role">DevOps Manager / Lead System Engineer</div>
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
                      Architected and governed Kubernetes-based platforms (on-prem and cloud) using
                      security-by-design and platform engineering principles.
                    </li>
                    <li>
                      Designed and operated a unified CI/CD & GitOps ecosystem (GitLab Runner,
                      ArgoCD, Jenkins) with embedded security controls, approval workflows, and
                      environment governance.
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
                      Built centralized observability and security monitoring using Prometheus,
                      Grafana, and Loki, enabling proactive detection of reliability and security
                      risks.
                    </li>
                    <li>
                      Collaborated closely with security, audit, and compliance teams to support ISO
                      27001, SOX, and SOC 2 requirements from infrastructure and pipeline
                      perspectives.
                    </li>
                    <li>
                      Led and mentored a DevOps team of 8 engineers, fostering a shared-responsibility
                      DevSecOps culture across engineering teams.
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
                      Designed and operated high-availability database platforms, including
                      PostgreSQL (Patroni) and MySQL multi-master architectures.
                    </li>
                    <li>
                      Containerized enterprise systems using standardized, security-hardened images
                      and deployment pipelines.
                    </li>
                    <li>
                      Built CI/CD pipelines with integrated quality and security checks, improving
                      delivery confidence and traceability.
                    </li>
                    <li>
                      Designed and managed large-scale enterprise storage systems with strong access
                      control and authentication.
                    </li>
                    <li>
                      Led collaboration platform migration (Google Workspace → Office 365),
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
                      Built and operated secure enterprise infrastructure services, including mail
                      relay, directory services, and remote access platforms.
                    </li>
                    <li>
                      Implemented security-focused system architectures for internal communication and
                      identity management.
                    </li>
                    <li>
                      Designed containerized environments for internal services, improving isolation
                      and reliability.
                    </li>
                    <li>
                      Delivered high-availability streaming and web platforms for corporate use cases.
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
                      Operated and secured enterprise IT systems with a focus on stability, access
                      control, and operational automation.
                    </li>
                    <li>
                      Supported internal platforms through standardized deployment and maintenance
                      procedures.
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
                      Designed and operated high-traffic web infrastructure using Linux and Nginx.
                    </li>
                    <li>Implemented basic DDoS mitigation and system hardening.</li>
                    <li>Managed on-premises mail and directory services.</li>
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
                <div className="project-tech">
                  Anycast Architecture, Multi-Node, Multi-Region, DDoS Protection, Bot Mitigation
                </div>
                <ul className="project-details">
                  <li>
                    Designed and built a vWAF platform using Anycast architecture, operating across
                    multiple nodes and multiple regions
                  </li>
                  <li>
                    Engineered to handle large-scale traffic volumes with high availability and fault
                    tolerance
                  </li>
                  <li>
                    Implemented advanced protection mechanisms: HTTP Flood DDoS Protection, Bot
                    Detection & Mitigation, Intelligent Semantic Analysis Detection, Rule-Based Cyber
                    Threat Protection
                  </li>
                  <li>
                    Automated free SSL/TLS certificate issuance (ACME-based) for resilient, scalable
                    security layer
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
                <div className="project-tech">
                  Microsoft 365, Azure AD / Entra ID, Zero Trust, Identity Lifecycle Management
                </div>
                <ul className="project-details">
                  <li>
                    Led enterprise-scale migration from Google Workspace to Microsoft 365, covering
                    mailbox migration and Google Drive → OneDrive / SharePoint data migration
                  </li>
                  <li>
                    Designed and implemented Microsoft Entra ID (Azure AD) synchronization with
                    enterprise HR system, enabling centralized identity lifecycle management
                  </li>
                  <li>
                    Established Zero Trust identity architecture, including Conditional Access
                    policies, MFA enforcement, and RBAC
                  </li>
                  <li>
                    Hardened Microsoft 365 and Azure security posture using tenant-level security
                    baselines and identity protection controls
                  </li>
                  <li>
                    Coordinated with IT, security, and business stakeholders to ensure minimal
                    disruption, data integrity, and audit readiness
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Dcorp (F&B Platform) – Freelance</div>
                  <div className="project-role">Architect / DevOps</div>
                </div>
                <div className="project-tech">
                  Kubernetes, APISIX, Keycloak, MySQL, PostgreSQL, Kafka, Redis, GitLab Runner
                </div>
                <ul className="project-details">
                  <li>
                    Designed and deployed a Kubernetes-based application platform for F&B operations
                  </li>
                  <li>
                    Integrated API Gateway (APISIX) and centralized authentication via Keycloak
                  </li>
                  <li>Built secure CI/CD pipelines and high-availability database clusters</li>
                  <li>
                    Ensured platform reliability through monitoring and auto-scaling strategies
                  </li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Payment System – U.S. Nails Chain – Freelance</div>
                  <div className="project-role">Architect / DevOps</div>
                </div>
                <div className="project-tech">
                  AWS EKS, Kafka, Redis, PostgreSQL, GitHub Actions, Grafana Tempo
                </div>
                <ul className="project-details">
                  <li>
                    Architected a cloud-native payment processing system on AWS
                  </li>
                  <li>Designed event-driven transaction processing using Kafka</li>
                  <li>
                    Implemented CI/CD pipelines with governance and observability
                  </li>
                  <li>
                    Achieved high availability through load balancing, auto-scaling, and distributed
                    tracing
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
