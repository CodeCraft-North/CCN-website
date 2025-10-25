# Code Craft North - Final Color Palette

## 🎨 **Final Palette: Modern Blue & Indigo**

**Status:** ✅ **ACTIVE** - Final approved palette

### **Brand Colors**
- **Primary:** `#2563eb` (Blue-600) - Professional, trustworthy
- **Secondary:** `#4f46e5` (Indigo-600) - Sophisticated tech feel  
- **Accent:** `#f97316` (Orange-500) - Warm, energetic highlight
- **Light:** `#eff6ff` (Light blue) - Light backgrounds
- **Dark:** `#1e40af` (Deep blue) - Dark accents

### **Background Colors (Light Mode)**
- **Primary Background:** `#ffffff` (Pure white)
- **Section Background:** `#f8fafc` (Light blue-gray)
- **Card Background:** `#f1f5f9` (Light slate)

### **Background Colors (Dark Mode)**
- **Primary Background:** `#0f172a` (Slate-900)
- **Section Background:** `#1e293b` (Slate-800)
- **Card Background:** `#1e293b` (Slate-800)

### **Text Colors (Light Mode)**
- **Primary Text:** `#0f172a` (Dark slate)
- **Secondary Text:** `#475569` (Medium slate)
- **Light Text:** `#94a3b8` (Light slate)

### **Text Colors (Dark Mode)**
- **Primary Text:** `#f1f5f9` (Light slate)
- **Secondary Text:** `#cbd5e1` (Medium slate)
- **Light Text:** `#94a3b8` (Muted slate)

## 🌟 **Why This Palette Works**

### **Professional & Trustworthy**
- Blue conveys reliability, stability, and professionalism
- Perfect for a B2B web design business
- Instills confidence in potential clients

### **Modern & Sophisticated**
- Indigo adds a premium, tech-forward feel
- Creates visual hierarchy with the blue family
- Contemporary without being trendy

### **Energetic & Action-Oriented**
- Orange accent provides warmth and energy
- Perfect for call-to-action elements
- Creates visual interest without overwhelming

### **Accessible & Readable**
- Excellent contrast ratios for all text
- Works well in both light and dark modes
- Compliant with WCAG AA standards

## 🎯 **Usage Guidelines**

### **Primary Blue (#2563eb)**
- Main brand color
- Primary buttons and CTAs
- Feature icons and highlights
- Main headings and brand elements

### **Secondary Indigo (#4f46e5)**
- Supporting elements
- Secondary pricing tiers
- Hover states and interactions
- Supporting headings

### **Accent Orange (#f97316)**
- Special offers and highlights
- Focus states for accessibility
- Attention-grabbing elements
- Call-to-action accents

### **Background System**
- **Light Mode:** Clean whites and light grays with subtle blue tints
- **Dark Mode:** Deep slate colors that complement the blue palette
- **Consistent:** Maintains brand identity across both modes

## 📱 **Implementation**

This palette is implemented using:
- **Tailwind CSS** custom color definitions
- **CSS custom properties** for consistency
- **Dark mode variants** for all colors
- **Accessibility-first** contrast ratios

## 🎨 **How to Use in Tailwind CSS**

### **Brand Colors**
```html
<!-- Primary Blue -->
<div class="bg-brand-primary text-white">Primary button</div>
<div class="text-brand-primary">Primary text</div>
<div class="border-brand-primary">Primary border</div>

<!-- Secondary Indigo -->
<div class="bg-brand-secondary text-white">Secondary button</div>
<div class="text-brand-secondary">Secondary text</div>
<div class="border-brand-secondary">Secondary border</div>

<!-- Accent Orange -->
<div class="bg-brand-accent text-white">Accent button</div>
<div class="text-brand-accent">Accent text</div>
<div class="border-brand-accent">Accent border</div>
```

### **Background Colors**
```html
<!-- Light Mode -->
<div class="bg-white">Primary background</div>
<div class="bg-slate-50">Card background</div>
<div class="bg-slate-100">Section background</div>

<!-- Dark Mode -->
<div class="dark:bg-slate-900">Primary background</div>
<div class="dark:bg-slate-800">Card background</div>
<div class="dark:bg-slate-800">Section background</div>

<!-- Responsive (both modes) -->
<div class="bg-white dark:bg-slate-900">Adaptive background</div>
```

### **Text Colors**
```html
<!-- Light Mode -->
<h1 class="text-slate-900">Primary heading</h1>
<p class="text-slate-600">Secondary text</p>
<span class="text-slate-500">Light text</span>

<!-- Dark Mode -->
<h1 class="dark:text-slate-100">Primary heading</h1>
<p class="dark:text-slate-300">Secondary text</p>
<span class="dark:text-slate-400">Light text</span>

<!-- Responsive (both modes) -->
<h1 class="text-slate-900 dark:text-slate-100">Adaptive heading</h1>
```

### **Common Component Examples**

#### **Buttons**
```html
<!-- Primary Button -->
<button class="bg-brand-primary text-white hover:bg-blue-700 px-6 py-3 rounded-lg">
  Get Started
</button>

<!-- Secondary Button -->
<button class="bg-white text-brand-primary border border-slate-300 hover:bg-brand-primary hover:text-white px-6 py-3 rounded-lg">
  Learn More
</button>
```

#### **Cards**
```html
<div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
  <h3 class="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4">Card Title</h3>
  <p class="text-slate-600 dark:text-slate-300">Card description text</p>
</div>
```

#### **Navigation**
```html
<nav class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
  <a href="#" class="text-slate-600 dark:text-slate-300 hover:text-brand-primary">Home</a>
  <a href="#" class="text-slate-600 dark:text-slate-300 hover:text-brand-primary">About</a>
</nav>
```

#### **Footer**
```html
<footer class="bg-slate-800 dark:bg-slate-900 text-slate-300 dark:text-slate-400 py-16">
  <div class="container">
    <p class="text-slate-400 dark:text-slate-500">&copy; 2025 Code Craft North</p>
  </div>
</footer>
```

### **Utility Classes Available**

#### **Background Colors**
- `bg-brand-primary` - Blue-600 (#2563eb)
- `bg-brand-secondary` - Indigo-600 (#4f46e5)
- `bg-brand-accent` - Orange-500 (#f97316)
- `bg-brand-light` - Light blue (#eff6ff)
- `bg-brand-dark` - Deep blue (#1e40af)

#### **Text Colors**
- `text-brand-primary` - Blue-600 (#2563eb)
- `text-brand-secondary` - Indigo-600 (#4f46e5)
- `text-brand-accent` - Orange-500 (#f97316)

#### **Border Colors**
- `border-brand-primary` - Blue-600 (#2563eb)
- `border-brand-secondary` - Indigo-600 (#4f46e5)
- `border-brand-accent` - Orange-500 (#f97316)

### **Custom CSS Classes**

The following custom classes are available in `src/css/input.css`:

```css
/* Button Components */
.btn--primary { /* Blue background, white text */ }
.btn--secondary { /* White background, blue text */ }

/* Feature Components */
.feature { /* Card styling with hover effects */ }
.feature-icon { /* Blue background icon container */ }
.feature__title { /* Styled feature titles */ }
.feature__description { /* Styled feature descriptions */ }

/* Background Utilities */
.bg-bg-primary { /* Primary background (white/slate-900) */ }
.bg-bg-card { /* Card background (slate-50/slate-800) */ }
.bg-bg-section { /* Section background (slate-100/slate-800) */ }

/* Text Utilities */
.text-text-primary { /* Primary text (slate-900/slate-100) */ }
.text-text-secondary { /* Secondary text (slate-600/slate-300) */ }
.text-text-light { /* Light text (slate-500/slate-400) */ }
```

### **Best Practices**

1. **Use semantic classes** like `btn--primary` instead of raw color classes
2. **Always include dark mode variants** using `dark:` prefix
3. **Test contrast ratios** especially for text on colored backgrounds
4. **Use brand colors sparingly** - they should be accent colors, not dominant
5. **Maintain consistency** by using the same color classes throughout the site

## 🔄 **Previous Palettes (Archived)**

### **Palette 2: Sophisticated Purple & Violet**
**Status:** ❌ Rejected - Too creative for business context
- Primary: `#9333ea` (Purple-600)
- Secondary: `#7c3aed` (Violet-600)
- Accent: `#10b981` (Emerald-500)

### **Earthy Warm Palette**
**Status:** ❌ Rejected - Too niche for web design business
- Primary: `#c7522a` (Warm terracotta)
- Secondary: `#74a892` (Sage green)
- Accent: `#e5c185` (Warm cream)

### **Original Teal Palette**
**Status:** ❌ Replaced - Felt too clinical and cold
- Primary: `#4FC4CF` (Custom teal)
- Secondary: `#994FF3` (Custom purple)
- Accent: `#FBDD74` (Custom yellow)

---

**Final Decision:** Palette 1 (Modern Blue & Indigo) provides the perfect balance of professionalism, trustworthiness, and modern sophistication for Code Craft North's web design business.