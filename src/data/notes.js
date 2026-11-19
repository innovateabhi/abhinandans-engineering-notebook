/**
 * Engineering Notes / Technical Journal Entries
 * Displayed with an authentic "Notes in Progress" state.
 * No fabricated articles or imaginary URLs.
 */

export const engineeringNotes = [
  {
    id: "note-01",
    title: "AWS CloudWatch Metric Granularity vs. Cost Ingestion Trade-offs",
    category: "Cloud Engineering",
    status: "Drafting in Progress",
    docket: "NOTE // 001",
    summary: "Analyzing why fetching raw metrics every minute can explode AWS API bills during multi-region resource scanning, and how statistical aggregation reduces overhead by 90%.",
    tags: ["AWS", "CloudWatch", "FinOps", "Cost Intelligence"],
    readTime: "Expected 6 min read"
  },
  {
    id: "note-02",
    title: "Linux /proc Demystified: Reading Kernel Telemetry Without Forking Subprocesses",
    category: "Systems & Linux",
    status: "In Outline Review",
    docket: "NOTE // 002",
    summary: "A practical breakdown of calculating instantaneous CPU deltas and memory buffers by streaming `/proc/stat` and `/proc/meminfo` directly in Python.",
    tags: ["Linux", "Kernel", "Python", "Observability"],
    readTime: "Expected 8 min read"
  },
  {
    id: "note-03",
    title: "Decoupling QR Ordering and Counter POS in Multi-Tenant Dining SaaS",
    category: "SaaS Architecture",
    status: "Research Notes",
    docket: "NOTE // 003",
    summary: "Architecting relational locking and table session state machines to allow contactless guest ordering while preserving real-time cashier bill reconciliation.",
    tags: ["React", "FastAPI", "MySQL", "SaaS"],
    readTime: "Expected 10 min read"
  },
  {
    id: "note-04",
    title: "Reliable Event Ingestion: Designing Idempotent Webhook Gateways with n8n",
    category: "Automation & Integration",
    status: "Lab Observations",
    docket: "NOTE // 004",
    summary: "How cryptographic HMAC validation, idempotency keys, and dead-letter queue fallbacks prevent duplicate event side-effects across third-party APIs.",
    tags: ["n8n", "Webhooks", "Integration", "APIs"],
    readTime: "Expected 5 min read"
  }
];
