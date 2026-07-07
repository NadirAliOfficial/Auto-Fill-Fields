# Auto Fill Fields — Chrome Extension

A Chrome extension that automatically fills form fields on client websites. Built for a client to speed up repetitive data entry workflows.

## Features

- Auto-populates form fields on page load
- Configurable field mappings via `config.js`
- Works with text inputs, selects, textareas
- Toggle on/off via extension popup
- Per-site configuration support

## Installation

1. Download or clone this repo
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked** → select the folder

## Configuration

Edit `config.js` to define your field mappings:

```js
const fieldMappings = {
  "#first-name": "John",
  "#last-name": "Doe",
  "#email": "john@example.com",
  "input[name=phone]": "+1-555-0000"
};
```

## File Structure

```
├── manifest.json
├── content.js       # Injected script — fills fields
├── popup.html       # Extension popup UI
├── popup.js         # Toggle logic
├── config.js        # Field mapping config
└── style.css
```

## Tech Stack

- JavaScript (Chrome Manifest V3)
- Chrome Extensions API (content scripts, storage)
- HTML5 / CSS3

## License

MIT
