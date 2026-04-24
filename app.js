// ============================================================
//  Ocean Quest — App Logic
// ============================================================
//
//  This script reads fishCollection (defined in data/fish.js)
//  and brings the fish to life in two places:
//    1. The #ocean section — each fish swims across the screen
//    2. The #gallery section — each fish gets a card with its info
//
//  You do NOT need to edit this file to add your fish.
//  Edit data/fish.js instead!
//
// ============================================================

// Build an inline SVG fish shape using up to 3 colors.
// colors can be an array [bodyColor, finColor, bellyColor] or a plain string (fallback).
function createFishSVG(colors, name) {
  var c = Array.isArray(colors) ? colors : [colors, colors, 'rgba(255,255,255,0.22)'];
  var body   = escapeHTML(c[0] || '#4ECDC4');
  var fin    = escapeHTML(c[1] || c[0] || '#38ada9');
  var belly  = escapeHTML(c[2] || 'rgba(255,255,255,0.22)');
  return `
    <svg viewBox="0 0 70 46" xmlns="http://www.w3.org/2000/svg" aria-label="${escapeHTML(name)}">
      <!-- Tail fin -->
      <polygon points="54,23 70,10 70,36" fill="${fin}" opacity="0.92"/>
      <!-- Body -->
      <ellipse cx="30" cy="23" rx="26" ry="15" fill="${body}"/>
      <!-- Dorsal fin -->
      <path d="M18,8 Q28,2 40,8" stroke="${fin}" stroke-width="5" fill="none" opacity="0.9"/>
      <!-- Belly stripe -->
      <ellipse cx="26" cy="27" rx="14" ry="7" fill="${belly}" opacity="0.85"/>
      <!-- Eye white -->
      <circle cx="12" cy="19" r="4.5" fill="white"/>
      <!-- Pupil -->
      <circle cx="11" cy="18.5" r="2.2" fill="#1a2840"/>
      <!-- Mouth -->
      <path d="M5,24 Q8,27 11,24" stroke="#1a2840" stroke-width="1.5" fill="none"/>
    </svg>
  `;
}

// Escape user-provided strings before inserting into HTML
// (prevents broken markup if a fish name contains special characters)
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Main function — reads fishCollection and renders everything
function renderOcean() {
  var ocean   = document.getElementById('ocean');
  var cards   = document.getElementById('cards');
  var countEl = document.getElementById('fish-count');

  // Guard: show a helpful message if fish.js didn't load correctly
  if (typeof fishCollection === 'undefined') {
    countEl.textContent = '⚠️ Could not load fish data';
    console.error(
      'fishCollection is not defined. ' +
      'Make sure data/fish.js is loaded before app.js in index.html.'
    );
    return;
  }

  // Update the fish count badge
  var count = fishCollection.length;
  countEl.textContent = count + (count === 1 ? ' fish swimming' : ' fish swimming');

  // Render each fish
  fishCollection.forEach(function(fish, index) {

    // ── 1. SWIMMING FISH IN THE OCEAN ─────────────────────────

    var fishEl = document.createElement('div');

    // Alternate swimming direction: even = right, odd = left
    fishEl.className = 'fish' + (index % 2 === 0 ? '' : ' swim-left');

    // Spread fish at different vertical positions so they don't overlap
    var topPercent = 8 + (index * 19) % 68;
    fishEl.style.top = topPercent + '%';

    // Vary swimming speed using the fish's speed value
    var baseDuration = 12; // seconds for a full crossing at speed 1.0
    var duration = baseDuration / (fish.speed || 1.0);
    fishEl.style.animationName = (index % 2 === 0) ? 'swimRight' : 'swimLeft';
    fishEl.style.animationDuration = duration + 's';

    // Stagger start times so they don't all appear at once
    fishEl.style.animationDelay = '-' + (index * 2.3) + 's';

    // Show fish name + fact on hover
    fishEl.title = fish.name + ' — ' + fish.fact;

    fishEl.innerHTML = createFishSVG(fish.colors || fish.color, fish.name);
    ocean.appendChild(fishEl);

    // ── 2. GALLERY CARD ───────────────────────────────────────

    var card = document.createElement('div');
    card.className = 'fish-card';
    card.innerHTML =
      '<div class="fish-avatar">' + createFishSVG(fish.colors || fish.color, fish.name) + '</div>' +
      '<h3>' + escapeHTML(fish.name) + '</h3>' +
      '<p>' + escapeHTML(fish.fact) + '</p>';

    cards.appendChild(card);
  });
}

// Run when the page has fully loaded
document.addEventListener('DOMContentLoaded', renderOcean);
