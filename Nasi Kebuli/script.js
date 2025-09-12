// ===== DATA PRODUK NASI KEBULI =====
const products = [
  {
    name: 'Nasi Kebuli Ayam Goreng',
    description: 'Nasi kebuli spesial dengan ayam goreng renyah',
    price: 35000,
    stock: 50,
    category: 'ayam',
    imageUrl: './img/Ayam Goreng.jpg'
  },
  {
    name: 'Nasi Kebuli Ayam Bakar',
    description: 'Nasi kebuli lezat dengan ayam bakar sempurna',
    price: 35000,
    stock: 50,
    category: 'ayam',
    imageUrl: './img/Ayam Bakar.jpg'
  },
  {
    name: 'Nasi Kebuli Ayam Rempah',
    description: 'Nasi kebuli dengan ayam rempah khas',
    price: 35000,
    stock: 50,
    category: 'ayam',
    imageUrl: './img/Ayam Rempah.jpg'
  },
  {
    name: 'Nasi Kebuli Kambing Bakar',
    description: 'Nasi kebuli premium dengan kambing bakar empuk',
    price: 65000,
    stock: 30,
    category: 'kambing',
    imageUrl: './img/Kambing Bakar.jpg'
  }
];

let cart = [];

// ===== UTILS =====
function formatCurrency(amount) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('shoppingCart');
  cart = saved ? JSON.parse(saved) : [];
}

// ===== DETEKSI HALAMAN =====
const isCatalog = window.location.pathname.includes('index.html') || window.location.pathname === '/';
const isCheckout = window.location.pathname.includes('checkout.html');

// ===== HALAMAN KATALOG =====
if (isCatalog) {
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    updateCartDisplay();

    document.addEventListener('click', e => {
      if (e.target.classList.contains('add-to-cart')) {
        const name = e.target.dataset.product;
        const price = parseInt(e.target.dataset.price);
        const existing = cart.find(i => i.name === name);
        existing ? existing.quantity++ : cart.push({ name, price, quantity: 1 });
        saveCart();
        updateCartDisplay();
      }
    });

    document.getElementById('checkout-btn')?.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Keranjang kosong!');
        return;
      }
      window.location.href = 'checkout.html';
    });

    document.querySelectorAll('.category-button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts(btn.dataset.category);
      });
    });

    document.getElementById('search-input')?.addEventListener('input', e => {
      searchProducts(e.target.value);
    });
  });

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.category = p.category;
      card.innerHTML = `
        <img src="${p.imageUrl}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <p class="price">${formatCurrency(p.price)}</p>
        <p class="stock">Stok: ${p.stock}</p>
        <button class="add-to-cart" data-product="${p.name}" data-price="${p.price}">Tambahkan</button>
      `;
      grid.appendChild(card);
    });
  }

  function updateCartDisplay() {
    const count = cart.reduce((a, b) => a + b.quantity, 0);
    const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    document.querySelector('.item-count').textContent = count;
    document.querySelector('.total-amount').textContent = formatCurrency(total);
  }

  function filterProducts(category) {
    document.querySelectorAll('.product-card').forEach(card => {
      card.classList.toggle('hidden', category !== 'semua' && card.dataset.category !== category);
    });
  }

  function searchProducts(query) {
    const term = query.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('.product-desc').textContent.toLowerCase();
      card.classList.toggle('hidden', !name.includes(term) && !desc.includes(term));
    });
  }
}

// ===== HALAMAN CHECKOUT =====
if (isCheckout) {
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCheckout();

    document.getElementById('back-to-catalog')?.addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    document.getElementById('add-more-items')?.addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    document.getElementById('send-order')?.addEventListener('click', processOrder);

    // Generate order info
    document.getElementById('order-id').textContent = 'NK' + Date.now().toString().slice(-8);
    document.getElementById('order-date').textContent = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar',
      dateStyle: 'full',
      timeStyle: 'short'
    });
  });

  function renderCheckout() {
    const list = document.getElementById('order-items-list');
    const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
    const totalAmount = cart.reduce((a, b) => a + b.price * b.quantity, 0);

    if (!list) return;

    list.innerHTML = '';
    cart.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'item-detail';
      div.innerHTML = `
        <h3>${item.name}</h3>
        <div class="item-price-quantity">
          <span>${formatCurrency(item.price)}</span>
          <div class="quantity-control">
            <button onclick="window.updateQty(${idx}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="window.updateQty(${idx}, 1)">+</button>
          </div>
        </div>
        <button class="delete-btn" onclick="window.removeItem(${idx})">Hapus</button>
      `;
      list.appendChild(div);
    });

    ['total-items', 'subtotal-items', 'subtotal-amount', 'total-payment', 'footer-total']
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = totalItems === 0 ? '0' : formatCurrency(totalAmount);
      });
  }

  window.updateQty = (idx, change) => {
    cart[idx].quantity += change;
    if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    saveCart();
    renderCheckout();
  };

  window.removeItem = idx => {
    if (confirm('Hapus item ini?')) {
      cart.splice(idx, 1);
      saveCart();
      renderCheckout();
      if (cart.length === 0) window.location.href = 'index.html';
    }
  };

  function processOrder() {
    const nama = document.getElementById('nama-lengkap')?.value.trim();
    const wa = document.getElementById('whatsapp')?.value.trim();
    const alamat = document.getElementById('shipping-address')?.value.trim();
    const catatan = document.getElementById('order-notes')?.value.trim();

    if (!nama || !wa || !alamat) {
      alert('Lengkapi nama, WhatsApp, dan alamat!');
      return;
    }

    const orderId = document.getElementById('order-id').textContent;
    const orderDate = document.getElementById('order-date').textContent;
    const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

    let msg = `*PESANAN NASI KEBULI*\n\n`;
    msg += `ID Pesanan: ${orderId}\nTanggal: ${orderDate}\n\n`;
    msg += `Nama: ${nama}\nWhatsApp: ${wa}\nAlamat: ${alamat}\n\n`;
    cart.forEach(i => msg += `• ${i.name} - ${i.quantity}x ${formatCurrency(i.price)}\n`);
    msg += `\n*TOTAL: ${formatCurrency(total)}*`;
    if (catatan) msg += `\nCatatan: ${catatan}`;

    const waNumber = '6285176773633';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

    if (confirm('Kirim pesanan ke WhatsApp?')) {
      window.open(waUrl, '_blank');
      cart = [];
      saveCart();
      alert('Pesanan berhasil dikirim!');
      window.location.href = 'index.html';
    }
  }
}