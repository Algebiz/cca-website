---
name: "Charlotte Chinese Academy (CCA)"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#DAD9D8"
    shade-3: "#B6B4B2"
    shade-4: "#858380"
    shade-5: "#54524D"
    shade-6: "#24201A"
    shade-7: "#0C0801"
    white: "#FFFFFF"
  guardsman-red:
    shade-1: "#F9E5E5"
    shade-2: "#F4CCCC"
    shade-3: "#DB4C4C"
    shade-4: "#CC0000"
    shade-5: "#A30000"
    shade-6: "#510000"
    shade-7: "#3D0000"
  salem:
    shade-1: "#E6F0ED"
    shade-2: "#CEE2DB"
    shade-3: "#549983"
    shade-4: "#0B6E4F"
    shade-5: "#08583F"
    shade-6: "#042C1F"
    shade-7: "#032117"
  fun-blue:
    shade-1: "#E8EDF6"
    shade-2: "#D2DBED"
    shade-3: "#6283C0"
    shade-4: "#1F4EA6"
    shade-5: "#183E84"
    shade-6: "#0C1F42"
    shade-7: "#091731"
  buttercup:
    shade-1: "#FDF5E8"
    shade-2: "#FCEBD1"
    shade-3: "#F5BB60"
    shade-4: "#F29E1D"
    shade-5: "#C17E17"
    shade-6: "#603F0B"
    shade-7: "#482F08"

typography:
  heading:
    fontFamily: "Sora"
    fontWeight: 500
  body:
    fontFamily: "Inter"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#0c0801"
    accentHex: "#CC0000"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "chromatic1-shade-1"
    backgroundHex: "#F9E5E5"
    foregroundHex: "#F9E5E5"
    textHex: "#0c0801"
    accentHex: "#CC0000"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#0c0801"
    accentHex: "#CC0000"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# Charlotte Chinese Academy (CCA) — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Guardsman Red** — primary shade: `#CC0000`
- **Salem** — primary shade: `#0B6E4F`
- **Fun Blue** — primary shade: `#1F4EA6`
- **Buttercup** — primary shade: `#F29E1D`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Sora** at weight 500. Body text uses **Inter** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 6px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #0c0801 | #CC0000 | light | `.scheme-1` |
| Scheme 2 | Guardsman Red Lightest (#F9E5E5) | #0c0801 | #CC0000 | light | `.scheme-2` |
| Scheme 3 | Neutral Lightest (#F2F2F2) | #0c0801 | #CC0000 | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
