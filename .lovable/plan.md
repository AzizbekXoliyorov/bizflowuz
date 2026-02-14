

## Dark Mode, Theme Toggle, and Login/Register Back Button

### Overview
This plan adds full dark mode support with a theme toggle, improves the Login and Register pages with a back button, and ensures the theme preference persists across sessions.

### What Will Change

**1. Theme Provider Setup**
- Create a `ThemeProvider` component using the already-installed `next-themes` package
- Wrap the entire app in `ThemeProvider` inside `App.tsx`
- Theme preference will be saved automatically to localStorage

**2. Theme Toggle in Navbar**
- Add a Sun/Moon icon button to the Navbar (desktop and mobile)
- Clicking toggles between light and dark mode with a smooth CSS transition
- The toggle will appear next to the "Kirish" / "Boshlash" buttons

**3. Theme Toggle in Dashboard Header**
- Add the same Sun/Moon toggle button in the Dashboard top bar (next to notifications)
- Ensures dark mode is accessible from within the dashboard

**4. Settings Page - Appearance Tab**
- Make the existing theme selector (Yorug'/Qorong'u/Tizim) functional
- Connect it to the theme provider so clicking a theme card actually switches the theme
- Highlight the currently active theme

**5. Smooth Theme Transition**
- Add a CSS transition on `background-color` and `color` to the `html` element
- This creates a smooth visual switch instead of an abrupt change

**6. Login Page - Back Button**
- Add an ArrowLeft back button at the top of the Login form panel
- Uses `useNavigate(-1)` to go to the previous page, or falls back to homepage

**7. Register Page - Back Button**
- Same back button treatment as Login page
- Positioned at the top of the right form panel

### Technical Details

| File | Change |
|------|--------|
| `src/components/ThemeProvider.tsx` | New file - wraps `next-themes` ThemeProvider |
| `src/components/ThemeToggle.tsx` | New file - Sun/Moon toggle button component |
| `src/App.tsx` | Wrap app with `ThemeProvider` |
| `src/components/Navbar.tsx` | Add `ThemeToggle` button |
| `src/pages/Dashboard.tsx` | Add `ThemeToggle` in header bar |
| `src/pages/Settings.tsx` | Connect appearance tab to real theme switching |
| `src/pages/Login.tsx` | Add back button with `useNavigate` |
| `src/pages/Register.tsx` | Add back button with `useNavigate` |
| `src/index.css` | Add transition for smooth theme switching |

### No Breaking Changes
- All existing pages already use CSS variables (`hsl(var(--...))`) with dark mode values defined
- The `tailwind.config.ts` already has `darkMode: ["class"]` configured
- `next-themes` is already installed as a dependency
