// =========================================================================
// ORBIT ARTICLE REPOSITORY WITH MODULAR COMPONENT BLOCKS
// Schema supports: layoutVariant ("feature-drop" | "editorial" | "changelog")
// Blocks: lead-paragraph, section-heading, feature-callout, showcase-grid,
//         related-article-card, stat-highlight, pull-quote, spec-grid, changelog-list
// =========================================================================

window.ORBIT_ARTICLES = {
  // =========================================================================
  // 1. FEATURE DROP LAYOUTS ("feature-drop": 920px width, 2/3-col showcases, related cards)
  // =========================================================================
  'orbit-november-drop': {
    slug: 'orbit-november-drop',
    title: 'Orbit 2.4: Smart Reflection Prompts and Custom Goal Widgets',
    deck: 'Explore the latest Orbit updates, including voice-to-thought prompt structuring, interactive home screen widgets, and real-time velocity delta telemetry.',
    date: 'Nov 24, 2026',
    readTime: '4 min read',
    author: 'Mayra Fajardo',
    role: 'Product Marketing Manager',
    category: 'Products & Platforms',
    subcategory: 'Core Platform',
    layoutVariant: 'feature-drop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Today we are introducing Orbit 2.4—our biggest feature drop yet. Grounded in behavioral telemetry and designed for zero-friction execution, this release brings adaptive reflection intelligence, interactive home screen widgets, and instantaneous cross-platform velocity synchronization.'
      },
      {
        type: 'section-heading',
        text: 'Use Orbit with AI Reflection Intelligence'
      },
      {
        type: 'feature-callout',
        lead: 'Polish your check-ins with Smart Prompts',
        text: 'Voice-to-thought logging removes hesitation and structures messy verbal reflections into clear daily ground truth in under 45 seconds.'
      },
      {
        type: 'showcase-grid',
        columns: 2,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
            alt: 'Raw voice input screen',
            caption: '1. Raw voice or quick unedited thought input'
          },
          {
            src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            alt: 'Structured reflection summary',
            caption: '2. Auto-structured ground truth with +12% delta'
          }
        ]
      },
      {
        type: 'feature-callout',
        lead: 'Create personalized goal widgets',
        text: 'Pin custom countdowns, streak trackers, or focus rings directly onto your iOS or Android workspace home screen for glanceable accountability.'
      },
      {
        type: 'showcase-grid',
        columns: 3,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
            alt: 'Describe your widget',
            caption: 'Step 1: Choose telemetry metric'
          },
          {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
            alt: 'Preview live metrics',
            caption: 'Step 2: Preview live vector gauge'
          },
          {
            src: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80',
            alt: 'Pin to home screen',
            caption: 'Step 3: Pin to device home screen'
          }
        ]
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'The 45-Second Daily Check-in: Micro-Reflections with Macro Impact',
        summary: 'Why spending 45 seconds answering one honest question creates more compounding momentum than hours of journaling.',
        href: 'article.html?id=daily-checkins',
        thumbnail: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80'
      },
      {
        type: 'section-heading',
        text: 'Technical Specifications & Availability'
      },
      {
        type: 'spec-grid',
        items: [
          { label: 'PLATFORM SUPPORT', value: 'iOS 17+, Android 14+, Web', desc: 'Full offline local caching with instant background sync' },
          { label: 'AI ENGINE', value: 'Orbit Copilot Telemetry v2', desc: 'On-device natural language classification for reflections' },
          { label: 'DATA SECURITY', value: 'Zero-Knowledge AES-256', desc: 'End-to-end encrypted reflection history and milestones' },
          { label: 'INTEGRATIONS', value: 'Google Sheets, Webhooks, GitHub', desc: 'Real-time two-way data streaming without API keys' }
        ]
      }
    ]
  },

  'orbit-score': {
    slug: 'orbit-score',
    title: 'The Orbit Score (0-100): The Single Truth Metric for Real Progress',
    deck: 'How a single intuitive composite number replaces dozens of messy charts, reflecting your real-time momentum and milestone health.',
    date: 'Nov 23, 2026',
    readTime: '4 min read',
    author: 'Metrics & Analytics Team',
    role: 'Core Platform',
    category: 'Products & Platforms',
    subcategory: 'Core Platform',
    layoutVariant: 'feature-drop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Credit scores tell lenders your financial trustworthiness in a single digit. Fitness trackers calculate a single sleep score. But until now, personal growth and professional ambition lacked a unified metric for real momentum.'
      },
      {
        type: 'section-heading',
        text: 'One Number to Understand Your Trajectory'
      },
      {
        type: 'feature-callout',
        lead: 'Mathematical composite of direction and effort',
        text: 'The Orbit Score evaluates three interdependent dimensions: 14-day consistency percentage, milestone completion velocity, and the acceleration rate of change.'
      },
      {
        type: 'showcase-grid',
        columns: 2,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80',
            alt: 'Before: Fragmented messy task checklists',
            caption: 'Before Orbit: Fragmented, guilt-inducing task checklists'
          },
          {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            alt: 'After: Unified Orbit Score (0-100)',
            caption: 'After Orbit: One indisputable vector truth metric (78/100)'
          }
        ]
      },
      {
        type: 'stat-highlight',
        value: '78',
        description: 'Optimal Compounding Zone (70–85). Indicates disciplined execution without cognitive fatigue or burnout risk.'
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'Weekly Velocity Matrix: Visualizing Directional Alignment',
        summary: 'Learn how the weekly effort distribution maps directly to 14-day milestones.',
        href: 'article.html?id=weekly-velocity-matrix',
        thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 2. EDITORIAL ESSAY LAYOUTS ("editorial": Narrow 680px column, drop cap, pull-quotes, stat cards)
  // =========================================================================
  'daily-checkins': {
    slug: 'daily-checkins',
    title: 'The 45-Second Daily Check-in: Micro-Reflections with Macro Impact',
    deck: 'Why spending 45 seconds answering one honest question creates more compounding momentum than hours of journaling or task-managing.',
    date: 'Nov 17, 2026',
    readTime: '3 min read',
    author: 'Human Interface Team',
    role: 'Interaction Design',
    category: 'Products & Platforms',
    subcategory: 'Core Platform',
    layoutVariant: 'editorial',
    heroImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Most productivity systems collapse under their own maintenance cost. When logging your day requires opening four apps, color-coding twelve tags, and answering extensive mood questionnaires, consistency dies by week two.'
      },
      {
        type: 'feature-callout',
        lead: 'The Frictionless Reflection Protocol',
        text: 'Orbit simplifies daily reflection down to its irreducible core: 45 seconds, one question, one honest answer. No red notification badges, no social pressure, and no guilt trips.'
      },
      {
        type: 'stat-highlight',
        value: '45s',
        description: 'The median time required to answer one honest daily prompt—keeping cognitive friction low enough to sustain a 90-day streak.'
      },
      {
        type: 'pull-quote',
        text: 'Clarity does not come from writing more words; it comes from confronting one truthful metric every single day.'
      },
      {
        type: 'feature-callout',
        lead: 'Designed for Mobile Flow',
        text: 'Whether you are on the subway or winding down for sleep, a single tap lets you voice or type your ground truth. Orbit records the trajectory instantly.'
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'Goal Consistency Science: Compounding Velocity Beats Motivation',
        summary: 'The cognitive psychology and behavioral neurobiology behind small, relentless daily increments versus sporadic heroic sprints.',
        href: 'article.html?id=goal-consistency-science',
        thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  'why-most-goals-fail': {
    slug: 'why-most-goals-fail',
    title: 'Why Most Goals Fail: The Great Visibility Problem',
    deck: "Every year millions of people set ambitious goals. Yet most never become reality. The problem isn't motivation. The problem is visibility.",
    date: 'Nov 20, 2026',
    readTime: '4 min read',
    author: 'Orbit Philosophy Team',
    role: 'Core Movement Series',
    category: 'Company News',
    subcategory: 'Foundations',
    layoutVariant: 'editorial',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Every year millions of ambitious humans purchase courses, download habit tracking apps, and fill out elaborate task templates. Yet within weeks, the vast majority quietly abandon their pursuits.'
      },
      {
        type: 'pull-quote',
        text: 'People track tasks. They track habits. They track streaks. But they rarely track real progress.'
      },
      {
        type: 'feature-callout',
        lead: 'Tracking Trajectory Instead of Checklists',
        text: 'When you measure directional velocity rather than task volume, your subconscious stops obsessing over trivial chores and stays locked on your true north.'
      },
      {
        type: 'stat-highlight',
        value: '92%',
        description: 'The failure rate of traditional New Year’s resolutions—not due to human weakness, but due to an interface defect in how goals are represented.'
      },
      {
        type: 'feature-callout',
        lead: 'The Ground Truth Equation',
        text: 'Progress is not about what you planned or hoped to do. Progress is strictly about what actually happened. Direction beats busyness every time.'
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'The Orbit Manifesto: People Don’t Lack Ambition, They Lack Clarity',
        summary: 'Read the foundational principles powering the movement around measurable personal progress.',
        href: 'article.html?id=orbit-manifesto',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  'problem-with-motivation': {
    slug: 'problem-with-motivation',
    title: 'The Problem With Motivation: Why Consistency Always Wins',
    deck: 'Motivation feels powerful, but motivation is temporary. Consistency beats motivation. Systems beat motivation. Data beats motivation.',
    date: 'Nov 18, 2026',
    readTime: '3 min read',
    author: 'Orbit Consistency Systems',
    role: 'Execution Systems',
    category: 'Company News',
    subcategory: 'Foundations',
    layoutVariant: 'editorial',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Motivation feels exhilarating when it strikes. But relying on motivation to build your life’s work is like relying on lightning to power your electrical grid.'
      },
      {
        type: 'stat-highlight',
        value: '37x',
        description: 'The mathematical multiplier of compounding 1% improvement each day over a single calendar year.'
      },
      {
        type: 'pull-quote',
        text: 'Amateurs wait for inspiration. Professionals rely on compounding consistency.'
      },
      {
        type: 'feature-callout',
        lead: 'Ask the right daily question',
        text: 'Instead of asking: "How motivated do I feel today?", Orbit asks: "What progress did you make today?" Because reality matters more than mood.'
      }
    ]
  },

  // =========================================================================
  // 3. CHANGELOG & TECHNICAL RELEASE LAYOUTS ("changelog": Compact header, timeline, specs)
  // =========================================================================
  'orbit-changelog-1-0': {
    slug: 'orbit-changelog-1-0',
    title: 'Orbit 1.0 Release Notes: The Telemetry Engine Debuts',
    deck: 'Official release log covering the rollout of the Orbit Score, SkillGPS knowledge graphs, and live Google Sheets bidirectional sync.',
    date: 'Nov 24, 2026',
    readTime: '2 min read',
    author: 'Orbit Release Engineering',
    role: 'Core Systems',
    category: 'Products & Platforms',
    subcategory: 'Changelog',
    layoutVariant: 'changelog',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Orbit 1.0 is now live across Web and Mobile. Here is the full breakdown of new systems, architectural improvements, and bug fixes.'
      },
      {
        type: 'changelog-list',
        items: [
          {
            badge: 'v1.0.4 • NEW FEATURE',
            title: 'Weekly Velocity Matrix Rendering',
            description: 'Interactive canvas visualizer displaying 7-day vector alignment against 14-day milestone deliverables.'
          },
          {
            badge: 'v1.0.3 • ARCHITECTURE',
            title: 'Sub-Second Google Sheets Synchronization',
            description: 'Bidirectional sync pipeline streaming reflections and Orbit Score updates directly into user spreadsheets with zero lag.'
          },
          {
            badge: 'v1.0.2 • MOBILE',
            title: 'Material You Dynamic Theme Extraction',
            description: 'Android app automatically extracts ambient colors from device wallpapers for a personalized telemetry experience.'
          },
          {
            badge: 'v1.0.1 • PERFORMANCE',
            title: 'Offline-First SQLite Cache',
            description: 'Check-ins recorded during airplane mode are encrypted locally and automatically synchronized upon reconnecting.'
          }
        ]
      },
      {
        type: 'spec-grid',
        items: [
          { label: 'BUNDLE SIZE', value: '< 2.4 MB', desc: 'Ultra-lightweight footprint with zero telemetry bloat' },
          { label: 'BATTERY IMPACT', value: '< 0.2% / day', desc: 'Zero background battery drain or polling wake-locks' },
          { label: 'SYNC LATENCY', value: '42 ms', desc: 'Global edge replication via Cloudflare Workers' },
          { label: 'SECURITY', value: 'SOC-2 Ready', desc: 'End-to-end encryption with client-side keys' }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. BACKWARD COMPATIBLE DEFINITIONS FOR ALL OTHER ARTICLES
  // =========================================================================
  'orbit-copilot-ai': {
    slug: 'orbit-copilot-ai',
    title: 'Orbit Copilot AI: Your Daily Trajectory Partner',
    deck: 'An intelligent companion designed not to flatter you, but to keep your daily decisions aligned with your long-term ambitions.',
    date: 'Nov 18, 2026',
    readTime: '4 min read',
    author: 'Orbit Product Team',
    role: 'Copilot Engineering',
    category: 'Innovation & AI',
    subcategory: 'Products',
    layoutVariant: 'feature-drop',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Most AI assistants are reactive yes-men: they generate boilerplate emails, summarize dense PDFs, and tell you what you want to hear. Orbit Copilot is proactive, contextual, and singularly obsessed with your goals.'
      },
      {
        type: 'feature-callout',
        lead: 'An AI that asks the hard questions',
        text: 'At the end of each day, Copilot assesses your 45-second check-in and responds with razor-sharp telemetry insight: "You spent 4 hours tweaking CSS, but your milestone is backend API completion. Realign tomorrow."'
      },
      {
        type: 'showcase-grid',
        columns: 2,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
            caption: 'Copilot analyzes check-in sentiment & velocity delta'
          },
          {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            caption: 'Proactive course-correction recommendations'
          }
        ]
      },
      {
        type: 'pull-quote',
        text: 'Tough love backed by telemetry. Orbit Copilot is the accountability partner you always needed.'
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'Streak Telemetry: Why Daily Action Must Connect to True North',
        summary: 'Why counting arbitrary streak numbers often leads to fake progress.',
        href: 'article.html?id=streak-telemetry',
        thumbnail: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  'skillgps-roadmaps': {
    slug: 'skillgps-roadmaps',
    title: 'SkillGPS Roadmaps: Autonomous Milestone Decomposition',
    deck: 'How to break down multi-month ambitions into discrete 14-day verifiable milestones that guarantee measurable execution.',
    date: 'Nov 16, 2026',
    readTime: '4 min read',
    author: 'Curriculum Systems',
    role: 'Product Guidance',
    category: 'Products & Platforms',
    subcategory: 'Guidance & Skills',
    layoutVariant: 'feature-drop',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Saying "I want to become an AI engineer" is paralyzing. Where do you start? What is step 1? What is step 50? SkillGPS Roadmaps decomposes massive ambitions into sequential, verifiable milestones.'
      },
      {
        type: 'feature-callout',
        lead: 'Directed Acyclic Knowledge Graphs',
        text: 'SkillGPS structures any domain into prerequisite pathways so you never have to wonder what to study next.'
      },
      {
        type: 'showcase-grid',
        columns: 2,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
            caption: '1. Skill graph decomposition with prerequisite nodes'
          },
          {
            src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
            caption: '2. 14-day proof milestones synchronized with Orbit Score'
          }
        ]
      },
      {
        type: 'pull-quote',
        text: 'Big goals inspire. Small milestones execute.'
      }
    ]
  },

  'orbit-manifesto': {
    slug: 'orbit-manifesto',
    title: 'The Orbit Manifesto: People Don’t Lack Ambition, They Lack Clarity',
    deck: 'We believe progress should be measurable. We believe goals deserve accountability. We believe consistency beats motivation.',
    date: 'Nov 24, 2026',
    readTime: '3 min read',
    author: 'Orbit Founding Team',
    role: 'Core Declaration',
    category: 'Company News',
    subcategory: 'Foundations',
    layoutVariant: 'editorial',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Every person who sets an ambitious target possesses the raw will to achieve it. The bottleneck is rarely ambition. The bottleneck is foggy visibility.'
      },
      {
        type: 'pull-quote',
        text: 'We believe people don’t lack ambition. They lack clarity.'
      },
      {
        type: 'feature-callout',
        lead: 'Our Five Immutable Tenets',
        text: '1. Direction over speed.<br>2. Ground truth over wishful thinking.<br>3. 45-second friction over elaborate dashboards.<br>4. User empowerment over app retention.<br>5. Everything revolves around your goals.'
      },
      {
        type: 'stat-highlight',
        value: '100%',
        description: 'Dedicated to measurable progress. Zero algorithmic feeds, zero vanity likes, zero distraction.'
      }
    ]
  },

  'orbit-deepmind-engine': {
    slug: 'orbit-deepmind-engine',
    title: 'Orbit DeepMind Engine: Trajectory Prediction Models',
    deck: 'Applying sequence-to-sequence neural architectures to detect micro-deviations in human execution before goal abandonment occurs.',
    date: 'Nov 24, 2026',
    readTime: '5 min read',
    author: 'DeepMind Research Fellow & Orbit Team',
    role: 'AI Architecture',
    category: 'Innovation & AI',
    subcategory: 'Models & Research',
    layoutVariant: 'feature-drop',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Most goal trackers fail because they only report the past: a missed streak, an uncompleted checkbox, an empty calendar slot. By then, emotional disengagement has already taken root. The Orbit DeepMind Engine evaluates multi-variable behavioral telemetry to forecast drop-off risks up to 14 days in advance.'
      },
      {
        type: 'section-heading',
        text: 'Predictive Trajectory Vectors'
      },
      {
        type: 'feature-callout',
        lead: 'Forecasting Abandonment Risk 14 Days Early',
        text: 'By measuring subtle shifts in daily reflection response latency and linguistic sentiment, our models recognize the subtle precursors of burnout and guide real-time scope adjustments.'
      },
      {
        type: 'showcase-grid',
        columns: 2,
        items: [
          {
            src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
            alt: 'Neural Trajectory Model',
            caption: '1. Neural trajectory mapping with velocity delta indicators'
          },
          {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            alt: 'Automated Scope Course Correction',
            caption: '2. Proactive milestone course correction suggested before abandonment'
          }
        ]
      },
      {
        type: 'stat-highlight',
        stat: '14 Days',
        label: 'Early Abandonment Warning',
        description: 'Predictive latency window allowing individuals to recalibrate workload before cognitive fatigue sets in.'
      },
      {
        type: 'pull-quote',
        text: 'Traditional trackers tell you when you failed. The Orbit DeepMind Engine course-corrects you before you stall.'
      },
      {
        type: 'related-article-card',
        eyebrow: 'Related Article',
        title: 'The Orbit Score (0-100): The Single Truth Metric for Real Progress',
        summary: 'How an intuitive composite metric mirrors your daily trajectory without noisy checklists.',
        href: 'article.html?id=orbit-score',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  'goal-telemetry-models': {
    slug: 'goal-telemetry-models',
    title: 'Goal Telemetry Models: Transforming Intent into Vectors',
    deck: 'How mathematical vector fields allow individuals to quantify daily effort against macro goals without manual spreadsheet gymnastics.',
    date: 'Nov 23, 2026',
    readTime: '4 min read',
    author: 'Diego Rivas & Pavan Kumar',
    role: 'Telemetry Design',
    category: 'Innovation & AI',
    subcategory: 'Models & Research',
    layoutVariant: 'editorial',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'lead-paragraph',
        text: 'Human beings are notoriously poor at estimating their own rate of progress. We overestimate what we can do in a day and underestimate what compounds over six months. Goal Telemetry mathematically bridges this gap.'
      },
      {
        type: 'pull-quote',
        text: 'Progress = Velocity × Directional Alignment. Checking off ten irrelevant chores yields zero forward momentum.'
      },
      {
        type: 'stat-highlight',
        stat: '3.4x',
        label: 'Milestone Arrival Confidence',
        description: 'Individuals using objective vector telemetry reach targets 3.4 times faster than those relying on subjective to-do lists.'
      },
      {
        type: 'feature-callout',
        lead: 'Eliminating Spreadsheet Fatigue',
        text: 'Instead of manually logging rows in complex spreadsheets, Orbit computes your trajectory vectors automatically from 45-second daily reflections.'
      }
    ]
  }
};
