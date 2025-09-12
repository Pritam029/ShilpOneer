# ShilpOneer
ADMIN -https://shilponeeradmin.vercel.app/
A MERN application that connects rural artisans (sal-leaf plates, broomsticks, wooden boxes, handicrafts, etc.) directly with buyers — promoting culture, sustainability, and self-reliance.

---

### Features

* Product catalog with images (served from the backend `public/product_img`)
* Search and filter on the storefront
* Shopping cart in the frontend with per-item increment/decrement behavior
* Admin UI (basic) for managing products
* Simple in-page chatbot with quick help and command parsing

  * `add <product_name> to cart`
  * `remove <product_name> from cart`
* Optional OpenAI responses if you provide an API key; otherwise, it uses a local fallback

---

### Tech Stack

* **Frontend:** React (Create React App), Bootstrap 5
* **Admin:** React (Create React App) based template
* **Backend:** Node.js, Express, Mongoose (MongoDB)

---

### Repository Structure

* **ShilpOneer/**

  * **ADMIN/** — Admin React app (runs on `:3001`)
  * **frontend/** — Customer-facing React app (runs on `:3000`)
  * **server/** — Express API and static product images (runs on `:2000`)

---

### Prerequisites

* Node.js 18+
* npm 9+
* MongoDB (local or cloud e.g., MongoDB Atlas)

---

### Backend Setup (server)

* **Install dependencies**

  ```bash
  cd server
  npm install
  ```

* **Configure environment**

  * Create a `.env` in `server/` (if not already present):

    ```
    MONGODB_URI=mongodb://localhost:27017/shilpOneer
    PORT=2000
    ```

* **Start the API server**

  ```bash
  npm start
  ```

* **Server will be available at:** [http://localhost:2000](http://localhost:2000)

* **Key endpoints (non-exhaustive):**

  * `GET /product/sel` — list products
  * `POST /product/add` — add a product
  * `DELETE /product/del/:id` — delete a product

* **Static product images:** served at
  [http://localhost:2000/product\_img/<filename>](http://localhost:2000/product_img/<filename>)

---

### Frontend Setup (storefront)

* **Install dependencies**

  ```bash
  cd frontend
  npm install
  ```

* **Start the app**

  ```bash
  npm start
  ```

* **App will be available at:** [http://localhost:3000](http://localhost:3000)

* **Notes:**

  * Storefront fetches products from [http://localhost:2000/product/sel](http://localhost:2000/product/sel)
  * Images are displayed from
    [http://localhost:2000/product\_img/<filename>](http://localhost:2000/product_img/<filename>)
  * Cart is managed in React state (removing via UI/chatbot removes one instance at a time)

---

### Admin Setup (optional)

* **Install dependencies and start**

  ```bash
  cd ADMIN
  npm install
  npm start
  ```
* **Admin runs at:** [http://localhost:3001](http://localhost:3001)

---

### Chatbot

* **Lightweight widget** injected via `frontend/public/index.html`
* **How it works:**

  * Click floating chat button → open/close
  * On first open → shows a list of help options
* **Commands supported:**

  * `add <product_name> to cart` — adds first matching product
  * `remove <product_name> from cart` — removes one instance
* **OpenAI (optional):**

  * Click “API Key” in chatbot header → paste OpenAI API key to enable model replies
  * Without a key → uses local fallback (commands still work)

---

### Development Tips

* Ensure **backend (port 2000)** is running before starting **storefront (port 3000)**
* Product images → place in `server/public/product_img/` and reference by filename in DB
* If ports are changed → update frontend fetch URLs in React code

---

### License

* This project is provided *as-is* for educational/demo purposes.

* **Tagline:**
  A MERN stack web application for rural economic growth.
  Marketplace for handmade crafts (sal leaf plates, broomsticks, wooden boxes, etc.)

  * Product CRUD & image uploads
  * Cart & secure checkout
  * Connects artisans with buyers, promoting culture, sustainability & self-reliance

---

### Getting Started with Create React App

This project was bootstrapped with **Create React App**.

**Available Scripts** (in project directory):

* `npm start` — runs the app in development mode

  * Open [http://localhost:3000](http://localhost:3000)
  * Page reloads on changes
* `npm test` — launches the test runner
* `npm run build` — builds production app (minified, optimized)
* `npm run eject` — one-way operation, gives full control over build configs

---

### Learn More

* [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started)
* [React documentation](https://react.dev)

---

### Additional Guides

* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [npm run build fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

