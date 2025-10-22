# Merryway Marketing Site

A modern, magical marketing site for Merryway — a family planning app that helps households "find their merry way." Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🎨 Design System

The site uses a carefully crafted design system with:

- **Colors**: Periwinkle primary (#7B6EF6), ink dark (#0F1222), soft backgrounds
- **Typography**: Sora for headings, Inter for body text
- **Components**: Reusable components with consistent styling
- **Animations**: Framer Motion for smooth, accessible interactions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/subscribe/      # Email subscription endpoint
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── Navigation.tsx     # Sticky navigation
│   ├── HeroSection.tsx   # Hero with montage cards
│   ├── FeaturesSection.tsx # Value pillars
│   ├── HowItWorksSection.tsx # Core loop scroller
│   ├── MorganDemoSection.tsx # Chat demo
│   ├── PlansSection.tsx  # Plans & itinerary
│   ├── TrailsSection.tsx # Metrics tiles
│   ├── MemoryMatchSection.tsx # Game demo
│   ├── FAQSection.tsx    # Accordion FAQ
│   ├── EmailCaptureSection.tsx # Email form
│   ├── Footer.tsx        # Site footer
│   ├── Logo.tsx          # Brand logo
│   ├── Sparkle.tsx       # Animated sparkle
│   ├── Button.tsx        # Button component
│   ├── Card.tsx           # Card component
│   └── Dialog.tsx        # Modal component
└── lib/
    ├── brand.ts          # Design tokens
    ├── utils.ts          # Utility functions
    └── seo.ts            # SEO configuration
```

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# Email Provider (choose one)
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
# OR
SENDGRID_API_KEY=your_sendgrid_api_key
# OR
RESEND_API_KEY=your_resend_api_key

# Analytics (optional)
GOOGLE_ANALYTICS_ID=your_ga_id
AMPLITUDE_API_KEY=your_amplitude_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Email Provider Setup

The site includes a `/api/subscribe` endpoint that currently stores emails to a JSON file in development. To enable real email sending:

1. Choose an email provider (Mailgun, SendGrid, Resend, etc.)
2. Add your API credentials to `.env.local`
3. Update `src/app/api/subscribe/route.ts` to use your provider

### Analytics Setup

To add analytics:

1. Add your Google Analytics ID to `.env.local`
2. Uncomment the analytics code in `src/app/layout.tsx`
3. Add your Amplitude key if using Amplitude

## 🎯 Features

### SEO & Performance
- ✅ Next.js App Router with TypeScript
- ✅ Tailwind CSS with custom design system
- ✅ Framer Motion animations (respects reduced motion)
- ✅ SEO optimization with next-seo
- ✅ Structured data (SoftwareApplication + FAQPage)
- ✅ Sitemap and robots.txt
- ✅ Open Graph and Twitter meta tags

### Components
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with animated montage cards
- ✅ Feature cards with hover animations
- ✅ Horizontal scroller for "How it Works"
- ✅ Morgan chat demo with research cards
- ✅ Plans section with timeline mockup
- ✅ Trails metrics tiles
- ✅ Memory Match game demo modal
- ✅ FAQ accordion with schema markup
- ✅ Email capture form with validation
- ✅ Footer with links and branding

### Accessibility
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ ARIA labels
- ✅ Color contrast compliance
- ✅ Reduced motion support

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design
- Touch-friendly interactions
- Optimized images with next/image
- Fast loading with code splitting

## 🎨 Customization

### Colors
Edit `src/lib/brand.ts` to customize the color palette.

### Typography
Update font imports in `src/app/layout.tsx` and `src/app/globals.css`.

### Content
All copy is in the component files. Update the text directly in each component.

### Images
Replace placeholder images in the components with real app screenshots.

## 🔍 Development

### Code Quality
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting (recommended)

### Performance
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- Optimized images and fonts
- Code splitting and lazy loading

## 📄 License

This project is proprietary to Merryway. All rights reserved.

## 🤝 Support

For questions or support:
- Email: hello@merryway.app
- Support: support@merryway.app

---

Built with ❤️ for families finding their merry way.