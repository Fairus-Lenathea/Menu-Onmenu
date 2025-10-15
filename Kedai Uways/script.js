// ===== DATA PRODUK KEDAI UWAIS (STRUKTUR BARU) =====
const products = [
  {
    name: 'Pir Xianglie',
    description: 'Buah pir import, manis dan renyah.',
    imageUrl: './img/Pir Xianglie.jpg',
    category: 'buah',
    stock: 50,
    variants: [
      { size: '1 Kg', price: 45000 }
    ]
  },
  {
    name: 'Shine Muscat',
    description: 'Anggur premium tanpa biji, sangat manis.',
    imageUrl: './img/Shine Muscat.jpg',
    category: 'buah',
    stock: 30,
    variants: [
      { size: '1 Kg', price: 50000 }
    ]
  },
  {
    name: 'Pisang Cavendish',
    description: 'Pisang lokal ukuran besar, cocok untuk smoothie.',
    imageUrl: './img/Pisang Cavendish.jpg',
    category: 'buah',
    stock: 100,
    variants: [
      { size: '1 Kg', price: 20000 }
    ]
  },
  {
    name: 'Beet',
    description: 'Sayur bit segar, cocok untuk jus atau salad.',
    imageUrl: './img/Beet.jpg',
    category: 'sayur',
    stock: 25,
    variants: [
      { size: '1 Kg', price: 45000 }
    ]
  },
  {
    name: 'Anggur Red Globe',
    description: 'Anggur merah besar, manis dan juicy.',
    imageUrl: './img/Anggur Red Globe.jpg',
    category: 'buah',
    stock: 40,
    variants: [
      { size: '1 Kg', price: 70000 }
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
        <img src="${p.imageUrl}" alt="${p.name}" loading="lazy" />
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
    const term = query.toLowerCase().trim();
    const activeCategory = document.querySelector('.category-button.active').dataset.category;

    document.querySelectorAll('.product-card').forEach(card => {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      const productCategory = card.dataset.category;

      // Kondisi 1: Apakah produk cocok dengan filter kategori yang aktif?
      const matchesCategory = (activeCategory === 'semua' || productCategory === activeCategory);

      // Kondisi 2: Apakah produk cocok dengan istilah pencarian?
      // Jika pencarian kosong, semua dianggap cocok.
      const matchesSearch = (term === '' || productName.includes(term));

      // Tampilkan kartu HANYA JIKA cocok dengan kategori DAN pencarian
      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // ===== MODAL LOGIC (REFACTORED) =====
  const modal = document.getElementById('variant-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalVariants = document.getElementById('modal-variants');
  const modalAddBtn = document.getElementById('modal-add');
  const modalCloseBtn = document.getElementById('modal-close');

  function setupModalEvents() {
    // Event listener untuk membuka modal
    document.getElementById('product-grid').addEventListener('click', e => {
      const addToCartButton = e.target.closest('.add-to-cart');
      if (addToCartButton) {
        const product = JSON.parse(addToCartButton.dataset.product);
        showVariantModal(product);
      }
    });

    // Event listener untuk tombol "Tambah ke Keranjang" di modal
    modalAddBtn.addEventListener('click', () => {
      const selectedVariantInput = modalVariants.querySelector('input[name="variant"]:checked');
      if (!selectedVariantInput) {
        alert('Pilih varian ukuran terlebih dahulu!');
        return;
      }
      
      const variant = JSON.parse(selectedVariantInput.value);
      const product = JSON.parse(modalAddBtn.dataset.product);
      const itemName = `${product.name} (${variant.size})`;
      
      const existingItem = cart.find(item => item.name === itemName);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: itemName, price: variant.price, quantity: 1 });
      }
      
      saveCart();
      updateCartDisplay();
      closeVariantModal();
    });

    // Event listener untuk menutup modal
    modalCloseBtn.addEventListener('click', closeVariantModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVariantModal();
        }
    });
  }

  function showVariantModal(product) {
    modalTitle.textContent = product.name;
    modalImage.src = product.imageUrl;
    modalImage.alt = `Gambar ${product.name}`;

    modalVariants.innerHTML = '';
    product.variants.forEach(v => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="variant" value='${JSON.stringify(v)}'>
        <span>${v.size} – ${formatCurrency(v.price)}</span>
      `;
      modalVariants.appendChild(label);
    });

    modalAddBtn.dataset.product = JSON.stringify(product);
    modal.classList.add('active');
  }

  function closeVariantModal() {
    modal.classList.remove('active');
  }
}

// ===== HALAMAN CHECKOUT (REFACTORED with Event Delegation) =====
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

    document.getElementById('order-id').textContent = 'KU' + Date.now().toString().slice(-8);
    document.getElementById('order-date').textContent = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Makassar'
    });

    // Event Delegation for quantity changes and item removal
    document.getElementById('order-items-list').addEventListener('click', (event) => {
        const target = event.target;
        const itemDetail = target.closest('.item-detail');
        if (!itemDetail) return;

        const itemIndex = parseInt(itemDetail.dataset.index, 10);

        if (target.matches('.quantity-increase')) {
            updateQty(itemIndex, 1);
        } else if (target.matches('.quantity-decrease')) {
            updateQty(itemIndex, -1);
        } else if (target.matches('.delete-btn')) {
            removeItem(itemIndex);
        }
    });
  });

  function renderCheckout() {
    const list = document.getElementById('order-items-list');
    if (!list) return;

    list.innerHTML = '';
    cart.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'item-detail';
      div.dataset.index = idx; // Add index for event delegation
      div.innerHTML = `
        <h3>${item.name}</h3>
        <div class="item-price-quantity">
          <span>${formatCurrency(item.price)}</span>
          <div class="quantity-control">
            <button class="quantity-decrease" aria-label="Kurangi jumlah ${item.name}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-increase" aria-label="Tambah jumlah ${item.name}">+</button>
          </div>
        </div>
        <button class="delete-btn">Hapus</button>
      `;
      list.appendChild(div);
    });

    const totalItems = cart.reduce((a, b) => a + b.quantity, 0);
    const totalAmount = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    const formattedTotal = formatCurrency(totalAmount);

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('subtotal-items').textContent = `${totalItems} item`;
    document.getElementById('subtotal-amount').textContent = formattedTotal;
    document.getElementById('total-payment').textContent = formattedTotal;
    document.getElementById('footer-total').textContent = formattedTotal;
  }

  // Local function, not on window
  function updateQty(idx, change) {
    if (!cart[idx]) return;
    cart[idx].quantity += change;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    saveCart();
    renderCheckout();
  }

  // Local function, not on window
  function removeItem(idx) {
    if (confirm('Anda yakin ingin menghapus item ini?')) {
      cart.splice(idx, 1);
      saveCart();
      renderCheckout();
      if (cart.length === 0) {
        alert("Keranjang Anda kosong. Kembali ke katalog.");
        window.location.href = 'index.html';
      }
    }
  }

  function processOrder() {
    const nama = document.getElementById('nama-lengkap')?.value.trim();
    const wa = document.getElementById('whatsapp')?.value.trim();
    const alamat = document.getElementById('shipping-address')?.value.trim();
    const catatan = document.getElementById('order-notes')?.value.trim();

    if (!nama || !wa || !alamat) {
      alert('Mohon lengkapi Nama, nomor WhatsApp, dan Alamat Pengiriman.');
      return;
    }

    const orderId = document.getElementById('order-id').textContent;
    const orderDate = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Makassar', dateStyle: 'full', timeStyle: 'short' });
    const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

    let msg = `*PESANAN KEDAI UWAIS*\n\n`;
    msg += `*ID Pesanan:* ${orderId}\n`;
    msg += `*Tanggal:* ${orderDate}\n\n`;
    msg += `*Nama:* ${nama}\n`;
    msg += `*WhatsApp:* ${wa}\n`;
    msg += `*Alamat Pengiriman:*\n${alamat}\n\n`;
    msg += `--- *Detail Pesanan* ---\n`;
    cart.forEach(i => {
      msg += `• ${i.name} (${i.quantity}x) - ${formatCurrency(i.price * i.quantity)}\n`;
    });
    msg += `--------------------\n`;
    msg += `*TOTAL PEMBAYARAN: ${formatCurrency(total)}*\n\n`;
    if (catatan) msg += `*Catatan Tambahan:*\n${catatan}`;

    const waNumber = '6285176773633'; // Nomor WA Kedai Uwais
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

    if (confirm('Pesanan Anda akan dikirim melalui WhatsApp. Lanjutkan?')) {
      window.open(waUrl, '_blank');
      cart = [];
      saveCart();
      alert('Pesanan berhasil dikirim! Anda akan diarahkan kembali ke katalog.');
      window.location.href = 'index.html';
    }
  }
}
