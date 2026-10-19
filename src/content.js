// Each setting maps to a class on <html> that the stylesheets key off.
const NORMAL_CASE_CLASS = "ct-commentary-normal-case";

function applySettings(settings) {
  document.documentElement.classList.toggle(NORMAL_CASE_CLASS, !settings.commentaryAllCaps);
}

// Apply defaults at once, so the page does not flash in ALL CAPS while storage loads.
applySettings(DEFAULT_SETTINGS);
chrome.storage.sync.get(DEFAULT_SETTINGS, applySettings);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "sync") return;
  chrome.storage.sync.get(DEFAULT_SETTINGS, applySettings);
});
