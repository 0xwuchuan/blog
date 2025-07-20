# Claude Context for Blog Repository

This is the **blog part** of a portfolio website built with Quartz 4. The repository implements a digital garden/blog system that will be integrated with a home page from a sister repository.

## Project Overview

- **Framework**: Quartz 4 (Static Site Generator for digital gardens)
- **Documentation**: https://quartz.jzhao.xyz/
- **Owner**: wuchuan
- **Domain**: blog.wuchuan.xyz
- **Purpose**: Blog/digital garden component of a larger portfolio website
- **Design**: Standard Quartz layout with Flexoki color theme

## Color Theme Implementation

The blog uses the Flexoki color system (https://stephango.com/flexoki) for visual consistency with the portfolio, while maintaining Quartz's original layout and functionality.

### Flexoki Colors Applied

**Dark Mode Colors (applied as default):**

- Background: #100F0F (Flexoki black)
- Light surfaces: #343331 (Flexoki base-850)
- Text: #CECDC3 (Flexoki base-200)
- Secondary text: #878580 (Flexoki base-500)
- Muted text: #575653 (Flexoki base-700)
- Accent: #3AA99F (Flexoki cyan-dark)
- Highlights: #282726 (Flexoki base-900)

### Typography System

- **Headers**: Chivo (for brand consistency)
- **Body**: Source Sans Pro (Quartz default)
- **Code**: JetBrains Mono (Quartz default)

## Development Commands

### Build and Serve

```bash
# Build and serve the site locally
npm run quartz build --serve

# Build and serve docs (for development)
npm run docs
```

### Development Tools

```bash
# Type checking and formatting
npm run check

# Format code
npm run format

# Run tests
npm run test

# Performance profiling
npm run profile
```

### Quartz CLI

```bash
# Direct Quartz commands
npx quartz build
npx quartz build --serve
npx quartz sync
```

## Modified Files

### Core Files Changed

- `quartz/styles/variables.scss` - Added Flexoki color variables
- `quartz/styles/base.scss` - Mapped Flexoki colors to Quartz CSS variables
- `quartz.config.ts` - Updated header font to Chivo

### Implementation Details

The color implementation is minimal and non-intrusive:

```scss
// Simple Flexoki color mapping to existing Quartz variables
:root {
  // Dark mode colors (default)
  --light: #100f0f; // Background
  --lightgray: #343331; // Light surfaces
  --gray: #575653; // Muted text
  --darkgray: #cecdc3; // Primary text
  --dark: #cecdc3; // Primary text
  --secondary: #878580; // Secondary text
  --tertiary: #3aa99f; // Accent (cyan)
  --highlight: #282726; // Highlights
  --textHighlight: #282726; // Text highlights
}
```

## Project Structure

- `content/` - Markdown content files
- `quartz/components/` - React components for the site (unchanged)
- `quartz/styles/` - SCSS styling files (minimal color changes only)
- `quartz.config.ts` - Main configuration file
- `quartz.layout.ts` - Layout configuration
- `public/` - Static assets and built files

## Integration Notes

This blog repository works in conjunction with a sister repository that implements the home page of the portfolio website. The Flexoki color theme provides visual consistency while preserving Quartz's functionality and layout.

## Content Authoring

Content is written in Markdown and placed in the `content/` directory. Quartz supports:

- Obsidian-flavored Markdown
- GitHub-flavored Markdown
- LaTeX/KaTeX math rendering
- Wikilinks and backlinks
- Frontmatter metadata
- Syntax highlighting

## Design Philosophy

The implementation focuses on:

- **Minimal changes**: Only colors and header typography modified
- **Preserved functionality**: All Quartz features remain intact
- **Standard layout**: No custom layouts or structural changes
- **Brand consistency**: Flexoki colors align with portfolio design

## Deployment

The site builds to the `public/` directory and can be deployed to any static hosting service. The current configuration deploys to blog.wuchuan.xyz subdomain with Flexoki color theming for brand consistency.

## Development Best Practices

- Instead of making custom changes, by default try as much as possible to use the provided configuration methods through QuartzV4