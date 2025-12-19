'use client'

import { useState, useEffect, useRef } from 'react'

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
    } else if (trimmedCmd === 'clear') {
      setCommandHistory([])
    } else if (trimmedCmd === 'ls') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        'projects/  repositories/  about.txt  skills.txt  experience/  certifications/  stats/',
      ])
      setCommand('')
      return
    } else if (trimmedCmd === 'help') {
      setCommandHistory([
        ...commandHistory,
        `$ ${cmd}`,
        'Available commands: ls, whoami, skills, contact, clear, projects, about, experience, certifications, stats',
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
      case 'stats':
        return 'Opening GitHub stats section...'
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
            Hiển Nguyễn
            <span className="status-indicator"></span>
          </div>
          <div className="profile-title">Cloud Architect | Lead DevOps Engineer</div>
          <div className="profile-image">HN</div>
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
                <strong>Hiển Nguyễn - Cloud Architect & Lead DevOps Engineer</strong>
              </div>
              <div className="summary-line">
                <span className="summary-emoji">🚀</span>
                <strong>Specializing in:</strong> AWS Cloud Architecture, Kubernetes Orchestration,
                Docker Containerization, CI/CD Pipelines, Infrastructure as Code
              </div>
              <div className="summary-line">
                <span className="summary-emoji">📍</span>
                <strong>Location:</strong> Ho Chi Minh City, Vietnam | Available for Remote Work
              </div>
              <div className="summary-line">
                <span className="summary-emoji">🎯</span>
                <strong>Focus:</strong> Cloud-Native Architectures, Microservices, Event-Driven
                Systems, Observability, Security
              </div>
              <div className="summary-line">
                <span className="summary-emoji">🏆</span>
                <strong>Certifications:</strong> AWS Certified Solutions Architect - Associate
              </div>
              <div className="summary-line">
                <span className="summary-emoji">📧</span>
                <strong>Contact:</strong> nguyentronghiensgu@gmail.com | Available for Remote Work
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="skills-section">
            <h2 className="skills-title">Core Skills Overview</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-name">AWS</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Kubernetes</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Docker</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Python</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">PostgreSQL</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Kafka</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Redis</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Terraform</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Linux</div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="experience-section">
            <h2 className="experience-title">Professional Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">Lead System/DevOps Engineer</div>
                    <div className="timeline-company">VNG Corporation</div>
                    <div className="timeline-date">Jun 2020 - Present</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Led the DevOps team for VNG-DB (GreenNode) and architected infrastructure for
                      all VNG-DB products, achieving 99.9% uptime
                    </li>
                    <li>
                      Managed corporate-wide Office 365 cloud operations, implementing Azure AD sync
                      and Zero Trust architecture
                    </li>
                    <li>
                      Designed and optimized microservices-based infrastructure using Kubernetes,
                      Kafka, and Redis
                    </li>
                    <li>
                      Established enterprise-grade CI/CD pipelines, reducing deployment time by 40%
                    </li>
                    <li>Lead a team of 8 DevOps engineers</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">Senior System/DevOps Engineer, Team Leader</div>
                    <div className="timeline-company">VNG Corporation</div>
                    <div className="timeline-date">Apr 2017 - Jun 2020</div>
                  </div>
                  <ul className="timeline-details">
                    <li>
                      Led a 2-engineer team to manage enterprise IT infrastructure, focusing on
                      high-availability
                    </li>
                    <li>
                      Architected PostgreSQL HA with Patroni and MySQL multi-master replication
                    </li>
                    <li>Containerized HR/IT systems using Docker</li>
                    <li>Designed 200TB enterprise storage with Azure authentication</li>
                    <li>Established CI/CD pipelines, enhancing release cycles by 30%</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-role">Senior System Engineer</div>
                    <div className="timeline-company">VNG Corporation</div>
                    <div className="timeline-date">Apr 2015 - Apr 2017</div>
                  </div>
                  <ul className="timeline-details">
                    <li>Developed mail relay and LDAP systems for 2000+ users</li>
                    <li>Implemented live streaming system for VNG events, supporting 2000 viewers</li>
                    <li>Deployed Guacamole clientless remote desktop gateway</li>
                    <li>Built corporate websites using Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects-section">
            <h2 className="projects-title">Notable Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Cloudverse Platform (100% AWS)</div>
                  <div className="project-role">Lead DevOps/Architect</div>
                </div>
                <div className="project-tech">
                  AWS (EKS, S3, ALB, Lambda, RDS), Kubernetes, Kafka, Redis
                </div>
                <ul className="project-details">
                  <li>Architected scalable microservices platform on AWS</li>
                  <li>Designed event-driven workflows with Kafka and Lambda</li>
                  <li>Achieved 50% faster deployments with CI/CD</li>
                  <li>Ensured 99.95% uptime</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">Kubernetes-Based IoT Platform</div>
                  <div className="project-role">Lead Architect</div>
                </div>
                <div className="project-tech">Kubernetes, Message Queue, Redis, PostgreSQL</div>
                <ul className="project-details">
                  <li>Designed scalable IoT platform with microservices</li>
                  <li>Processing real-time data for thousands of devices</li>
                  <li>Achieved 99.9% uptime</li>
                </ul>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <div className="project-name">OCR/AI Platform</div>
                  <div className="project-role">Lead DevOps</div>
                </div>
                <div className="project-tech">
                  Kubernetes, Redis, Message Queue, OCR AI Model, Minio, Jenkins
                </div>
                <ul className="project-details">
                  <li>Deployed Kubernetes infrastructure for OCR and AI models</li>
                  <li>Automated AI model updates, reducing deployment time by 30%</li>
                  <li>Ensured 99.9% uptime and scalability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <h2 className="contact-title">Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:nguyentronghiensgu@gmail.com">nguyentronghiensgu@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-label">Mobile</div>
                <div className="contact-value">
                  <a href="tel:+84932670908">+84 932 670 908</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
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
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Ho Chi Minh City, Vietnam</div>
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
