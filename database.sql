-- ============================================
-- Blinkit Clone - MySQL Database Schema
-- ============================================

CREATE DATABASE IF NOT EXISTS blinkit_db;
USE blinkit_db;

-- ============================================
-- 1. USERS TABLE
-- Stores registered user information
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    full_name     VARCHAR(100)  NOT NULL,
    email         VARCHAR(150)  NOT NULL UNIQUE,
    phone         VARCHAR(15)   NOT NULL,
    address       TEXT,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- 2. LOGIN HISTORY TABLE
-- Tracks every user login event
-- ============================================
CREATE TABLE IF NOT EXISTS login_history (
    login_id      INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT           NOT NULL,
    login_time    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    ip_address    VARCHAR(45),
    user_agent    VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ============================================
-- 3. PRODUCTS TABLE
-- Product catalogue with categories
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    product_id    INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(150)  NOT NULL,
    category      VARCHAR(50)   NOT NULL,
    unit          VARCHAR(50)   NOT NULL,
    price         DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    image_url     VARCHAR(500),
    in_stock      BOOLEAN       DEFAULT TRUE,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- 4. ORDERS TABLE
-- One row per order placed by a user
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    order_id      INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT           NOT NULL,
    total_amount  DECIMAL(10,2) NOT NULL,
    delivery_address TEXT       NOT NULL,
    status        ENUM('placed','confirmed','dispatched','delivered','cancelled')
                  DEFAULT 'placed',
    ordered_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    delivered_at  TIMESTAMP     NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ============================================
-- 5. ORDER ITEMS TABLE
-- Individual items within each order
-- ============================================
CREATE TABLE IF NOT EXISTS order_items (
    item_id       INT AUTO_INCREMENT PRIMARY KEY,
    order_id      INT           NOT NULL,
    product_id    INT           NOT NULL,
    product_name  VARCHAR(150)  NOT NULL,
    quantity      INT           NOT NULL DEFAULT 1,
    unit_price    DECIMAL(10,2) NOT NULL,
    total_price   DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- ============================================
-- 6. SEED DATA - Products
-- ============================================
INSERT INTO products (name, category, unit, price, original_price, image_url) VALUES
-- Fruits
('Fresh Bananas',      'Fruits',     '1 dozen',  49.00,  60.00,  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300'),
('Red Apples',         'Fruits',     '1 kg',     189.00, 220.00, 'https://images.unsplash.com/photo-1560806887-1e4b9b6b1bc5?w=300'),
('Mangoes (Alphonso)', 'Fruits',     '1 kg',     350.00, 450.00, 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300'),
('Oranges',            'Fruits',     '1 kg',     99.00,  120.00, 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300'),

-- Vegetables
('Fresh Tomatoes',     'Vegetables', '1 kg',     35.00,  50.00,  'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300'),
('Onions',             'Vegetables', '1 kg',     29.00,  40.00,  'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300'),
('Potatoes',           'Vegetables', '1 kg',     25.00,  35.00,  'https://images.unsplash.com/photo-1518977676601-b53f82ber630?w=300'),
('Spinach (Palak)',    'Vegetables', '250 g',    20.00,  30.00,  'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300'),

-- Dairy
('Amul Toned Milk',    'Dairy',      '1 litre',  56.00,  60.00,  'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300'),
('Paneer (Fresh)',     'Dairy',      '200 g',    80.00,  99.00,  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300'),
('Curd (Dahi)',        'Dairy',      '400 g',    45.00,  55.00,  'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300'),
('Butter (Amul)',      'Dairy',      '100 g',    56.00,  60.00,  'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300'),

-- Snacks
('Lays Classic Salted','Snacks',     '52 g',     20.00,  20.00,  'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300'),
('Kurkure Masala Munch','Snacks',    '80 g',     20.00,  20.00,  'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=300'),
('Dark Fantasy',       'Snacks',     '75 g',     40.00,  45.00,  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300'),
('Haldirams Namkeen',  'Snacks',     '200 g',    65.00,  80.00,  'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300'),

-- Beverages
('Coca Cola',          'Beverages',  '750 ml',   40.00,  45.00,  'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300'),
('Mango Frooti',       'Beverages',  '600 ml',   30.00,  35.00,  'https://images.unsplash.com/photo-1546173159-315724a31696?w=300'),
('Red Bull Energy',    'Beverages',  '250 ml',   125.00, 135.00, 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300'),
('Paper Boat Aamras',  'Beverages',  '200 ml',   30.00,  35.00,  'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300'),

-- Bakery
('White Bread',        'Bakery',     '400 g',    40.00,  45.00,  'https://images.unsplash.com/photo-1549931319-a545753467c8?w=300'),
('Pav Buns',           'Bakery',     '6 pcs',    30.00,  35.00,  'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300'),
('Croissant',          'Bakery',     '2 pcs',    99.00,  120.00, 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300'),
('Chocolate Cake',     'Bakery',     '500 g',    350.00, 450.00, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300');

-- ============================================
-- 7. USEFUL VIEWS
-- ============================================

-- View: User order summary
CREATE OR REPLACE VIEW user_order_summary AS
SELECT
    u.user_id,
    u.full_name,
    u.email,
    COUNT(DISTINCT o.order_id)   AS total_orders,
    COALESCE(SUM(o.total_amount), 0) AS total_spent,
    MAX(o.ordered_at)            AS last_order_date,
    COUNT(DISTINCT lh.login_id)  AS total_logins,
    MAX(lh.login_time)           AS last_login
FROM users u
LEFT JOIN orders o        ON u.user_id = o.user_id
LEFT JOIN login_history lh ON u.user_id = lh.user_id
GROUP BY u.user_id, u.full_name, u.email;

-- View: Popular products by order count
CREATE OR REPLACE VIEW popular_products AS
SELECT
    p.product_id,
    p.name,
    p.category,
    COUNT(oi.item_id)       AS times_ordered,
    SUM(oi.quantity)        AS total_quantity_sold,
    SUM(oi.total_price)     AS total_revenue
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.name, p.category
ORDER BY times_ordered DESC;
