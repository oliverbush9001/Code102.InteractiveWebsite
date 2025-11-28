# Copilot Instructions for Code102.InteractiveWebsite

## Project Overview
This is a personal, multi-page website designed to help high school and college students struggling with mental health issues (autism, ADHD, OCD) by sharing Oliver Bush's personal journey and insights. The site is a simple, accessible static HTML/CSS/JavaScript application with three main pages: Home, About, and Examples.

## Architecture & Key Patterns

### Single-Page Navigation System
- **Location**: `JB01.OB.InteractiveWebsite/script.js`
- **Pattern**: The site uses a declarative `pages` array that defines all navigable pages with metadata (`name`, `file`, `id`)
- **Key behavior**: JavaScript dynamically injects a navigation bar at the top of every page and highlights the active page using the `.active` CSS class
- **Page detection**: Extracts current page from `window.location.pathname` by parsing filename before the dot
- **Important**: Each `.htm` file must include `<script src="script.js"></script>` at the end to enable navigation

### Styling Convention
- **Location**: `JB01.OB.InteractiveWebsite/style.css`
- **Navigation styling**: Uses flexbox with `justify-content: center` and `gap: 10px` for horizontal link layout
- **Active page indicator**: The `.active` class on nav links uses `background-color: #98AFE9`
- **Hover state**: Navigation links change to `#FAA1A1` on hover
- **Color scheme**: Dark blue nav (`#364978`), light gray backgrounds (`#f3f3f3`), with accent colors for interactivity

## Development Guidelines

### Adding New Pages
1. Create a new `.htm` file in `JB01.OB.InteractiveWebsite/` with the naming convention: `{page-name}.htm`
2. Add an entry to the `pages` array in `script.js` with:
   - `name`: Display name for navigation (e.g., "Home")
   - `file`: Filename (e.g., "home.htm")
   - `id`: Page identifier for active link detection (must match filename without extension)
3. Include the CSS link and script tag in the new HTML file (follow template in existing pages)
4. Ensure the page ID in the pages array matches the URL filename for active state detection

### HTML Structure
- All pages use a standard template: DOCTYPE → meta tags → title/CSS link → `<main>` content → script tag
- Use semantic HTML with `<main>` for content and `<section>` elements for organizing content on larger pages
- Include `lang="en"` in the `<html>` tag and proper meta viewport tag for responsiveness

### Code Comments
- Files include header comments with: title, description, author name, and date
- Inline comments in CSS explain MDN references and CSS properties
- JavaScript includes inline comments explaining key sections (navigation, active link detection)

## Content & Tone Considerations
- **Authenticity**: The site prioritizes honest, personal storytelling over generic advice
- **Accessibility**: Content discusses sensitive topics (depression, self-harm, suicide) with appropriate trigger warnings
- **Target audience**: High school and college students with high-functioning autism, ADHD, or OCD
- **Future scope**: The Examples page suggests the site may eventually expand to showcase Processing/creative coding work

## File Organization
```
JB01.OB.InteractiveWebsite/
  ├── home.htm          # Landing page with Oliver's introduction
  ├── about.htm         # About section (stub, needs expansion)
  ├── examples.htm      # Showcase of examples with inner-page navigation
  ├── script.js         # Navigation system and active page logic
  ├── style.css         # Global styling (navigation, main content, layout)
  └── media/            # Images and video assets referenced in examples.htm
```

## No Build or Test Infrastructure
This is a static site with no build process, package manager, or testing framework. Changes are directly reflected when opening files in a browser or local server.
