// =========================================================================
// GOOGLE BLOG PREFERENCES DROPDOWN (Preferences > Global (English))
// Handles region switching, persistence, and outside-click dismissal
// =========================================================================

const ORBIT_EDITIONS = [
  { name: 'Global (English)', code: 'en-global', icon: '🌐' },
  { name: 'United States (English)', code: 'en-us', icon: '🇺🇸' },
  { name: 'United Kingdom (English)', code: 'en-gb', icon: '🇬🇧' },
  { name: 'India (English)', code: 'en-in', icon: '🇮🇳' },
  { name: 'Japan (日本語)', code: 'ja-jp', icon: '🇯🇵' },
  { name: 'Germany (Deutsch)', code: 'de-de', icon: '🇩🇪' },
  { name: 'France (Français)', code: 'fr-fr', icon: '🇫🇷' },
  { name: 'Brazil (Português)', code: 'pt-br', icon: '🇧🇷' }
];

function getStoredEdition() {
  return localStorage.getItem('orbit_blog_edition') || 'Global (English)';
}

function initPreferencesDropdown() {
  const container = document.getElementById('preferencesDropdown');
  if (!container) return;

  const currentEdition = getStoredEdition();
  const labelEl = document.getElementById('selectedEditionLabel');
  if (labelEl) labelEl.textContent = currentEdition;

  renderEditionOptions(currentEdition);
}

function renderEditionOptions(selectedName) {
  const menuEl = document.getElementById('editionOptionsMenu');
  if (!menuEl) return;

  menuEl.innerHTML = ORBIT_EDITIONS.map(ed => {
    const isSelected = ed.name === selectedName;
    return `
      <button 
        type="button" 
        class="preferences-option-item ${isSelected ? 'selected' : ''}" 
        onclick="selectEdition('${ed.name}')"
      >
        <span class="flex items-center gap-2">
          <span>${ed.icon}</span>
          <span>${ed.name}</span>
        </span>
        ${isSelected ? `
          <svg class="preferences-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ` : ''}
      </button>
    `;
  }).join('');
}

function togglePreferencesDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('preferencesDropdown');
  if (!dropdown) return;

  // Close mega menu if open
  if (typeof closeMegaMenu === 'function') {
    closeMegaMenu();
  }

  const isOpen = dropdown.classList.contains('open');
  if (isOpen) {
    closePreferencesDropdown();
  } else {
    dropdown.classList.add('open');
    const btn = document.getElementById('preferencesBtn');
    if (btn) btn.classList.add('bg-[#e8eaed]');
  }
}

function closePreferencesDropdown() {
  const dropdown = document.getElementById('preferencesDropdown');
  if (dropdown) dropdown.classList.remove('open');

  const pill = document.getElementById('preferencesPill');
  if (pill) pill.classList.remove('active');

  const menu = document.getElementById('editionOptionsMenu');
  if (menu) menu.classList.remove('open');

  const btn = document.getElementById('preferencesBtn');
  if (btn) btn.classList.remove('bg-[#e8eaed]');
}

function toggleEditionMenu(e) {
  if (e) e.stopPropagation();
  const pill = document.getElementById('preferencesPill');
  const menu = document.getElementById('editionOptionsMenu');
  if (!pill || !menu) return;

  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    pill.classList.remove('active');
  } else {
    menu.classList.add('open');
    pill.classList.add('active');
  }
}

function selectEdition(editionName) {
  localStorage.setItem('orbit_blog_edition', editionName);

  const labelEl = document.getElementById('selectedEditionLabel');
  if (labelEl) labelEl.textContent = editionName;

  renderEditionOptions(editionName);

  // Close sub-menu and dropdown smoothly
  const menu = document.getElementById('editionOptionsMenu');
  const pill = document.getElementById('preferencesPill');
  if (menu) menu.classList.remove('open');
  if (pill) pill.classList.remove('active');

  setTimeout(() => {
    closePreferencesDropdown();
  }, 200);

  // Show toast notification if available
  if (typeof showToast === 'function') {
    showToast(`Region set to ${editionName}`);
  }
}

// Global outside click and Escape key dismissal
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('preferencesDropdown');
  const btn = document.getElementById('preferencesBtn');
  if (dropdown && dropdown.classList.contains('open')) {
    if (!dropdown.contains(e.target) && (!btn || !btn.contains(e.target))) {
      closePreferencesDropdown();
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePreferencesDropdown();
  }
});

// Auto initialize on DOM ready
document.addEventListener('DOMContentLoaded', initPreferencesDropdown);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initPreferencesDropdown();
}
