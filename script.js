(function () {
  "use strict";

  // ---- Discord invite (fill this in once you have the invite link) ----
  var DISCORD_URL = "https://discord.gg/Fheyv5y45D";
  document.querySelectorAll("[data-discord]").forEach(function (a) {
    if (DISCORD_URL) { a.setAttribute("href", DISCORD_URL); a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    else { a.addEventListener("click", function (e) { e.preventDefault(); alert("Discord invite coming soon."); }); }
  });

  // ---- populate the hero panel mockup with real covers ----
  var COVERS = [
    ["a-silent-voice", "A Silent Voice"],
    ["demon-slayer", "Demon Slayer"],
    ["jujutsu-kaisen-0", "Jujutsu Kaisen 0"],
    ["one-punch-man", "One Punch Man"],
    ["chainsaw-man", "Chainsaw Man"],
    ["your-name", "Your Name"],
    ["akira", "Akira"],
    ["cyberpunk-edgerunners", "Cyberpunk: Edgerunners"]
  ];
  var grid = document.getElementById("mpGrid");
  if (grid) {
    COVERS.forEach(function (c) {
      var card = document.createElement("div"); card.className = "mp-card";
      var img = document.createElement("img"); img.src = "assets/covers/" + c[0] + ".jpg"; img.alt = c[1]; img.loading = "lazy";
      img.onerror = function () { card.style.display = "none"; };
      var cap = document.createElement("div"); cap.className = "cap"; cap.textContent = c[1];
      card.appendChild(img); card.appendChild(cap); grid.appendChild(card);
    });
  }

  // ---- scroll reveal ----
  var targets = [].slice.call(document.querySelectorAll(".section-head, .feature, .showcase-copy, .showcase-mock, .faq, .dl-card"));
  targets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i % 3, 2) * 0.06) + "s"; io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }
})();
