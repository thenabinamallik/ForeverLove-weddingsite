// Expose a small helper to read system preference initially.
(function () {
  try {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const saved = localStorage.getItem("theme");
    if (!saved) {
      if (prefersDark) document.documentElement.classList.add("dark");
    } else if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    // ignore
  }
})();
