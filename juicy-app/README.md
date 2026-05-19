# Juice It! App

A simple React application for browsing and managing juice products.

---

## Features

- Home page
- Shop page to view all products
- Search and filter products
- Add new products (Admin page)
- Edit product price
- Delete products
- Data fetched from a local API (json-server)

---

## Tech Stack

- React
- React Router
- Context API
- CSS
- JSON Server

---

## Installation

1. Clone the repository:
```bash
git clone <your-repo-link>
cd juicy-app
2.Install dependencies
npm install
3.npm run dev
4.npx json server --watch db.json --port 3001

## Project structure
src/
  components/
    NavBar.jsx
    Footer.jsx
    ProductCard.jsx
    ProductGrid.jsx
    SideBar.jsx

  pages/
    HomePage.jsx
    ShopPage.jsx
    AdminPage.jsx

  context/
    ProductContext.jsx

  services/
    api.js

## Usage
1.Navigate to shop to browse and search products
2.Go to Admin to add,edit or delete products

## Future improvements
1.Add product images
2.Improve UI with animations
3.Deploy app online

## Author
Kelvin Korir