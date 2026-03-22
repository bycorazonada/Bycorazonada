# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
---

## Project: ByCorazonada Website

When working inside the `/BYCORAZONADA` folder, follow these additional rules:

### Brand Essence
ByCorazonada is not a luxury charter brand in a traditional sense.
It represents real, unfiltered moments at sea.
Core idea: "Spontaneous decisions that turn into the best stories."
Avoid over-marketing language, generic luxury aesthetics, anything artificial.

### Visual Style
- Feels like shot on a Fuji camera (film look)
- Natural lighting, slightly desaturated tones
- Soft contrast (NOT high contrast)
- Real textures: water, skin, wind, salt

### Color Palette
- Deep Ocean Blue   #2F4858
- Soft Sand Beige   #E6D8C3
- Off White (bg)    #F7F5F2
- Olive Green       #7A8C7B
- Charcoal Black    #1C1C1C

### Typography
- Headings: Playfair Display (primary serif)
- Body: Inter (clean sans-serif)
- Strong contrast between serif and sans
- Headings are dominant, body text minimal
- Always follow the existing typography in the codebase, do not introduce new fonts

### Layout
- Editorial, fluid, not overly spaced
- Balance between air and rhythm
- Avoid excessive whitespace
- Smooth vertical flow, no clutter
- Section spacing:
  - Desktop: ~64px
  - Mobile: ~32px
- Internal spacing: 24px–32px

### Design Approach
- Do NOT blindly match references
- Adapt and refine for better flow and conversion
- Prioritize clarity, rhythm, and emotion over strict replication

### Content Tone
Simple, human, direct. No hype.
- "Cala Tarida. Agua plana, sin viento."
- "Delfines un rato en el medio."
- "Nada más."

### Sections
Hero → About → Experiences → Fleet → Destinations → Gallery → Contact → Footer

### Assets
- Logo: /brand_assets/byCorazonada_logo.jpg
- Reference: /brand_assets/instagram-reference1.png
- Read both before writing any code

### Tech
- Single file: index.html with embedded CSS and JS
- Google Fonts only, vanilla JS
- Fully responsive down to 390px

### Brand Rule
If it feels like a typical luxury website → WRONG
If it feels like a real moment captured → CORRECT