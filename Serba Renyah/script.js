// ===== DATA PRODUK BARU =====
// ===== DATA PRODUK BARU (SEMUA PRODUK LAMA DIKONSOLIDASI) =====
const products = [
  {
    name: 'Basreng Stik Pedas',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Basreng Pedas.jpg',
    category: 'Kerupuk',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 80000 },
      { size: '500g', price: 45000 },
      { size: '250g', price: 25000 }
    ]
  },
  {
    name: 'Basreng Stik Original',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Basreng Original.jpg',
    category: 'Kerupuk',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 80000 },
      { size: '500g', price: 45000 },
      { size: '250g', price: 25000 }
    ]
  },
  {
    name: 'Kripik Tempe Rasa Original',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Basreng Original.jpg',
    category: 'Kerupuk',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 70000 },
      { size: '500g', price: 40000 },
      { size: '250g', price: 22000 }
    ]
  },
  {
    name: 'Opak Singkong Pedas Manis',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Opak Singkong.jpg',
    category: 'Kerupuk',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 60000 },
      { size: '500g', price: 35000 },
      { size: '250g', price: 20000 }
    ]
  },
  {
    name: 'Stik Sukun',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Stik Sukun.jpg',
    category: 'Kerupuk',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 75000 },
      { size: '500g', price: 42000 },
      { size: '250g', price: 23000 }
    ]
  },
  {
    name: 'Mini Astor Vanilla',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Mini Astor Vanilla.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 50000 },
      { size: '500g', price: 30000 },
      { size: '250g', price: 17000 }
    ]
  },
  {
    name: 'Mini Astor Coklat Jeruk',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Mini Astor Vanilla.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 55000 },
      { size: '500g', price: 32000 },
      { size: '250g', price: 18000 }
    ]
  },
  {
    name: 'Cokelat Sereal',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Sereal Cokelat.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 45000 },
      { size: '500g', price: 28000 },
      { size: '250g', price: 16000 }
    ]
  },
  {
    name: 'Mini Soes Coklat',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Mini Soes Cokelat.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 90000 },
      { size: '500g', price: 50000 },
      { size: '250g', price: 28000 }
    ]
  },
  {
    name: 'Kue Selai Hati',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Selai Hati.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 90000 },
      { size: '500g', price: 50000 },
      { size: '250g', price: 28000 }
    ]
  },
  {
    name: 'Biskuit Wijen Caramel',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Selai Hati.jpg',
    category: 'Kue & Manis',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 70000 },
      { size: '500g', price: 40000 },
      { size: '250g', price: 22000 }
    ]
  },
  {
    name: 'Makaroni Pedas',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Makaroni Pedas.jpg',
    category: 'Gurih & Renyah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 40000 },
      { size: '500g', price: 25000 },
      { size: '250g', price: 15000 }
    ]
  },
  {
    name: 'Ajisan',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Ajisan Pilus sakura.jpg',
    category: 'Gurih & Renyah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 55000 },
      { size: '500g', price: 32000 },
      { size: '250g', price: 18000 }
    ]
  },
  {
    name: 'Pilus Jagung',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Pilus jagung.jpg',
    category: 'Gurih & Renyah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 50000 },
      { size: '500g', price: 28000 },
      { size: '250g', price: 17000 }
    ]
  },
  {
    name: 'Cup Cup Balado',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Cup Cup Balado.jpg',
    category: 'Gurih & Renyah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 60000 },
      { size: '500g', price: 33000 },
      { size: '250g', price: 20000 }
    ]
  },
  {
    name: 'Kerupuk Seblak',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Cup Cup Balado.jpg',
    category: 'Gurih & Renyah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 70000 },
      { size: '500g', price: 37000 },
      { size: '250g', price: 22000 }
    ]
  },
  {
    name: 'Kacang Atom',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Kacang Atom Oven.jpg',
    category: 'Kacang-kacangan',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 60000 },
      { size: '500g', price: 33000 },
      { size: '250g', price: 20000 }
    ]
  },
  {
    name: 'Kacang Kentucky',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Kacang Kentucky.jpg',
    category: 'Kacang-kacangan',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 65000 },
      { size: '500g', price: 35000 },
      { size: '250g', price: 21000 }
    ]
  },
  {
    name: 'Kacang Thailand',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Kacang Thailand.jpg',
    category: 'Kacang-kacangan',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 82000 },
      { size: '500g', price: 44000 },
      { size: '250g', price: 25000 }
    ]
  },
  {
    name: 'Kacang Koro Kupas',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Kacang Koro Kupas.jpg',
    category: 'Kacang-kacangan',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 45000 },
      { size: '500g', price: 26000 },
      { size: '250g', price: 16000 }
    ]
  },
  {
    name: 'Kacang Campur',
    description: 'Camilan lezat dan renyah',
    imageUrl: './img/Kacang Campur.jpg',
    category: 'Kacang-kacangan',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 50000 },
      { size: '500g', price: 29000 },
      { size: '250g', price: 17000 }
    ]
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
    setupModalEvents();

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
      const minPrice = Math.min(...p.variants.map(v => v.price));
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.category = p.category;
      card.innerHTML = `
        <img src="${p.imageUrl}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <p class="price">Mulai dari ${formatCurrency(minPrice)}</p>
        <p class="stock">Stok: ${p.stock}</p>
        <button class="add-to-cart" data-product='${JSON.stringify(p)}'>Tambahkan</button>
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
      const shouldShow = category === 'semua' || card.dataset.category === category;
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

  function setupModalEvents() {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('add-to-cart')) {
        const product = JSON.parse(e.target.dataset.product);
        showVariantModal(product);
      }
    });

    document.getElementById('modal-close')?.addEventListener('click', closeVariantModal);
    document.getElementById('modal-add')?.addEventListener('click', () => {
      const selected = document.querySelector('input[name="variant"]:checked');
      if (!selected) {
        alert('Pilih varian ukuran!');
        return;
      }
      const variant = JSON.parse(selected.value);
      const product = JSON.parse(document.getElementById('modal-product').dataset.product);
      const itemName = `${product.name} (${variant.size})`;
      const existing = cart.find(i => i.name === itemName);
      existing ? existing.quantity++ : cart.push({ name: itemName, price: variant.price, quantity: 1 });
      saveCart();
      updateCartDisplay();
      closeVariantModal();
    });
  }

  function showVariantModal(product) {
    const modal = document.getElementById('variant-modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const variants = document.getElementById('modal-variants');
    title.textContent = product.name;
    image.src = product.imageUrl;
    document.getElementById('modal-product').dataset.product = JSON.stringify(product);
    variants.innerHTML = '';
    product.variants.forEach(v => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="variant" value='${JSON.stringify(v)}' />
        ${v.size} - ${formatCurrency(v.price)}
      `;
      variants.appendChild(label);
    });
    modal.classList.add('active');
  }

  function closeVariantModal() {
    document.getElementById('variant-modal').classList.remove('active');
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