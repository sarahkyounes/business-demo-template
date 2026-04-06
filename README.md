# Business Frontend Engine

## Overview
This is a production-ready, modular frontend template engineered for high-conversion local business websites. It provides a standardized architecture for deploying bespoke digital storefronts while maintaining strict type safety and performance optimization.

## Key Architectural Decisions

### 1. Decoupled Data Layer
All business-specific logic and content are abstracted into a centralized `business.ts` configuration. This allows for near-instant "reskinning" of the application for new clients without modifying core component logic.

### 2. Compositional Component Design
Components are designed using the composition pattern. UI blocks (Hero, Menu, Info, Gallery) are isolated modules that can be reordered or omitted within the root `page.tsx` depending on client requirements.

### 3. Performance & SEO
- **Optimized Assets:** Leverages `next/image` for automated WebP/AVIF delivery and layout shift prevention.
- **Client-Side Optimization:** Interactive elements (Framer Motion) are strictly encapsulated in Client Components to ensure the majority of the page remains static and SEO-friendly.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Interactions:** Framer Motion
- **Tooling:** ESLint, PostCSS

## Development Workflow

1. **Clone & Install:**
   ```bash
   npm install