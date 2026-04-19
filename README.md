# Paradise Nursery – E-Plant Shopping

Paradise Nursery is a houseplant shopping experience built with React, Vite, React Router, and Redux Toolkit. Browse curated categories, add plants to a cart, adjust quantities, and preview checkout from a clean, responsive UI.

## Features
- Landing page with background imagery, brand story, and “Get Started” call-to-action
- About page describing the nursery and its service pillars
- Product listing with 3 categories and 6+ unique plants per category
- Add-to-cart buttons that disable after adding and update the cart icon count dynamically
- Redux-powered cart page with per-item totals, quantity controls, delete actions, and a checkout placeholder
- Persistent navbar on product and cart pages with Home, Plants, and Cart links

## Running locally
1) Install dependencies
```bash
npm install
```
2) Start the dev server
```bash
npm run dev
```
3) Lint or build
```bash
npm run lint
npm run build
```

## Project structure
- `src/App.jsx` – routing and landing layout
- `src/components/ProductList.jsx` – product catalog with add-to-cart
- `src/components/CartItem.jsx` – shopping cart page and controls
- `src/components/AboutUs.jsx` – company overview section
- `src/store/CartSlice.jsx` – Redux slice for cart state
- `src/data/plants.js` – plant catalog data
