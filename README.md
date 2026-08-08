# AisleOS

AisleOS is a high-performance category intelligence and retail orchestration platform interface. It is designed to provide real-time category visualization, predictive telemetry, and ingestion of large-scale retail category data.

Built with a cinematic, high-contrast dark-mode interface, AisleOS establishes a professional theme scaffolding utilizing a custom CSS design system, offering hardware-accelerated micro-animations and deep-black aesthetic panels optimized for operations centers.

## Architecture & Features

- **Phase 1 (Current): Brand & CSS Design System**: Custom HSL color tokens, typography scale (`Space Grotesk` & `Inter`), glowing panels, and hardware-accelerated motion components via Framer Motion.
- **Data Ingestion**: Integrated with PapaParse for highly-efficient client-side CSV parsing.
- **Data Visualization**: Configured with Recharts for responsive chart rendering and category metric plots.
- **Zero Configuration Build**: Optimized bundler configuration via Vite and typescript-eslint for strict type safety.

## Tech Stack

- **Core**: React 19, TypeScript 6.0, Vite 5.4
- **Styling**: Vanilla CSS Variables, custom design tokens, Framer Motion
- **Libraries**: Recharts, PapaParse, Lucide React

## Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditanwar/AisleOS.git
   cd AisleOS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:
```bash
npm run dev
```

The application will run on `http://localhost:5173/` by default.

### Build and Deployment

To run a production-ready build:
```bash
npm run build
```

This compiles the TypeScript files and outputs static assets into the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

### Code Quality & Formatting

To run static analysis and lint check:
```bash
npm run lint
```

## Directory Structure

```
├── public/          # Static public assets (SVGs, icons)
├── src/
│   ├── assets/      # Image and media assets
│   ├── App.tsx      # Main application component & layout
│   ├── index.css    # Core design system stylesheet & custom utility variables
│   ├── main.tsx     # React application mounting and entry point
├── eslint.config.js # Linting guidelines configuration
├── tsconfig.json    # TypeScript compiler options
└── vite.config.ts   # Vite bundler configurations
```
