# Jerry Lin - Personal Portfolio Website

A professional, modern personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a stunning 3D hero section, smooth animations, and a fully functional blog system.

## Features

### Core Functionality
- **3D Hero Section**: Interactive Three.js powered 3D elements with particle effects
- **Portfolio Showcase**: Dynamic project gallery with category filtering
- **Experience Timeline**: Animated timeline displaying work experience and education
- **Blog System**: MDX-powered blog with search and category filtering
- **Contact Form**: Functional contact section with form validation
- **Responsive Design**: Fully responsive across all devices

### Technical Highlights
- **Next.js 14**: App router, server components, and optimized performance
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth scroll animations and page transitions
- **Three.js/React Three Fiber**: 3D graphics and WebGL animations
- **MDX Support**: Write blog posts with components
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JerryLin828/JerryLin828.github.io.git
cd JerryLin828.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### GitHub Pages Deployment

This site is configured to deploy to GitHub Pages. To deploy:

1. Build the static export:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Vercel Deployment

Alternatively, you can deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JerryLin828/JerryLin828.github.io)

## Customization

### Personal Information
Update your personal information in the following files:
- `app/layout.tsx` - Site metadata and SEO
- `components/HeroSection.tsx` - Hero text and roles
- `components/Footer.tsx` - Social links
- `components/ContactSection.tsx` - Contact information

### Projects
Edit the projects array in `components/PortfolioSection.tsx`

### Experience
Update the experiences array in `components/ExperienceSection.tsx`

### Blog Posts
1. Create MDX files in `content/blog/`
2. Update the blog posts array in `components/BlogList.tsx`

### Styling
- Colors: Edit the theme in `tailwind.config.ts`
- Global styles: Modify `app/globals.css`

## Project Structure

```
├── app/                   # Next.js app directory
│   ├── blog/             # Blog pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── Hero3D.tsx       # 3D hero background
│   ├── HeroSection.tsx  # Hero content
│   ├── PortfolioSection.tsx
│   ├── ExperienceSection.tsx
│   ├── BlogPreview.tsx
│   ├── ContactSection.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── content/             # MDX content
│   └── blog/           # Blog posts
├── lib/                # Utilities
├── public/             # Static assets
└── package.json

```

## Technologies Used

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Blog**: MDX
- **Icons**: Heroicons
- **Type Animation**: react-type-animation

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized images and lazy loading
- Code splitting and dynamic imports

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!

## Contact

For any questions or suggestions, please reach out:
- GitHub: [@JerryLin828](https://github.com/JerryLin828)
- Email: jerry@example.com

---

Built with 💻 and ☕ by Jerry Lin