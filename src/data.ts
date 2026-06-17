import { Project, Service, TimelineStep, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'kinetic-ai',
    title: 'KINETIX PLATFORM',
    category: 'AI TECH / SAAS PLATFORM',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#CDF564',
    description: 'Transforming complex algorithmic trade cycles into an intuitive, high-velocity responsive trading cockpit powered by custom predictive neural networks.',
    challenge: 'The client needed to visualize multi-millisecond transactional trades alongside predictive market flow patterns without visual fatigue or user latency. Existing solutions were cluttered, dry, and slow.',
    solution: 'We engineered a luxury-tier canvas engine overlay with sleek dark typography, custom procedural vector trends, and localized state caching. The result is an award-winning WebGL dashboard that feels more like an editorial art piece than a data monitor.',
    scope: ['UI/UX Architectural Strategy', 'Interactive Vector Graphics', 'React Canvas Optimizations', 'Custom Design Tokens', 'Frontend Engineering'],
    metrics: [
      { label: 'Execution Speed', value: '45ms' },
      { label: 'User Retention Boost', value: '+142%' },
      { label: 'Framer Rate', value: '120fps' }
    ]
  },
  {
    id: 'aura-skincare',
    title: 'AURA BIO-ORGANICS',
    category: 'E-COMMERCE / BRANDING',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#CDF564',
    description: 'A sensory digital flagship experience designed for a premium bio-tech skincare brand, leveraging fluid web layout animations and natural physics simulation.',
    challenge: 'AURA required a digital experience that could communicate physical scents, light textures, and luxurious skincare weight purely through screens and motion.',
    solution: 'We built a custom fluid container component that reacts dynamically to screen-scrapes and mouse movement. The purchase flow was embedded into a minimal horizontal checkout drawer, achieving unparalleled conversion.',
    scope: ['Sensory Brand Identity', 'Full E-commerce Flagship', 'Interaction Design', 'Liquid Shader Research', 'Conversion Rate Architecture'],
    metrics: [
      { label: 'Annual Conversion Boost', value: '4.8%' },
      { label: 'Average Session Duration', value: '5m 12s' },
      { label: 'Mobile Bounce Rate', value: '-38%' }
    ]
  },
  {
    id: 'vortex-real-estate',
    title: 'VORTEX SPATIAL',
    category: 'SPATIAL WEB / 3D WEB',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#CDF564',
    description: 'A highly sophisticated spatial portfolio showcasing luxury architectural properties via interactive 3D procedural environments and audio narrative layering.',
    challenge: 'Conventional real estate websites rely on static image galleries and rigid templates that dilute the premium value of luxury, high-value multi-million dollar properties.',
    solution: 'By blending oversized editorial typography with simulated depth perspective ratios and soundscapes, we created an active, slow-revelatory walkthrough that feels like a premium cinematic documentary.',
    scope: ['Creative Direction', 'WebGL Spatial Mapping', 'Procedural Lighting Engine', 'Sound Scoring', 'Web Performance Tuning'],
    metrics: [
      { label: 'Inquiries Increase', value: '310%' },
      { label: 'Customer Trust Score', value: '99%' },
      { label: 'Asset Load Speeds', value: '1.2s' }
    ]
  },
  {
    id: 'neo-glow-cyberwear',
    title: 'CYBERWEAR IDENTITY',
    category: 'BRAND SYSTEM / CAMPAIGN',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#CDF564',
    description: 'Rebranding an ultra-premium sustainable fashion line with a bold visual language that fuses biological fibers with neon cyberpunk typography markers.',
    challenge: 'The brand struggled to break free from traditional organic "eco-friendly" aesthetic tropes of green leaves and pastel hues, wanting instead to target a tech-forward urban audience.',
    solution: 'We crafted a hyper-contrast visual system using #0B0B0B deep slates, sharp metallic product frames, and bursts of high-intensity #CDF564 energetic citric. Physical garments contain embedded QR portals triggering customized AR experiences.',
    scope: ['Visual Rebranding', 'Physical Packaging Guidelines', 'Custom Typographic Sets', 'Interactive Web Campaign', 'Augmented Reality Filters'],
    metrics: [
      { label: 'Social Reach Growth', value: '620%' },
      { label: 'International Sales', value: '+84%' },
      { label: 'Brand Value Uplift', value: '2.5x' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    description: 'Crafting premium, luxurious corporate identities that command attention, foster authority, and capture cultural mindshare.',
    detailDescription: 'Our branding process is an exercise in editing. We look beneath the surface noise of temporary trends to excavate the eternal, premium, and distinctive attributes of your enterprise, translating them into cohesive graphic frameworks.',
    capabilities: ['Brand Positioning Strategy', 'Logo & Logotype Design', 'Premium Style guidelines', 'Sensory Identity System', 'Interactive Pitch Deck Design'],
    visualType: 'grid'
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX Design',
    description: 'Bespoke interface architectures that unite effortless user utilities with editorial page rhythm, white-space density, and visual flow.',
    detailDescription: 'Interfaces are conversation layers. We combine precise user-centered wireframing schemas with the bold, aesthetic grid-structures of classical luxury editorial print, producing web screens that are pleasant to traverse.',
    capabilities: ['User Flow Design Mapping', 'High-Fidelity UI Mockups', 'Interaction Micro-prototypes', 'Design System Architecture', 'Accessibility Audit (WCAG)'],
    visualType: 'sphere'
  },
  {
    id: 'web-dev',
    number: '03',
    title: 'Web Development',
    description: 'Engineered high-performance digital experiences utilizing clean TypeScript, fast Vite builds, lightweight frameworks, and native responsive loops.',
    detailDescription: 'A custom design only succeeds if it loads in milliseconds. We compose lightweight, pixel-perfect, highly responsive layout modules with zero runtime bloat, keeping your animations as fluid as water under high frame rates.',
    capabilities: ['Custom React App Setup', 'Vite & Tailwind Production builds', 'Dynamic Framer Motion Canvas', 'Web Performance Tuning', 'Search Engine Optimization (SEO)'],
    visualType: 'wave'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    description: 'Curating targeted creative activations and storytelling campaigns that resonate with luxury demographics and drive tangible actions.',
    detailDescription: 'Direct-response marketing often screams for attention; luxury marketing invites conversation. We write and deploy campaign architectures that respect the client’s taste while optimizing for high-quality retention.',
    capabilities: ['High-Involvement Copywriting', 'Conversion Funnel Strategy', 'A/B Multi-variant Experience Test', 'Social Presence Strategy', 'Aesthetic Asset Photography'],
    visualType: 'mesh'
  },
  {
    id: 'automation',
    number: '05',
    title: 'Automation',
    description: 'Streamlining complex, operational business workflows by creating robust server bridges, API loops, and automatic webhook synchronizers.',
    detailDescription: 'Human talent is scarce. We design robust background systems and pipelines that handle administrative, repeating data synchronization tasks, freeing up your team to focus strictly on creative execution.',
    capabilities: ['Zapier & Make System Pipelines', 'Workspace Calendar/Sheets Hooks', 'Database Data Synchronization', 'Automatic Invoice Workflows', 'Error Notification Webhooks'],
    visualType: 'dots'
  },
  {
    id: 'ai-solutions',
    number: '06',
    title: 'AI Solutions',
    description: 'Integrating advanced LLMs, semantic search tools, smart prompt workflows, and neural assistance into standard business procedures.',
    detailDescription: 'AI is a powerful booster for cognitive tasks. We deliver secure, tailored server-side Gemini neural pathways that categorize documents, automate customer queries, and conduct smart content syntheses.',
    capabilities: ['Gemini LLM Integrations', 'RAG Custom Vector Databases', 'Smart AI Copy Generation', 'Semantic Labeling Pipelines', 'Security & Consent Protocols'],
    visualType: 'helix'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'discover',
    phase: '01',
    title: 'Discover & Align',
    description: 'We immerse ourselves in your corporate ecosystem, researching target customer psychographics, competitor gaps, and cultural shifts to define the design problem.',
    duration: 'Week 1',
    deliverables: ['Competitive Landscape Report', 'Product Design Strategy Brief', 'Aesthetic Inspiration Moodboards']
  },
  {
    id: 'strategy',
    phase: '02',
    title: 'Strategy & Wireframe',
    description: 'Converting creative research into a strict, structural blueprint. We construct functional layout maps and visual typographic weights without early aesthetic distraction.',
    duration: 'Week 2-3',
    deliverables: ['Interactive UX Flows', 'Low-Fidelity Screen Schemas', 'Content Hierarchy & Sitemap']
  },
  {
    id: 'design',
    phase: '03',
    title: 'Design & Prototype',
    description: 'We dress the wireframe structures in luxury aesthetic layers, custom typography setups, high-fidelity images/shapes, and interactive micro-motions.',
    duration: 'Week 4-6',
    deliverables: ['High-Fidelity UI Screens', 'Interactive Motion Prototypes', 'Design Tokens & Component Kit']
  },
  {
    id: 'development',
    phase: '04',
    title: 'Development & Optimize',
    description: 'Our engineering unit converts visual prototypes into fast, fully compliant, and responsive code modules, prioritizing load speed and light DOM execution.',
    duration: 'Week 7-9',
    deliverables: ['Production-ready TypeScript App', 'Highly Responsive Mobile Views', 'Lighthouse Optimization (95+)']
  },
  {
    id: 'launch',
    phase: '05',
    title: 'Launch & Measure',
    description: 'We deploy the application securely to edge containers, execute full system verification, and initiate continuous tracking analytics to measure conversion metrics.',
    duration: 'Week 10',
    deliverables: ['Live App Deployment', 'System Training Session', 'Post-Launch Retention Analytics']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Alive Digitally elevated our brand into a class of its own. Their editorial eye and fast, beautiful web system unlocked an entirely new tier of international clients. They are masters of creative storytelling.',
    author: 'Helena Sterling',
    role: 'Creative Director',
    company: 'Sterling & Co.',
    projectCompleted: 'Visual Brand Identity & Flagship Web System'
  },
  {
    id: 'test-2',
    quote: 'They operate at the rare intersection of fine design and engineering excellence. The spatial virtual platform they created runs beautifully at high framing speeds, resulting in pre-sales that far exceeded our expectations.',
    author: 'Marcus Vance',
    role: 'VP of Development',
    company: 'Vance Spatial Holdings',
    projectCompleted: 'Vortex Spatial Walkthrough Platform'
  },
  {
    id: 'test-3',
    quote: 'Their AI automated solutions saved our operations over thirty hours weekly, while their custom web platform became our primary engine for client inquiries. Absolute professionals.',
    author: 'Renée Dubois',
    role: 'Chief of Operations',
    company: 'Cortex Global',
    projectCompleted: 'Operational Workflows & Custom Dashboard App'
  }
];

export const CLIENTS = [
  { id: 'c1', name: 'STERLING LUXURY' },
  { id: 'c2', name: 'VORTEX SPATIAL' },
  { id: 'c3', name: 'ZEPHYR LABS' },
  { id: 'c4', name: 'AURA BIO-ORGANIC' },
  { id: 'c5', name: 'KINETIX HOLDINGS' },
  { id: 'c6', name: 'ELEVATE STUDIO' },
  { id: 'c7', name: 'OASIS AUTOMATIONS' },
  { id: 'c8', name: 'SYNAPSE AI' }
];
