  import {
    Activity,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight, ArrowUpRight,
    Boxes,
    CheckCircle2,
    Cloud, Code2,
    Download,
    ExternalLink,
    FileText,
    Github,
    GraduationCap,
    Info,
    Layers3,
    Linkedin,
    Linkedin as LinkedinIcon,
    Mail,
    MapPin,
    Menu,
    Phone,
    ShieldCheck,
    Workflow,
    X
  } from 'lucide-react'
  import { useState } from 'react'

  type Project = {
    number: string
    category: string
    title: string
    description: string
    stack: string[]
    outcome: string
    icon: typeof Cloud
    status: string
    id: string
    github?: string
    linkedin?: string
  }

  const projects: Project[] = [
    {
      number: '01', id: 'aws-3tier', github: 'https://github.com/Nihanth-NS/PROJECTS/tree/main/aws-3tier-web-app', linkedin: 'https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/',
      category: 'CLOUD INFRASTRUCTURE', title: 'Highly available AWS 3-tier application',
      description: 'A segmented web application with public entry, frontend and backend tiers, private database networking, and load balancing across Availability Zones.',
      stack: ['AWS VPC', 'EC2', 'Internet-facing ALB', 'Internal ALB', 'RDS MySQL', 'Flask'],
      outcome: 'Designed and troubleshot tier-to-tier connectivity, load-balancer routing, security-group rules and database access.', icon: Cloud, status: 'Hands-on project',
    },
    {
      number: '02', id: 'eks-deployment', github: 'https://github.com/Nihanth-NS/PROJECTS/tree/main/EKS_Terraform', linkedin: 'https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/',
      category: 'KUBERNETES & CLOUD NATIVE', title: 'Deploying workloads on Amazon EKS',
      description: 'Deploy containerized workloads with Kubernetes and Helm, expose them through AWS Load Balancer Controller, and configure AWS identity and storage integrations.',
      stack: ['Amazon EKS', 'Kubernetes', 'Helm', 'ALB Ingress', 'OIDC / IRSA', 'EBS CSI'],
      outcome: 'Configured cluster integrations and investigated ingress, unhealthy targets and Availability Zone-related load-balancer issues.', icon: Boxes, status: 'Hands-on project',
    },
    {
      number: '03', id: 'cicd-pipeline', github: 'https://github.com/Nihanth-NS/PROJECTS/tree/main/ACTIONS-EKS-PIPE-DEPLOY', linkedin: 'https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/',
      category: 'CI/CD & CONTAINERS', title: 'CI/CD for containerized applications',
      description: 'A delivery workflow that builds frontend and backend container images, publishes them to Amazon ECR, and supports updating workloads running on EKS.',
      stack: ['GitHub Actions', 'Docker', 'Amazon ECR', 'Amazon EKS', 'Kubernetes rollout'],
      outcome: 'Mapped the source-to-image-to-deployment workflow and the checks needed to validate a rollout.', icon: Code2, status: 'Hands-on project',
    },
    {
      number: '04', id: 'eks-terraform-automode', github: 'https://github.com/Nihanth-NS/PROJECTS', linkedin: 'https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/',
      category: 'INFRASTRUCTURE AS CODE', title: 'AWS EKS Auto Mode infrastructure with Terraform',
      description: 'An infrastructure-as-code lab for provisioning an EKS Auto Mode environment with VPC networking, IAM, load-balancer integration, EBS storage and GitOps components shown in the architecture.',
      stack: ['Terraform', 'Amazon EKS Auto Mode', 'VPC', 'IAM / IRSA', 'AWS Load Balancer Controller', 'EBS CSI', 'Argo CD'],
      outcome: 'Explored repeatable infrastructure provisioning and how cluster add-ons, external access and GitOps fit together. See the case study for the illustrative architecture.', icon: Layers3, status: 'Hands-on lab',
    },
  ]

  const skillGroups = [
    { title: 'Cloud', icon: Cloud, items: ['AWS', 'VPC', 'EC2', 'S3', 'IAM', 'EKS', 'ALB', 'RDS'] },
    { title: 'Infrastructure as Code', icon: Layers3, items: ['Terraform', 'Ansible', 'Ansible AAP', 'YAML'] },
    { title: 'Containers & CI/CD', icon: Boxes, items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Amazon ECR'] },
    { title: 'Observability', icon: Activity, items: ['Prometheus', 'Grafana'] },
    { title: 'Programming & Systems', icon: Code2, items: ['Python', 'Bash', 'Linux', 'Git'] },
    { title: 'Reliability mindset', icon: ShieldCheck, items: ['Troubleshooting', 'Monitoring', 'Automation safety', 'Documentation'] },
  ]

  const caseStudies: Record<string, { eyebrow: string; title: string; summary: string; problem: string; flow: string[]; tools: string[]; challenges: { title: string; detail: string }[]; learnings: string[]; nodes: { id: string; label: string; sub: string; x: number; y: number; w?: number }[]; edges: [string, string, string][] }> = {
    'aws-3tier': {
      eyebrow: 'CLOUD ARCHITECTURE / CASE STUDY 01', title: 'A highly available AWS three-tier application',
      summary: 'A segmented web application architecture with a frontend tier, backend service tier and managed relational database across multiple Availability Zones.',
      problem: 'Keep the web entry point, application logic and data layer separated while controlling network access between tiers and supporting resilient traffic routing.',
      flow: ['Browser request reaches the public Application Load Balancer.', 'The frontend tier forwards application requests to the internal backend load balancer.', 'Backend EC2 instances run the Flask API and connect to Amazon RDS MySQL over the private network.', 'Security groups and subnet routing control which tier can communicate with the next.'],
      tools: ['Amazon VPC', 'Public/private subnets', 'EC2', 'Application Load Balancer', 'Python / Flask', 'Amazon RDS MySQL', 'Security groups', 'Linux'],
      challenges: [{title:'RDS connectivity timeout', detail:'Traced the connection path across subnet routing, security groups, the database port and application connection settings.'},{title:'Tier-to-tier routing',detail:'Validated that the public entry point, internal load balancer and backend service were using the intended network paths.'}],
      learnings:['Keep database access private and narrowly scoped.','Troubleshoot network paths layer by layer rather than changing multiple settings at once.','Use health checks and target status to distinguish routing failures from application failures.'],
      nodes:[{id:'user',label:'Internet user',sub:'HTTPS request',x:24,y:292,w:132},{id:'public-alb',label:'Internet-facing ALB',sub:'Public entry point',x:190,y:292,w:164},{id:'frontend-a',label:'Frontend EC2 · A',sub:'Web tier · private',x:425,y:205,w:164},{id:'frontend-b',label:'Frontend EC2 · B',sub:'Web tier · private',x:425,y:375,w:164},{id:'internal-alb',label:'Internal ALB',sub:'Private API routing',x:650,y:292,w:150},{id:'backend-a',label:'Backend EC2 · A',sub:'Flask API · private',x:855,y:205,w:164},{id:'backend-b',label:'Backend EC2 · B',sub:'Flask API · private',x:855,y:375,w:164},{id:'rds-primary',label:'RDS MySQL · Primary',sub:'Private database',x:1050,y:205,w:170},{id:'rds-standby',label:'RDS MySQL · Standby',sub:'Multi-AZ replication',x:1050,y:375,w:170}],
      edges:[['user','public-alb','HTTPS'],['public-alb','frontend-a','Web traffic'],['public-alb','frontend-b','Web traffic'],['frontend-a','internal-alb','API request'],['frontend-b','internal-alb','API request'],['internal-alb','backend-a','HTTP :5000'],['internal-alb','backend-b','HTTP :5000'],['backend-a','rds-primary','MySQL :3306'],['backend-b','rds-primary','MySQL :3306'],['rds-primary','rds-standby','Multi-AZ replication']]
    },
    'eks-deployment': {
      eyebrow:'KUBERNETES / CASE STUDY 02', title:'Deploying workloads on Amazon EKS',
      summary:'A Kubernetes deployment using Helm, Kubernetes resources, AWS Load Balancer Controller and IAM/OIDC integration to expose workloads through an AWS Application Load Balancer.',
      problem:'Deploy containerized workloads on a managed Kubernetes cluster and connect Kubernetes ingress configuration to AWS networking and permissions.',
      flow:['Containerized application workloads run in Kubernetes Deployments and Pods.', 'A Kubernetes Service provides stable access to the workloads.', 'Ingress rules are reconciled by AWS Load Balancer Controller into an ALB and target groups.', 'OIDC/IRSA and service accounts grant AWS permissions; EBS CSI supports persistent volumes where configured.'],
      tools:['Amazon EKS','Kubernetes Deployments & Services','Helm','AWS Load Balancer Controller','ALB Ingress','IAM / OIDC / IRSA','EBS CSI','Docker'],
      challenges:[{title:'503 Service Temporarily Unavailable',detail:'Investigated service endpoints, target health and the relationship between ingress rules and the backend service.'},{title:'Targets outside enabled Availability Zones',detail:'Reviewed load-balancer subnet/AZ configuration and target placement to align the network configuration.'}],
      learnings:['Ingress, Service and Pod selectors must line up.','A healthy ALB target depends on reachability, health-check settings and application readiness.','Keep AWS permissions attached to the right workload identity.'],
      nodes:[{id:'developer',label:'Helm chart',sub:'Release config',x:30,y:130,w:125},{id:'eks',label:'Amazon EKS',sub:'Control plane',x:210,y:130,w:130},{id:'deployment',label:'Deployment',sub:'Pods / containers',x:400,y:130,w:140},{id:'service',label:'K8s Service',sub:'Stable endpoint',x:600,y:130,w:130},{id:'ingress',label:'Ingress',sub:'Routing rules',x:790,y:130,w:120},{id:'alb',label:'AWS ALB',sub:'External traffic',x:970,y:130,w:120}],
      edges:[['developer','eks','Helm install'],['eks','deployment','Desired state'],['deployment','service','Pod endpoints'],['service','ingress','Ingress backend'],['ingress','alb','Controller provisions']]
    },
    'network-automation': {
      eyebrow:'AUTOMATION ENGINEERING / CASE STUDY 03', title:'Network automation with Ansible AAP',
      summary:'An automation workflow for network-device onboarding, inventory management, connectivity validation and compliance checks. Client-specific implementation details are intentionally not exposed.',
      problem:'Make repeatable network operations easier to execute, validate and observe, while handling unreachable devices and failed automation runs clearly.',
      flow:['A request or scheduled operation selects an approved job template.', 'AAP uses its inventory, credentials and execution environment to run the playbook.', 'The playbook connects to network devices to perform onboarding, validation or compliance checks.', 'Job results and selected metrics feed operational review and monitoring dashboards.'],
      tools:['Ansible Automation Platform','Ansible playbooks','YAML','AAP inventories','Job templates','Network device APIs / SSH (as supported)','Prometheus','Grafana'],
      challenges:[{title:'Unreachable or unauthenticated devices',detail:'Separate reachability and authentication failures from successful automation outcomes so operators can investigate the right cause.'},{title:'Repeatable execution',detail:'Use structured inputs, explicit task states and validation to make workflows easier to rerun and troubleshoot.'}],
      learnings:['Keep credentials in approved secret-management systems.','Report partial failures rather than treating every run as a simple pass/fail.','Do not publish customer hostnames, internal endpoints, credentials or confidential diagrams.'],
      nodes:[{id:'request',label:'Operation request',sub:'Approved input',x:35,y:130,w:145},{id:'aap',label:'AAP controller',sub:'Job template',x:245,y:130,w:140},{id:'inventory',label:'Inventory & creds',sub:'Target selection',x:450,y:130,w:150},{id:'playbook',label:'Playbook run',sub:'Execution environment',x:665,y:130,w:145},{id:'devices',label:'Network devices',sub:'Onboarding / checks',x:870,y:130,w:150},{id:'metrics',label:'Monitoring',sub:'Results / dashboards',x:1070,y:130,w:145}],
      edges:[['request','aap','Launch job'],['aap','inventory','Resolve targets'],['inventory','playbook','Run tasks'],['playbook','devices','Validated operations'],['playbook','metrics','Job outcome']]
    },
    'observability': {
      eyebrow:'OBSERVABILITY / CASE STUDY 04', title:'Prometheus and Grafana monitoring',
      summary:'A monitoring workflow that collects time-series metrics, stores them in Prometheus and presents useful signals in Grafana dashboards for infrastructure and automation operations.',
      problem:'Turn raw metrics into useful operational visibility, understand counter and gauge behaviour, and troubleshoot missing or inconsistent dashboard data.',
      flow:['Exporters or instrumented services expose metrics endpoints.', 'Prometheus scrapes configured targets and stores time-series samples.', 'PromQL queries transform raw metrics into rates, increases and summary signals.', 'Grafana dashboards display trends and alert rules help surface conditions requiring attention.'],
      tools:['Prometheus','PromQL','Grafana','Node Exporter','Pushgateway for short-lived jobs','Alerting concepts'],
      challenges:[{title:'Dashboard shows No Data',detail:'Check target health, scrape configuration, metric names, labels, time range and query filters in sequence.'},{title:'Inventory totals do not match',detail:'Confirm metric definitions and counting rules before comparing panels; metrics are not a substitute for an authoritative inventory database.'}],
      learnings:['Use rate() for per-second counter rates and increase() for counter growth over a time window.','Pushgateway is for short-lived jobs, not a general replacement for scraping long-running services.','Keep metric labels bounded and dashboards tied to clear definitions.'],
      nodes:[{id:'exporter',label:'Exporter / job',sub:'Exposes metrics',x:35,y:130,w:150},{id:'prometheus',label:'Prometheus',sub:'Scrape + time series',x:260,y:130,w:150},{id:'promql',label:'PromQL',sub:'Query / transform',x:490,y:130,w:135},{id:'grafana',label:'Grafana',sub:'Dashboards',x:700,y:130,w:130},{id:'alert',label:'Alerting',sub:'Threshold / signal',x:900,y:130,w:130}],
      edges:[['exporter','prometheus','Scrape endpoint'],['prometheus','promql','Time series'],['promql','grafana','Query results'],['prometheus','alert','Rule evaluation']]
    },
    'cicd-pipeline': {
      eyebrow:'DELIVERY AUTOMATION / CASE STUDY 05', title:'CI/CD for containerized applications',
      summary:'A pipeline pattern that builds a container image, publishes it to Amazon ECR and updates an application running on Amazon EKS.',
      problem:'Reduce repetitive deployment steps and make application delivery more repeatable through version-controlled pipeline definitions.',
      flow:['A source change triggers a GitHub Actions workflow.', 'The workflow builds and validates a Docker image.', 'The image is tagged and pushed to Amazon ECR.', 'Deployment configuration is updated and Kubernetes rollout status is checked.'],
      tools:['GitHub','GitHub Actions','Docker','Amazon ECR','Amazon EKS','kubectl / rollout status','Trivy and SonarQube concepts'],
      challenges:[{title:'Image-to-deployment handoff',detail:'Use a clear image tag and ensure the deployment references the newly published image.'},{title:'Rollout validation',detail:'Treat a successful image push as only one stage; check Kubernetes rollout and workload readiness too.'}],
      learnings:['Use least-privilege credentials for registry and cluster access.','Separate build, scan, publish and deploy stages for clearer failure diagnosis.','Avoid storing long-lived cloud secrets directly in repository files.'],
      nodes:[{id:'git',label:'GitHub',sub:'Source change',x:40,y:130,w:125},{id:'actions',label:'GitHub Actions',sub:'Build / validate',x:250,y:130,w:150},{id:'docker',label:'Docker image',sub:'Build / tag',x:475,y:130,w:140},{id:'ecr',label:'Amazon ECR',sub:'Image registry',x:690,y:130,w:135},{id:'eks',label:'Amazon EKS',sub:'Deploy / rollout',x:900,y:130,w:140}],
      edges:[['git','actions','Workflow trigger'],['actions','docker','Build image'],['docker','ecr','Push image'],['ecr','eks','Pull image / deploy']]
    },
    'ai-operations': {
      eyebrow:'LEARNING PROJECT / CASE STUDY 06', title:'AI-assisted operations — planned prototype',
      summary:'A proposed learning prototype that could summarize selected logs, explain alert context and suggest runbook steps with human approval. This is planned work, not a completed production system.',
      problem:'Explore how an LLM can make operational signals easier to interpret without allowing it to execute infrastructure changes autonomously.',
      flow:['A user supplies a sanitized log excerpt or alert context.', 'A small API applies input limits and sends context to an LLM.', 'The model returns a summary and suggested runbook references.', 'A human reviews the suggestions; no automatic remediation is enabled in the planned prototype.'],
      tools:['Python','FastAPI','LLM API','Docker','Runbook documents','Human approval'],
      challenges:[{title:'Hallucinations and unsafe suggestions',detail:'Constrain the assistant to supplied evidence, label uncertainty and require human review.'},{title:'Sensitive log data',detail:'Redact secrets and personal data before sending content to any external model service.'}],
      learnings:['Treat model output as a suggestion, not ground truth.','Log requests carefully without retaining sensitive payloads.','Start with read-only analysis before considering controlled remediation.'],
      nodes:[{id:'operator',label:'Operator',sub:'Alert / log context',x:35,y:130,w:145},{id:'api',label:'FastAPI',sub:'Validate / redact',x:260,y:130,w:135},{id:'llm',label:'LLM service',sub:'Summarize / explain',x:470,y:130,w:145},{id:'runbook',label:'Runbooks',sub:'Known procedures',x:700,y:130,w:140},{id:'review',label:'Human review',sub:'Approve next step',x:925,y:130,w:150}],
      edges:[['operator','api','Submit context'],['api','llm','Sanitized prompt'],['runbook','llm','Reference context'],['llm','review','Suggested response']]
    }

    , 'eks-terraform-automode': {
      eyebrow:'INFRASTRUCTURE AS CODE / CASE STUDY 04', title:'AWS EKS Auto Mode infrastructure with Terraform',
      summary:'An infrastructure-as-code lab based on the architecture shared for this project: Terraform provisions the AWS foundation, EKS Auto Mode manages compute, AWS integrations support ingress and storage, and Argo CD represents the GitOps delivery path.',
      problem:'Make the cluster and supporting cloud resources reproducible while separating infrastructure provisioning, cluster-level integrations, external traffic and application synchronization.',
      flow:['Terraform configuration defines the VPC, subnet layout, EKS Auto Mode cluster and supporting IAM resources.','EKS Auto Mode manages Kubernetes compute capacity; the Kubernetes API and CoreDNS support cluster operations and service discovery.','AWS Load Balancer Controller and EBS CSI integrations use workload identities/permissions to manage ingress and persistent storage.','The illustrated external-access path routes users through an Application Load Balancer and Kubernetes Ingress.','The GitOps lane shows a Git repository synchronizing application definitions through Argo CD to workloads on EKS.'],
      tools:['Terraform modules','Amazon VPC and subnets','Amazon EKS Auto Mode','IAM / IRSA','AWS Load Balancer Controller','Amazon EBS CSI Driver','Application Load Balancer','Kubernetes Ingress','Argo CD / GitOps'],
      challenges:[{title:'Keeping infrastructure changes repeatable',detail:'Separate reusable Terraform configuration, inputs and outputs; review a plan before applying changes and avoid committing state or secrets.'},{title:'Cluster add-on permissions',detail:'Verify the correct IAM role/service-account association and least-privilege permissions for the AWS integrations shown in the design.'},{title:'Ingress and target health',detail:'Validate subnet discovery, ingress rules, service endpoints and target health when external traffic does not reach workloads.'},{title:'GitOps source of truth',detail:'Keep application manifests versioned in Git and confirm that Argo CD is tracking the intended repository and path.'}],
      learnings:['Infrastructure provisioning and application delivery are separate workflows that should have clear ownership.','IAM permissions, subnet tagging/discovery and health checks are frequent integration points to validate.','The architecture is a representation of the shared project diagram; verify deployed resources before describing any component as live.'],
      nodes:[{id:'terraform',label:'Terraform',sub:'Plan / apply',x:20,y:130,w:135},{id:'vpc',label:'AWS VPC',sub:'Subnets / routes',x:205,y:130,w:135},{id:'eks',label:'EKS Auto Mode',sub:'Managed compute',x:390,y:130,w:150},{id:'iam',label:'IAM / IRSA',sub:'Workload identity',x:590,y:130,w:135},{id:'alb',label:'ALB + Ingress',sub:'External access',x:780,y:130,w:145},{id:'argocd',label:'Argo CD',sub:'GitOps sync',x:980,y:130,w:125}],
      edges:[['terraform','vpc','Provision network'],['vpc','eks','Cluster networking'],['eks','iam','Role association'],['iam','alb','AWS permissions'],['eks','alb','Ingress routing'],['argocd','eks','Sync applications']]
    }

  }

  function AwsThreeTierDiagram({ activeNode, selectedNode, setActiveNode, setSelectedNode }: { activeNode: string | null; selectedNode: string | null; setActiveNode: (id: string | null) => void; setSelectedNode: (id: string | null) => void }) {
    const focus = activeNode ?? selectedNode
    const edges: { from: string; to: string; d: string; label: string; lx: number; ly: number }[] = [
      {from:'user',to:'public-alb',d:'M 150 324 H 190',label:'HTTPS',lx:170,ly:312},
      {from:'public-alb',to:'frontend-a',d:'M 354 314 C 380 314 390 237 425 237',label:'HTTP',lx:386,ly:268},
      {from:'public-alb',to:'frontend-b',d:'M 354 332 C 380 332 390 407 425 407',label:'HTTP',lx:386,ly:386},
      {from:'frontend-a',to:'internal-alb',d:'M 589 237 C 620 237 620 314 650 314',label:'API request',lx:621,ly:262},
      {from:'frontend-b',to:'internal-alb',d:'M 589 407 C 620 407 620 332 650 332',label:'API request',lx:620,ly:388},
      {from:'internal-alb',to:'backend-a',d:'M 800 314 C 825 314 830 237 855 237',label:'HTTP :5000',lx:829,ly:269},
      {from:'internal-alb',to:'backend-b',d:'M 800 332 C 825 332 830 407 855 407',label:'HTTP :5000',lx:829,ly:388},
      {from:'backend-a',to:'rds-primary',d:'M 1019 237 H 1050',label:'MySQL :3306',lx:1034,ly:224},
      {from:'backend-b',to:'rds-primary',d:'M 1019 407 C 1032 407 1034 260 1050 260',label:'MySQL :3306',lx:1038,ly:350},
      {from:'rds-primary',to:'rds-standby',d:'M 1135 269 V 375',label:'Replication',lx:1170,ly:324},
    ]
    const active = (id: string) => !focus || id === focus || edges.some(e => (e.from === focus && e.to === id) || (e.to === focus && e.from === id))
    const nodes = [
      {id:'user',x:24,y:292,w:132,h:64,label:'Internet user',sub:'HTTPS request',kind:'external'},
      {id:'public-alb',x:190,y:292,w:164,h:64,label:'Internet-facing ALB',sub:'Public entry point',kind:'alb'},
      {id:'frontend-a',x:425,y:205,w:164,h:64,label:'Frontend EC2 · AZ A',sub:'Web tier · private',kind:'compute'},
      {id:'frontend-b',x:425,y:375,w:164,h:64,label:'Frontend EC2 · AZ B',sub:'Web tier · private',kind:'compute'},
      {id:'internal-alb',x:650,y:292,w:150,h:64,label:'Internal ALB',sub:'Private API routing',kind:'alb'},
      {id:'backend-a',x:855,y:205,w:164,h:64,label:'Backend EC2 · AZ A',sub:'Flask API · private',kind:'compute'},
      {id:'backend-b',x:855,y:375,w:164,h:64,label:'Backend EC2 · AZ B',sub:'Flask API · private',kind:'compute'},
      {id:'rds-primary',x:1050,y:205,w:170,h:64,label:'RDS MySQL · Primary',sub:'Private database',kind:'database'},
      {id:'rds-standby',x:1050,y:375,w:170,h:64,label:'RDS MySQL · Standby',sub:'Multi-AZ replication',kind:'database'},
    ]
    return <svg className="architecture-svg aws-architecture-svg" viewBox="0 0 1250 535" role="img" aria-label="Interactive AWS three-tier application architecture across two Availability Zones">
      <rect className="aws-vpc-boundary" x="12" y="22" width="1226" height="490" rx="16" />
      <text className="aws-boundary-label" x="30" y="47">AWS VPC · ISOLATED NETWORK</text>
      <rect className="aws-az" x="375" y="62" width="255" height="420" rx="12"/><text className="aws-az-label" x="390" y="85">AVAILABILITY ZONE A</text>
      <rect className="aws-az" x="640" y="62" width="390" height="420" rx="12"/><text className="aws-az-label" x="655" y="85">AVAILABILITY ZONE B / SHARED ROUTING</text>
      <rect className="aws-subnet public-subnet" x="172" y="112" width="194" height="350" rx="10"/><text className="aws-subnet-label" x="184" y="135">PUBLIC SUBNETS</text>
      <rect className="aws-subnet private-subnet" x="390" y="105" width="225" height="355" rx="10"/><text className="aws-subnet-label" x="402" y="128">PRIVATE APP SUBNET · A</text>
      <rect className="aws-subnet private-subnet" x="655" y="105" width="360" height="355" rx="10"/><text className="aws-subnet-label" x="667" y="128">PRIVATE APP SUBNET · B</text>
      <rect className="aws-subnet db-subnet" x="1038" y="150" width="190" height="310" rx="10"/><text className="aws-subnet-label" x="1050" y="174">PRIVATE DB SUBNETS</text>
      {edges.map((e,i)=>{const hot=!focus||e.from===focus||e.to===focus;return <g key={i} className={hot?'arch-edge is-lit':'arch-edge is-dim'}><path d={e.d}/><text x={e.lx} y={e.ly} textAnchor="middle">{e.label}</text></g>})}
      {nodes.map(n=>{const hot=active(n.id);return <g key={n.id} className={`arch-node aws-arch-node ${hot?'is-lit':'is-dim'} ${selectedNode===n.id?'is-selected':''}`} tabIndex={0} role="button" aria-label={`Select ${n.label}`} onMouseEnter={()=>setActiveNode(n.id)} onMouseLeave={()=>setActiveNode(null)} onFocus={()=>setActiveNode(n.id)} onBlur={()=>setActiveNode(null)} onClick={()=>setSelectedNode(selectedNode===n.id?null:n.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelectedNode(selectedNode===n.id?null:n.id)}}}><rect x={n.x} y={n.y} width={n.w} height={n.h} rx="9"/><circle cx={n.x+15} cy={n.y+17} r="4"/><text x={n.x+12} y={n.y+34} className="arch-label">{n.label}</text><text x={n.x+12} y={n.y+49} className="arch-sub">{n.sub}</text></g>})}
      <text className="aws-footnote" x="30" y="495">Illustrative topology based on the project architecture shared by the author.</text>
    </svg>
  }

  function CaseStudy({ project }: { project: Project }) {
    const detail = caseStudies[project.id]
    // const architectureImage = ({
    //   'aws-3tier': '/architecture-aws-3tier.png',
    //   'eks-deployment': '/architecture-eks-three-tier.jpg',
    //   'cicd-pipeline': '/architecture-cicd-pipeline.png',
    //   'eks-terraform-automode': '/architecture-eks-terraform-automode.png',
    // } as Record<string, string>)[project.id] || '/architecture-aws-3tier.png'
    const [activeNode, setActiveNode] = useState<string | null>(null)
    const [selectedNode, setSelectedNode] = useState<string | null>(null)
    const nodeById = Object.fromEntries(detail.nodes.map(n => [n.id, n]))
    const focus = activeNode ?? selectedNode
    const chosen = detail.nodes.find(n => n.id === (selectedNode ?? activeNode))
    const componentExplanation: Record<string, string> = {
      'user': 'The browser initiates the request over HTTPS. It does not connect directly to the private application or database tiers.',
      'public-alb': 'The internet-facing Application Load Balancer accepts incoming web traffic and routes it to healthy frontend targets in the configured Availability Zones.',
      'frontend-a': 'The frontend EC2 instance hosts the web tier in a private subnet in Availability Zone A. It sends API requests through the internal load balancer rather than connecting directly to a backend instance.',
      'frontend-b': 'The second frontend instance provides another target in Availability Zone B. The public ALB distributes requests across healthy frontend targets.',
      'internal-alb': 'The internal Application Load Balancer is reachable within the VPC and routes API requests to healthy backend targets. Its listener and target-group settings must match the application port and health check.',
      'backend-a': 'This private EC2 instance runs the Flask API. It handles application logic and connects to RDS MySQL on TCP port 3306 using the intended database endpoint and credentials.',
      'backend-b': 'A second backend target provides an additional application instance in the illustrated multi-AZ layout. Verify that the target is healthy and that its security group permits only the required traffic.',
      'rds-primary': 'Amazon RDS for MySQL stores application data in private database networking. Backend security-group rules should allow database traffic only from the approved application tier.',
      'rds-standby': 'The reference diagram depicts a Multi-AZ standby for high availability. RDS manages synchronous standby replication and failover; the standby is not normally used as a read endpoint.'
    }
    const github = project.github
    const linkedin = project.linkedin
    return <main className="case-page">
      <header className="case-nav"><a className="brand" href="/" onClick={(e)=>{e.preventDefault();window.location.href='/'}}><span className="brand-mark">NS<span>.</span></span><span className="brand-label">ENGINEERING PORTFOLIO</span></a><a className="case-back" href="/" onClick={(e)=>{e.preventDefault();window.location.href='/'}}><ArrowLeft size={16}/> All projects</a></header>
      <section className="case-hero"><div className="case-hero-copy"><div className="eyebrow"><span className="status-dot"/>{detail.eyebrow}</div><span className="case-number">PROJECT {project.number}</span><h1>{detail.title}</h1><p>{detail.summary}</p><div className="case-actions">{github && <a className="button button-primary" href={github} target="_blank" rel="noreferrer"><Github size={17}/> View repository <ArrowUpRight size={15}/></a>}{linkedin && <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17}/> LinkedIn <ArrowUpRight size={15}/></a>}</div><p className="case-disclaimer">Architecture is an explanatory representation based on the project description; it is not a live cloud view.</p></div><div className="case-hero-aside"><span>ENGINEERING NOTEBOOK</span><strong>Design → Build → Validate</strong><small>Explore the architecture below</small></div></section>
      <section className="case-section"><div className="case-section-heading"><div><span className="section-kicker">01 / SYSTEM MAP</span><h2>Explore the <em>architecture.</em></h2></div><p>Hover or focus a component to illuminate its connected path. Click a component to pin its details.</p></div>
        <div className="architecture-shell">
          <div className="architecture-top"><span><span className="status-dot"/> INTERACTIVE SYSTEM ARCHITECTURE</span><span>LIVE HOVER · CLICK TO PIN</span></div>
          <p className="interactive-map-note architecture-intro">Explore the system map directly — no separate image or collapsed panel. Hover over a component to illuminate its connected paths; click or keyboard-select it to keep its explanation open.</p>
          <div className="architecture-canvas">{project.id === 'aws-3tier' ? <AwsThreeTierDiagram activeNode={activeNode} selectedNode={selectedNode} setActiveNode={setActiveNode} setSelectedNode={setSelectedNode}/> : <svg className="architecture-svg generic-architecture-svg" viewBox="0 0 1240 300" role="img" aria-label={`Interactive ${detail.title} architecture diagram`}>
            <rect className="generic-system-boundary" x="12" y="18" width="1216" height="264" rx="16"/>
            <text className="generic-boundary-label" x="32" y="43">{project.id === 'eks-deployment' ? 'AWS CLOUD · AMAZON EKS WORKLOAD PATH' : project.id === 'cicd-pipeline' ? 'SOURCE → BUILD → REGISTRY → DEPLOYMENT' : 'AWS CLOUD · INFRASTRUCTURE & GITOPS'}</text>
            <rect className="generic-flow-lane" x="28" y="58" width="1184" height="198" rx="12"/>
            {detail.edges.map(([a,b,label],i)=>{const A=nodeById[a],B=nodeById[b]; const x1=A.x+(A.w||130), y1=A.y+31, x2=B.x, y2=B.y+31; const mid=(x1+x2)/2; const hot=!focus||a===focus||b===focus;return <g key={i} className={hot?'arch-edge is-lit':'arch-edge is-dim'}><path d={`M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`} /><text x={mid} y={Math.min(y1,y2)-16} textAnchor="middle">{label}</text></g>})}
            {detail.nodes.map(n=>{const hot=!focus||n.id===focus||detail.edges.some(([a,b])=>(a===focus&&b===n.id)||(b===focus&&a===n.id));return <g key={n.id} className={`arch-node generic-arch-node ${hot?'is-lit':'is-dim'} ${selectedNode===n.id?'is-selected':''}`} tabIndex={0} role="button" aria-label={`Select ${n.label}`} onMouseEnter={()=>setActiveNode(n.id)} onMouseLeave={()=>setActiveNode(null)} onFocus={()=>setActiveNode(n.id)} onBlur={()=>setActiveNode(null)} onClick={()=>setSelectedNode(selectedNode===n.id?null:n.id)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelectedNode(selectedNode===n.id?null:n.id)}}}><rect x={n.x} y={n.y} width={n.w||130} height="64" rx="10"/><circle cx={n.x+16} cy={n.y+17} r="4"/><text x={n.x+12} y={n.y+35} className="arch-label">{n.label}</text><text x={n.x+12} y={n.y+51} className="arch-sub">{n.sub}</text></g>})}
            <text className="generic-footnote" x="32" y="273">Select a component to inspect its role · highlighted lines show direct connections</text>
          </svg>}</div>
          <div className="architecture-legend"><span><i/> Active path</span><span>Click a node to pin its explanation</span><button className="node-clear" onClick={()=>{setActiveNode(null);setSelectedNode(null)}}>Reset map <X size={13}/></button></div>
          {chosen && <div className="node-detail"><div><span className="section-kicker">COMPONENT DETAIL</span><h3>{chosen.label}</h3><p>{project.id === 'aws-3tier' ? componentExplanation[chosen.id] : `${chosen.sub}. This component participates in the ${detail.title.toLowerCase()} workflow. The highlighted paths show its direct connections to neighboring components and the direction of configuration, requests, images, metrics or results.`}</p></div><button className="node-clear" onClick={()=>setSelectedNode(null)}>Clear selection <X size={14}/></button></div>}
        </div>
      </section>
      <section className="case-section case-two-col"><div><span className="section-kicker">02 / WHY IT EXISTS</span><h2>Problem & <em>design intent.</em></h2><p className="case-body-copy">{detail.problem}</p><div className="case-callout"><Info size={19}/><p><b>Engineering focus</b><br/>Build for understandable failure paths, safe access boundaries and repeatable troubleshooting — not just a successful first run.</p></div></div><div><span className="section-kicker">03 / REQUEST FLOW</span><h2>How it <em>works.</em></h2><ol className="flow-list">{detail.flow.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></li>)}</ol></div></section>
      <section className="case-section"><div className="case-section-heading"><div><span className="section-kicker">04 / TECHNOLOGY</span><h2>Tools in the <em>stack.</em></h2></div><p>Tools are included because they appear in the resume or project repository context; the exact usage may vary by implementation.</p></div><div className="case-tools">{detail.tools.map((tool,i)=><div className="case-tool" key={tool}><span>{String(i+1).padStart(2,'0')}</span><b>{tool}</b><small>{tool.toLowerCase().includes('aws')||tool.includes('EC2')||tool.includes('RDS')||tool.includes('ALB')?'Cloud infrastructure':tool.toLowerCase().includes('grafana')||tool.toLowerCase().includes('prometheus')?'Observability':'Implementation component'}</small></div>)}</div></section>
      <section className="case-section"><div className="case-section-heading"><div><span className="section-kicker">05 / DEBUGGING LOG</span><h2>Challenges & <em>lessons.</em></h2></div><p>Concrete troubleshooting themes, with no invented performance numbers or unsupported impact claims.</p></div><div className="challenge-grid">{detail.challenges.map((c, i) => <article className="challenge-card" key={c.title}><span>CHALLENGE 0{i + 1}</span><h3>{c.title}</h3><p>{c.detail}</p></article>)}</div><div className="lesson-panel"><h3>What this project reinforces</h3>{detail.learnings.map((l) => <p key={l}><CheckCircle2 size={16} />{l}</p>)}</div></section>
      <section className="case-cta"><span className="section-kicker">KEEP EXPLORING</span><h2>Interested in the <em>implementation?</em></h2><p>Review the repository for source files and implementation details. Public links are provided only where a relevant destination is known.</p><div className="case-actions">{github&&<a className="button button-primary" href={github} target="_blank" rel="noreferrer"><Github size={17}/> Explore code <ArrowUpRight size={15}/></a>}<a className="button button-secondary" href="https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/" target="_blank" rel="noreferrer"><LinkedinIcon size={17}/> Connect on LinkedIn <ArrowUpRight size={15}/></a></div></section>
      <footer className="case-footer"><span>NS. / ENGINEERING PORTFOLIO</span><span>Designed for clarity · Built to be explored</span></footer>
    </main>
  }

  function App() {
    const projectId = new URLSearchParams(window.location.search).get('project')
    if (projectId) { const selectedProject = projects.find(p => p.id === projectId); if (selectedProject) return <CaseStudy project={selectedProject} /> }
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeFilter, setActiveFilter] = useState('All')
    const filters = ['All', 'Cloud', 'Kubernetes', 'CI/CD', 'Infrastructure as Code']
    const filteredProjects = projects.filter((project) => {
      if (activeFilter === 'All') return true
      if (activeFilter === 'Cloud') return /AWS|cloud/i.test(project.title + project.category + project.stack.join(' '))
      if (activeFilter === 'Kubernetes') return /EKS|Kubernetes|Helm/i.test(project.title + project.stack.join(' '))
      if (activeFilter === 'CI/CD') return /CI\/CD|pipeline|container/i.test(project.title + project.category)
      return /Terraform|Infrastructure as Code/i.test(project.title + project.category + project.stack.join(' '))
    })

    const closeMenu = () => setMenuOpen(false)

    return (
      <>
        <header className="site-header">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Nihanth Sai home">
            <span className="brand-mark">NS<span>.</span></span>
            <span className="brand-label">ENGINEERING PORTFOLIO</span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            <a href="#work" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#certifications" onClick={closeMenu}>Certification</a>
            <a href="#resume" onClick={closeMenu}>Resume</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <main id="home">
          <section className="hero section-wrap">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> CLOUD · DEVOPS · SITE RELIABILITY</div>
              <div className="hero-role">ANALYST · HCLTECH</div><h1>Cloud &amp; DevOps<br /><span>Engineer.</span></h1>
              <p className="hero-lede">I'm Bandaru Nihanth Sai, an Analyst at HCLTech focused on cloud infrastructure, automation and observability. I build, troubleshoot and document repeatable infrastructure workflows across AWS, Kubernetes and automation tooling.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowRight size={17} /></a>
                <a className="button button-secondary" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
                <a className="button button-secondary" href="/Nihanth_Sai_Resume.pdf" download><Download size={16} /> Download resume</a>
              </div>
              <div className="hero-meta">
                <div><span className="meta-label">FOCUS</span><strong>Cloud & Platform Engineering</strong></div>
                <div><span className="meta-label">TOOLKIT</span><strong>AWS · Terraform · Kubernetes</strong></div>
              </div>
            </div>

            <div className="hero-visual profile-visual" aria-label="Profile and engineering toolkit">
              <div className="profile-visual-top"><span>ENGINEER / PROFILE</span><span className="live-label"><span className="status-dot" /> OPEN TO OPPORTUNITIES</span></div>
              <div className="portrait-stage">
                <div className="portrait-orbit portrait-orbit-one" />
                <div className="portrait-orbit portrait-orbit-two" />
                <div className="portrait-frame">
                  <img src="/profile.jpeg" alt="Nihanth Sai profile portrait" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement?.classList.add('portrait-placeholder') }} />
                  <div className="portrait-initials">NS<span>.</span></div>
                </div>
                <span className="float-tag float-aws"><Cloud size={14} /> AWS</span>
                <span className="float-tag float-terraform"><Layers3 size={14} /> Terraform</span>
                <span className="float-tag float-k8s"><Boxes size={14} /> Kubernetes</span>
                <span className="float-tag float-ansible"><Workflow size={14} /> Ansible AAP</span>
                <div className="portrait-caption"><span className="caption-line" /><span>BUILD · AUTOMATE · OBSERVE</span></div>
              </div>
              <div className="profile-mini-stats">
                <div><span>01</span><b>Cloud</b><small>Infrastructure</small></div>
                <div><span>02</span><b>Automation</b><small>Repeatable workflows</small></div>
                <div><span>03</span><b>Reliability</b><small>Monitoring & operations</small></div>
              </div>
            </div>
            <div className="hero-bottom"><span>BUILD WITH INTENT. OPERATE WITH CLARITY.</span><a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a></div>
          </section>

          <section className="proof-strip" aria-label="Core areas">
            <div className="proof-inner">
              <span>CORE AREAS</span><b><Cloud size={16} /> Cloud infrastructure</b><b><Workflow size={16} /> Automation</b><b><Boxes size={16} /> Containers</b><b><Activity size={16} /> Observability</b>
            </div>
          </section>

          <section id="about" className="section-wrap section-block about-section">
            <div className="section-heading">
              <div><span className="section-kicker">01 / ABOUT</span><h2>Practical engineering.<br /><span>Continuous improvement.</span></h2></div>
              <p>I bring a hands-on mindset to cloud, automation and operational challenges — with a focus on understanding how the pieces work together.</p>
            </div>
            <div className="about-grid">
              <div className="about-main">
                <span className="quote-mark">“</span>
                <p className="about-statement">Good automation is more than a script. It is a repeatable process with clear inputs, safe execution, useful feedback and a way to recover when something fails.</p>
                <p className="muted">My learning approach is to build, troubleshoot, document and improve — then make the work easy for another engineer to reproduce.</p>
              </div>
              <div className="principles">
                <div className="principle"><span>01</span><div><b>Automate the repeatable</b><p>Reduce avoidable manual steps through versioned, testable workflows.</p></div></div>
                <div className="principle"><span>02</span><div><b>Design for visibility</b><p>Use metrics, logs and clear signals to understand system behaviour.</p></div></div>
                <div className="principle"><span>03</span><div><b>Document the why</b><p>Capture architecture decisions, trade-offs and troubleshooting steps.</p></div></div>
              </div>
            </div>
            <div className="profile-details" aria-label="Professional details">
              <div><MapPin size={17}/><span><small>LOCATION</small><b>Chennai, India</b></span></div>
              <div><Mail size={17}/><span><small>EMAIL</small><a href="mailto:thenihanth@gmail.com">thenihanth@gmail.com</a></span></div>
              <div><Phone size={17}/><span><small>PHONE</small><a href="tel:+919014157901">+91 90141 57901</a></span></div>
              <div><GraduationCap size={17}/><span><small>EDUCATION</small><b>B.E. Computer Science &amp; Engineering</b><small>R.M.K. Engineering College · 2020–2024</small></span></div>
              <div><Github size={17}/><span><small>GITHUB</small><a href="https://github.com/Nihanth-NS/PROJECTS" target="_blank" rel="noreferrer">Nihanth-NS / PROJECTS</a></span></div>
              <div><Linkedin size={17}/><span><small>LINKEDIN</small><a href="https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/" target="_blank" rel="noreferrer">nihanth-sai-bandaru</a></span></div>
            </div>
          </section>

          <section id="work" className="section-wrap section-block work-section">
            <div className="section-heading">
              <div><span className="section-kicker">02 / SELECTED WORK</span><h2>Projects that show<br /><span>how I think.</span></h2></div>
              <p>Real hands-on work, professional automation experience and clearly labelled projects in progress. Each case study should connect the problem, design, implementation and validation.</p>
            </div>
            <div className="filter-row" aria-label="Filter projects">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="project-grid">
              {filteredProjects.map((project) => {
                const Icon = project.icon
                return <article className="project-card project-card-clickable" key={project.number} role="link" tabIndex={0} aria-label={`Open case study: ${project.title}`} onClick={() => window.open(`/?project=${project.id}`, '_blank', 'noopener,noreferrer')} onKeyDown={(event) => { if (event.key === 'Enter') window.open(`/?project=${project.id}`, '_blank', 'noopener,noreferrer') }}>
                  <div className="project-card-top"><span className="project-number">{project.number} / 04</span><span className="project-icon"><Icon size={20} /></span></div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-outcome"><span>WHAT IT DEMONSTRATES</span><p>{project.outcome}</p></div>
                  <div className="project-card-bottom"><span className="project-status"><span className="status-dot" />{project.status}</span><span className="project-arrow"><span>Explore case study</span><ArrowUpRight size={17} /></span></div>
                </article>
              })}
            </div>
            <div className="project-note"><ShieldCheck size={18} /><p><b>Professional integrity:</b> client systems, credentials, internal screenshots and confidential architecture details do not belong in a public portfolio. Public case studies should use sanitised examples and only verified claims.</p></div>
          </section>

          <section id="skills" className="section-wrap section-block skills-section">
            <div className="section-heading">
              <div><span className="section-kicker">03 / TOOLKIT</span><h2>Tools I use to<br /><span>build and operate.</span></h2></div>
              <p>A focused toolkit across cloud infrastructure, automation, containers and observability. The labels describe areas of hands-on exposure, not a claim of expert-level mastery in every tool.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon
                return <div className="skill-card" key={group.title}><div className="skill-heading"><span><Icon size={18} /></span><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>
              })}
            </div>
          </section>

          <section id="experience" className="section-wrap section-block experience-section">
            <div className="section-heading">
              <div><span className="section-kicker">04 / EXPERIENCE</span><h2>Learning through<br /><span>real operations.</span></h2></div>
              <p>I work on infrastructure automation, Ansible Automation Platform, and monitoring workflows, with a focus on making operational tasks more repeatable, reliable, and easier to manage.</p>
            </div>
            <div className="experience-card">
              <div className="experience-mark">H</div>
              <div className="experience-body">
                <div className="experience-top"><div><h3>Analyst</h3><p className="company">HCLTech · Automation / Infrastructure</p></div><span className="experience-date">DEC 2024 — PRESENT</span></div>
                <ul>
                  <li>Contribute to automation initiatives involving network infrastructure, inventory and operational workflows.</li>
                  <li>Develop and work with Ansible-based automation patterns, including playbooks, inventories and job execution through Ansible Automation Platform.</li>
                  <li>Work with monitoring and dashboard concepts to improve visibility into infrastructure and automation outcomes.</li>
                  <li>Collaborate on troubleshooting, validation and documentation for repeatable operational processes.</li>
                </ul>
                <p className="experience-footnote">Public summary of responsibilities; client-specific and confidential implementation details are intentionally omitted.</p>
              </div>
            </div>
          </section>

          <section id="certifications" className="section-wrap section-block certification-section">
            <div className="section-heading">
              <div><span className="section-kicker">05 / CERTIFICATION</span><h2>Validated cloud<br /><span>architecture skills.</span></h2></div>
              <p>Credential details and the original certificate are available to view. Verify the credential directly with AWS.</p>
            </div>
            <div className="aws-cert-card">
              <div className="aws-cert-badge-wrap"><img className="aws-cert-badge" src="/aws-certified-solutions-architect-associate.png" alt="AWS Certified Solutions Architect Associate badge" /></div>
              <div className="aws-cert-copy"><span className="section-kicker">AMAZON WEB SERVICES</span><h3>AWS Certified Solutions Architect – Associate</h3><p className="aws-cert-date">Issued October 2, 2026 <span>·</span> Valid through October 2, 2029</p><p>Certification focused on designing secure, resilient, high-performing and cost-optimized architectures on AWS.</p><div className="case-actions"><a className="button button-primary" href="/AWS-Certified-Solutions-Architect-Associate-certificate.pdf" target="_blank" rel="noreferrer"><ExternalLink size={16}/> View certificate</a><a className="button button-secondary" href="https://aws.amazon.com/verification" target="_blank" rel="noreferrer">Verify with AWS <ArrowUpRight size={15}/></a></div><small className="aws-validation">Validation number: 6ee67ac917e54cd0956b97beb50260a4</small></div>
            </div>
          </section>

          <section id="resume" className="section-wrap section-block resume-section">
            <div className="section-heading">
              <div><span className="section-kicker">06 / RESUME</span><h2>My experience,<br /><span>in one document.</span></h2></div>
              <div className="resume-heading-copy"><p>View the resume here or download the PDF for your records. It includes my experience, technical skills, projects, education and AWS certification.</p><a className="button button-primary" href="/Nihanth_Sai_Resume.pdf" download><Download size={16}/> Download resume <ArrowDownRight size={15}/></a></div>
            </div>
            <div className="resume-viewer-card">
              <div className="resume-viewer-top"><span><FileText size={17}/> BANDARU NIHANTH SAI · RESUME</span><a href="/Nihanth_Sai_Resume.pdf" target="_blank" rel="noreferrer">Open in new tab <ExternalLink size={14}/></a></div>
              <iframe className="resume-pdf-viewer" src="/Nihanth_Sai_Resume.pdf#toolbar=1&navpanes=0&view=FitH" title="Bandaru Nihanth Sai resume PDF" loading="lazy" />
              <div className="resume-viewer-fallback">If the PDF viewer isn't supported by your browser, <a href="/Nihanth_Sai_Resume.pdf" download>download the resume here</a>.</div>
            </div>
          </section>

          <section className="section-wrap section-block approach-section">
            <div className="approach-panel">
              <div><span className="section-kicker">06 / HOW I WORK</span><h2>From a problem<br />to a <span>repeatable solution.</span></h2><p>My preferred workflow keeps changes understandable and operationally safe.</p></div>
              <div className="approach-steps">
                <div><span>01</span><b>Understand</b><small>Requirements · constraints</small></div>
                <div><span>02</span><b>Design</b><small>Architecture · failure paths</small></div>
                <div><span>03</span><b>Automate</b><small>Version control · repeatability</small></div>
                <div><span>04</span><b>Validate</b><small>Tests · metrics · documentation</small></div>
              </div>
            </div>
          </section>

          <section id="contact" className="section-wrap contact-section">
            <span className="section-kicker">07 / CONTACT</span>
            <h2>Have a challenge<br />worth <span>automating?</span></h2>
            <p>I'm interested in opportunities across DevOps, cloud infrastructure, platform engineering and SRE.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:thenihanth@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/nihanth-sai-bandaru-689089229/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={14} /></a>
              <a className="button button-secondary" href="https://github.com/Nihanth-NS/PROJECTS" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={14} /></a>
            </div>
            <div className="contact-reminder"><CheckCircle2 size={16} /> Resume, certification and professional links are available above.</div>
          </section>
        </main>

        <footer className="site-footer">
          <a href="#home" className="brand"><span className="brand-mark">NS<span>.</span></span></a>
          <span>Designed with clarity. Built for reliability.</span>
          <a href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
          <span className="copyright">© {new Date().getFullYear()} Nihanth Sai</span>
        </footer>
      </>
    )
  }

  export default App
