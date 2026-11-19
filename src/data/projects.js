/**
 * Engineering Projects Data
 * Central source of truth for Project Cards and Detailed Case Studies
 */

export const projects = [
  {
    id: "01",
    slug: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer — SaaS Platform",
    subtitle: "AWS Resource Discovery, Cost Intelligence & Multi-Agent Optimization",
    category: "Cloud Engineering / SaaS / AI",
    status: "In Development",
    statusType: "dev", // 'dev' | 'internship' | 'lab'
    timeline: "2026 — Ongoing",
    techStack: ["Python", "AWS (EC2, S3, CloudWatch)", "PostgreSQL", "FastAPI", "Boto3"],
    shortDescription: "A SaaS-oriented cloud cost optimization platform focused on AWS resource discovery, infrastructure utilization analysis, cost intelligence, and multi-agent optimization recommendations.",
    notebookNote: "Focusing on identifying underutilized EC2 instances and idle EBS volumes through real-time metric streams.",
    
    caseStudy: {
      overview: "Cloud Cost Optimizer is an engineering exploration into automated cloud financial management (FinOps). As organizations scale infrastructure on AWS, idle resources, unattached storage volumes, over-provisioned compute, and neglected snapshot lifecycles create substantial operational overhead. This platform aims to discover deployed resources across regions, calculate utilization metrics, and formulate non-destructive optimization recommendations.",
      
      problemStatement: "Engineering teams frequently launch testing instances, storage volumes, and ephemeral workloads that remain provisioned long after active use has ended. Standard AWS Cost Explorer provides lagging monthly views but lacks continuous proactive discovery and context-aware action steps.",
      
      objectives: [
        "Architect a secure read-only AWS resource scanner using IAM assume-role policies.",
        "Ingest CPU utilization, network I/O, and disk metrics via CloudWatch APIs.",
        "Detect idle assets (unattached EBS volumes, unassociated Elastic IPs, stopped instances).",
        "Design multi-agent recommendation modules to evaluate compute sizing versus workload demands.",
        "Maintain tenant isolation and relational integrity using PostgreSQL."
      ],

      myRole: "System Architect & Lead Developer. Designed the data ingestion pipeline, Boto3 AWS API wrappers, database schema for multi-tenant account credentials, and heuristic rule engines for anomaly detection.",

      systemArchitecture: {
        type: "multi-tier",
        description: "A modular FastAPI backend worker scheduled to query customer AWS accounts via scoped IAM roles, piping utilization data to PostgreSQL and serving recommendations to an analytical interface.",
        components: [
          { name: "AWS Scanner Worker", role: "Executes STS assume-role calls and queries EC2/EBS/S3 APIs." },
          { name: "Metrics Aggregator", role: "Pulls CloudWatch 14-day percentile CPU and network throughput metrics." },
          { name: "Rules & Heuristics Engine", role: "Evaluates underutilization thresholds (e.g., peak CPU < 5% over 14 days)." },
          { name: "PostgreSQL Data Store", role: "Houses tenant metadata, discovered inventory, and historical cost trends." },
          { name: "Recommendation API", role: "Serves actionable remediation blueprints to the frontend dashboard." }
        ]
      },

      implementationDetails: [
        "Engineered asynchronous Python scanners with Boto3 utilizing pagination and rate-limit backoff algorithms to prevent AWS API throttling.",
        "Structured PostgreSQL tables using indexed foreign keys for multi-region resource catalogs and point-in-time metrics.",
        "Implemented secure credential delegation using AWS STS AssumeRole with external IDs to eliminate static API key storage.",
        "Crafted heuristic rule definitions that distinguish between development workloads with diurnal patterns and genuinely abandoned compute instances."
      ],

      engineeringChallenges: [
        "Handling AWS API rate limits when scanning multiple regions concurrently.",
        "Managing CloudWatch API costs by requesting aggregated metric statistics rather than raw second-by-second datapoints.",
        "Designing non-destructive recommendations that prevent false positives on batch-processing instances that only run at night."
      ],

      lessonsLearned: [
        "Deepened operational knowledge of AWS IAM trust relationships, STS AssumeRole policies, and least-privilege scoping.",
        "Understood the trade-offs of polling frequency versus CloudWatch API costs in cloud monitoring tooling.",
        "Gained practical experience designing normalized database schemas for heterogeneous cloud resources."
      ],

      currentStatus: "Core AWS scanner logic and resource discovery algorithms are developed and tested locally against test AWS sandbox environments. Developing the analytical dashboard and recommendation scoring rules.",
      isLive: false,
      disclaimer: "Currently in development. Metrics and architecture are based on sandbox prototyping and engineering designs."
    }
  },

  {
    id: "02",
    slug: "restaurant-pos-saas",
    title: "Restaurant POS & QR Food Ordering SaaS",
    subtitle: "Table Management, Real-Time Order Routing & Point-of-Sale Billing",
    category: "Full-Stack SaaS / Restaurant Technology",
    status: "In Development",
    statusType: "dev",
    timeline: "2026 — Ongoing",
    techStack: ["React", "Vite", "Tailwind CSS", "Python", "MySQL", "VPS / Cloud Hosting"],
    shortDescription: "A restaurant management SaaS combining POS billing, QR-based food ordering, table management, order workflows, and staff operations.",
    notebookNote: "Designing dual-facing workflows: rapid counter POS billing for cashiers alongside contactless QR ordering for dine-in guests.",

    caseStudy: {
      overview: "A specialized multi-tenant restaurant automation system engineered to bridge physical dining operations with digital ordering. The system integrates counter-side Point-of-Sale billing with table-specific QR menus, allowing customers to view live menu items and place orders while kitchen staff and managers track statuses in real time.",

      problemStatement: "Traditional dining restaurants face communication bottlenecks during peak hours: long waits for physical printed menus, server delays in relaying kitchen orders, and fragmented reconciliation between cashier counters and kitchen stations.",

      objectives: [
        "Build a lightweight, responsive cashier POS interface with fast keyboard-driven item entry and receipt generation.",
        "Implement a dynamic table-specific QR ordering interface requiring zero mobile app installation by the customer.",
        "Design robust order lifecycle states: Placed → Confirmed → Kitchen In-Progress → Served → Billed.",
        "Structure role-based authorization for cashiers, waitstaff, kitchen displays, and restaurant administrators.",
        "Optimize MySQL schema for concurrent multi-table transactions."
      ],

      myRole: "Full-Stack Developer. Created the React + Vite frontend interfaces, structured the RESTful Python API, designed the relational database schema, and configured deployment blueprints for VPS environments.",

      systemArchitecture: {
        type: "client-server",
        description: "A decoupled single-page application communicating over HTTPS/JSON with a Python REST API backend, backed by MySQL relational tables with transactional locking for order numbering.",
        components: [
          { name: "Cashier POS App", role: "Desktop/tablet interface for manual order creation, discounts, and split billing." },
          { name: "Customer QR Client", role: "Mobile web view loaded directly via table QR code with cart persistence." },
          { name: "Kitchen Display System (KDS)", role: "Real-time ticket board showing queued orders with elapsed time counters." },
          { name: "Python API Service", role: "Validates order payloads, manages table sessions, and computes tax and discounts." },
          { name: "MySQL Database", role: "Stores tenant restaurants, menu taxonomy, order logs, and inventory items." }
        ]
      },

      implementationDetails: [
        "Developed modular React components for table layouts, drag-and-drop table status changes, and instant bill calculations.",
        "Structured normalized MySQL tables for `restaurants`, `tables`, `menu_categories`, `menu_items`, `orders`, and `order_items` with appropriate foreign key cascade rules.",
        "Created session token logic tied to table QR hashes to prevent out-of-table spoofing.",
        "Prepared automated deployment configurations for Linux VPS hosting using systemd services and Nginx reverse proxying."
      ],

      engineeringChallenges: [
        "Preventing race conditions when multiple customers at the same physical table scan the QR code simultaneously.",
        "Ensuring the cashier POS remains responsive even when handling extensive menu item catalogs.",
        "Handling network drops cleanly in mobile browsers without losing customer cart state."
      ],

      lessonsLearned: [
        "Gained deep appreciation for state management in high-throughput transactional interfaces.",
        "Learned practical techniques for relational database transaction management under concurrent writes.",
        "Mastered the configuration of Nginx reverse proxying with custom HTTP headers for production web apps."
      ],

      currentStatus: "POS billing flows, table layout management, and QR customer menu views are actively being refined. API endpoints for kitchen display routing are under active testing.",
      isLive: false,
      disclaimer: "Under active development. Designed for single-outlet and small-chain restaurant operations."
    }
  },

  {
    id: "03",
    slug: "skilltwin",
    title: "SkillTwin — Skills & Competency Platform",
    subtitle: "Competency Mapping, Assessment Workflows & Role-Oriented Gap Analysis",
    category: "Skills Intelligence / Full-Stack Development",
    status: "In Development",
    statusType: "dev",
    timeline: "2026 — Ongoing",
    techStack: ["React", "Python / FastAPI", "PostgreSQL", "Tailwind CSS"],
    shortDescription: "A skills and competency platform focused on assessments, skills mapping, gap analysis, and role-oriented interfaces.",
    notebookNote: "Investigating radar/spider graph representations of skill proficiencies against organizational competency benchmarks.",

    caseStudy: {
      overview: "SkillTwin is a software platform engineered to quantify and visualize engineering and technical competencies. It allows individuals and engineering teams to model target role profiles, take structured assessments, map existing competencies, and identify specific learning paths to bridge capability gaps.",

      problemStatement: "Engineering competency evaluations are frequently subjective and scattered across unstandardized spreadsheets. Teams lack an objective framework to benchmark individual competencies against role requirements and track growth over time.",

      objectives: [
        "Construct a normalized skills taxonomy covering languages, frameworks, cloud services, and engineering practices.",
        "Develop assessment evaluation engines capable of multiple question formats and practical task scoring.",
        "Generate multi-dimensional competency visualizer graphs comparing current proficiencies against target senior benchmarks.",
        "Provide tailored gap-analysis reports highlighting priority learning domains."
      ],

      myRole: "Full-Stack Engineer. Designed the competency data schema in PostgreSQL, built the FastAPI backend for scoring models, and implemented interactive React visualization components.",

      systemArchitecture: {
        type: "service-oriented",
        description: "A React client interface interacting with a high-performance FastAPI service that evaluates competency matrices against PostgreSQL benchmark models.",
        components: [
          { name: "Assessment Engine", role: "Serves randomized question banks and calculates weighted competency scores." },
          { name: "Gap Analysis Calculator", role: "Computes euclidean distance between candidate profile and role target vector." },
          { name: "Taxonomy Service", role: "Maintains relational hierarchies of domains, competencies, and sub-skills." },
          { name: "PostgreSQL Database", role: "Stores evaluation rubrics, user submission vectors, and benchmark standards." }
        ]
      },

      implementationDetails: [
        "Designed PostgreSQL relational schemas utilizing JSONB fields for dynamic assessment rubrics alongside normalized skill relations.",
        "Implemented FastAPI REST endpoints with strict Pydantic model validation and automated OpenAPI schema generation.",
        "Constructed modular React analytics components to render skill gap matrices and radar charts without heavy external dependencies.",
        "Implemented role-based permissions separating candidate views from evaluator review consoles."
      ],

      engineeringChallenges: [
        "Formulating a fair weighting formula that accounts for foundational versus advanced technical concepts.",
        "Designing flexible database schemas capable of handling skills that belong to multiple overlapping technical domains."
      ],

      lessonsLearned: [
        "Deepened mastery of Pydantic data modeling and FastAPI request/response lifecycle.",
        "Learned advanced PostgreSQL querying techniques for hierarchical skills data.",
        "Gained insights into human-centric UX design for technical assessment workflows."
      ],

      currentStatus: "The core FastAPI assessment service and initial competency visualization dashboards are implemented. Further assessment modules and question taxonomy expansions are in progress.",
      isLive: false,
      disclaimer: "Under active development. External links and live deployments are intentionally omitted until general release."
    }
  },

  {
    id: "04",
    slug: "linux-system-monitoring",
    title: "Linux Advanced System Monitoring",
    subtitle: "Web-Based System Resource Telemetry & Server Administration Suite",
    category: "Linux / Infrastructure / Monitoring",
    status: "Internship Project",
    statusType: "internship",
    organization: "West Bengal Electronics Industry Development Corporation Ltd. (Webel)",
    timeline: "01 July 2026 – 04 August 2026 (40 Hours Certified)",
    techStack: ["Linux (Ubuntu/Debian)", "Bash / Shell", "Python", "Nginx", "UFW Firewall", "HTML5 / CSS3"],
    shortDescription: "Webel certified internship major project: a Linux system monitoring web application; related minor project covered Linux web server deployment with firewall configuration.",
    notebookNote: "Built and verified during a 40-hour technical internship at Webel, Kolkata.",

    caseStudy: {
      overview: "Developed as the major technical project during a certified 40-hour internship at Webel (West Bengal Electronics Industry Development Corporation Limited) in Salt Lake, Kolkata. The application provides system administrators with a lightweight, web-accessible telemetry console to monitor Linux server health, CPU/RAM utilization, storage volume distribution, active network sockets, and running daemon processes without needing continuous SSH access.",

      problemStatement: "Junior system operators and development teams often require visibility into remote Linux server telemetry without granting unrestricted root shell access or setting up complex, resource-heavy enterprise observability stacks.",

      objectives: [
        "Extract kernel-level and system performance metrics directly from `/proc` virtual filesystem and Linux coreutils.",
        "Develop a lightweight local web service to present metrics in real-time.",
        "Deploy a production-ready Nginx web server configured with security headers and reverse proxying.",
        "Configure host-level firewall protection using UFW (Uncomplicated Firewall) with strict port ingress policies.",
        "Document step-by-step Linux server hardening procedures."
      ],

      myRole: "Technical Intern. Executed the complete project lifecycle: Linux environment setup, bash scripting for metric collection, Python backend web application programming, Nginx virtual host configuration, and UFW firewall rules enforcement.",

      systemArchitecture: {
        type: "host-telemetry",
        description: "A local Python daemon polling Linux `/proc/stat`, `/proc/meminfo`, and `df` subsystem data, exposing JSON endpoints through an Nginx reverse proxy secured by UFW firewall rules.",
        components: [
          { name: "Linux Telemetry Collector", role: "Interrogates /proc, vmstat, and ps to compute real-time CPU load and RAM states." },
          { name: "Python Web Handler", role: "Lightweight HTTP server serving structured telemetry endpoints." },
          { name: "Nginx Reverse Proxy", role: "Handles HTTP request routing, static asset caching, and security header injection." },
          { name: "UFW Firewall Subsystem", role: "Enforces strict port policies (allowing only SSH and HTTP/HTTPS traffic)." }
        ]
      },

      implementationDetails: [
        "Parsed Linux `/proc/meminfo` and `/proc/stat` directly in Python to calculate instantaneous CPU user/system/idle percentages without launching external fork processes.",
        "Deployed and hardened an Nginx HTTP web server on Linux, creating isolated server blocks with custom access logs.",
        "Configured UFW firewall rules to deny all incoming traffic by default, whitelisting only designated management and web ports.",
        "Authored systemd service unit files to ensure the monitoring daemon auto-restarts upon server reboot or process termination."
      ],

      engineeringChallenges: [
        "Calculating accurate CPU usage by computing deltas across two consecutive `/proc/stat` snapshots rather than reading a static value.",
        "Ensuring the monitoring daemon itself consumed less than 1% CPU overhead so as not to skew server metrics.",
        "Hardening firewall rules while ensuring remote management connectivity was never inadvertently severed."
      ],

      lessonsLearned: [
        "Comprehensive hands-on experience with Linux directory structures, permissions, daemons, and systemd.",
        "Practical understanding of TCP/UDP network ports, firewall tables, and packet filtering.",
        "Appreciation for Unix philosophy: building composable, efficient utilities that read plain text kernel interfaces."
      ],

      currentStatus: "Completed and certified by Webel (01 Jul 2026 – 04 Aug 2026, 40 hours). Project deliverables successfully evaluated.",
      isLive: false,
      disclaimer: "Completed as an academic/industrial internship project at Webel Salt Lake, Kolkata."
    }
  },

  {
    id: "05",
    slug: "business-automation",
    title: "Business Automation & Workflow Orchestration",
    subtitle: "Event-Driven Integration Architecture & Automated Lead-to-Fulfillment Pipelines",
    category: "Automation / Integration Engineering",
    status: "Planned — Engineering Lab",
    statusType: "lab",
    timeline: "Engineering Lab Roadmap",
    techStack: ["n8n", "Webhooks", "REST APIs", "Node.js / Python", "PostgreSQL"],
    shortDescription: "A planned business automation system for lead capture, CRM updates, notifications, approvals, and workflow orchestration.",
    notebookNote: "Researching resilient error-handling, webhook replay mechanisms, and multi-step approval gates.",

    caseStudy: {
      overview: "A research and engineering initiative within the personal engineering lab focused on building automated, event-driven business workflows. The project designs fault-tolerant integration pipelines connecting customer touchpoints (inquiries, intake forms, e-commerce webhooks) with CRM registries, notification channels, and operational approval queues.",

      problemStatement: "Growing modern businesses routinely execute repetitive manual tasks across disconnected SaaS services: copying lead details into spreadsheets, manually notifying team members, and following up on status updates, resulting in operational delays and data entry inconsistencies.",

      objectives: [
        "Design idempotent webhook receiver endpoints capable of payload verification and deduplication.",
        "Build modular workflow recipes using n8n for multi-step data transformation and enrichment.",
        "Implement automated alerting and approval workflows across email and notification channels.",
        "Create dead-letter queues to catch and retry failed webhook deliveries."
      ],

      myRole: "Integration Architect. Designing workflow schemas, data mappings, error-recovery protocols, and webhook validation algorithms.",

      systemArchitecture: {
        type: "event-driven",
        description: "An event-driven architecture using webhook ingestion endpoints, workflow logic engines (n8n), message queuing, and target API adapters.",
        components: [
          { name: "Webhook Gateway", role: "Authenticates incoming HMAC payloads and queues events." },
          { name: "n8n Orchestration Core", role: "Executes conditional branch logic, data transforms, and API calls." },
          { name: "Transformation Engine", role: "Normalizes diverse third-party schemas into canonical internal data objects." },
          { name: "Notification & Delivery Adapter", role: "Dispatches transactional emails, alerts, and downstream CRM mutations." }
        ]
      },

      implementationDetails: [
        "Drafting JSON workflow manifests specifying step-by-step trigger criteria, transformation logic, and fallback conditions.",
        "Designing HMAC SHA-256 signature verification middleware to ensure incoming webhook payloads originate from authorized sources.",
        "Structuring PostgreSQL event audit logging schemas to record every incoming payload, execution outcome, and retry count."
      ],

      engineeringChallenges: [
        "Handling intermittent downtime or rate-limits of external third-party APIs during bulk event spikes.",
        "Ensuring complete idempotency so repeated webhook deliveries do not create duplicate business records."
      ],

      lessonsLearned: [
        "Understanding distributed integration patterns, backoff retry algorithms, and circuit breakers.",
        "Analyzing how event-driven automation can eliminate manual operational debt in tech businesses."
      ],

      currentStatus: "Planned — Active in the Engineering Lab. Architectural designs and prototype webhook recipes are undergoing sandbox validation.",
      isLive: false,
      disclaimer: "This project is currently in the architectural research and lab prototyping stage. No production claims are made."
    }
  },

  {
    id: "06",
    slug: "enterprise-erp",
    title: "Enterprise Resource Planning (ERP) Platform",
    subtitle: "Modular Architecture for Inventory, Procurement, Permissions & Audit Logging",
    category: "Enterprise Software / Full-Stack Architecture",
    status: "Planned — Engineering Lab",
    statusType: "lab",
    timeline: "Engineering Lab Roadmap",
    techStack: ["React", "Python", "PostgreSQL", "Tailwind CSS", "Redis"],
    shortDescription: "A planned modular ERP system covering inventory, procurement, sales, permissions, approvals, and audit logging.",
    notebookNote: "Architecting domain-driven modularity where each business module can operate independently or unified.",

    caseStudy: {
      overview: "A long-term engineering architecture project focused on enterprise system design. The platform is conceived as a modular, audit-compliant ERP foundation that allows organizations to track inventory movements, procurement orders, sales pipelines, and role-based permissions with immutable event logging.",

      problemStatement: "Legacy ERP systems are notoriously monolithic, slow, and expensive to adapt, while lightweight tools fail to offer strict auditability, multi-tier approvals, and granular role-based access control required for growing enterprises.",

      objectives: [
        "Formulate a Domain-Driven Design (DDD) modular structure with bounded contexts for inventory, sales, and purchasing.",
        "Implement Role-Based Access Control (RBAC) with fine-grained permission matrices (Create, Read, Update, Delete, Approve).",
        "Design append-only audit trail logging for all sensitive financial and inventory transactions.",
        "Structure multi-tier approval workflows for purchase orders above designated financial thresholds."
      ],

      myRole: "Software Architect. Authoring data dictionary models, entity-relationship diagrams (ERDs), permission schemas, and API contracts.",

      systemArchitecture: {
        type: "modular-monolith",
        description: "A domain-driven modular monolith design separating business domains into isolated modules sharing a unified transactional database and event bus.",
        components: [
          { name: "Auth & RBAC Subsystem", role: "Evaluates user roles, permissions, and session lifecycles." },
          { name: "Inventory Bounded Context", role: "Tracks SKU catalog, stock levels, warehouse locations, and bin movements." },
          { name: "Procurement Bounded Context", role: "Manages vendor contracts, purchase requisitions, and goods-received notes." },
          { name: "Immutable Audit Log", role: "Records non-repudiable audit events with actor ID, timestamp, and delta changes." }
        ]
      },

      implementationDetails: [
        "Designing relational schema models with strict foreign keys, check constraints, and optimistic locking fields (`version` integer).",
        "Developing normalized ERDs covering inventory batches, serial number tracking, and multi-currency quotes.",
        "Specifying RESTful OpenAPI contracts for inter-module data exchange."
      ],

      engineeringChallenges: [
        "Designing schema migrations that preserve data integrity across heavily interconnected relational domains.",
        "Preventing deadlocks during concurrent stock-reservation transactions under high checkout volume."
      ],

      lessonsLearned: [
        "Mastering principles of Domain-Driven Design (bounded contexts, aggregates, entities, value objects).",
        "Deepening knowledge of ACID transactional semantics and append-only audit architecture."
      ],

      currentStatus: "Planned — Active in the Engineering Lab. Data models, architecture documents, and schema specifications are in development.",
      isLive: false,
      disclaimer: "Architectural blueprint and engineering lab initiative. Presented transparently as a future roadmap project."
    }
  }
];
