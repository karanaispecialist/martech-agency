# MarTech Agency - Quick Setup Guide

## ✅ Installation Steps

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start Development Server
```powershell
npm run dev
```

### 3. Open in Browser
Navigate to: http://localhost:3000

---

## 📝 Customization Checklist

### Update Company Information:
- [ ] Edit company name in `components/Navbar.tsx`
- [ ] Update contact details in `components/Footer.tsx`
- [ ] Change WhatsApp number in `components/WhatsAppButton.tsx`
- [ ] Modify services in `app/services/page.tsx`
- [ ] Update team members in `app/about/page.tsx`

### SEO & Metadata:
- [ ] Update metadata in `app/layout.tsx`
- [ ] Set page titles in each `layout.tsx` file

### Styling:
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Adjust fonts in `app/layout.tsx`

---

## 🚀 Deployment

### GitHub:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Vercel:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy"

---

## 📦 Build for Production
```powershell
npm run build
npm start
```

---

## 🔗 Useful Links
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion

---

**Need Help?** Check README.md for detailed documentation.
