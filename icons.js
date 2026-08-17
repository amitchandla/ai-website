/* =========================================================================
   GOLDEN PIZZA CAFE — category illustrations
   Flat, single-family icon set (not cartoon/character based) in the brand
   palette. One icon per menu category, reused across every item in that
   category. Shared by menu.html and checkout.html.
   ========================================================================= */
const ICONS = {

pizza: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad)"/>
  <g transform="translate(50 52) rotate(-18)">
    <path d="M0 -30 L26 24 A30 30 0 0 1 -26 24 Z" fill="#fff7ee"/>
    <path d="M0 -30 L26 24 A30 30 0 0 1 -26 24 Z" fill="none" stroke="#e2b378" stroke-width="2.5"/>
    <path d="M-20 20 A24 24 0 0 1 20 20" fill="none" stroke="#e2b378" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-6" cy="-4" r="4.2" fill="#d64545"/>
    <circle cx="9" cy="4" r="4.2" fill="#d64545"/>
    <circle cx="-2" cy="12" r="4.2" fill="#d64545"/>
    <circle cx="3" cy="-13" r="3" fill="#2e7d46"/>
    <circle cx="-12" cy="8" r="3" fill="#2e7d46"/>
  </g>
  <defs><radialGradient id="gpc-grad" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

sandwich: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad2)"/>
  <g transform="translate(50 52)">
    <path d="M-28 10 L-24 -6 A24 12 0 0 1 24 -6 L28 10 Z" fill="#f4c98a"/>
    <rect x="-27" y="8" width="54" height="7" rx="2" fill="#2e7d46"/>
    <rect x="-27" y="15" width="54" height="7" rx="2" fill="#d64545"/>
    <rect x="-27" y="22" width="54" height="8" rx="3" fill="#f4c98a" stroke="#e2b378" stroke-width="2"/>
  </g>
  <defs><radialGradient id="gpc-grad2" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

burger: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad3)"/>
  <g transform="translate(50 52)">
    <path d="M-26 -6 A26 14 0 0 1 26 -6 Z" fill="#f2b25a"/>
    <circle cx="-14" cy="-11" r="2" fill="#fff3d8"/><circle cx="0" cy="-14" r="2" fill="#fff3d8"/><circle cx="14" cy="-11" r="2" fill="#fff3d8"/>
    <rect x="-27" y="-6" width="54" height="5" rx="2" fill="#2e7d46"/>
    <rect x="-27" y="0" width="54" height="9" rx="3" fill="#7a4326"/>
    <rect x="-27" y="10" width="54" height="5" rx="2" fill="#ffd54a"/>
    <path d="M-26 16 A26 8 0 0 0 26 16 Z" fill="#f2b25a"/>
  </g>
  <defs><radialGradient id="gpc-grad3" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

momos: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad4)"/>
  <g fill="#fff7ee" stroke="#e2b378" stroke-width="2">
    <path d="M28 58 a14 12 0 1 1 28 0 Z"/>
    <path d="M50 62 a14 12 0 1 1 28 0 Z"/>
    <path d="M39 40 a14 12 0 1 1 28 0 Z"/>
  </g>
  <g stroke="#c98f52" stroke-width="1.4" fill="none">
    <path d="M35 47 q4 -4 8 0" /><path d="M45 47 q4 -4 8 0" />
    <path d="M46 65 q4 -4 8 0" /><path d="M56 65 q4 -4 8 0" />
    <path d="M57 65 q4 -4 8 0" /><path d="M35 65 q4 -4 8 0" />
  </g>
  <defs><radialGradient id="gpc-grad4" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

noodles: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad5)"/>
  <g transform="translate(50 54)">
    <path d="M-28 4 A28 16 0 0 0 28 4 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M-20 0 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0" fill="none" stroke="#ffb627" stroke-width="3" stroke-linecap="round"/>
    <circle cx="-8" cy="-2" r="3" fill="#2e7d46"/>
    <circle cx="10" cy="0" r="3" fill="#d64545"/>
    <rect x="18" y="-26" width="3" height="26" rx="1.5" fill="#e2b378" transform="rotate(18 19 -13)"/>
    <rect x="24" y="-26" width="3" height="26" rx="1.5" fill="#e2b378" transform="rotate(10 25 -13)"/>
  </g>
  <defs><radialGradient id="gpc-grad5" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

starter: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad6)"/>
  <g transform="translate(50 54)">
    <path d="M-16 -20 L16 -20 L12 20 L-12 20 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <rect x="-10" y="-32" width="4" height="24" rx="2" fill="#ffd54a" transform="rotate(-8 -8 -20)"/>
    <rect x="-2" y="-34" width="4" height="26" rx="2" fill="#ffd54a"/>
    <rect x="6" y="-32" width="4" height="24" rx="2" fill="#ffd54a" transform="rotate(8 8 -20)"/>
  </g>
  <defs><radialGradient id="gpc-grad6" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

mocktail: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad7)"/>
  <g transform="translate(50 54)">
    <path d="M-16 -22 L16 -22 L6 20 L-6 20 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M-13 -16 L13 -16 L9 -4 L-9 -4 Z" fill="#ff8a1e" opacity=".85"/>
    <circle cx="7" cy="-24" r="4" fill="#2e7d46"/>
    <rect x="1" y="-38" width="3" height="26" rx="1.5" fill="#e2b378" transform="rotate(12 2 -25)"/>
  </g>
  <defs><radialGradient id="gpc-grad7" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

pasta: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad8)"/>
  <g transform="translate(50 56)">
    <path d="M-26 2 A26 14 0 0 0 26 2 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M-16 -4 q10 -12 0 -18 q10 6 0 -14" fill="none" stroke="#ffd54a" stroke-width="3" stroke-linecap="round"/>
    <path d="M0 -2 q10 -10 0 -16 q10 6 0 -12" fill="none" stroke="#ffb627" stroke-width="3" stroke-linecap="round"/>
    <circle cx="10" cy="-8" r="3" fill="#d64545"/>
    <circle cx="-10" cy="-6" r="3" fill="#2e7d46"/>
  </g>
  <defs><radialGradient id="gpc-grad8" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

maggie: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad9)"/>
  <g transform="translate(50 56)">
    <path d="M-24 0 A24 14 0 0 0 24 0 L26 -6 L-26 -6 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M-18 -6 q5 -8 10 0 q5 -8 10 0 q5 -8 10 0" fill="none" stroke="#ffb627" stroke-width="3" stroke-linecap="round"/>
    <rect x="-30" y="4" width="60" height="5" rx="2.5" fill="#e2b378"/>
  </g>
  <defs><radialGradient id="gpc-grad9" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

shake: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad10)"/>
  <g transform="translate(50 54)">
    <path d="M-14 -24 L14 -24 L10 22 L-10 22 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M-13 -14 L13 -14 L9 20 L-9 20 Z" fill="#f2b25a" opacity=".9"/>
    <path d="M-14 -24 q14 -10 28 0 q-14 6 -28 0" fill="#fff7ee" stroke="#e2b378" stroke-width="1.5"/>
    <rect x="0" y="-40" width="3" height="20" rx="1.5" fill="#e2b378" transform="rotate(10 1 -30)"/>
  </g>
  <defs><radialGradient id="gpc-grad10" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`,

coffee: `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="url(#gpc-grad11)"/>
  <g transform="translate(50 56)">
    <path d="M-18 -12 L16 -12 L13 16 A16 8 0 0 1 -15 16 Z" fill="#fff7ee" stroke="#e2b378" stroke-width="2"/>
    <path d="M16 -8 q14 -2 12 10 q-2 10 -13 8" fill="none" stroke="#e2b378" stroke-width="3"/>
    <path d="M-6 -22 q4 -6 0 -10" fill="none" stroke="#e2b378" stroke-width="2" stroke-linecap="round"/>
    <path d="M4 -22 q4 -6 0 -10" fill="none" stroke="#e2b378" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs><radialGradient id="gpc-grad11" cx="35%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#ffb627"/><stop offset="100%" stop-color="#ff8a1e"/>
  </radialGradient></defs>
</svg>`
};

if (typeof module !== "undefined") module.exports = ICONS;
