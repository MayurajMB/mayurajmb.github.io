---
name: ui-design
description: >
  Enforces the ConnectHealth.ai / SMART on FHIR presentation design system.
  Use this skill whenever creating, modifying, or reviewing any HTML, CSS, or
  visual component in the SMART HOE Talk project. It defines all design tokens,
  spacing conventions, typography scales, animation parameters, card anatomy,
  icon usage rules, and color palette decisions.
---

# UI Design Skill — SMART HOE Talk

## Overview

This skill codifies the complete design language of the **SMART on FHIR Deep Dive** presentation, based on the ConnectHealth.ai light-mode design system. Always defer to this document when making any UI decision.

---

## 1. Color Palette

All colors are declared as CSS custom properties in `:root` and must never be hardcoded.

| Token                  | Value     | Role                                                      |
|------------------------|-----------|-----------------------------------------------------------|
| `--color-primary`      | `#38b8b3` | Teal — primary brand, links, h3 headings, active icons    |
| `--color-secondary`    | `#7234ae` | Deep Purple — active nav, warnings, accents               |
| `--color-accent`       | `#c7a4ff` | Light Purple — decorative highlights, badges              |
| `--color-bg-main`      | `#ffffff` | Page background and card surface                          |
| `--color-bg-sidebar`   | `#f9fafb` | Sidebar + table header + muted surface                    |
| `--color-text-dark`    | `#3a3a3a` | Primary body text, headings                               |
| `--color-text-muted`   | `#64748b` | Secondary/helper text, placeholders                       |
| `--color-border`       | `#e2e8f0` | All dividers, card borders, table row borders             |
| `--color-callout-bg`   | `#f8fafc` | Default callout / info box background                     |

### Semantic Overlays (alpha-based, never separate tokens)
- **Primary tint bg**: `rgba(56, 184, 179, 0.05)` — tip callouts, teal-accented cards
- **Secondary tint bg**: `rgba(114, 52, 174, 0.08)` — active nav item, warning callouts
- **Danger surface**: `rgba(239, 68, 68, 0.04)` — negative/destructive feature cards
- **Success**: `#22c55e` (inline only, for checkmark icons)
- **Danger**: `#ef4444` (inline only, for X icons and error states)

### Dark Code Blocks
- Background: `#1e1e1e`, Header strip: `#2a2a2a`, Header text: `#a0a0a0`
- Code text: `#e2e8f0`

---

## 2. Typography

**Font family**: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`  
**Load weights**: 300, 400, 500, 600, 700 from Google Fonts.

### Type Scale

| Element      | Font Size   | Weight | Line Height | Letter Spacing | Color              |
|--------------|-------------|--------|-------------|----------------|--------------------|
| `h1`         | `2.5rem`    | 700    | 1.3         | `-0.02em`      | `--color-text-dark` |
| `h2`         | `1.75rem`   | 600    | 1.3         | default        | `--color-text-dark` |
| `h3`         | `1.4rem`    | 600    | 1.3         | default        | `--color-primary`  |
| `h4`         | `1.15rem`   | 600    | 1.3         | default        | `--color-text-dark` |
| Body `p`     | `1.05rem`   | 400    | 1.6         | default        | `--color-text-dark` |
| Lead text    | `1.25rem`   | 400    | 1.6         | default        | `--color-text-muted` |
| `li`         | `1.05rem`   | 400    | 1.6         | default        | `--color-text-dark` |
| Sidebar nav  | `0.95rem`   | 500    | —           | default        | `--color-text-muted` |
| Category label | `0.75rem` | 700    | —           | `0.1em`        | `#9ca3af`          |
| Table header | `0.9rem`    | 600    | —           | `0.05em`       | `--color-text-muted` |
| Code inline  | `0.9em`     | 400    | —           | default        | `--color-secondary` |
| Monospace    | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` |

### Rules
- Minimum body text: **14px** (`0.875rem`). Never go below this.
- Never use font-weight below 400 for body content; 300/light only for large display text.
- All category/label text MUST be uppercased via CSS (`text-transform: uppercase`).
- `h3` inside feature cards is reset to `--color-text-dark` (no teal override in cards).

---

## 3. Spacing System

Use an **8-point grid**. All spacing values must be multiples of 8px (or 4px for micro-adjustments).

| Scale Token | px value | Usage |
|-------------|----------|-------|
| `4px`  | 0.25rem | Icon margin micro-adjustment, inline gaps |
| `8px`  | 0.5rem  | Nav item gap, tag padding, tight inline spacing |
| `12px` | 0.75rem | List item `margin-bottom`, table cell padding vertical |
| `16px` | 1rem    | Default component padding, icon `margin-right`, base list padding |
| `24px` | 1.5rem  | Card padding horizontal, section gaps, `margin-bottom` for paragraphs |
| `32px` | 2rem    | Callout margin, table container margin |
| `40px` | 2.5rem  | Sidebar header margin, h3 `margin-top`, content wrapper padding |
| `48px` | 3rem    | h1/h2 `margin-top`, page-navigation `margin-top` |
| `60px` | 3.75rem | Content wrapper top/bottom padding |
| `80px` | 5rem    | Footer margin-top, section bottom margin |

### Content Margins
- Desktop content wrapper (`content-wrapper`): `padding: 60px 40px`
- Mobile (`≤800px`): `padding: 40px 24px`
- Sidebar: `padding: 40px 24px`
- Sidebar width: `320px`

### Lead text
- Has a `border-left: 4px solid --color-primary` with `padding-left: 16px` and `margin-bottom: 40px`.

---

## 4. Card Layout

### Feature Card (`.feature-card`)
```
background:  --color-bg-main
border:      1px solid --color-border
border-radius: 12px
padding:     32px 24px
text-align:  center (default) | left (override via style attr)
box-shadow:  0 4px 6px -1px rgba(0,0,0,0.02)
transition:  all 0.2s ease-in-out
```

**Hover state:**
```
transform:     translateY(-4px)
box-shadow:    0 10px 15px -3px rgba(0,0,0,0.05)
border-color:  --color-primary
```

**Icon inside card:** 32×32px, color `--color-primary`, `margin-bottom: 16px`

### Feature Grid (`.feature-grid`)
```
display: grid
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
gap: 24px
margin: 40px 0
```

### Callout / Info Box (`.callout`)
```
background:    --color-callout-bg
border:        1px solid --color-border
border-radius: 12px
padding:       24px
margin:        32px 0
display:       flex
```
- `.callout.tip` → teal tint bg + teal border
- `.callout.warning` → purple tint bg + purple border
- Icon: `margin-right: 16px`, `flex-shrink: 0`

### Reference Card (`.ref-card`)
```
border:        1px solid #818cf8
border-radius: 8px
padding:       16px
background:    white
display:       flex; flex-direction: column
```

### Benefits List Item (`.benefits-list li`)
```
display:       flex; align-items: flex-start
margin-bottom: 16px
background:    --color-bg-sidebar
padding:       16px
border-radius: 8px
border:        1px solid --color-border
```

---

## 5. Animation & Transitions

### Global Transition
All interactive elements use: `transition: all 0.2s ease-in-out`
(defined as `--transition` in `:root`)

### Page Section Transition (SPA)
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Duration: 0.4s, easing: ease-in-out */
```

### Sidebar Mobile Slide
```
transition: transform 0.3s ease
```
Open: `transform: translateX(0)` + `box-shadow: 4px 0 20px rgba(0,0,0,0.1)`
Closed: `transform: translateX(-100%)`

### Rules
- **Duration range**: 200ms (micro-interactions, hovers) → 400ms (page transitions)
- **Target 60 FPS**: Animate only `transform`, `opacity`, `box-shadow`, and `border-color`. Never animate `width`, `height`, or `top`/`left`.
- Hover lift: `translateY(-4px)` — used on cards only.
- Never use `animation` for button press; use `transition` only.
- Respect `prefers-reduced-motion`: wrap decorative keyframe animations in `@media (prefers-reduced-motion: no-preference)`.

---

## 6. Icon Usage

**Library**: [Feather Icons](https://feathericons.com) — `<i data-feather="icon-name"></i>`  
Initialized via `feather.replace()` on DOM load.

### Sizing
| Context | Size |
|---------|------|
| Nav link icons | 18×18px |
| Nav button icons | 18×18px |
| Feature card icons | 32×32px |
| Callout icons | Default (24px) |
| Inline list icons | Default (24px), `margin-right: 16px` |

### Color
- Default card icons: `--color-primary` (teal)
- Success/check icons: `#22c55e`
- Error/X icons: `#ef4444`
- Warning icons: `--color-secondary` (purple)
- Callout tip icon: `--color-primary`
- Callout warning icon: `--color-secondary`

### Rules
- Icons MUST always have a text label alongside them (never icon-only for navigation).
- Use `data-feather` attribute, never inline SVG or img tags.
- Do not resize icons using `width`/`height` on the `<i>` tag; apply to the rendered SVG via CSS.
- Icon choice should be semantic: `shield` for security, `key` for OAuth, `user-check` for OIDC, `code` for development, `lock`/`unlock` for auth states.

---

## 7. Navigation

### Sidebar Nav Link
```
padding:       10px 16px
border-radius: 8px
font-size:     0.95rem; font-weight: 500
color:         --color-text-muted (default)
```

**Hover**: `background: rgba(56,184,179,0.05)`, color → `--color-text-dark`  
**Active**: `background: rgba(114,52,174,0.08)`, color → `--color-secondary`, weight 600

### Page Navigation Buttons (`.nav-btn`)
```
padding:    12px 24px
background: --color-bg-sidebar
border:     1px solid --color-border
border-radius: 8px
font-weight: 500
```
**Hover**: `background: --color-primary`, color: `white`, border: `--color-primary`

---

## 8. Tables

### Reference Table (`.ref-table`)
- `th`: background `#7234ae`, color white, weight 500, padding `12px 16px`
- `td`: padding `12px 16px`, border-bottom `1px solid #e2e8f0`, color `#334155`, bg white
- Rounded corners via `border-radius: 8px; overflow: hidden` on the table wrapper
- Box shadow: `0 4px 6px -1px rgba(0,0,0,0.05)`

### Standard Table
- `th`: background `--color-bg-sidebar`, weight 600, color `--color-text-muted`, size `0.9rem`, uppercase, letter-spacing `0.05em`
- Cell padding: `16px 24px`

---

## 9. Code Blocks

### Inline Code
```
background:    --color-bg-sidebar
color:         --color-secondary
padding:       4px 8px
border-radius: 6px
border:        1px solid --color-border
font-size:     0.9em
```

### Block Code (`.code-block`)
```
background:    #1e1e1e
border-radius: 12px
margin:        24px 0
overflow:      hidden
```
Header strip (`.code-header`): `background: #2a2a2a`, color `#a0a0a0`, size `0.8rem`, uppercase, padding `8px 16px`  
Code body: padding `24px`, color `#e2e8f0`, font-size `1rem`

### JSON Syntax Colors (in dark code blocks)
- Keys: `#38bdf8` (sky blue)
- Strings: `#fca5a5` (soft red)
- Numbers: `#86efac` (soft green)
- Booleans: `#c084fc` (purple)

---

## 10. Responsive Breakpoints

| Breakpoint | Rule |
|------------|------|
| `≤ 800px`  | Sidebar hides (slide-out drawer), mobile header shows, content fills full width |
| Desktop    | Sidebar fixed at 320px, content offset to the right |

Mobile header: 60px tall, `z-index: 100`, matches main bg with a bottom border.

---

## How to Apply This Skill

When asked to create or modify UI:

1. **Always reference tokens** — never use hardcoded color values except for the explicitly listed exceptions above (dark code blocks, semantic inline colors).
2. **Follow the spacing table** — snap all padding, margin, and gap values to the 8pt grid.
3. **Use Feather Icons** — verify whether the icon semantically matches the content.
4. **Animate purposefully** — hover lifts on cards, `fadeIn` on page transitions, sidebar slide on mobile.
5. **Respect the type scale** — pick the closest scale level rather than inventing new sizes.
6. **Mobile-first validation** — after any layout change, mentally verify the `≤800px` breakpoint behavior.
