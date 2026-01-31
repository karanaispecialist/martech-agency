# 📂 Project Structure Guide

## 🗂️ Complete File Tree

```
martech/
│
├── 📄 Configuration Files (Root Level)
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript settings
│   ├── tailwind.config.ts        # Tailwind CSS config
│   ├── postcss.config.js         # PostCSS config
│   ├── next.config.js            # Next.js config
│   ├── .eslintrc.json            # ESLint rules
│   ├── .gitignore                # Git ignore rules
│   ├── .env.example              # Environment variables template
│   └── .env.local.example        # Local env template
│
├── 📚 Documentation Files
│   ├── README.md                 # Complete documentation (350+ lines)
│   ├── GETTING_STARTED.md        # Quick start & deployment guide
│   ├── START_HERE.md             # First-time setup guide
│   ├── SETUP.md                  # Quick setup checklist
│   ├── BUILD_SUMMARY.md          # Complete build summary
│   └── CHECKLIST.md              # Development checklist
│
├── 📱 App Directory (Next.js App Router)
│   ├── layout.tsx                # Root layout (Navbar, Footer, Theme)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   │
│   ├── 📂 about/
│   │   ├── layout.tsx            # About page layout (SEO)
│   │   └── page.tsx              # About page content
│   │
│   ├── 📂 services/
│   │   ├── layout.tsx            # Services page layout (SEO)
│   │   └── page.tsx              # Services page content
│   │
│   ├── 📂 portfolio/
│   │   ├── layout.tsx            # Portfolio page layout (SEO)
│   │   └── page.tsx              # Portfolio page content
│   │
│   ├── 📂 contact/
│   │   ├── layout.tsx            # Contact page layout (SEO)
│   │   └── page.tsx              # Contact page with form
│   │
│   └── 📂 blog/
│       ├── layout.tsx            # Blog page layout (SEO)
│       └── page.tsx              # Blog listing page
│
├── 🧩 Components Directory (Reusable Components)
│   ├── ThemeProvider.tsx         # Dark/Light mode provider
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer section
│   ├── WhatsAppButton.tsx        # Floating WhatsApp button
│   ├── Hero.tsx                  # Hero/Landing section
│   ├── Services.tsx              # Services grid
│   ├── Technologies.tsx          # Tech stack showcase
│   ├── Testimonials.tsx          # Testimonials section
│   ├── TestimonialCard.tsx       # Individual testimonial card
│   └── CTA.tsx                   # Call-to-action sections
│
├── 📚 Lib Directory (Utilities)
│   ├── utils.ts                  # Helper functions
│   ├── constants.ts              # App constants
│   └── types.ts                  # TypeScript types
│
└── 🎨 Public Directory (Static Assets)
    └── favicon.svg               # Site favicon/logo
```

---

## 🎯 File Purposes

### Configuration Files

#### `package.json`
- Lists all dependencies
- Defines npm scripts (dev, build, start)
- Project metadata

#### `tsconfig.json`
- TypeScript compiler settings
- Path aliases (@/...)
- Strict mode enabled

#### `tailwind.config.ts`
- Custom colors (primary, accent)
- Custom animations
- Extended theme

#### `next.config.js`
- Next.js settings
- Image domains
- React strict mode

---

## 📄 Page Structure

### Each Page Has 2 Files:

#### 1. `layout.tsx` (SEO & Metadata)
```tsx
export const metadata = {
  title: "Page Title",
  description: "Page description for SEO"
}
```

#### 2. `page.tsx` (Content)
```tsx
export default function PageName() {
  return (
    // Page content here
  )
}
```

---

## 🧩 Component Organization

### Layout Components (Used in all pages)
- **Navbar** - Navigation, mobile menu, theme toggle
- **Footer** - Links, contact info, social media
- **WhatsAppButton** - Floating CTA button

### Section Components (Used in specific pages)
- **Hero** - Landing section with animation
- **Services** - Services grid
- **Technologies** - Tech stack display
- **Testimonials** - Client reviews
- **CTA** - Call-to-action sections

### Utility Components
- **ThemeProvider** - Manages dark/light mode
- **TestimonialCard** - Individual testimonial

---

## 📊 Code Flow

### 1. Entry Point
```
app/layout.tsx (Root Layout)
    ↓
Wraps all pages with:
- Font (Inter)
- ThemeProvider
- Navbar
- Footer
```

### 2. Page Rendering
```
User visits /about
    ↓
app/about/layout.tsx (SEO)
    ↓
app/about/page.tsx (Content)
```

### 3. Component Usage
```
page.tsx imports components
    ↓
<Hero />
<Services />
<Testimonials />
<CTA />
```

---

## 🎨 Styling System

### Global Styles (`app/globals.css`)
```css
/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom classes */
.glass { ... }
.gradient-text { ... }
.btn-primary { ... }
```

### Component Styles (Inline Tailwind)
```tsx
<div className="bg-white dark:bg-slate-900 p-8 rounded-xl">
  // Content
</div>
```

---

## 🔄 Data Flow

### Static Data (Currently)
```
components/Services.tsx
    ↓
const services = [...]  // Hardcoded
    ↓
Renders service cards
```

### Future: Dynamic Data
```
lib/constants.ts
    ↓
export const SERVICES = [...]
    ↓
Import in components
```

---

## 🛣️ Routing

### Next.js App Router (File-based)

| URL | File Location |
|-----|---------------|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/blog` | `app/blog/page.tsx` |

---

## 🎯 Important Files to Edit

### For Content Changes

**Most Edited:**
1. `app/page.tsx` - Home page
2. `app/services/page.tsx` - Services
3. `app/about/page.tsx` - About
4. `components/Navbar.tsx` - Navigation
5. `components/Footer.tsx` - Footer

**For Styling:**
1. `tailwind.config.ts` - Colors, animations
2. `app/globals.css` - Global styles

**For Configuration:**
1. `package.json` - Dependencies
2. `next.config.js` - Next.js settings

---

## 📦 Dependencies Breakdown

### Core Framework
```json
"next": "14.2.3"           // React framework
"react": "18.3.1"          // UI library
"typescript": "5.4.5"      // Type safety
```

### Styling
```json
"tailwindcss": "3.4.3"     // Utility CSS
"framer-motion": "11.2.10" // Animations
```

### UI Components
```json
"lucide-react": "0.379.0"  // Icons
"react-icons": "5.2.1"     // More icons
"next-themes": "0.3.0"     // Theme toggle
```

---

## 🔧 Build Process

### Development Build (`npm run dev`)
```
1. Next.js starts dev server
2. Compiles TypeScript
3. Processes Tailwind CSS
4. Hot reload enabled
5. Server running on :3000
```

### Production Build (`npm run build`)
```
1. TypeScript compilation
2. CSS optimization
3. Bundle creation
4. Static generation
5. Output to .next/
```

---

## 🎨 Customization Map

### Want to Change Colors?
📄 **File**: `tailwind.config.ts`
📍 **Lines**: 14-24

### Want to Change Company Name?
📄 **Files**: 
- `components/Navbar.tsx` (line 56)
- `components/Footer.tsx` (line 40)

### Want to Add a New Service?
📄 **File**: `app/services/page.tsx`
📍 **Lines**: 14-80 (services array)

### Want to Change Contact Info?
📄 **File**: `components/Footer.tsx`
📍 **Lines**: 95-111

---

## 🚀 Performance Files

### Critical for Speed
- `next.config.js` - Image optimization
- `app/layout.tsx` - Font loading
- `globals.css` - CSS optimization

### Generated Files (Don't Edit)
- `.next/` - Build output
- `node_modules/` - Dependencies

---

## 📚 Documentation Hierarchy

### Start Here 👉 `START_HERE.md`
Quick installation & launch guide

### Complete Guide 👉 `README.md`
Full documentation, all features

### Deployment 👉 `GETTING_STARTED.md`
Detailed setup, customization, deployment

### Reference 👉 `BUILD_SUMMARY.md`
Complete build details, statistics

---

## 🔍 Finding Things

### Search by Feature

| Want to find... | Look in... |
|----------------|------------|
| Navigation logic | `components/Navbar.tsx` |
| Contact form | `app/contact/page.tsx` |
| Dark mode toggle | `components/ThemeProvider.tsx` |
| Animations | Any file using `framer-motion` |
| Global styles | `app/globals.css` |
| Type definitions | `lib/types.ts` |
| Helper functions | `lib/utils.ts` |

---

## 🎯 Quick Edit Locations

### Common Edits

```
Change company name:
  → components/Navbar.tsx (line 56)
  → components/Footer.tsx (line 40)

Change colors:
  → tailwind.config.ts (lines 14-24)

Change services:
  → app/services/page.tsx (lines 14-80)

Change team members:
  → app/about/page.tsx (lines 125-145)

Change contact email:
  → components/Footer.tsx (line 95)

Change WhatsApp number:
  → components/WhatsAppButton.tsx (line 4)
```

---

## 🏗️ Adding New Features

### Add a New Page
```
1. Create folder: app/newpage/
2. Add: app/newpage/layout.tsx
3. Add: app/newpage/page.tsx
4. Update: components/Navbar.tsx (add link)
```

### Add a New Component
```
1. Create: components/NewComponent.tsx
2. Import in page: import NewComponent from '@/components/NewComponent'
3. Use: <NewComponent />
```

---

## 📊 File Sizes (Approximate)

| File Type | Lines of Code |
|-----------|---------------|
| Page files | 150-320 each |
| Component files | 50-180 each |
| Config files | 20-50 each |
| Utility files | 50-100 each |

**Total**: ~3,500+ lines of production code

---

## ✅ Quality Checklist

### Before Editing
- [ ] Understand file structure
- [ ] Read component you're editing
- [ ] Check related files

### While Editing
- [ ] Test in browser frequently
- [ ] Check mobile view
- [ ] Verify dark mode works

### After Editing
- [ ] Run `npm run lint`
- [ ] Test all pages
- [ ] Build successfully

---

## 🎊 You're Ready to Navigate!

Now you understand:
- ✅ Where every file is
- ✅ What each file does
- ✅ How files connect
- ✅ Where to make changes
- ✅ How to add features

---

**Happy Coding! 🚀**

*Refer to this guide whenever you need to find something!*
