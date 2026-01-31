# 🚀 INSTALLATION & LAUNCH GUIDE

## ⚡ Quick Start (5 Minutes)

### Step 1: Open Terminal
1. Press `Windows + X`
2. Select "Windows PowerShell" or "Terminal"
3. Navigate to the project:
   ```powershell
   cd "C:\Users\91901\OneDrive\Documents\martech"
   ```

### Step 2: Install Dependencies
```powershell
npm install
```
⏱️ **Wait time**: 1-2 minutes

### Step 3: Start Development Server
```powershell
npm run dev
```

### Step 4: Open Browser
🌐 Visit: **http://localhost:3000**

---

## ✅ What to Expect

### During Installation (`npm install`)
You'll see:
```
npm WARN deprecated ...
added 350 packages, and audited 351 packages in 45s
```
✅ **This is normal!**

### During Dev Server (`npm run dev`)
You'll see:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in 3.2s
```
✅ **Server is ready!**

---

## 🎯 First Time Setup Checklist

After running the site:

### ✅ Test These Features
- [ ] Navigate to all pages (Home, About, Services, Portfolio, Contact, Blog)
- [ ] Toggle dark/light mode (moon/sun icon in navbar)
- [ ] Test mobile menu (resize browser or use DevTools)
- [ ] Fill out contact form (test validation)
- [ ] Click WhatsApp button (floating green button)
- [ ] Scroll through all sections

### ✅ Verify Responsiveness
1. Press `F12` to open DevTools
2. Click device toolbar icon (or press `Ctrl+Shift+M`)
3. Test these sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## 🎨 Immediate Customizations

### 1. Change Company Name (2 minutes)
**File**: `components/Navbar.tsx` (line 56-58)
```tsx
<span className="text-xl md:text-2xl font-bold gradient-text">
  YourCompanyName
</span>
```

### 2. Update WhatsApp Number (30 seconds)
**File**: `components/WhatsAppButton.tsx` (line 4)
```tsx
const phoneNumber = "YOUR_NUMBER_HERE"; // e.g., "1234567890"
```

### 3. Change Colors (1 minute)
**File**: `tailwind.config.ts` (lines 14-24)
```ts
primary: {
  500: "#YOUR_COLOR", // Change this
  600: "#YOUR_COLOR", // And this
},
```

### 4. Update Contact Email (30 seconds)
**File**: `components/Footer.tsx` (line 95)
```tsx
href="mailto:YOUR_EMAIL@example.com"
```

---

## 🐛 Troubleshooting

### Issue: `npm: command not found`
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution**: Use a different port
```powershell
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### Issue: Red errors in VSCode
**Solution**: These disappear after `npm install`

### Issue: Page not loading
**Solution**: 
1. Stop server (`Ctrl+C`)
2. Clear cache:
   ```powershell
   rm -rf .next
   npm run dev
   ```

---

## 📦 Build for Production

### Test Production Build
```powershell
npm run build
npm start
```

### Check for Errors
```powershell
npm run lint
```

---

## 🌐 Deploy to Vercel (FREE)

### Prerequisites
- GitHub account
- Vercel account (sign up with GitHub)

### Steps

#### 1. Initialize Git
```powershell
git init
git add .
git commit -m "Initial commit"
```

#### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Name: `martech-agency`
3. Click "Create repository"

#### 3. Push to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/martech-agency.git
git branch -M main
git push -u origin main
```

#### 4. Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import `martech-agency` repository
4. Click "Deploy"

⏱️ **Deployment time**: 2-3 minutes

✅ **You'll get a live URL!**
Example: `https://martech-agency.vercel.app`

---

## 🎨 Visual Studio Code Tips

### Install Recommended Extensions
1. **Tailwind CSS IntelliSense**
   - Auto-complete for Tailwind classes
2. **ESLint**
   - Code quality checks
3. **Prettier**
   - Code formatting

### Useful Shortcuts
- `Ctrl + P` - Quick file search
- `Ctrl + Shift + F` - Search in all files
- `F12` - Go to definition
- `Alt + Up/Down` - Move line up/down

---

## 📁 Project Organization

### Where to Edit Content

| What to Change | File Location |
|----------------|---------------|
| Home page content | `app/page.tsx` |
| About page content | `app/about/page.tsx` |
| Services | `app/services/page.tsx` |
| Portfolio projects | `app/portfolio/page.tsx` |
| Contact form | `app/contact/page.tsx` |
| Blog posts | `app/blog/page.tsx` |
| Navigation menu | `components/Navbar.tsx` |
| Footer content | `components/Footer.tsx` |
| Colors | `tailwind.config.ts` |
| Global styles | `app/globals.css` |

---

## 🔄 Making Changes

### Edit -> Save -> See Changes

1. **Edit any file** in VSCode
2. **Save** (`Ctrl + S`)
3. **Browser auto-refreshes** (Hot reload!)

No need to restart the server! ✨

---

## 📊 Performance Optimization

### After Customization, Test Performance

1. Open Chrome DevTools (`F12`)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check scores:
   - Performance: Should be 90+
   - Accessibility: Should be 90+
   - SEO: Should be 90+

---

## 🎯 Next Actions

### Immediate (Today)
1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Test all pages
4. ✅ Change company name
5. ✅ Update WhatsApp number

### Short Term (This Week)
1. ✅ Replace all placeholder content
2. ✅ Add real images
3. ✅ Update services with your offerings
4. ✅ Add your team members
5. ✅ Customize colors to match brand

### Medium Term (This Month)
1. ✅ Connect contact form to email service
2. ✅ Add Google Analytics
3. ✅ Create blog posts
4. ✅ Add portfolio projects
5. ✅ Deploy to production

---

## 📞 Quick Reference

### Commands
```powershell
npm install          # Install dependencies
npm run dev          # Start development
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
```

### URLs
- **Local Dev**: http://localhost:3000
- **Vercel Deploy**: https://vercel.com
- **GitHub**: https://github.com
- **Documentation**: See README.md

---

## 🎊 You're Ready!

Your MarTech Agency website is **fully functional** and ready to customize!

### What You Have:
- ✅ 6 complete pages
- ✅ 10 reusable components
- ✅ Dark/Light mode
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Production ready

### What's Next:
1. **Customize** with your content
2. **Test** on different devices
3. **Deploy** to the world
4. **Share** with clients

---

## 🚀 Launch Sequence

```
1. npm install          ⏱️  2 min
2. npm run dev          ⏱️  30 sec
3. Open browser         ⏱️  10 sec
4. Test features        ⏱️  5 min
5. Make changes         ⏱️  Your time
6. Deploy to Vercel     ⏱️  3 min
```

**Total setup time: ~10 minutes** ⚡

---

**Ready? Let's go! 🚀**

Open PowerShell and run:
```powershell
cd "C:\Users\91901\OneDrive\Documents\martech"
npm install
```

---

*Need help? Check README.md or GETTING_STARTED.md*
