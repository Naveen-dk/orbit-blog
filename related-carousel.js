// =========================================================================
// ORBIT RELATED STORIES CAROUSEL CONTROLLER
// Material 3 Organic Shape Masks, Dynamic Exclusion & Dynamic Progress
// =========================================================================

const ORBIT_RELATED_STORIES = [
  {
    id: "orbit-deepmind-engine",
    category: "Google DeepMind",
    title: "Orbit DeepMind Engine: Trajectory Prediction Models",
    author: "By DeepMind Research & Orbit Team",
    shape: "shape-clover",
    graphicStyle: "background: radial-gradient(circle at 35% 35%, #2a1810, #0b0b0c); color: #ff8a50; box-shadow: inset 0 0 40px rgba(255, 138, 80, 0.2);",
    graphicLabel: "Gemini 4 Neon"
  },
  {
    id: "goal-telemetry-models",
    category: "Models & Research",
    title: "Goal Telemetry Models: Transforming Intent into Vectors",
    author: "By Diego Rivas & Pavan Kumar",
    shape: "shape-squircle",
    graphicStyle: "background: radial-gradient(circle at 70% 20%, #1d2b44, #090d16); color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.4);",
    graphicLabel: "Project Genie 4"
  },
  {
    id: "orbit-labs",
    category: "Search & Systems",
    title: "Orbit Labs: Where Goal Science Meets Machine Learning",
    author: "By Robby Stein & Orbit Labs",
    shape: "shape-cloud",
    graphicStyle: "background: linear-gradient(135deg, #1a73e8, #4285f4); color: #ffffff;",
    graphicLabel: "Gemini 4 Hydrogen"
  },
  {
    id: "why-most-goals-fail",
    category: "Visibility",
    title: "Why Most Goals Fail: The Great Visibility Problem",
    author: "By Orbit Philosophy",
    shape: "shape-clover",
    graphicStyle: "background: radial-gradient(circle at 30% 30%, #311b92, #0d0924); color: #c5cae9;",
    graphicLabel: "Visibility > Effort"
  },
  {
    id: "problem-with-motivation",
    category: "Consistency",
    title: "The Problem With Motivation: Systems Beat Willpower",
    author: "By Orbit Systems",
    shape: "shape-squircle",
    graphicStyle: "background: radial-gradient(circle at 60% 40%, #1b382b, #07160e); color: #a5d6a7;",
    graphicLabel: "Systems over Willpower"
  },
  {
    id: "we-dont-need-more-goals",
    category: "Feedback Loops",
    title: "We Don't Need More Goals: Better Telemetry",
    author: "By Direction Systems",
    shape: "shape-cloud",
    graphicStyle: "background: linear-gradient(135deg, #4285f4, #1a73e8); color: #ffffff;",
    graphicLabel: "Signal vs. Noise"
  },
  {
    id: "orbit-score",
    category: "Core Platform",
    title: "The Orbit Score (0-100): The Single Truth Metric",
    author: "By Orbit Telemetry",
    shape: "shape-diamond",
    graphicStyle: "background: linear-gradient(135deg, #0b57d0, #0842a0); color: #ffffff;",
    graphicLabel: "✦ Score: 78"
  },
  {
    id: "orbit-manifesto",
    category: "Core Declaration",
    title: "The Orbit Manifesto: People Lack Clarity, Not Ambition",
    author: "By Orbit Founding Team",
    shape: "shape-squircle",
    graphicStyle: "background: linear-gradient(135deg, #004d40, #00251a); color: #80cbc4;",
    graphicLabel: "Orbit 2026"
  }
];

function initOrbitRelatedCarousel(currentSlug) {
  const track = document.getElementById("orbit-related-track");
  const prevBtn = document.getElementById("orbit-prev-btn");
  const nextBtn = document.getElementById("orbit-next-btn");
  const progressFill = document.getElementById("orbit-progress-fill");

  if (!track) return;

  // Filter out the currently active article
  const stories = ORBIT_RELATED_STORIES.filter((s) => s.id !== currentSlug);

  track.innerHTML = stories
    .map(
      (story) => `
      <a href="article.html?id=${story.id}" onclick="if (typeof switchArticle === 'function') { event.preventDefault(); switchArticle('${story.id}'); }" class="orbit-story-card" data-slug="${story.id}">
        <div class="orbit-card-media">
          <div class="orbit-card-media-inner ${story.shape}" style="${story.graphicStyle}">
            <span>${story.graphicLabel}</span>
          </div>
        </div>
        <span class="orbit-card-category">${story.category}</span>
        <h3 class="orbit-card-title">${story.title}</h3>
        <span class="orbit-card-author">${story.author}</span>
      </a>`
    )
    .join("");

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    if (prevBtn) prevBtn.disabled = currentScroll <= 6;
    if (nextBtn) nextBtn.disabled = currentScroll >= maxScroll - 6;

    if (progressFill) {
      if (maxScroll > 0) {
        const visibleRatio = track.clientWidth / track.scrollWidth;
        const scrollRatio = Math.max(0, Math.min(1, currentScroll / maxScroll));
        const fillWidth = Math.max(visibleRatio * 100, 24);
        const maxOffset = 100 - fillWidth;
        progressFill.style.width = `${fillWidth}%`;
        progressFill.style.transform = `translateX(${(scrollRatio * maxOffset) / (fillWidth / 100)}%)`;
      } else {
        progressFill.style.width = "100%";
        progressFill.style.transform = "translateX(0%)";
      }
    }
  };

  if (prevBtn) {
    prevBtn.onclick = () => {
      track.scrollBy({ left: -310, behavior: "smooth" });
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      track.scrollBy({ left: 310, behavior: "smooth" });
    };
  }

  let rafId = null;
  const scheduleUpdate = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      updateControls();
      rafId = null;
    });
  };

  track.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  
  // Initial check after DOM paint
  setTimeout(scheduleUpdate, 50);
}

// Auto-run if running independently
if (typeof window !== "undefined") {
  window.initOrbitRelatedCarousel = initOrbitRelatedCarousel;
}
