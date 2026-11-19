/**
 * Engineering Toolkit Data
 * Categorized technical skills linked to real projects and practical usage context.
 * No arbitrary percentages or unverified claims.
 */

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    docketNumber: "SEC-01",
    description: "Core languages used for backend logic, scripting, systems programming, and web development.",
    skills: [
      { name: "Python", context: "Primary language for backend services, automation scripts, AWS tooling, and data manipulation.", projects: ["Cloud Cost Optimizer", "Restaurant POS & QR Food Ordering", "SkillTwin", "Linux Monitoring"] },
      { name: "JavaScript (ES6+)", context: "Interactive web applications, DOM APIs, modern client architectures, and tooling.", projects: ["Restaurant POS & QR Food Ordering", "SkillTwin", "Engineering Notebook"] },
      { name: "Bash / Shell", context: "Linux server administration, automation scripts, cron jobs, and environment setup.", projects: ["Linux System Monitoring", "CI/CD Workflows"] },
      { name: "SQL", context: "Relational schema design, complex joins, indexing, and transactional data integrity.", projects: ["Restaurant POS", "SkillTwin", "Cloud Cost Optimizer"] },
      { name: "PHP", context: "Server-side scripting, classic web architectures, and application integrations.", projects: ["Web Application Prototypes"] },
      { name: "C", context: "Foundational computer science, memory management, pointers, and systems fundamentals.", projects: ["Academic Systems Programming"] },
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    docketNumber: "SEC-02",
    description: "Component-driven user interfaces, state management, and modern styling architectures.",
    skills: [
      { name: "React", context: "Single-page application architecture, hooks, component lifecycles, and client routing.", projects: ["Restaurant POS", "SkillTwin", "Engineering Notebook"] },
      { name: "Vite", context: "Modern frontend bundling, rapid HMR development cycles, and production optimization.", projects: ["Restaurant POS", "Engineering Notebook"] },
      { name: "Tailwind CSS", context: "Utility-first CSS, custom design systems, responsive layouts, and design token integration.", projects: ["Restaurant POS", "Engineering Notebook"] },
      { name: "HTML5 & CSS3", context: "Semantic document structure, web standards, Flexbox/Grid layouts, and fluid typography.", projects: ["All Web Projects"] },
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    docketNumber: "SEC-03",
    description: "RESTful API development, data validation schemas, and service-layer communication.",
    skills: [
      { name: "FastAPI", context: "High-performance Python APIs, Pydantic type validation, and automatic OpenAPI generation.", projects: ["SkillTwin", "Cloud Cost Optimizer"] },
      { name: "Flask", context: "Lightweight Python microservices, routing, and telemetry endpoints.", projects: ["Linux System Monitoring"] },
      { name: "REST APIs", context: "Resource-oriented API design, HTTP status conventions, JSON payloads, and pagination.", projects: ["All Backend Projects"] },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    docketNumber: "SEC-04",
    description: "Relational database administration, schema modeling, and structured storage.",
    skills: [
      { name: "MySQL", context: "Multi-tenant relational schemas, transactions, indexing, and foreign key constraints.", projects: ["Restaurant POS SaaS"] },
      { name: "PostgreSQL", context: "Relational data modeling, JSONB fields, complex queries, and ACID compliance.", projects: ["Cloud Cost Optimizer", "SkillTwin"] },
    ]
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure (AWS)",
    docketNumber: "SEC-05",
    description: "Core cloud building blocks, compute, storage, security policies, and resource monitoring.",
    skills: [
      { name: "AWS EC2", context: "Virtual machine provisioning, security group rules, SSH keys, and instance lifecycles.", projects: ["Cloud Cost Optimizer", "Infrastructure Lab"] },
      { name: "AWS S3", context: "Object storage buckets, access control lists, lifecycle rules, and static asset hosting.", projects: ["Cloud Cost Optimizer"] },
      { name: "AWS IAM", context: "Role-based policies, least-privilege scoping, and STS AssumeRole delegation.", projects: ["Cloud Cost Optimizer"] },
      { name: "AWS VPC", context: "Subnet planning, CIDR blocks, route tables, and internet gateways.", projects: ["Infrastructure Lab"] },
      { name: "AWS CloudWatch", context: "Metric aggregation, resource utilization analysis, and alarm triggers.", projects: ["Cloud Cost Optimizer"] },
    ]
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    docketNumber: "SEC-06",
    description: "Linux administration, containerization, version control, and delivery pipelines.",
    skills: [
      { name: "Linux (Ubuntu/Debian)", context: "System administration, process inspection, systemd services, permissions, and package management.", projects: ["Webel Internship", "VPS Deployments"] },
      { name: "Git & GitHub", context: "Branching workflows, semantic commits, code reviews, and remote repository coordination.", projects: ["All Projects"] },
      { name: "Docker", context: "Containerizing services, Dockerfile multi-stage builds, and environment reproducibility.", projects: ["Service Containers"] },
      { name: "Kubernetes (Foundations)", context: "Exploring Pod lifecycles, ReplicaSets, Services, and deployment manifests.", projects: ["Learning Lab"] },
      { name: "GitHub Actions", context: "Automated test runs, linting workflows, and build verification pipelines.", projects: ["CI/CD Pipelines"] },
      { name: "Terraform (Basics)", context: "Infrastructure-as-Code fundamentals, state file management, and declarative cloud resources.", projects: ["Learning Lab"] },
      { name: "Jenkins (Basics)", context: "Continuous integration pipelines, automated build triggers, and build step execution.", projects: ["Learning Lab"] },
    ]
  },
  {
    id: "automation",
    title: "Automation & Integration",
    docketNumber: "SEC-07",
    description: "Workflow orchestration, webhook routing, and multi-service event pipelines.",
    skills: [
      { name: "n8n", context: "Visual workflow automation, webhook triggers, multi-node branch logic, and API calls.", projects: ["Business Automation Lab"] },
      { name: "Webhooks", context: "Payload consumption, HMAC signature verification, and event dispatching.", projects: ["Business Automation Lab"] },
      { name: "System Automation", context: "Automated data sync, cron tasks, and scheduled batch jobs.", projects: ["DevOps & Lab"] }
    ]
  }
];
