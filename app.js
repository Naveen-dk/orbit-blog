/**
 * Orbit SaaS - Interactive Core Engine & Experience Controller
 */

// --- Orbital Simulation (Canvas Background) ---
class OrbitalCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.orbits = [
      { radius: 120, speed: 0.007, angle: 0, color: '#38BDF8', label: 'Full Stack', size: 6 },
      { radius: 210, speed: 0.004, angle: 1.8, color: '#60A5FA', label: 'SaaS Launch', size: 8 },
      { radius: 320, speed: 0.0025, angle: 3.5, color: '#818CF8', label: '100 Days Streak', size: 5 },
      { radius: 440, speed: 0.0015, angle: 5.1, color: '#2563EB', label: 'SkillGPS', size: 7 }
    ];
    this.mouse = { x: -1000, y: -1000, active: false };
    
    this.resize();
    this.initStars();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.centerX = this.width / 2;
    this.centerY = Math.min(this.height * 0.45, 450);
  }

  initStars() {
    this.stars = [];
    const count = Math.floor((this.width * this.height) / 7000);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.01 + 0.003
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initStars();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Stars
    for (const star of this.stars) {
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      this.ctx.fill();
      star.alpha += Math.sin(Date.now() * star.speed) * 0.005;
      if (star.alpha < 0.1) star.alpha = 0.1;
      if (star.alpha > 0.9) star.alpha = 0.9;
    }

    // Orbit Rings
    this.ctx.save();
    this.ctx.translate(this.centerX, this.centerY);

    for (const orbit of this.orbits) {
      this.ctx.beginPath();
      this.ctx.arc(0, 0, orbit.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = 'rgba(96, 165, 250, 0.12)';
      this.ctx.lineWidth = 1;
      this.ctx.setLineDash([4, 6]);
      this.ctx.stroke();

      // Satellite position
      orbit.angle += orbit.speed;
      const x = Math.cos(orbit.angle) * orbit.radius;
      const y = Math.sin(orbit.angle) * (orbit.radius * 0.58); // Isometric slight skew

      // Glow behind satellite
      const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, 18);
      gradient.addColorStop(0, orbit.color);
      gradient.addColorStop(1, 'transparent');
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 18, 0, Math.PI * 2);
      this.ctx.fill();

      // Satellite node
      this.ctx.beginPath();
      this.ctx.arc(x, y, orbit.size, 0, Math.PI * 2);
      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.shadowColor = orbit.color;
      this.ctx.shadowBlur = 12;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  animate() {
    this.draw();
    requestAnimationFrame(this.animate);
  }
}

// --- Confetti System ---
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#2563EB', '#60A5FA', '#38BDF8', '#93C5FD', '#FFFFFF', '#F59E0B'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      life: 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const p of particles) {
      if (p.life > 0) {
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.vx *= 0.98;
        p.rotation += p.vRot;
        p.life -= 0.012;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        ctx.restore();
      }
    }

    if (alive) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render();
}

// --- Toast Notification ---
function showToast(title, message) {
  const toast = document.getElementById('notification-toast');
  if (!toast) return;
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-desc').textContent = message;
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 4200);
}

// --- Articles Data for Blog ---
const ARTICLES = [
  {
    id: 'why-most-goals-fail',
    category: 'Productivity',
    badge: 'Core Philosophy',
    title: 'Why Most Goals Fail (And How Orbit Fixes Direction Loss)',
    excerpt: 'Most people don’t fail because they lack ambition or discipline. They fail because task lists track activity, not vector alignment.',
    author: 'Koray Kavukcuoglu',
    role: 'Product Lead, Orbit Labs',
    date: 'Nov 20, 2026',
    readTime: '5 min read',
    accentColor: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>The Great Productivity Illusion</h3>
      <p>Every January, millions of people fill out clean Notion templates, set recurring Todoist tasks, and watch motivational videos. Yet within 45 days, over 80% of these pursuits are completely abandoned.</p>
      <p>The problem is not lack of will. <strong>The problem is metric dissonance.</strong> Standard task managers track volume of tasks checked off. You can cross 15 errands off your list every single day and end the week <em>further away</em> from your true north than when you started.</p>
      
      <div class="article-quote-box">
        "Activity is not velocity. Velocity is distance divided by time with a specified vector."
      </div>

      <h3>Vector Tracking vs Task Ticking</h3>
      <p>Orbit introduces the concept of the <strong>Orbit Score</strong>—a dynamic composite score between 0 and 100 that quantifies momentum along your core trajectory. Instead of asking 'Did you do 10 tasks today?', Orbit asks:</p>
      <ul>
        <li>Did your actions today create compounding leverage toward your primary goal?</li>
        <li>Are your current weekly habits converging or diverging from your target milestone?</li>
        <li>How resilient is your execution when unexpected variance strikes?</li>
      </ul>
      <p>When you measure directional progress instead of checklist completion, staying consistent ceases to be an uphill battle against willpower—it becomes a feedback loop you crave.</p>
    `
  },
  {
    id: 'problem-with-motivation',
    category: 'AI Insights',
    badge: 'Cognitive Science',
    title: 'The Problem With Motivation: Why Feedback Loops Beat Willpower',
    excerpt: 'Relying on motivation is like relying on weather for electricity. You need a closed-loop system that generates its own kinetic energy.',
    author: 'Josh Woodward',
    role: 'VP AI Research',
    date: 'Nov 18, 2026',
    readTime: '6 min read',
    accentColor: '#60A5FA',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Why Willpower Has an Expiration Date</h3>
      <p>Dopamine spikes from motivational podcasts and YouTube video montages have a half-life of roughly 48 hours. When the neurochemical high fades, routine friction rushes back in.</p>
      <p>High performers don't rely on heightened emotional states. They construct tight feedback loops where the friction of inaction exceeds the friction of action.</p>

      <h3>How Orbit Daily Check-ins Reframe Momentum</h3>
      <p>In Orbit, your daily check-in is not a chore. It takes 45 seconds. An intelligent prompt asks you to reflect on one breakthrough and one friction point. Orbit’s AI synthesizes your response, updates your SkillGPS roadmap, and delivers a 2-sentence tactical adjustment for tomorrow.</p>
      <p>By transforming abstract striving into a clear numeric and visual trajectory, the emotional drain of uncertainty disappears.</p>
    `
  },
  {
    id: 'progress-beats-productivity',
    category: 'Productivity',
    badge: 'Strategy',
    title: 'Progress Beats Productivity: Redefining Output for the AI Era',
    excerpt: 'In an era where AI can generate infinite code and content in seconds, raw productivity is cheap. Genuine goal convergence is the only scarce asset.',
    author: 'Diego Rivas',
    role: 'Founding Engineer',
    date: 'Nov 15, 2026',
    readTime: '4 min read',
    accentColor: '#818CF8',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>The Collapse of Raw Output</h3>
      <p>Generating 10,000 lines of boilerplate or scheduling 50 social media posts no longer indicates high skill or strategic progress. AI tooling has compressed output time to near zero.</p>
      <p>What remains scarce is <strong>judgment</strong>: selecting the precise 3 milestones that actually unlock a 10x breakthrough, and maintaining ruthless consistency against them.</p>

      <h3>Real Progress Indicators</h3>
      <p>Orbit analyzes your weekly data to distinguish high-signal effort from vanity busyness. Through automated correlation analysis, Orbit highlights which micro-habits actually push your Orbit Score upwards.</p>
    `
  },
  {
    id: 'building-orbit-in-public',
    category: 'Build In Public',
    badge: 'Transparency',
    title: 'Building Orbit In Public: From Day 0 to 1,000 Early Adopters',
    excerpt: 'Here is our raw product roadmap, technology architecture, and early metrics as we build the goal operating system of tomorrow.',
    author: 'Orbit Founders',
    role: 'Core Team',
    date: 'Nov 12, 2026',
    readTime: '7 min read',
    accentColor: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Why We’re Building Openly</h3>
      <p>Too many productivity software startups hide behind NDAs and waitlist teasers without showing real engineering substance. We believe the best tools are forged alongside early power users who share our obsession with human performance.</p>
      
      <h3>Our Tech Stack Architecture</h3>
      <ul>
        <li><strong>Frontend:</strong> Ultra-responsive, GPU-accelerated canvas renderer with modern CSS Glassmorphic design system.</li>
        <li><strong>Analytics Engine:</strong> Real-time event ingestion and composite score calculating algorithms with sub-50ms latency.</li>
        <li><strong>AI Copilot:</strong> Multi-agent goal orchestration fine-tuned on cognitive behavioral feedback loops.</li>
      </ul>
      <p>Join our Discord and GitHub discussions to vote directly on upcoming features.</p>
    `
  },
  {
    id: 'stay-consistent-100-days',
    category: 'SkillGPS',
    badge: 'Execution Guide',
    title: 'How To Stay Consistent For 100 Days: The Orbit Blueprint',
    excerpt: 'A battle-tested scientific guide to maintaining streaks without burnout, cognitive fatigue, or perfectionist paralysis.',
    author: 'Elena Rostova',
    role: 'Performance Coach',
    date: 'Nov 08, 2026',
    readTime: '8 min read',
    accentColor: '#34D399',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>The 100-Day Inflection Point</h3>
      <p>Psychological research demonstrates that neuroplastic adaptation requires between 66 to 100 days of sustained stimuli before a behavior shifts from conscious effort to automatic procedural memory.</p>
      <p>Here are the 4 non-negotiable pillars of the Orbit 100-Day Protocol:</p>
      <ol>
        <li><strong>The 2-Minute Minimum:</strong> On days of zero motivation or high friction, execute the absolute micro-atomic unit of your goal (e.g., read 1 paragraph, write 2 lines of code).</li>
        <li><strong>Never Miss Twice:</strong> A single missed day is normal variance; two consecutive misses is the genesis of a new negative habit.</li>
        <li><strong>Dynamic Rest Compensation:</strong> Orbit automatically adjusts your expected daily momentum during high-stress recovery cycles so your streak remains unbroken.</li>
        <li><strong>Weekly Reflection Ritual:</strong> Audit your Orbit Score trends every Sunday to celebrate quantitative gains.</li>
      </ol>
    `
  }
];

// --- Main Interactive Application Controller ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Orbit Canvas
  new OrbitalCanvas('orbital-canvas');

  // 2. Navigation Routing & View Switching
  const navLinks = document.querySelectorAll('[data-nav-target]');
  const views = document.querySelectorAll('.app-view');
  const navbar = document.getElementById('main-navbar');

  function switchView(targetId) {
    views.forEach(v => {
      if (v.id === `view-${targetId}`) {
        v.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        v.classList.add('hidden');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-nav-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update URL hash
    window.location.hash = targetId;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-nav-target');
      switchView(target);
      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // Handle Initial Hash
  const initialHash = window.location.hash.replace('#', '') || 'home';
  if (document.getElementById(`view-${initialHash}`)) {
    switchView(initialHash);
  } else {
    switchView('home');
  }

  // Navbar scroll background effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu button
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Interactive Dashboard Mockup Controller
  const goalSelectorBtns = document.querySelectorAll('[data-goal-select]');
  const currentGoalTitle = document.getElementById('dashboard-goal-title');
  const orbitScoreDisplay = document.getElementById('orbit-score-display');
  const consistencyDisplay = document.getElementById('consistency-display');
  const weeklyProgressDisplay = document.getElementById('weekly-progress-display');
  const roadmapStatus = document.getElementById('roadmap-status-text');

  const GOALS_DATA = {
    'fullstack': {
      title: 'Become a Full Stack Developer',
      score: 78,
      consistency: '89%',
      progress: '+12%',
      roadmap: 'Stage 3: Cloud Architecture & Scalability',
      streak: '24 Days'
    },
    'saas': {
      title: 'Launch SaaS to $10k MRR',
      score: 84,
      consistency: '94%',
      progress: '+18%',
      roadmap: 'Stage 4: Beta Distribution & Onboarding',
      streak: '41 Days'
    },
    'marathon': {
      title: 'Run a Marathon in 4 Hours',
      score: 72,
      consistency: '85%',
      progress: '+9%',
      roadmap: 'Stage 2: VO2 Max & Base Mileage',
      streak: '18 Days'
    }
  };

  goalSelectorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goalSelectorBtns.forEach(b => b.classList.remove('active', 'bg-blue-600/30', 'border-blue-400'));
      btn.classList.add('active', 'bg-blue-600/30', 'border-blue-400');
      const goalKey = btn.getAttribute('data-goal-select');
      const data = GOALS_DATA[goalKey];
      if (data) {
        currentGoalTitle.textContent = data.title;
        orbitScoreDisplay.textContent = data.score;
        consistencyDisplay.textContent = data.consistency;
        weeklyProgressDisplay.textContent = data.progress;
        roadmapStatus.textContent = data.roadmap;
      }
    });
  });

  // Daily Check-in simulator button
  const checkinSimBtn = document.getElementById('sim-checkin-btn');
  if (checkinSimBtn) {
    checkinSimBtn.addEventListener('click', () => {
      const currentScore = parseInt(orbitScoreDisplay.textContent, 10);
      orbitScoreDisplay.textContent = Math.min(100, currentScore + 2);
      checkinSimBtn.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        Check-in Recorded!
      `;
      checkinSimBtn.classList.remove('bg-blue-600');
      checkinSimBtn.classList.add('bg-emerald-600/30', 'border-emerald-500', 'text-emerald-300');
      showToast('Daily Check-in Recorded', 'AI Copilot: Consistency boosted to 91%. Momentum vector aligned!');
      triggerConfetti();
      setTimeout(() => {
        checkinSimBtn.innerHTML = `Complete Daily Check-in`;
        checkinSimBtn.classList.remove('bg-emerald-600/30', 'border-emerald-500', 'text-emerald-300');
        checkinSimBtn.classList.add('bg-blue-600');
      }, 3500);
    });
  }

  // 4. Google Material Design 3 Blog Carousel & Reader
  const carouselViewport = document.getElementById('hero-carousel-viewport');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const progressBar = document.getElementById('carousel-progress-fill');

  if (carouselViewport) {
    const updateProgress = () => {
      const maxScroll = carouselViewport.scrollWidth - carouselViewport.clientWidth;
      if (maxScroll > 0) {
        const percentage = Math.min(100, Math.max(15, (carouselViewport.scrollLeft / maxScroll) * 100));
        progressBar.style.width = `${percentage}%`;
      }
    };

    carouselViewport.addEventListener('scroll', updateProgress, { passive: true });

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        carouselViewport.scrollBy({ left: -carouselViewport.clientWidth * 0.85, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        carouselViewport.scrollBy({ left: carouselViewport.clientWidth * 0.85, behavior: 'smooth' });
      });
    }
  }

  // Blog Category Filter
  const categoryTabs = document.querySelectorAll('.category-tab');
  const articleCards = document.querySelectorAll('[data-article-category]');

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');

      articleCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-article-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Blog Article Modal Reader
  const modal = document.getElementById('article-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-article-title');
  const modalCategory = document.getElementById('modal-article-category');
  const modalAuthor = document.getElementById('modal-article-author');
  const modalDate = document.getElementById('modal-article-date');
  const modalContent = document.getElementById('modal-article-body');

  function openArticleModal(articleId) {
    const article = ARTICLES.find(a => a.id === articleId);
    if (!article || !modal) return;

    modalTitle.textContent = article.title;
    modalCategory.textContent = article.category;
    modalAuthor.textContent = `${article.author} • ${article.role}`;
    modalDate.textContent = `${article.date} • ${article.readTime}`;
    modalContent.innerHTML = article.content;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeArticleModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeArticleModal();
    });
  }

  document.querySelectorAll('[data-open-article]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const articleId = trigger.getAttribute('data-open-article');
      openArticleModal(articleId);
    });
  });

  // 5. Early Access / Waitlist Form System
  const waitlistForm = document.getElementById('early-access-form');
  const supporterCountEl = document.querySelectorAll('.supporter-count-value');
  let currentSupporters = parseInt(localStorage.getItem('orbit_supporters') || '148', 10);

  supporterCountEl.forEach(el => {
    el.textContent = `${currentSupporters}+`;
  });

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('waitlist-name').value;
      const email = document.getElementById('waitlist-email').value;
      const goal = document.getElementById('waitlist-goal').value;

      currentSupporters += 1;
      localStorage.setItem('orbit_supporters', currentSupporters.toString());
      supporterCountEl.forEach(el => {
        el.textContent = `${currentSupporters}+`;
      });

      triggerConfetti();

      // Show success container
      const formContainer = document.getElementById('waitlist-form-container');
      const successContainer = document.getElementById('waitlist-success-container');
      if (formContainer && successContainer) {
        formContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
        document.getElementById('success-user-name').textContent = name;
        document.getElementById('success-queue-pos').textContent = `#${currentSupporters}`;
      }

      showToast('Welcome to Orbit Early Access!', `You're in position #${currentSupporters}. Confirmation sent to ${email}`);
    });
  }

  // Newsletter Subscriptions
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Subscribed to Orbit Updates', `We've added ${input.value} to our private weekly digest.`);
        input.value = '';
        triggerConfetti();
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message Received', 'Our founders will respond to your inquiry within 4 hours.');
      contactForm.reset();
    });
  }

  // FAQ Accordions
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
});
