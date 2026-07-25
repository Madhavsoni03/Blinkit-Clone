Blinkit-Clone
A quick-commerce grocery delivery clone with dynamic cart management, user authentication simulation, and an admin panel to track orders and revenue.
⚡ Blinkit Clone - Quick Commerce App

A responsive, full-stack-inspired clone of the popular quick-commerce grocery delivery platform, Blinkit[cite: 3]. This project features a customer-facing storefront with dynamic cart management and a dedicated Admin Dashboard to track users, orders, and revenue[cite: 1, 4].

The application uses Vanilla JavaScript and LocalStorage for immediate browser-based state management, accompanied by a complete MySQL schema designed for production-level backend integration[cite: 2, 4].

🛠️ Tech Stack
Frontend:** HTML5, CSS3, Vanilla JavaScript[cite: 3, 4, 5]
State Management:** LocalStorage API[cite: 4]
*Database Design:** MySQL (Relational Schema provided)[cite: 2]

✨ Key Features

 Customer Storefront
Dynamic Product Catalog:** Browse products filtered by categories (Fruits, Vegetables, Dairy, Snacks, Beverages, Bakery)[cite: 3, 4].
Cart Management:** Add, remove, and adjust quantities of items with real-time total calculation[cite: 4].
User Authentication Flow:** Simulated user registration modal capturing name, email, phone, and address[cite: 3, 4].
Checkout Simulation:** One-click checkout that generates a unique order ID and saves the transaction to the user's history[cite: 4].

Admin Dashboard
Overview Analytics:** View total registered users, total orders, overall revenue, and total products listed[cite: 1].
Order Tracking:** Detailed table showing order IDs, customer details, item quantities, order status, and timestamps[cite: 1].
Data Management:** Ability to clear user and order data directly from the dashboard for testing purposes[cite: 1].

Database Architecture
Includes a robust `database.sql` script featuring:
Relational Tables:** `users`, `login_history`, `products`, `orders`, and `order_items` with appropriate Primary and Foreign Key constraints[cite: 2].
Custom Views:** Pre-written SQL views for `user_order_summary` and `popular_products` to enable rapid business analytics[cite: 2].

🚀 How to Run (Local Environment)

Frontend (No Installation Required)
1. Clone this repository to your local machine.
2. Open the `frontend/index.html` file in any modern web browser to access the customer store[cite: 4].
3. Open `admin.html` to access the Admin Dashboard[cite: 1].
4. *Note: Data is currently persisted using the browser's LocalStorage.*

Backend / Database Setup
1. Ensure you have a MySQL server running (e.g., via XAMPP, MySQL Workbench).
2. Import and execute the `database.sql` file[cite: 2].
3. This will generate the `blinkit_db` database, construct all normalized tables, and populate the tables with seed data[cite: 2].

📸 Screenshots
<img width="1917" height="927" alt="Screenshot 2026-07-25 154045" src="https://github.com/user-attachments/assets/8119c5e8-1e28-4b4c-8d74-1bf7c7efe9e7" />
<img width="1917" height="978" alt="Screenshot 2026-07-25 154034" src="https://github.com/user-attachments/assets/e0e3f74d-875f-4689-ac88-cfa0480b3ce8" />
<img width="1917" height="935" alt="Screenshot 2026-07-25 154009" src="https://github.com/user-attachments/assets/b8069c10-7c2c-461d-a375-5594fcfb32ee" />
