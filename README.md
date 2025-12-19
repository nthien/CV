# Personal Branding Website - Hiền Nguyễn

A modern personal branding website built with Next.js, showcasing professional experience, skills, and projects.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient backgrounds and smooth animations
- 📱 Fully optimized for mobile and desktop
- 🚀 Smooth scrolling navigation
- 💫 Intersection Observer animations
- 🎯 Sections: Hero, About, Skills, Experience, Projects, Education, Contact

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **CSS Modules** - Styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch** - The GitHub Action will automatically:
   - Build the Next.js app
   - Export as static site
   - Deploy to GitHub Pages

3. **Custom Domain (Optional)**:
   - If using a custom domain, update `basePath` in `next.config.js`
   - Add your domain in GitHub Pages settings

## Build for Production

```bash
npm run build
```

The static files will be exported to the `out/` directory, ready for deployment.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   └── Animations.tsx  # Animation effects
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## Customization

- **Colors**: Edit CSS variables in `app/globals.css` (`:root` section)
- **Content**: Update sections in `app/page.tsx`
- **Styling**: Modify `app/globals.css`

## License

© 2024 Hiền Nguyễn. All rights reserved.
