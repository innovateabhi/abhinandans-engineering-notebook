/**
 * Professional Experience Data
 * Strictly factual, matching verified resume records.
 * Note: Softrenix website link is shown ONLY within its experience entry.
 */

export const experiences = [
  {
    id: "exp-02",
    role: "Founder & Software Developer",
    organization: "Softrenix Technologies",
    location: "Kolkata / Remote",
    period: "Oct 2026 - Present",
    type: "Entrepreneurial & Engineering Initiative",
    badge: "FOUNDER & DEV",
    companyUrl: "https://www.softrenix.com", // Shown strictly within this experience card only
    summary: "Founded Softrenix Technologies to build custom software systems, SaaS prototypes, and business automation workflows spanning full-stack development, backend APIs, and cloud deployments.",
    highlights: [
      "Architecting custom web applications and full-stack SaaS prototypes using React, Python, and relational database management systems.",
      "Developing RESTful backend APIs with structured validation, authentication workflows, and relational schema designs.",
      "Conducting deployment planning for Linux VPS and cloud infrastructure including Nginx reverse proxying and process management.",
      "Researching automated business workflow orchestration to integrate disparate webhooks and business applications."
    ],
    technologies: ["React", "Python", "FastAPI", "MySQL", "PostgreSQL", "Linux VPS", "Nginx", "REST APIs"]
  },
  {
    id: "exp-01",
    role: "Technical Intern",
    organization: "West Bengal Electronics Industry Development Corporation Ltd. (Webel)",
    location: "Salt Lake, Kolkata, India",
    period: "01 Jul 2026 - 04 Aug 2026",
    type: "Certified Industrial Internship",
    badge: "40 HOURS CERTIFIED",
    summary: "Completed a certified 40-hour industrial training internship focused on practical Linux system engineering, server deployment, firewall security, and custom monitoring application development.",
    highlights: [
      "Major Project: Engineered a Linux Advanced System Monitoring Web Application to track CPU, memory, storage volumes, and process states in real-time.",
      "Minor Project: Executed Linux Web Server Deployment configuring an Nginx HTTP server with security headers, virtual hosts, and reverse proxying.",
      "Implemented host-level network security utilizing UFW (Uncomplicated Firewall), enforcing default-deny ingress and whitelisting only designated ports.",
      "Authored custom bash maintenance scripts and systemd service unit files for daemon persistence across reboots."
    ],
    technologies: ["Linux (Debian/Ubuntu)", "Bash Scripting", "Python", "Nginx", "UFW Firewall", "Systemd"]
  }
];
