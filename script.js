// ============================================
// Blinkit Clone - Frontend JavaScript
// No server needed — just open index.html!
// ============================================

// ── Product Data (matches database.sql) ────
const products = [
    { product_id: 1,  name: 'Fresh Bananas',       category: 'Fruits',     unit: '1 dozen', price: 49,  original_price: 60,  image_url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300' },
    { product_id: 2,  name: 'Red Apples',          category: 'Fruits',     unit: '1 kg',    price: 189, original_price: 220, image_url: 'https://images.unsplash.com/photo-1560806887-1e4b9b6b1bc5?w=300' },
    { product_id: 3,  name: 'Mangoes (Alphonso)',   category: 'Fruits',     unit: '1 kg',    price: 350, original_price: 450, image_url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300' },
    { product_id: 4,  name: 'Oranges',             category: 'Fruits',     unit: '1 kg',    price: 99,  original_price: 120, image_url: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300' },
    { product_id: 5,  name: 'Fresh Tomatoes',      category: 'Vegetables', unit: '1 kg',    price: 35,  original_price: 50,  image_url: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300' },
    { product_id: 6,  name: 'Onions',              category: 'Vegetables', unit: '1 kg',    price: 29,  original_price: 40,  image_url: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=300' },
    { product_id: 7,  name: 'Potatoes',            category: 'Vegetables', unit: '1 kg',    price: 25,  original_price: 35,  image_url: 'https://images.unsplash.com/photo-1518977676601-b53f82ber630?w=300' },
    { product_id: 8,  name: 'Spinach (Palak)',     category: 'Vegetables', unit: '250 g',   price: 20,  original_price: 30,  image_url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300' },
    { product_id: 9,  name: 'Amul Toned Milk',     category: 'Dairy',      unit: '1 litre', price: 56,  original_price: 60,  image_url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300' },
    { product_id: 10, name: 'Paneer (Fresh)',       category: 'Dairy',      unit: '200 g',   price: 80,  original_price: 99,  image_url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300' },
    { product_id: 11, name: 'Curd (Dahi)',          category: 'Dairy',      unit: '400 g',   price: 45,  original_price: 55,  image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300' },
    { product_id: 12, name: 'Butter (Amul)',        category: 'Dairy',      unit: '100 g',   price: 56,  original_price: 60,  image_url: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300' },
    { product_id: 13, name: 'Lays Classic Salted',  category: 'Snacks',     unit: '52 g',    price: 20,  original_price: 20,  image_url: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300' },
    { product_id: 14, name: 'Kurkure Masala Munch', category: 'Snacks',     unit: '80 g',    price: 20,  original_price: 20,  image_url: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=300' },
    { product_id: 15, name: 'Dark Fantasy',         category: 'Snacks',     unit: '75 g',    price: 40,  original_price: 45,  image_url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300' },
    { product_id: 16, name: 'Haldirams Namkeen',    category: 'Snacks',     unit: '200 g',   price: 65,  original_price: 80,  image_url: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { product_id: 17, name: 'Coca Cola',            category: 'Beverages',  unit: '750 ml',  price: 40,  original_price: 45,  image_url: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300' },
    { product_id: 18, name: 'Mango Frooti',         category: 'Beverages',  unit: '600 ml',  price: 30,  original_price: 35,  image_url: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300' },
    { product_id: 19, name: 'Red Bull Energy',      category: 'Beverages',  unit: '250 ml',  price: 125, original_price: 135, image_url: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=300' },
    { product_id: 20, name: 'Paper Boat Aamras',    category: 'Beverages',  unit: '200 ml',  price: 30,  original_price: 35,  image_url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300' },
    { product_id: 21, name: 'White Bread',          category: 'Bakery',     unit: '400 g',   price: 40,  original_price: 45,  image_url: 'https://images.unsplash.com/photo-1549931319-a545753467c8?w=300' },
    { product_id: 22, name: 'Pav Buns',             category: 'Bakery',     unit: '6 pcs',   price: 30,  original_price: 35,  image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300' },
    { product_id: 23, name: 'Croissant',            category: 'Bakery',     unit: '2 pcs',   price: 99,  original_price: 120, image_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300' },
    { product_id: 24, name: 'Chocolate Cake',       category: 'Bakery',     unit: '500 g',   price: 350, original_price: 450, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300' }
];

// ── State ──────────────────────────────────
let currentUser = JSON.parse(localStorage.getItem('blinkit_user')) || null;
let cart = JSON.parse(localStorage.getItem('blinkit_cart')) || [];
let orders = JSON.parse(localStorage.getItem('blinkit_orders')) || [];

// ── On Page Load ───────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();

    if (currentUser) {
        document.getElementById('userModal').style.display = 'none';
    }
});

// ============================================
//  PRODUCTS
// ============================================

function renderProducts(list) {
    const grid = document.getElementById('productsGrid');

    if (list.length === 0) {
        grid.innerHTML = '<p style="text-align:center;padding:2rem;color:#999;">No products found.</p>';
        return;
    }

    grid.innerHTML = list.map(p => `
        <div class="product-card">
            <img class="product-image" src="${p.image_url}" alt="${p.name}"
                 onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-unit">${p.unit}</div>
                <div class="price-section">
                    <span class="current-price">₹${p.price}</span>
                    ${p.original_price > p.price
                        ? `<span class="original-price">₹${p.original_price}</span>`
                        : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${p.product_id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.category').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.category === category));
    }
}

// ============================================
//  CART (saved to localStorage)
// ============================================

function addToCart(productId) {
    if (!currentUser) {
        document.getElementById('userModal').style.display = 'flex';
        return;
    }

    const product = products.find(p => p.product_id === productId);
    if (!product) return;

    const existing = cart.find(item => item.product_id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            product_id: product.product_id,
            product_name: product.name,
            unit_price: product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    const idx = cart.findIndex(item => item.product_id === productId);
    if (idx === -1) return;

    if (cart[idx].quantity > 1) {
        cart[idx].quantity--;
    } else {
        cart.splice(idx, 1);
    }

    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('blinkit_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;

    const cartItemsEl = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p style="text-align:center;color:#999;padding:2rem;">Your cart is empty</p>';
    } else {
        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.product_name}</div>
                    <div class="cart-item-price">₹${item.unit_price * item.quantity}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="removeFromCart(${item.product_id})">−</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="addToCart(${item.product_id})">+</button>
                </div>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.unit_price * item.quantity, 0);
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
}

// ============================================
//  USER REGISTRATION (saved to localStorage)
// ============================================

function registerUser() {
    const full_name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const address = document.getElementById('userAddress').value.trim();

    if (!full_name || !email || !phone) {
        alert('Please fill in your name, email, and phone number.');
        return;
    }

    currentUser = { full_name, email, phone, address };
    localStorage.setItem('blinkit_user', JSON.stringify(currentUser));
    document.getElementById('userModal').style.display = 'none';
    alert('Welcome, ' + full_name + '! 🎉');
}

// ============================================
//  CHECKOUT (saved to localStorage)
// ============================================

function checkout() {
    if (!currentUser) {
        document.getElementById('userModal').style.display = 'flex';
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((s, i) => s + i.unit_price * i.quantity, 0);
    const order = {
        order_id: orders.length + 1,
        user: currentUser,
        items: [...cart],
        total_amount: total,
        status: 'placed',
        ordered_at: new Date().toISOString()
    };

    orders.push(order);
    localStorage.setItem('blinkit_orders', JSON.stringify(orders));

    alert('✅ Order #' + order.order_id + ' placed!\nTotal: ₹' + total + '\nDelivery in 10 minutes! 🚀');

    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}
