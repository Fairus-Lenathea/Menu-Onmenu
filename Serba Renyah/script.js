// ===== DATA PRODUK =====
const products = [
  // ==== 1 Kg ====
  { name: 'Basreng Stik Pedas 1 Kg', description: 'Camilan lezat dan renyah', price: 80000, stock: 100, imageUrl: './img/Basreng Pedas.jpg' },
  { name: 'Basreng Stik Original 1 Kg', description: 'Camilan lezat dan renyah', price: 80000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Kripik Tempe Rasa Original 1kg', description: 'Camilan lezat dan renyah', price: 70000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Opak Singkong Pedas Manis 1kg', description: 'Camilan lezat dan renyah', price: 60000, stock: 100, imageUrl: './img/Opak Singkong.jpg' },
  { name: 'Stik Sukun 1kg', description: 'Camilan lezat dan renyah', price: 75000, stock: 100, imageUrl: './img/Stik Sukun.jpg' },
  { name: 'Mini Astor Vanilla 1kg', description: 'Camilan lezat dan renyah', price: 50000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Mini Astor Coklat Jeruk 1kg', description: 'Camilan lezat dan renyah', price: 55000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Cokelat Sereal 1kg', description: 'Camilan lezat dan renyah', price: 45000, stock: 100, imageUrl: './img/Sereal Cokelat.jpg' },
  { name: 'Mini Soes Coklat 1kg', description: 'Camilan lezat dan renyah', price: 90000, stock: 100, imageUrl: './img/Mini Soes Cokelat.jpg' },
  { name: 'Kue Selai Hati 1kg', description: 'Camilan lezat dan renyah', price: 90000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Biskuit Wijen Caramel 1kg', description: 'Camilan lezat dan renyah', price: 70000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Makaroni Pedas 1kg', description: 'Camilan lezat dan renyah', price: 40000, stock: 100, imageUrl: './img/Makaroni Pedas.jpg' },
  { name: 'Ajisan 1kg', description: 'Camilan lezat dan renyah', price: 55000, stock: 100, imageUrl: './img/Ajisan Pilus sakura.jpg' },
  { name: 'Pilus Jagung 1kg', description: 'Camilan lezat dan renyah', price: 50000, stock: 100, imageUrl: './img/Pilus jagung.jpg' },
  { name: 'Cup Cup Balado 1kg', description: 'Camilan lezat dan renyah', price: 60000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kerupuk Seblak 1kg', description: 'Camilan lezat dan renyah', price: 70000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kacang Atom 1kg', description: 'Camilan lezat dan renyah', price: 60000, stock: 100, imageUrl: './img/Kacang Atom Oven.jpg' },
  { name: 'Kacang Kentucky 1kg', description: 'Camilan lezat dan renyah', price: 65000, stock: 100, imageUrl: './img/Kacang Kentucky.jpg' },
  { name: 'Kacang Thailand 1kg', description: 'Camilan lezat dan renyah', price: 82000, stock: 100, imageUrl: './img/Kacang Thailand.jpg' },
  { name: 'Kacang Koro Kupas 1kg', description: 'Camilan lezat dan renyah', price: 45000, stock: 100, imageUrl: './img/Kacang Koro Kupas.jpg' },
  { name: 'Kacang Campur 1kg', description: 'Camilan lezat dan renyah', price: 50000, stock: 100, imageUrl: './img/Kacang Campur.jpg' },

  // ==== 500g ====
  { name: 'Basreng Stik Pedas 500g', description: 'Camilan lezat dan renyah', price: 45000, stock: 100, imageUrl: './img/Basreng Pedas.jpg' },
  { name: 'Basreng Stik Original 500g', description: 'Camilan lezat dan renyah', price: 45000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Kripik Tempe Rasa Original 500g', description: 'Camilan lezat dan renyah', price: 40000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Opak Singkong Pedas Manis 500g', description: 'Camilan lezat dan renyah', price: 35000, stock: 100, imageUrl: './img/Opak Singkong.jpg' },
  { name: 'Stik Sukun 500g', description: 'Camilan lezat dan renyah', price: 42000, stock: 100, imageUrl: './img/Stik Sukun 500g.jpg' },
  { name: 'Mini Astor Vanilla 500g', description: 'Camilan lezat dan renyah', price: 30000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Mini Astor Coklat Jeruk 500g', description: 'Camilan lezat dan renyah', price: 32000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Cokelat Sereal 500g', description: 'Camilan lezat dan renyah', price: 28000, stock: 100, imageUrl: './img/Sereal Cokelat.jpg' },
  { name: 'Mini Soes Coklat 500g', description: 'Camilan lezat dan renyah', price: 50000, stock: 100, imageUrl: './img/Mini Soes Cokelat.jpg' },
  { name: 'Kue Selai Hati 500g', description: 'Camilan lezat dan renyah', price: 50000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Biskuit Wijen Caramel 500g', description: 'Camilan lezat dan renyah', price: 40000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Makaroni Pedas 500g', description: 'Camilan lezat dan renyah', price: 25000, stock: 100, imageUrl: './img/Makaroni Pedas.jpg' },
  { name: 'Ajisan 500g', description: 'Camilan lezat dan renyah', price: 32000, stock: 100, imageUrl: './img/Ajisan Pilus sakura.jpg' },
  { name: 'Pilus Jagung 500g', description: 'Camilan lezat dan renyah', price: 28000, stock: 100, imageUrl: './img/Pilus jagung.jpg' },
  { name: 'Cup Cup Balado 500g', description: 'Camilan lezat dan renyah', price: 33000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kerupuk Seblak 500g', description: 'Camilan lezat dan renyah', price: 37000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kacang Atom 500g', description: 'Camilan lezat dan renyah', price: 33000, stock: 100, imageUrl: './img/Kacang Atom Oven.jpg' },
  { name: 'Kacang Kentucky 500g', description: 'Camilan lezat dan renyah', price: 35000, stock: 100, imageUrl: './img/Kacang Kentucky.jpg' },
  { name: 'Kacang Thailand 500g', description: 'Camilan lezat dan renyah', price: 44000, stock: 100, imageUrl: './img/Kacang Thailand.jpg' },
  { name: 'Kacang Koro Kupas 500g', description: 'Camilan lezat dan renyah', price: 26000, stock: 100, imageUrl: './img/Kacang Koro Kupas.jpg' },
  { name: 'Kacang Campur 500g', description: 'Camilan lezat dan renyah', price: 29000, stock: 100, imageUrl: './img/Kacang Campur.jpg' },

  // ==== 250g ====
  { name: 'Basreng Stik Pedas 250g', description: 'Camilan lezat dan renyah', price: 25000, stock: 100, imageUrl: './img/Basreng Pedas.jpg' },
  { name: 'Basreng Stik Original 250g', description: 'Camilan lezat dan renyah', price: 25000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Kripik Tempe Rasa Original 250g', description: 'Camilan lezat dan renyah', price: 22000, stock: 100, imageUrl: './img/Basreng Original.jpg' },
  { name: 'Opak Singkong Pedas Manis 250g', description: 'Camilan lezat dan renyah', price: 20000, stock: 100, imageUrl: './img/Opak Singkong.jpg' },
  { name: 'Stik Sukun 250g', description: 'Camilan lezat dan renyah', price: 23000, stock: 100, imageUrl: './img/Stik Sukun.jpg' },
  { name: 'Mini Astor Vanilla 250g', description: 'Camilan lezat dan renyah', price: 17000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Mini Astor Coklat Jeruk 250g', description: 'Camilan lezat dan renyah', price: 18000, stock: 100, imageUrl: './img/Mini Astor Vanilla.jpg' },
  { name: 'Cokelat Sereal 250g', description: 'Camilan lezat dan renyah', price: 16000, stock: 100, imageUrl: './img/Sereal Cokelat.jpg' },
  { name: 'Mini Soes Coklat 250g', description: 'Camilan lezat dan renyah', price: 28000, stock: 100, imageUrl: './img/Mini Soes Coklat.jpg' },
  { name: 'Kue Selai Hati 250g', description: 'Camilan lezat dan renyah', price: 28000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Biskuit Wijen Caramel 250g', description: 'Camilan lezat dan renyah', price: 22000, stock: 100, imageUrl: './img/Selai Hati.jpg' },
  { name: 'Makaroni Pedas 250g', description: 'Camilan lezat dan renyah', price: 15000, stock: 100, imageUrl: './img/Makaroni Pedas.jpg' },
  { name: 'Ajisan 250g', description: 'Camilan lezat dan renyah', price: 18000, stock: 100, imageUrl: './img/Ajisan Pilus sakura.jpg' },
  { name: 'Pilus Jagung 250g', description: 'Camilan lezat dan renyah', price: 17000, stock: 100, imageUrl: './img/Pilus jagung.jpg' },
  { name: 'Cup Cup Balado 250g', description: 'Camilan lezat dan renyah', price: 20000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kerupuk Seblak 250g', description: 'Camilan lezat dan renyah', price: 22000, stock: 100, imageUrl: './img/Cup Cup Balado.jpg' },
  { name: 'Kacang Atom 250g', description: 'Camilan lezat dan renyah', price: 20000, stock: 100, imageUrl: './img/Kacang Atom Oven.jpg' },
  { name: 'Kacang Kentucky 250g', description: 'Camilan lezat dan renyah', price: 21000, stock: 100, imageUrl: './img/Kacang Kentucky.jpg' },
  { name: 'Kacang Thailand 250g', description: 'Camilan lezat dan renyah', price: 25000, stock: 100, imageUrl: './img/Kacang Thailand.jpg' },
  { name: 'Kacang Koro Kupas 250g', description: 'Camilan lezat dan renyah', price: 16000, stock: 100, imageUrl: './img/Kacang Koro Kupas.jpg' },
  { name: 'Kacang Campur 250g', description: 'Camilan lezat dan renyah', price: 17000, stock: 100, imageUrl: './img/Kacang Campur.jpg' }
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

// ===== FUNGSI UNTUK MENDAPATKAN KATEGORI BERDASARKAN NAMA PRODUK =====
function getCategoryFromName(name) {
  if (name.includes('1 Kg') || name.includes('1kg')) return '1Kg';
  if (name.includes('500g')) return '500g';
  if (name.includes('250g')) return '250g';
  return 'lainnya';
}

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

    // Filter & search
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
      const category = getCategoryFromName(p.name);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.category = category;
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
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'semua' || cardCategory === category;
      card.classList.toggle('hidden', !shouldShow);
    });
  }

  function searchProducts(query) {
    const term = query.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('.product-desc').textContent.toLowerCase();
      const matchesSearch = name.includes(term) || desc.includes(term);
      const isVisible = !card.classList.contains('hidden');
      if (!matchesSearch && isVisible) {
        card.classList.add('hidden');
      } else if (matchesSearch && isVisible) {
        card.classList.remove('hidden');
      }
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
    document.getElementById('order-id').textContent = 'TSR' + Date.now().toString().slice(-8);
    document.getElementById('order-date').textContent = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar'
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
  const orderDate = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar', dateStyle: 'full', timeStyle: 'short' });

  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  let msg = `*PESANAN TOKO SERBA RENYAH*\n\n`;
  msg += `ID Pesanan: ${orderId}\nTanggal Pesanan: ${orderDate}\n\n`;
  msg += `Nama: ${nama}\nWhatsApp: ${wa}\nAlamat: ${alamat}\n\n`;
  cart.forEach(i => msg += `• ${i.name} - ${i.quantity}x ${formatCurrency(i.price)}\n`);
  msg += `\n*TOTAL: ${formatCurrency(total)}*`;
  if (catatan) msg += `\nCatatan: ${catatan}`;

  const waNumber = '6285158155081';
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