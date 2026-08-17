/* =========================================================================
   GOLDEN PIZZA CAFE — shared top navigation
   Include after <body> opens: <div id="site-nav"></div><script src="nav.js"></script>
   Set window.GPC_ACTIVE_PAGE to "home" | "menu" | "about" | "contact" before
   including this script so the current link can be highlighted.
   ========================================================================= */
(function () {
  const active = window.GPC_ACTIVE_PAGE || "";
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "menu.html", label: "Menu", key: "menu" },
    { href: "about.html", label: "About", key: "about" },
    { href: "contact.html", label: "Contact", key: "contact" },
  ];

  const style = document.createElement("style");
  style.textContent = `
    .gpc-nav{
      position:sticky; top:0; z-index:50;
      display:flex; align-items:center; justify-content:space-between;
      gap:12px; padding:10px 18px; background:#1c130f;
      border-bottom:1px solid rgba(255,182,39,.18);
    }
    .gpc-nav .gpc-brand{ display:flex; align-items:center; gap:9px; text-decoration:none; }
    .gpc-nav .gpc-brand img{ width:32px; height:32px; border-radius:50%; object-fit:cover; box-shadow:0 2px 8px rgba(0,0,0,.4); }
    .gpc-nav .gpc-brand span{ font-family:'Baloo 2',sans-serif; font-weight:800; color:#fff7ee; font-size:15px; letter-spacing:.3px; }
    .gpc-nav .gpc-links{ display:flex; gap:4px; }
    .gpc-nav .gpc-links a{
      color:#e9d3bd; text-decoration:none; font-weight:700; font-size:13px;
      padding:8px 12px; border-radius:8px; font-family:'Inter',sans-serif;
    }
    .gpc-nav .gpc-links a.active{ background:#ff8a1e; color:#1c130f; }
    .gpc-nav .gpc-links a:hover:not(.active){ background:rgba(255,255,255,.08); }
    @media (max-width:480px){
      .gpc-nav .gpc-brand span{ display:none; }
      .gpc-nav .gpc-links a{ padding:7px 9px; font-size:12px; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.getElementById("site-nav");
  if (!nav) return;
  nav.innerHTML = `
    <nav class="gpc-nav">
      <a class="gpc-brand" href="index.html">
        <img src="assets/logo.jpg" alt="Golden Pizza Cafe logo">
        <span>GOLDEN PIZZA CAFE</span>
      </a>
      <div class="gpc-links">
        ${links.map(l => `<a href="${l.href}" class="${l.key === active ? "active" : ""}">${l.label}</a>`).join("")}
      </div>
    </nav>
  `;
})();
