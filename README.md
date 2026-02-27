# Blindtype

A focused writing environment for private, distraction-free writing sessions. Perfect for writing sensitive information in public spaces or when you want to keep your work private from prying eyes.

## Features

- 🔒 **Privacy First** - No data ever leaves your device. All content is stored locally in your browser.
- 👁️ **Instant Hiding** - Click anywhere in the textarea to instantly hide your writing from shoulder surfers.
- 💾 **Auto-Save** - Your work is automatically saved every 5 seconds. Up to 5 drafts are kept.
- 📝 **Markdown Export** - Download your writing as Markdown files with timestamped filenames.
- 🎨 **Modern Design** - Clean, distraction-free interface with dark/light mode support that adapts to your system preferences.
- 📱 **Responsive** - Works beautifully on desktop and mobile devices.

## How to Use

1. Start typing in the text area
2. Your work is automatically saved every 5 seconds
3. Click anywhere in the textarea to hide your writing (a full-screen overlay will appear)
4. Click "Reveal Text" to continue writing
5. Click "Save as Markdown" to download your work
6. Use "Restore Draft" to recover your last saved draft

## Technical Details

- **Frontend**: Plain HTML, CSS, and JavaScript (no frameworks)
- **Styling**: CSS Grid and Flexbox for modern layouts
- **Fonts**: Inter for UI, JetBrains Mono for the editor (loaded from Google Fonts)
- **Storage**: Browser `localStorage` for auto-saving drafts
- **Deployment**: Single-page application, can be hosted anywhere

## Development

Open `index.html` in a browser or run a local server:

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

## License

MIT

## Credits

Built by [Jovan Lukic](https://github.com/trancerights)
