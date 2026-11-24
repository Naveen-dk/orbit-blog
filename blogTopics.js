// Browser runtime config for Orbit blog topics
window.BLOG_TOPICS = {
  // =========================================================================
  // VARIANT A: FLAGSHIP / CATEGORY HUB LAYOUTS (Hero + Chronological Feed)
  // =========================================================================
  'innovation-ai': {
    slug: 'innovation-ai',
    title: 'Innovation & AI',
    subtitle: 'How Orbit applies telemetry models and AI to human consistency.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' }
    ],
    variant: 'hub',
    featuredPostSlug: 'innovation-ai-hub',
    filterTag: 'Innovation & AI'
  },
  'products-platforms': {
    slug: 'products-platforms',
    title: 'Products & Platforms',
    subtitle: 'Your goal telemetry and execution partner, grounded in measurable progress.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' }
    ],
    variant: 'hub',
    featuredPostSlug: 'orbit-november-drop',
    filterTag: 'Products & Platforms'
  },
  'company-news': {
    slug: 'company-news',
    title: 'Company News',
    subtitle: 'Updates, philosophy, building in public, and the team behind Orbit.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' }
    ],
    variant: 'hub',
    featuredPostSlug: 'why-orbit-exists',
    filterTag: 'Company News'
  },
  'models-research': {
    slug: 'models-research',
    title: 'Models & Research',
    subtitle: 'Neural architectures, behavioral telemetry, and predictive algorithms.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Models & Research', href: 'topic.html?slug=models-research' }
    ],
    variant: 'hub',
    featuredPostSlug: 'orbit-labs',
    filterTag: 'Models & Research'
  },
  'core-platform': {
    slug: 'core-platform',
    title: 'Core Platform',
    subtitle: 'Inside the daily systems powering momentum and measurable progress.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Core Platform', href: 'topic.html?slug=core-platform' }
    ],
    variant: 'hub',
    featuredPostSlug: 'orbit-score',
    filterTag: 'Core Platform'
  },
  'guidance-skills': {
    slug: 'guidance-skills',
    title: 'Guidance & Skills',
    subtitle: 'Autonomous roadmap decomposition and actionable progression trees.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Guidance & Skills', href: 'topic.html?slug=guidance-skills' }
    ],
    variant: 'hub',
    featuredPostSlug: 'skillgps-roadmaps',
    filterTag: 'Guidance & Skills'
  },
  'infrastructure-cloud': {
    slug: 'infrastructure-cloud',
    title: 'Infrastructure & Cloud',
    subtitle: 'Real-time state synchronization, encrypted telemetry, and developer webhooks.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Infrastructure & Cloud', href: 'topic.html?slug=infrastructure-cloud' }
    ],
    variant: 'hub',
    featuredPostSlug: 'orbit-cloud-sync',
    filterTag: 'Infrastructure & Cloud'
  },
  'technology': {
    slug: 'technology',
    title: 'Technology',
    subtitle: 'Feedback loops, cognitive load minimization, and privacy-first engineering.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Technology', href: 'topic.html?slug=technology' }
    ],
    variant: 'hub',
    featuredPostSlug: 'privacy-zero-distraction',
    filterTag: 'Technology'
  },
  'devices': {
    slug: 'devices',
    title: 'Orbit Devices',
    subtitle: 'Updates about Orbit Web, Orbit iOS, Orbit Android, and ambient hardware.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Devices', href: 'topic.html?slug=devices' }
    ],
    variant: 'hub',
    featuredPostSlug: 'web-dashboard',
    filterTag: 'Devices'
  },
  'foundations': {
    slug: 'foundations',
    title: 'Foundations',
    subtitle: 'The philosophy, convictions, and building blocks of the Orbit movement.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Foundations', href: 'topic.html?slug=foundations' }
    ],
    variant: 'hub',
    featuredPostSlug: 'orbit-manifesto',
    filterTag: 'Foundations'
  },
  'movement-people': {
    slug: 'movement-people',
    title: 'Movement & People',
    subtitle: 'Early adopter cohorts, community spotlights, and launch roadmaps.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Movement & People', href: 'topic.html?slug=movement-people' }
    ],
    variant: 'hub',
    featuredPostSlug: 'early-adopter-cohort',
    filterTag: 'Movement & People'
  },
  'media-research': {
    slug: 'media-research',
    title: 'Media & Research',
    subtitle: 'Goal science whitepapers, brand assets, and cultural analysis.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Media & Research', href: 'topic.html?slug=media-research' }
    ],
    variant: 'hub',
    featuredPostSlug: 'goal-science-whitepaper',
    filterTag: 'Media & Research'
  },

  // =========================================================================
  // VARIANT B: SUB-PRODUCT / LEAF TOPIC LAYOUTS (No hero — Immediate feed)
  // =========================================================================
  'orbit-copilot-ai': {
    slug: 'orbit-copilot-ai',
    title: 'Orbit Copilot AI',
    subtitle: 'The latest updates, guides, and intelligence enhancements for Orbit Copilot AI.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Products', href: 'topic.html?slug=products-platforms' },
      { label: 'Orbit Copilot AI', href: 'topic.html?slug=orbit-copilot-ai' }
    ],
    variant: 'subtopic',
    filterTag: 'Orbit Copilot AI'
  },
  'daily-checkins': {
    slug: 'daily-checkins',
    title: '45-Second Daily Check-in',
    subtitle: 'The latest insights on frictionless ground truth recording and micro-reflection.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Core Platform', href: 'topic.html?slug=core-platform' },
      { label: '45s Daily Check-in', href: 'topic.html?slug=daily-checkins' }
    ],
    variant: 'subtopic',
    filterTag: '45s Daily Check-in'
  },
  'skillgps-roadmaps': {
    slug: 'skillgps-roadmaps',
    title: 'SkillGPS Roadmaps',
    subtitle: 'The latest news on milestone decomposition, knowledge graphs, and adaptive learning paths.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Guidance & Skills', href: 'topic.html?slug=guidance-skills' },
      { label: 'SkillGPS Roadmaps', href: 'topic.html?slug=skillgps-roadmaps' }
    ],
    variant: 'subtopic',
    filterTag: 'SkillGPS Roadmaps'
  },
  'orbit-score': {
    slug: 'orbit-score',
    title: 'Orbit Score (0-100)',
    subtitle: 'The single truth metric quantifying daily momentum, velocity deltas, and consistency.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Core Platform', href: 'topic.html?slug=core-platform' },
      { label: 'Orbit Score', href: 'topic.html?slug=orbit-score' }
    ],
    variant: 'subtopic',
    filterTag: 'Orbit Score'
  },
  'weekly-velocity-matrix': {
    slug: 'weekly-velocity-matrix',
    title: 'Weekly Velocity Matrix',
    subtitle: 'Directional telemetry mapping weekly effort directly to milestone advancement.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Core Platform', href: 'topic.html?slug=core-platform' },
      { label: 'Weekly Velocity Matrix', href: 'topic.html?slug=weekly-velocity-matrix' }
    ],
    variant: 'subtopic',
    filterTag: 'Weekly Velocity Matrix'
  },
  'streak-telemetry': {
    slug: 'streak-telemetry',
    title: 'Streak Telemetry',
    subtitle: 'Why counting arbitrary streak numbers leads to fake progress and how Orbit tracks true momentum.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Products', href: 'topic.html?slug=products-platforms' },
      { label: 'Streak Telemetry', href: 'topic.html?slug=streak-telemetry' }
    ],
    variant: 'subtopic',
    filterTag: 'Streak Telemetry'
  },
  'orbit-cloud-sync': {
    slug: 'orbit-cloud-sync',
    title: 'Orbit Cloud Sync',
    subtitle: 'Zero-latency synchronization architecture keeping your web dashboard and mobile app aligned.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Infrastructure & Cloud', href: 'topic.html?slug=infrastructure-cloud' },
      { label: 'Orbit Cloud Sync', href: 'topic.html?slug=orbit-cloud-sync' }
    ],
    variant: 'subtopic',
    filterTag: 'Orbit Cloud Sync'
  },
  'developer-webhooks': {
    slug: 'developer-webhooks',
    title: 'Developer Webhooks',
    subtitle: 'Integrate Orbit goal telemetry directly into GitHub, Slack, Notion, and builder pipelines.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Infrastructure & Cloud', href: 'topic.html?slug=infrastructure-cloud' },
      { label: 'Developer Webhooks', href: 'topic.html?slug=developer-webhooks' }
    ],
    variant: 'subtopic',
    filterTag: 'Developer Webhooks'
  },
  'privacy-zero-distraction': {
    slug: 'privacy-zero-distraction',
    title: 'Privacy & Zero-Distraction',
    subtitle: 'Engineered for deep flow without notifications, algorithms, or addictive gamification.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Technology', href: 'topic.html?slug=technology' },
      { label: 'Privacy & Zero-Distraction', href: 'topic.html?slug=privacy-zero-distraction' }
    ],
    variant: 'subtopic',
    filterTag: 'Privacy & Zero-Distraction'
  },
  'goal-consistency-science': {
    slug: 'goal-consistency-science',
    title: 'Goal Consistency Science',
    subtitle: 'The cognitive psychology and behavioral neurobiology behind compounding consistency.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Technology', href: 'topic.html?slug=technology' },
      { label: 'Goal Consistency Science', href: 'topic.html?slug=goal-consistency-science' }
    ],
    variant: 'subtopic',
    filterTag: 'Goal Consistency Science'
  },
  'feedback-architecture': {
    slug: 'feedback-architecture',
    title: 'Feedback Architecture',
    subtitle: 'Closing the cybernetic loop between daily actions and long-term milestones.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Technology', href: 'topic.html?slug=technology' },
      { label: 'Feedback Architecture', href: 'topic.html?slug=feedback-architecture' }
    ],
    variant: 'subtopic',
    filterTag: 'Feedback Architecture'
  },
  'milestone-decomposition': {
    slug: 'milestone-decomposition',
    title: 'Milestone Decomposition',
    subtitle: 'Frameworks for shrinking intimidating lifetime ambitions into lightweight two-week checkpoints.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Guidance & Skills', href: 'topic.html?slug=guidance-skills' },
      { label: 'Milestone Decomposition', href: 'topic.html?slug=milestone-decomposition' }
    ],
    variant: 'subtopic',
    filterTag: 'Milestone Decomposition'
  },
  'accountability-loops': {
    slug: 'accountability-loops',
    title: 'Accountability Loops',
    subtitle: 'Peer verification and telemetry check-ins that keep ambitious builders on track.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Guidance & Skills', href: 'topic.html?slug=guidance-skills' },
      { label: 'Accountability Loops', href: 'topic.html?slug=accountability-loops' }
    ],
    variant: 'subtopic',
    filterTag: 'Accountability Loops'
  },
  'cloud-backups': {
    slug: 'cloud-backups',
    title: 'Cloud Backups & Data Portability',
    subtitle: 'Automated encrypted backups, JSON export, and complete user data ownership.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Data & Sync', href: 'topic.html?slug=cloud-backups' },
      { label: 'Cloud Backups', href: 'topic.html?slug=cloud-backups' }
    ],
    variant: 'subtopic',
    filterTag: 'Cloud Backups'
  },
  'export-csv-json': {
    slug: 'export-csv-json',
    title: 'Export CSV / JSON',
    subtitle: 'Own your data. Export check-in logs, velocity scores, and milestone graphs anytime.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Data & Sync', href: 'topic.html?slug=export-csv-json' },
      { label: 'Export Data', href: 'topic.html?slug=export-csv-json' }
    ],
    variant: 'subtopic',
    filterTag: 'Export CSV / JSON'
  },
  'web-dashboard': {
    slug: 'web-dashboard',
    title: 'Orbit Web Dashboard',
    subtitle: 'The desktop telemetry command center for deep goal reviews and weekly planning.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Devices', href: 'topic.html?slug=devices' },
      { label: 'Web Dashboard', href: 'topic.html?slug=web-dashboard' }
    ],
    variant: 'subtopic',
    filterTag: 'Web Dashboard'
  },
  'ios-native-preview': {
    slug: 'ios-native-preview',
    title: 'iOS Native Preview',
    subtitle: 'Lock screen widgets, Siri Shortcuts, and haptic 45-second check-ins for iPhone.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Devices', href: 'topic.html?slug=devices' },
      { label: 'iOS Native', href: 'topic.html?slug=ios-native-preview' }
    ],
    variant: 'subtopic',
    filterTag: 'iOS Native Preview'
  },
  'android-app-preview': {
    slug: 'android-app-preview',
    title: 'Android App Preview',
    subtitle: 'Material You dynamic theming, home screen glanceable widgets, and offline reflection.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Devices', href: 'topic.html?slug=devices' },
      { label: 'Android Preview', href: 'topic.html?slug=android-app-preview' }
    ],
    variant: 'subtopic',
    filterTag: 'Android App Preview'
  },
  'early-adopter-cohort': {
    slug: 'early-adopter-cohort',
    title: 'Early Adopter Cohort',
    subtitle: 'Stories and feedback from the first 500 builders refining Orbit prior to global launch.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Movement & People', href: 'topic.html?slug=movement-people' },
      { label: 'Early Adopters', href: 'topic.html?slug=early-adopter-cohort' }
    ],
    variant: 'subtopic',
    filterTag: 'Early Adopter Cohort'
  },
  'product-hunt-launch': {
    slug: 'product-hunt-launch',
    title: 'Product Hunt Launch',
    subtitle: 'Preparation, milestones, and launch-day challenges for the Orbit 1.0 debut.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Movement & People', href: 'topic.html?slug=movement-people' },
      { label: 'Product Hunt', href: 'topic.html?slug=product-hunt-launch' }
    ],
    variant: 'subtopic',
    filterTag: 'Product Hunt Launch'
  },
  'founding-principles': {
    slug: 'founding-principles',
    title: 'Founding Principles',
    subtitle: 'The five core tenets that guide every engineering and product decision at Orbit.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Movement & People', href: 'topic.html?slug=movement-people' },
      { label: 'Founding Principles', href: 'topic.html?slug=founding-principles' }
    ],
    variant: 'subtopic',
    filterTag: 'Founding Principles'
  },
  'productivity-theater-trap': {
    slug: 'productivity-theater-trap',
    title: 'The Productivity Theater Trap',
    subtitle: 'Why spending hours organizing Notion boards steals your progress.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Media & Research', href: 'topic.html?slug=media-research' },
      { label: 'Productivity Theater', href: 'topic.html?slug=productivity-theater-trap' }
    ],
    variant: 'subtopic',
    filterTag: 'Productivity Theater Trap'
  },
  'orbit-community': {
    slug: 'orbit-community',
    title: 'Orbit Community',
    subtitle: 'Connect with thousands of builders on X, GitHub, and our live public response sheets.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Company News', href: 'topic.html?slug=company-news' },
      { label: 'Connect', href: 'topic.html?slug=orbit-community' }
    ],
    variant: 'subtopic',
    filterTag: 'Orbit Community'
  },

  // =========================================================================
  // VARIANT C: ROADMAP PREVIEW (Coming Soon Items)
  // =========================================================================
  'orbit-deepmind-engine': {
    slug: 'orbit-deepmind-engine',
    title: 'Orbit DeepMind Engine',
    subtitle: 'Sequence-to-sequence neural architectures predicting execution drift 14 days before drop-off occurs.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Models & Research', href: 'topic.html?slug=models-research' },
      { label: 'DeepMind Engine (Preview)', href: 'topic.html?slug=orbit-deepmind-engine' }
    ],
    variant: 'roadmap-preview',
    filterTag: 'Models & Research',
    roadmap: {
      version: 'Orbit 2.0 Alpha',
      targetQuarter: 'Q2 2027',
      phase: 'Research Alpha',
      fullPaperUrl: 'research.html',
      architectureSummary: 'Multi-variable attention network processing sentiment embeddings, velocity gradients, and inter-reflection intervals to forecast cognitive fatigue.',
      keyCapabilities: [
        'Sequence-to-sequence milestone deviation prediction',
        '14-day early warning intervention protocol',
        'Adaptive scope reduction recommendations via Orbit Copilot',
        'Multi-agent peer trajectory benchmarks'
      ]
    }
  },
  'goal-telemetry-models': {
    slug: 'goal-telemetry-models',
    title: 'Goal Telemetry Models',
    subtitle: 'Mathematical vector fields translating qualitative intent into measurable velocity vectors without manual logging.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Models & Research', href: 'topic.html?slug=models-research' },
      { label: 'Goal Telemetry Models (Preview)', href: 'topic.html?slug=goal-telemetry-models' }
    ],
    variant: 'roadmap-preview',
    filterTag: 'Models & Research',
    roadmap: {
      version: 'Orbit 1.2 Beta',
      targetQuarter: 'Q1 2027',
      phase: 'Private Beta',
      architectureSummary: 'Directional delta tensor fields calculating real-time alignment between daily actions and long-term milestones.',
      keyCapabilities: [
        'Vector formulation: Progress = Velocity × Directional Alignment',
        'Automated noise filtering for non-essential tasks',
        'Continuous calibration of personal completion tempos',
        'Direct mathematical input for the Weekly Velocity Matrix'
      ]
    }
  },
  'momentum-heatmaps': {
    slug: 'momentum-heatmaps',
    title: 'Momentum Heatmaps',
    subtitle: 'Chronobiological density maps pinpointing when during the week your highest-value breakthrough hours occur.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Products & Platforms', href: 'topic.html?slug=products-platforms' },
      { label: 'Core Platform', href: 'topic.html?slug=core-platform' },
      { label: 'Momentum Heatmaps (Preview)', href: 'topic.html?slug=momentum-heatmaps' }
    ],
    variant: 'roadmap-preview',
    filterTag: 'Core Platform',
    roadmap: {
      version: 'Orbit 1.1',
      targetQuarter: 'Q1 2027',
      phase: 'Early Cohort',
      architectureSummary: 'Spectral time-frequency analysis mapping circadian rhythm timestamps against milestone completion velocities.',
      keyCapabilities: [
        '7-day chronobiological peak energy visualization',
        'Identification of high-friction distraction intervals',
        'Smart scheduling suggestions for high-gravity milestones',
        'Historical seasonal velocity tracking'
      ]
    }
  },
  'velocity-delta-analytics': {
    slug: 'velocity-delta-analytics',
    title: 'Velocity Delta Analytics',
    subtitle: 'Detecting the acceleration and deceleration in execution tempo before momentum fades away.',
    breadcrumbs: [
      { label: 'Home', href: 'index.html' },
      { label: 'Innovation & AI', href: 'topic.html?slug=innovation-ai' },
      { label: 'Models & Research', href: 'topic.html?slug=models-research' },
      { label: 'Velocity Delta Analytics (Preview)', href: 'topic.html?slug=velocity-delta-analytics' }
    ],
    variant: 'roadmap-preview',
    filterTag: 'Models & Research',
    roadmap: {
      version: 'Orbit 1.2',
      targetQuarter: 'Q2 2027',
      phase: 'Private Beta',
      architectureSummary: 'Second-derivative velocity tracking measuring the rate of change in milestone execution tempo over 7-day moving averages.',
      keyCapabilities: [
        'Mathematical second derivative (d²p/dt²) tracking',
        'Compounding flow indicators (+12% tempo acceleration)',
        'Cognitive fatigue early warning for negative velocity deltas',
        'Active recovery pacing recommendations ("Rest tonight to protect tomorrow")'
      ]
    }
  }
};
