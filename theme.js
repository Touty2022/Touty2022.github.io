// Thème choisi par le visiteur (sombre par défaut). Fichier séparé et non
// en ligne dans index.html pour respecter la politique de sécurité (CSP).
try {
  if (localStorage.getItem("theme") === "light") document.documentElement.classList.remove("dark");
} catch (e) {}
