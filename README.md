# 🚀 MarTech Agency - Modern Tech & Marketing Website

A production-ready, fully responsive website built with **Next.js 14+** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Perfect for technology and digital marketing agencies.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- ⚡ **Next.js 14+** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌗 **Dark/Light Mode** toggle with next-themes
- 🎬 **Framer Motion** animations
- 📱 **Fully Responsive** (Mobile-first design)
- 🎯 **SEO Optimized** with metadata
- 🧩 **Reusable Components**
- 📄 **Multiple Pages**: Home, About, Services, Portfolio, Contact, Blog
- 💬 **WhatsApp Floating Button**
- ✉️ **Contact Form** with validation
- 🎨 **Glassmorphism** UI effects
- 🚀 **Production Ready**

## 📁 Project Structure

```
martech/
├── app/
│   ├── about/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── blog/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── portfolio/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── Technologies.tsx
│   ├── TestimonialCard.tsx
│   ├── Testimonials.tsx
│   ├── ThemeProvider.tsx
│   └── WhatsAppButton.tsx
├── public/
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.3
- **Animations**: Framer Motion 11.2.10
- **Icons**: Lucide React, React Icons
- **Theme**: next-themes 0.3.0

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone or navigate to the project directory**:
```bash
cd martech
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** and visit:
```
http://localhost:3000
```

🎉 **Your website is now running!**

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Update Company Information

1. **Company Name & Logo**: Edit `components/Navbar.tsx` and `components/Footer.tsx`
2. **Contact Information**: Update `components/Footer.tsx` and `app/contact/page.tsx`
3. **WhatsApp Number**: Edit `components/WhatsAppButton.tsx` (line 4)
4. **Services**: Modify `components/Services.tsx` and `app/services/page.tsx`
5. **Colors**: Adjust `tailwind.config.ts` for custom color schemes

### SEO Metadata

Update metadata in each layout file:
- `app/layout.tsx` - Main site metadata
- `app/about/layout.tsx` - About page
- `app/services/layout.tsx` - Services page
- And so on...

## 📤 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/martech.git
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

✅ **Your site will be live in minutes!**

### Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Environment Variables

If you add environment variables (for forms, analytics, etc.), create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Configuration

### Adding Google Analytics

1. Install the package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Adding Contact Form Backend

To make the contact form functional, integrate with:
- **Formspree**: [formspree.io](https://formspree.io)
- **EmailJS**: [emailjs.com](https://emailjs.com)
- **Resend**: [resend.com](https://resend.com)

Example with Formspree in `app/contact/page.tsx`:
```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  {/* form fields */}
</form>
```

## 📝 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Services, Tech Stack, Testimonials, CTA |
| About | `/about` | Mission, Vision, Values, Timeline, Team |
| Services | `/services` | Detailed service offerings with features |
| Portfolio | `/portfolio` | Case studies and project showcase |
| Contact | `/contact` | Contact form, info, and map |
| Blog | `/blog` | Blog posts listing (ready for dynamic routes) |

## 🎯 Features Implemented

✅ Dark/Light mode toggle  
✅ Smooth scroll animations  
✅ Responsive navigation  
✅ Mobile-friendly design  
✅ Glassmorphism effects  
✅ Gradient text and backgrounds  
✅ Hover animations  
✅ Form validation  
✅ WhatsApp floating button  
✅ SEO metadata  
✅ Loading states  
✅ Testimonials section  
✅ Technologies showcase  
✅ Portfolio with filters  
✅ Blog structure  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support or questions:
- 📧 Email: info@martech.com
- 💬 WhatsApp: +1 (234) 567-890
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/martech/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

**Built with ❤️ by MarTech Agency**

Happy coding! 🚀
