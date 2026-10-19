// Each checkbox id matches a key in DEFAULT_SETTINGS.
chrome.storage.sync.get(DEFAULT_SETTINGS, (settings) => {
  for (const [key, value] of Object.entries(settings)) {
    const input = document.getElementById(key);
    if (!input) continue;
    input.checked = value;
    input.addEventListener("change", () => {
      chrome.storage.sync.set({ [key]: input.checked });
    });
  }
});
