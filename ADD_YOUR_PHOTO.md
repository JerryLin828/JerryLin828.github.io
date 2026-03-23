# Adding Your Profile Photo

To add your personal photo to the website:

## Quick Steps:

1. **Prepare your photo:**
   - Name it `profile.jpg` (or `profile.png` if PNG format)
   - Recommended size: 800x800 pixels (square)
   - Place it in the `public/images/` folder

2. **Update the HeroSection component:**
   - Open `components/HeroSection.tsx`
   - Find lines 29-38 (the commented section)
   - Replace the placeholder div with:

```jsx
<Image
  src="/images/profile.jpg"  // or profile.png
  alt="Linrui Ma"
  fill
  className="object-cover"
  priority
/>
```

3. **Make sure to import Image:**
   - The import is already at the top of the file (line 4)
   - Just uncomment the Image component code

That's it! Your photo will now appear in the circular frame on the homepage.

## Photo Tips:
- Use a professional headshot
- Good lighting is important
- Square aspect ratio works best
- File size under 500KB for fast loading