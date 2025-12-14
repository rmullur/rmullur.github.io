# Victorian Newspaper Design System

This document describes the design system for Rishi Mullur's personal website. The aesthetic is inspired by **19th-century Victorian newspapers and broadsheets** — aged paper, ornate typography, decorative flourishes, and a sense of timeless elegance.

---

## Design Philosophy

- **Era**: Victorian England (1837-1901), specifically newspaper/broadsheet design
- **Mood**: Scholarly, refined, nostalgic, authoritative
- **Feel**: Like reading a treasured newspaper on an antique desk
- **Key Elements**: Aged paper textures, ornate borders, decorative typography, fleurons and dingbats

---

## Color Palette

All colors are defined as CSS custom properties in `src/styles/newspaper.css`:

### Paper & Background
```css
--paper-bg: #f5e6c8;        /* Main aged paper color */
--paper-light: #faf3e3;     /* Lighter paper for highlights */
--paper-dark: #e5d4b0;      /* Darker paper for shadows/edges */
--paper-edge: #d4c195;      /* Paper edge color */
--paper-stain: rgba(180, 140, 80, 0.08);  /* Subtle coffee stain effect */
```

### Ink Colors
```css
--ink-black: #1a1410;       /* Primary text - deep black-brown */
--ink-dark: #2d251c;        /* Secondary text */
--ink-medium: #4a3d2e;      /* Tertiary text, descriptions */
--ink-faded: #6b5d4a;       /* Meta text, dates, captions */
--ink-light: #8a7a64;       /* Very subtle text */
```

### Accent Color
```css
--accent-red: #7b1818;      /* Deep Victorian red - for drop caps, hover states */
--accent-red-dark: #5a1010; /* Darker variant */
```

### Borders & Decorative Rules
```css
--border-dark: #2d251c;     /* Primary borders */
--border-medium: #5a4d3a;   /* Secondary borders */
--border-light: #8a7a64;    /* Subtle borders, dotted lines */
--border-decorative: #3d3222; /* Ornamental elements */
```

---

## Typography

### Font Stack (loaded from Google Fonts)

```css
--font-masthead: 'Cinzel Decorative', 'Times New Roman', serif;
--font-headline: 'Playfair Display', 'Georgia', serif;
--font-body: 'Libre Baskerville', 'Baskerville', 'Georgia', serif;
--font-meta: 'Cormorant SC', 'Georgia', serif;
--font-decorative: 'Playfair Display', 'Georgia', serif;
```

### Usage Guidelines

| Element | Font | Size | Weight | Other |
|---------|------|------|--------|-------|
| Site Title (Masthead) | `--font-masthead` | 4rem | 900 | uppercase, letter-spacing: 0.08em |
| Page Titles (h1) | `--font-headline` | 2.75rem | 700 | uppercase optional |
| Section Headers (h2) | `--font-headline` | 1.85rem | 700 | — |
| Subheadings (h3) | `--font-headline` | 1.4rem | 700 | — |
| Body Text | `--font-body` | 1rem (18px base) | 400 | line-height: 1.75, justified |
| Meta/Dates | `--font-meta` | 0.8-0.9rem | 400 | uppercase, letter-spacing: 0.1em |
| Drop Caps | `--font-decorative` | 4.5rem | 400 | color: accent-red |

### Drop Caps

First letters of articles should be styled as Victorian drop caps:

```css
.drop-cap {
  float: left;
  font-family: var(--font-decorative);
  font-size: 4.5rem;
  line-height: 0.75;
  padding-right: var(--space-sm);
  padding-top: 0.15em;
  color: var(--ink-black);  /* or --accent-red for emphasis */
  text-shadow: 1px 1px 0 rgba(0,0,0,0.1);
}
```

---

## Spacing System

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

---

## Decorative Elements

### Victorian Ornaments (Unicode Characters)

Use these throughout the design for authentic Victorian feel:

| Character | Name | Usage |
|-----------|------|-------|
| ❧ | Rotated Floral Heart | Section dividers, title flourishes |
| ☙ | Reversed Rotated Floral Heart | Paired with ❧ |
| ❦ | Floral Heart | Standalone ornaments |
| ✦ | Black Four Pointed Star | Small accents, separators |
| ✧ | White Four Pointed Star | Lighter accents |
| ❖ | Black Diamond Minus White X | Center of ornate rules |
| ◆ | Black Diamond | Bullet points, separators |
| ◇ | White Diamond | Lighter variant |
| · | Middle Dot | Inline separators |

### Ornament Component

Use the `<Ornament>` component with these types:

```astro
<Ornament type="rule" />      <!-- Simple horizontal line -->
<Ornament type="double" />    <!-- Double horizontal lines -->
<Ornament type="ornate" />    <!-- Decorative with ☙ ❖ ❧ pattern -->
<Ornament type="flourish" />  <!-- Single ❦ character -->
<Ornament type="victorian" /> <!-- ✧ ❧ ✧ pattern -->
<Ornament type="end" />       <!-- — ✦ — end mark -->
```

### Decorative Borders

Victorian boxes should have double borders:

```css
.victorian-box {
  border: 2px solid var(--border-dark);
  position: relative;
}

/* Inner border */
.victorian-box::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 1px solid var(--border-medium);
  pointer-events: none;
}
```

### Corner Flourishes

Add to containers for Victorian feel:

```css
.container::before,
.container::after {
  content: '❧';
  position: absolute;
  font-size: 1.8rem;
  color: var(--border-decorative);
  opacity: 0.5;
}

.container::before {
  top: 16px;
  left: 16px;
}

.container::after {
  bottom: 16px;
  right: 16px;
  transform: rotate(180deg);
}
```

---

## Component Patterns

### Section Headers

Always use the `<SectionHeader>` component:

```astro
<SectionHeader title="Latest Dispatch" />
```

This renders with decorative lines and ✦ ornaments.

### Article Cards

Featured articles get ornate boxes:
- Border with inner frame
- ❦ ornaments above and below
- ☙ and ❧ flanking the date
- Title in uppercase headline font

List articles get:
- ❧ bullet point
- Dotted leader lines to date
- Hover turns accent-red

### Notice/Link Boxes

For external links (social media, etc.):

```css
.notice-box {
  border: 2px solid var(--border-dark);
  background: var(--paper-light);
  padding: var(--space-lg) var(--space-md);
  /* Add inner border with ::before */
  /* Add ✦ ornament with ::after */
}
```

### Buttons/CTAs

Style as Victorian notices rather than modern buttons:

```css
.cta {
  font-family: var(--font-meta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: var(--space-xs) var(--space-md);
  border: 1px solid var(--border-medium);
  background: var(--paper-light);
}
```

---

## Page Structure

### Base Layout

Every page uses the newspaper "page" metaphor:

```css
.page-wrapper {
  max-width: min(900px, calc(100% - 4rem));
  margin: 2rem auto;
  padding: var(--space-2xl);
  background-color: var(--paper-bg);
  /* Aged paper gradient */
  /* Triple border (border + outline) */
  /* Inner shadow for aged effect */
  /* Corner flourishes with ::before/::after */
}
```

### Masthead

The site header mimics a Victorian newspaper masthead:
- Double-line borders top and bottom
- Volume/Issue numbers
- Location (San Francisco)
- Date in Victorian format: "Sunday, the 14th of December, 2024"
- Site title in Cinzel Decorative
- Tagline in italics: "Wherein the Author shares his Thoughts..."

### Footer

Simple centered footer with:
- Ornate divider
- Establishment date and location
- Meta font, uppercase, letter-spacing

---

## Date Formatting

Always use Victorian newspaper date format:

```javascript
// Full format (masthead)
"Sunday, the 14th of December, 2024"

// Article format  
"The 23rd of June, 2024"

// Short format (lists)
"Jun 23, 2024"
```

Use ordinal suffixes: 1st, 2nd, 3rd, 4th, etc.

---

## Text Styling

### Body Text
- Justified alignment (`text-align: justify`)
- Hyphenation enabled (`hyphens: auto`)
- First paragraph: no indent, drop cap
- Subsequent paragraphs: `text-indent: 1.5em`

### Links
- No underline by default
- Subtle bottom border: `border-bottom: 1px solid var(--border-light)`
- Hover: `color: var(--accent-red)`, border turns red

### Horizontal Rules in Content
Use ornate SVG dividers, not plain `<hr>`:

```css
hr {
  background-image: url("data:image/svg+xml,...");
  /* Decorative pattern with dots and lines */
  height: 20-30px;
  border: none;
}
```

---

## Image Styling

Apply sepia filter for period feel:

```css
img {
  filter: sepia(20%) contrast(1.05);
  border: 2px solid var(--border-dark);
}
```

Portrait images should be in oval frames with decorative borders.

---

## Responsive Design

### Breakpoints
- Desktop: > 900px (full Victorian styling)
- Tablet: 600-900px (reduced padding, smaller fonts)
- Mobile: < 600px (single column, simplified ornaments)

### Mobile Adjustments
- Hide complex ornaments (corner flourishes)
- Reduce font sizes
- Remove justified text (use left-align)
- Simplify borders
- Stack grid layouts

---

## File Structure

```
src/
├── components/
│   ├── Masthead.astro      # Site header
│   ├── Ornament.astro      # Decorative dividers
│   ├── SectionHeader.astro # Section titles
│   └── ArticleCard.astro   # Post listings
├── layouts/
│   ├── BaseLayout.astro    # Page wrapper, fonts
│   └── PostLayout.astro    # Article pages
├── pages/
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   └── writing/
│       ├── index.astro     # Archive
│       └── [...slug].astro # Individual posts
├── content/
│   └── writing/            # Markdown posts
└── styles/
    └── newspaper.css       # Global styles & variables
```

---

## Adding New Components

When creating new components, follow these principles:

1. **Use CSS variables** for all colors, fonts, spacing
2. **Add Victorian borders** (double-line patterns)
3. **Include ornamental characters** where appropriate
4. **Use the established font hierarchy**
5. **Maintain sepia/aged paper aesthetic**
6. **Test at all breakpoints**

### Example: New Component

```astro
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<div class="new-component">
  <span class="ornament">❧</span>
  <h3 class="title">{title}</h3>
  <span class="ornament">❧</span>
</div>

<style>
  .new-component {
    border: 2px solid var(--border-dark);
    background: var(--paper-light);
    padding: var(--space-md);
    text-align: center;
    position: relative;
  }
  
  .new-component::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    border: 1px solid var(--border-medium);
    pointer-events: none;
  }
  
  .title {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
  }
  
  .ornament {
    color: var(--border-dark);
    opacity: 0.6;
    margin: 0 var(--space-sm);
  }
</style>
```

---

## Quick Reference

### Colors (most used)
- Background: `var(--paper-bg)` / `var(--paper-light)`
- Text: `var(--ink-black)` / `var(--ink-medium)` / `var(--ink-faded)`
- Accent: `var(--accent-red)`
- Borders: `var(--border-dark)` / `var(--border-medium)`

### Fonts (most used)
- Headlines: `var(--font-headline)` (Playfair Display)
- Body: `var(--font-body)` (Libre Baskerville)
- Meta: `var(--font-meta)` (Cormorant SC)

### Common Ornaments
- `❧` `☙` - Floral hearts (headers)
- `✦` - Stars (separators)
- `❖` `◆` - Diamonds (center points)

---

*This design system evokes the gravitas and craftsmanship of Victorian-era publishing while remaining functional for modern web use.*
