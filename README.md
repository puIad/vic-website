# VIC Website - Next.js

Vision & Innovation Club official website built with Next.js 14 and deployed on Vercel.

## Features

- **Next.js 14** App Router architecture
- **TypeScript** for type safety
- **SASS** support for advanced styling
- **Lottie** animations
- **ScrollReveal** animations
- **Responsive design** with mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd nextjs-app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Project Structure

```
nextjs-app/
├── public/              # Static assets (images, icons, lottie animations)
│   ├── images/          # Event and gallery images
│   ├── Sponsors/        # Sponsor logos
│   ├── menu/            # Menu animation JSON
│   ├── Plus to X/       # FAQ animation JSON
│   └── 404/             # 404 page animation
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.tsx     # Home page
│   │   ├── layout.tsx   # Root layout
│   │   ├── about/       # About page
│   │   ├── community/   # Community pages
│   │   ├── contact/     # Contact page
│   │   ├── events/      # Events page
│   │   ├── policy/      # Privacy policy page
│   │   └── conditions/  # Terms & conditions page
│   ├── components/      # Reusable components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Site footer
│   │   ├── FAQ.tsx      # FAQ accordion component
│   │   ├── Loader.tsx   # Loading animation
│   │   └── Sponsors.tsx # Sponsors carousel
│   └── styles/          # Global styles
│       ├── globals.css  # Main CSS styles
│       └── infinite-scroll.scss  # Carousel animations
├── package.json
├── tsconfig.json
├── next.config.js
└── vercel.json
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## Pages

- **/** - Home page with hero, description, FAQ, CTA, and sponsors
- **/about** - About the club with vision statement
- **/community** - Community page (same as home)
- **/community/members** - Members page (coming soon)
- **/community/testimonials** - Testimonials page (coming soon)
- **/events** - Events page (coming soon)
- **/contact** - Contact page (coming soon)
- **/policy** - Privacy policy (coming soon)
- **/conditions** - Terms & conditions (coming soon)

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Lottie](https://lottiefiles.com/)
- [ScrollReveal](https://scrollrevealjs.org/)
- [Font Awesome](https://fontawesome.com/)

## License

© VIC ENP. All rights reserved.
