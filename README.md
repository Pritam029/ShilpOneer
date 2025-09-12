# **ShilpOneer**

A MERN application that connects rural artisans (sal-leaf plates, broomsticks, wooden boxes, handicrafts, etc.) directly with buyers — promoting **culture, sustainability, and self-reliance**.

---

## **Features**

* Product catalog with images (served from the backend `public/product_img`)
* Search and filter on the storefront
* Shopping cart in the frontend with per-item increment/decrement behavior
* Admin UI (basic) for managing products
* Simple in-page chatbot with quick help and command parsing:

  * `add <product_name> to cart`
  * `remove <product_name> from cart`
* Optional OpenAI responses if you provide an API key; otherwise uses a local fallback

---

## **Tech Stack**

* **Frontend:** React (Create React App), Bootstrap 5
* **Admin:** React (Create React App) based template
* **Backend:** Node.js, Express, Mongoose (MongoDB)

---

## **Repository Structure**

```
ShilpOneer/
  ├── ADMIN/       # Admin React app (runs on :3001)
  ├── frontend/    # Customer-facing React app (runs on :3000)
  └── server/      # Express API and static product images (runs on :2000)
```

---

## **Prerequisites**

* Node.js 18+
* npm 9+
* MongoDB (local or cloud e.g., MongoDB Atlas)

---

## **Backend Setup (server)**

* Install dependencies:

  ```bash
  cd server
  npm install
  ```
* Configure environment → create `.env` in `server/` (if not already present):

  ```env
  MONGODB_URI=mongodb://localhost:27017/shilpioneer
  PORT=2000
  ```
* Start the API server:

  ```bash
  npm start
  ```
* Server available at **[http://localhost:2000](http://localhost:2000)**

**Key Endpoints (non-exhaustive):**

* `GET /product/sel` → list products
* `POST /product/add` → add a product
* `DELETE /product/del/:id` → delete a product
* Static product images served at:

  ```
  http://localhost:2000/product_img/<filename>
  ```

---

## **Frontend Setup (storefront)**

* Install dependencies:

  ```bash
  cd frontend
  npm install
  ```
* Start the app:

  ```bash
  npm start
  ```
* App available at **[http://localhost:3000](http://localhost:3000)**

**Notes:**

* Storefront fetches products from `http://localhost:2000/product/sel`
* Images are displayed from `http://localhost:2000/product_img/<filename>`
* Cart is managed in React state (removing an item via UI or chatbot removes one instance at a time)

---

## **Admin Setup (optional)**

* Install dependencies and start:

  ```bash
  cd ADMIN
  npm install
  npm start
  ```
* Admin runs at **[http://localhost:3001](http://localhost:3001)**

---

## **Chatbot**

* Lightweight widget injected via `frontend/public/index.html`
* Click floating chat button to open/close
* On first open → shows available help commands

**Supported Commands:**

* `add <product_name> to cart` → adds first matching product (case-insensitive; prefers exact matches)
* `remove <product_name> from cart` → removes one matching item from cart

**OpenAI (optional):**

* Click “API Key” in chatbot header → paste OpenAI API key to enable model replies
* Without key → simple local fallback is used (commands still work)

---

## **Development Tips**

* Ensure backend (**port 2000**) is running before starting storefront (**port 3000**)
* Product images should be placed in `server/public/product_img/` and referenced by filename in DB
* If ports are changed, update fetch URLs in frontend React code

---

## **License**

* This project is provided **as-is** for educational/demo purposes
* A MERN stack web application for **rural economic growth**
* Marketplace for handmade crafts (sal leaf plates, broomsticks, wooden boxes, etc.)
* Supports product CRUD, image uploads, cart, secure checkout
* Connects artisans with buyers, promoting **culture, sustainability, and self-reliance**

---

## **Getting Started with Create React App**

This project was bootstrapped with **Create React App**.

**Available Scripts (in project directory):**

* `npm start` → Runs app in development mode ([http://localhost:3000](http://localhost:3000))
* `npm test` → Launches test runner in interactive watch mode
* `npm run build` → Builds app for production (optimized & minified)
* `npm run eject` → Copies config files for full customization (irreversible)

---

## **Further Reading**

* [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
* [React Documentation](https://reactjs.org/)
* [Progressive Web Apps](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)

---

👉 I’ve converted **everything into neat bullet points** but kept your original content intact.

Do you also want me to **make a shorter “One-page README version”** (just essentials: features, setup, usage) for GitHub, and keep this long one as **detailed docs**?
