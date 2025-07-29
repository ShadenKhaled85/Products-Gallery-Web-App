A modern **Angular** web application designed to display products from an external API, allowing users to browse, view details, and manage their shopping cart.

---

## Features

### **1. Product List**
- Displays all available products fetched from an external API.
- Allows users to:
  - **Search** for products by name.
  - **Sort** products by **price (ascending/descending)** and **name**.
- Clean and responsive UI built using **Tailwind CSS**.

### **2. Product Details**
- Displays detailed information about a selected product:
  - Image  
  - Title  
  - Price  
  - Category  
  - Description  
- User-friendly layout optimized for both desktop and mobile screens.

### **3. Shopping Cart**
- Add products directly from the product list or product details page.
- Increase or decrease product quantity.
- Automatically updates total count.
- Minimalistic cart design with quantity controls and price updates.

### **4. Login**
- Simple authentication form with:
  - Username & password input fields.
  - Inline validation with clear error messages.
- Upon successful login, redirects the user to home page.

---

## Tech Stack

- **Framework:** Angular 19 (Standalone Components)
- **Styling:** Tailwind CSS + Flowbite Components
- **Icons:** Font Awesome
- **Build Tool:** Vite for fast development
- **API:** [Fake Store API](https://fakestoreapi.com)

---

## Installation

### **1. Clone Repository**
git clone https://github.com/your-username/ProductGalleryWebApp.git
cd ProductGalleryWebApp

### **2. Install Dependencies**
npm install
