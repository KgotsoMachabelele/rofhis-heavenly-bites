# 🧁 Rofhi's Heavenly Bites — React App

A production-ready React e-commerce app built with **Atomic Design**.

---

## 🚀 Getting Started

```bash
npm install
npm start
```

---

## 📁 Project Structure

```
src/
├── atoms/               # Smallest building blocks (no dependencies)
│   ├── Badge/
│   ├── Button/
│   ├── Divider/
│   ├── Input/
│   ├── Logo/
│   ├── ProductImage/
│   ├── QuantitySelector/
│   └── Text/
│
├── molecules/           # Atoms combined into meaningful UI units
│   ├── CartItem/
│   ├── CategoryTab/
│   ├── OrderSummary/
│   ├── ProductCard/
│   └── Toast/
│
├── organisms/           # Complex UI sections composed of molecules
│   ├── CartSidebar/
│   ├── CheckoutModal/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── ProductGrid/
│   └── SuccessModal/
│
├── templates/           # Page skeletons (layout without real content)
│   └── ShopLayout/
│
├── pages/               # Full pages (templates + real data wired up)
│   └── HomePage/
│
├── context/
│   └── CartContext.js   # Global cart state (useReducer)
│
├── hooks/
│   └── useToast.js      # Toast notification hook
│
├── data/
│   └── products.js      # All products, categories & contact info
│
├── assets/
│   └── images/          # ← DROP YOUR IMAGES HERE
│
├── App.js
├── index.js
└── index.css            # CSS custom properties (design tokens) + reset
```

---

## 🖼️ Adding Your Images

### Logo
1. Place your logo file in `src/assets/images/` — e.g. `logo.jpg`
2. Open `src/atoms/Logo/Logo.jsx`
3. Uncomment the import line:
   ```js
   import logoSrc from '../../assets/images/logo.jpg';
   ```
4. Replace the `<div className={styles.placeholder}>🧁</div>` with:
   ```jsx
   <img src={logoSrc} alt="Rofhi's Heavenly Bites" className={styles.img} />
   ```

### Product Images
1. Place product images in `src/assets/images/`
   - Suggested naming: `scone-plain.jpg`, `muffin-blueberry.jpg`, etc.
2. Open `src/data/products.js`
3. For each product, replace `image: null` with:
   ```js
   image: require('../assets/images/your-image-name.jpg'),
   ```
   Example:
   ```js
   {
     id: 's1',
     name: 'Plain Scones',
     image: require('../assets/images/scone-plain.jpg'),
     ...
   }
   ```

The `ProductImage` atom will automatically show the image when provided,
and fall back to the emoji if `image` is `null`.

---

## 🎨 Design Tokens

All colours, fonts, spacing and shadows live as CSS custom properties in
`src/index.css`. Edit them once to retheme the entire app.

```css
:root {
  --color-rose:      #c97b63;   /* primary brand colour */
  --color-brown:     #6b3f2a;
  --color-cream:     #fdf6f0;
  --font-display:    'Playfair Display', serif;
  --font-script:     'Dancing Script', cursive;
  ...
}
```

---

## 🛒 Cart

State is managed globally via `CartContext` (React Context + useReducer).

```js
import { useCart } from './context/CartContext';

const { items, totalItems, totalPrice, addItem, removeItem, updateQty, openCart } = useCart();
```

---

## 📦 Tech Stack

- React 18
- CSS Modules (scoped styles per component)
- React Context + useReducer (cart state)
- No external UI library — fully custom design system
