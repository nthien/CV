export default function PDFPage() {
  return (
    <div style={{ 
      fontFamily: 'Arial, Helvetica, sans-serif',
      width: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      padding: '15mm',
      backgroundColor: '#ffffff',
      color: '#000000',
      lineHeight: '1.5',
      fontSize: '11px',
      boxSizing: 'border-box'
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '20px',
        borderBottom: '2px solid #000',
        paddingBottom: '15px'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', letterSpacing: '1px' }}>
          HIỂN NGUYỄN
        </div>
        <div style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
          DevOps Manager | DevSecOps & Platform Architect
        </div>
        <div style={{ fontSize: '10px', lineHeight: '1.8' }}>
          <span style={{ marginRight: '15px' }}>📍 Ho Chi Minh City, Vietnam</span>
          <span style={{ marginRight: '15px' }}>📧 nguyentronghiensgu@gmail.com</span>
          <span style={{ marginRight: '15px' }}>📞 (+84) 932 670 908</span>
          <span>🔗 linkedin.com/in/nguyen-trong-hien-17083488</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Professional Summary
        </h2>
        <p style={{ fontSize: '10px', textAlign: 'justify', margin: 0 }}>
          DevOps Manager with 10+ years leading high-performing teams and driving platform
          transformation at scale. Proven track record of building secure, reliable infrastructure
          supporting millions of users while reducing costs and improving delivery velocity.
          Specialized in DevSecOps governance, Kubernetes platforms, and Zero Trust security.
        </p>
      </section>

      {/* Key Achievements */}
      <section style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Key Achievements
        </h2>
        <ul style={{ fontSize: '10px', paddingLeft: '18px', margin: 0 }}>
          <li style={{ marginBottom: '4px' }}>Built DevOps practice from ground up, scaling team 3→8 engineers</li>
          <li style={{ marginBottom: '4px' }}>Achieved 99.95% uptime across mission-critical platforms</li>
          <li style={{ marginBottom: '4px' }}>Reduced deployment cycle time by 75% through GitOps adoption</li>
          <li style={{ marginBottom: '4px' }}>Led ISO 27001 & SOC 2 compliance for infrastructure layer</li>
        </ul>
      </section>

      {/* Core Competencies */}
      <section style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Core Competencies
        </h2>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>PRIMARY</div>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6px',
            fontSize: '10px'
          }}>
            <div style={{ padding: '6px', border: '1px solid #000', fontWeight: '500' }}>
              DevSecOps Strategy & Governance
            </div>
            <div style={{ padding: '6px', border: '1px solid #000', fontWeight: '500' }}>
              Platform Engineering (Kubernetes)
            </div>
            <div style={{ padding: '6px', border: '1px solid #000', fontWeight: '500' }}>
              Anycast Networking & Application Security
            </div>
            <div style={{ padding: '6px', border: '1px solid #000', fontWeight: '500' }}>
              Cloud & Identity Security (Zero Trust)
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '6px', color: '#666' }}>SECONDARY</div>
          <div style={{ fontSize: '10px', lineHeight: '1.6' }}>
            CI/CD & GitOps • Observability & Reliability Engineering • Distributed Systems Architecture • Compliance & Audit Readiness
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Professional Experience
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>DevOps Manager</div>
            <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>Jun 2020 – Present</div>
          </div>
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '6px' }}>VNG Corporation – Ho Chi Minh City, Vietnam</div>
          <ul style={{ fontSize: '9px', marginTop: '4px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '3px' }}>
              Led enterprise-wide DevSecOps transformation across VNG-DB (GreenNode) and multiple mission-critical platforms, ensuring secure, compliant, and reliable delivery.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Acted as the primary technical decision-maker for platform, security, and delivery standards across multiple product teams.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Built and mentored a DevOps team of 8 engineers, establishing shared DevSecOps standards and reducing dependency on individual expertise.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Drove cross-team adoption of platform and security standards, improving delivery consistency and reducing ad-hoc operational work.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Delivered platform capabilities that reduced operational risk and enabled scalable growth for multiple business units.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Acted as a technical advisor for infrastructure and security vendor evaluation and cost-related decisions.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Participated in capacity planning and infrastructure cost governance across cloud and on-prem environments.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Architected and governed Kubernetes-based platforms (on-prem and cloud) using security-by-design and platform engineering principles.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Owned the CI/CD and GitOps standards for Kubernetes-based platforms, with embedded security controls, approval workflows, and environment governance.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Established platform-level security guardrails covering identity, network segmentation, access control, and runtime protection for containerized workloads.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Collaborated closely with security, audit, and compliance teams to support ISO 27001, SOX, and SOC 2 requirements.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Oversaw enterprise identity and access management (Office 365, Azure AD / Entra ID, Zero Trust) for thousands of corporate users.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Senior DevOps Engineer / Team Lead</div>
            <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>Apr 2017 – Jun 2020</div>
          </div>
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '6px' }}>VNG Corporation – Ho Chi Minh City, Vietnam</div>
          <ul style={{ fontSize: '9px', marginTop: '4px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '3px' }}>
              Introduced DevSecOps foundations into infrastructure and application delivery, focusing on secure deployments, auditability, and operational consistency.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Owned high-availability database platform architecture and operations, ensuring data resilience and operational continuity for mission-critical workloads.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Established containerization standards and security-hardened image governance for enterprise systems.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Owned CI/CD standards with integrated quality and security gates, improving delivery confidence and traceability.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Governed large-scale enterprise storage architecture with strong access control and authentication standards.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Led collaboration platform migration (Google Workspace → Office 365), implementing Azure AD synchronization and Zero Trust access models.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Senior System Engineer</div>
            <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>Apr 2015 – Apr 2017</div>
          </div>
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '6px' }}>VNG Corporation – Ho Chi Minh City, Vietnam</div>
          <ul style={{ fontSize: '9px', marginTop: '4px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '3px' }}>
              Owned secure enterprise infrastructure services architecture, including mail relay, directory services, and remote access platforms.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Defined security-focused system architectures for internal communication and identity management.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Established containerization standards for internal services, improving isolation and reliability.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Owned high-availability platform architecture for streaming and web services supporting corporate use cases.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>System Administrator</div>
            <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>Apr 2014 – Apr 2015</div>
          </div>
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '6px' }}>VNG Corporation</div>
          <ul style={{ fontSize: '9px', marginTop: '4px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '3px' }}>
              Owned enterprise IT systems governance with a focus on stability, access control, and operational automation standards.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Established standardized deployment and maintenance procedures for internal platforms.
            </li>
          </ul>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12px' }}>System Administrator</div>
            <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>Aug 2012 – Jan 2014</div>
          </div>
          <div style={{ fontSize: '10px', color: '#666', marginBottom: '6px' }}>YeuTheThao.com</div>
          <ul style={{ fontSize: '9px', marginTop: '4px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '3px' }}>
              Owned high-traffic web infrastructure architecture, ensuring scalability and reliability for consumer-facing applications.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Established DDoS mitigation and system hardening standards for web infrastructure.
            </li>
            <li style={{ marginBottom: '3px' }}>
              Governed on-premises mail and directory services architecture and operations.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Projects */}
      <section style={{ marginBottom: '18px' }}>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Key Projects
        </h2>
        
        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '3px' }}>Virtual WAF (vWAF) Anycast Platform</div>
          <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic', marginBottom: '4px' }}>Architect / DevSecOps Lead</div>
          <ul style={{ fontSize: '9px', marginTop: '2px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '2px' }}>Protected 100+ applications handling 50M+ requests/day</li>
            <li style={{ marginBottom: '2px' }}>Reduced security incident response time by 70%</li>
            <li style={{ marginBottom: '2px' }}>Owned the end-to-end architecture of a multi-node, multi-region Anycast WAF platform</li>
            <li style={{ marginBottom: '2px' }}>Defined security capabilities including HTTP Flood DDoS protection, bot mitigation, intelligent semantic analysis, and rule-based threat detection</li>
          </ul>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '3px' }}>
            Enterprise Email & Identity Migration (Google Workspace → Microsoft 365)
          </div>
          <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic', marginBottom: '4px' }}>Architect / DevSecOps Lead</div>
          <ul style={{ fontSize: '9px', marginTop: '2px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '2px' }}>Migrated 5,000+ users with 99.8% success rate</li>
            <li style={{ marginBottom: '2px' }}>Zero business disruption during cutover weekend</li>
            <li style={{ marginBottom: '2px' }}>Owned identity architecture design using Microsoft Entra ID synchronized with the HR system</li>
            <li style={{ marginBottom: '2px' }}>Established Zero Trust access policies including MFA, Conditional Access, and RBAC</li>
          </ul>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '3px' }}>Dcorp (F&B Platform) – Freelance</div>
          <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic', marginBottom: '4px' }}>Architect / DevOps</div>
          <ul style={{ fontSize: '9px', marginTop: '2px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '2px' }}>Architected and delivered a cloud-native application platform for F&B operations</li>
            <li style={{ marginBottom: '2px' }}>Owned platform architecture including API gateway integration and centralized authentication services</li>
            <li style={{ marginBottom: '2px' }}>Established secure CI/CD standards and high-availability database architecture</li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '3px' }}>Payment System – U.S. Nails Chain – Freelance</div>
          <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic', marginBottom: '4px' }}>Architect / DevOps</div>
          <ul style={{ fontSize: '9px', marginTop: '2px', paddingLeft: '18px', marginBottom: 0 }}>
            <li style={{ marginBottom: '2px' }}>Architected a cloud-native payment processing system, ensuring security, compliance, and scalability</li>
            <li style={{ marginBottom: '2px' }}>Owned event-driven architecture design for transaction processing, enabling high-throughput and fault-tolerant operations</li>
            <li style={{ marginBottom: '2px' }}>Established CI/CD governance and observability standards</li>
          </ul>
        </div>
      </section>

      {/* Education & Certifications */}
      <section>
        <h2 style={{ 
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '8px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '3px',
          textTransform: 'uppercase'
        }}>
          Education & Certifications
        </h2>
        <div style={{ fontSize: '10px', lineHeight: '1.8' }}>
          <div style={{ marginBottom: '6px' }}>
            <strong>Education:</strong> Bachelor of Systems Engineering, Sai Gon University (2008 – 2012)
          </div>
          <div style={{ marginBottom: '6px' }}>
            <strong>Certifications:</strong> AWS Certified Solutions Architect – Associate
          </div>
          <div>
            <strong>Languages:</strong> Vietnamese (Native), English (Intermediate)
          </div>
        </div>
      </section>
    </div>
  )
}
