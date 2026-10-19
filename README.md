# Cricinfo Tweaks

A Chrome extension for [Cricinfo](https://www.cricinfo.com/). It works on `cricinfo.com` and `espncricinfo.com`.

## Features

- Removes ads. This includes the large banner above the fold on the home page and on match pages.

## Install

1. Open `chrome://extensions`.
2. Turn on Developer mode.
3. Click "Load unpacked" and select this folder.

## How it works

The extension adds one stylesheet, `src/hide-ads.css`, at `document_start`. The stylesheet hides the Cricinfo ad slot containers, so the ads do not take up space on the page.

If a new ad shows, open DevTools on it and find the nearest container with an `ad-` id or an `adSlot` class. Add its selector to `src/hide-ads.css`, then click the reload button for the extension in `chrome://extensions`.
