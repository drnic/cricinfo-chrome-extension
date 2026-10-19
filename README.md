# Cricinfo Tweaks

A Chrome extension for [Cricinfo](https://www.cricinfo.com/). It works on `cricinfo.com` and `espncricinfo.com`.

## Features

- Removes ads. This includes the large banner above the fold on the home page and on match pages.
- Shows the ball-by-ball commentary headlines in normal case, for example "Cummins to Ackerman, no run". To get the site's ALL CAPS style back, click the extension icon and turn on "Commentary headlines in ALL CAPS".

## Install

1. Open `chrome://extensions`.
2. Turn on Developer mode.
3. Click "Load unpacked" and select this folder.

## How it works

The extension adds its stylesheets and `src/content.js` at `document_start`.

- `src/hide-ads.css` hides the Cricinfo ad slot containers, so the ads do not take up space on the page.
- `src/commentary.css` removes the upper-case style from the commentary headlines. It applies only when `<html>` has the `ct-commentary-normal-case` class.
- `src/content.js` reads the settings from `chrome.storage.sync` and sets the classes on `<html>`. The defaults are in `src/settings.js`.
- `src/popup.html` is the settings popup. Each checkbox id is the same as a key in `DEFAULT_SETTINGS`.

If a new ad shows, open DevTools on it and find the nearest container with an `ad-` id or an `adSlot` class. Add its selector to `src/hide-ads.css`, then click the reload button for the extension in `chrome://extensions`.
