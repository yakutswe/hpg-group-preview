# HPG website - edit and preview in VS Code

## 1. Open the entire project

On Windows, right-click the ZIP and select **Extract All**. Open VS Code, choose **File > Open Folder**, and select the extracted `hpg-vscode-v6` folder. In the Explorer, expand `site`. Do not open the ZIP as if it were a folder.

## 2. See the website while you edit

1. In VS Code press **Ctrl+Shift+X** to open Extensions. Search for **Live Preview** by **Microsoft** (`ms-vscode.live-server`) and click Install.
2. Open `site/index.html`. Click the preview icon at the top right of its editor, or right-click the file and choose **Show Preview**.
3. Keep the preview beside your code. Edit text in `index.html` or styles in `styles.css`; Live Preview refreshes as you edit. Save changes with **Ctrl+S**.
4. To see a full desktop-width view, use the preview menu to open the page in your browser.

If Live Preview is unavailable, open VS Code Terminal (**Ctrl+`**) and run `py -m http.server 8000 -d site`, then open `http://localhost:8000` in your browser. Save edits and refresh the browser. Press **Ctrl+C** in the terminal to stop it.

## 3. Know which file to edit

- `site/index.html` - words, page sections, contact email link, service areas, labels, image positions. Find the phrase you want to change with **Ctrl+F**.
- `site/styles.css` - colors, spacing, typography and mobile styling. Main colors are near the top under `:root`.
- `site/script.js` - gallery categories and photo order. Search for `const galleries`. It also contains the inquiry form's email-draft address, so update that address too if HPG chooses another inbox.
- `site/assets/` - the current illustrative `.webp` pictures. Copy approved HPG photos here and update their filenames and descriptions in `index.html` and `script.js`.

For a gallery photo, add an entry like `['assets/new-kitchen.webp','HPG kitchen with oak cabinets','Modern']` inside the matching `images` list. Keep commas between entries. Other large section pictures (hero, construction, etc.) use `<img src="assets/...">` tags in `index.html`.

## 4. What happens after editing

The VS Code preview is visible only on your computer. It does **not** automatically update the existing private website link. When you approve a change, send the edited folder or ZIP here and I can publish it to the private preview. Later we can connect a GitHub repository to Cloudflare Pages so pushing a change from VS Code updates the public site. Domain and mailbox purchases can wait until the business has approved the content.

The proposed email `info@hpgdesignbuild.com` is not active yet. The contact form currently opens an email draft in the visitor's email app; it does not send an inquiry itself. Confirm the mailbox and recipient before public launch. Replace illustrative images with HPG-approved project photos before making the site public.
