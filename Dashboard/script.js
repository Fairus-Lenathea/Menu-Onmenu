const STORAGE_KEYS = {
  products: 'onmenu_products',
  orders: 'onmenu_orders',
  settings: 'onmenu_settings'
};

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 3000);
}

function showPage(page) {
  const content = document.getElementById('content');
  if (page === 'dashboard') content.innerHTML = renderDashboard();
  else if (page === 'products') content.innerHTML = renderProducts();
  else if (page === 'orders') content.innerHTML = renderOrders();
  else if (page === 'settings') content.innerHTML = renderSettings();
}

// === DASHBOARD ===
function renderDashboard() {
  const products = getData(STORAGE_KEYS.products);
  const orders = getData(STORAGE_KEYS.orders);
  const today = new Date().toISOString().split('T')[0];
  const todayOrders = orders.filter(o => o.date === today);
  const totalRevenue = todayOrders.filter(o => o.status === 'Selesai').reduce((sum, o) => sum + o.total, 0);

  return `
    <h2>📊 Dashboard Performa</h2>
    <div class="card">
      <h3>Total Produk</h3>
      <p style="font-size: 2rem; color: var(--primary);">${products.length}</p>
    </div>
    <div class="card">
      <h3>Pesanan Hari Ini</h3>
      <p style="font-size: 2rem; color: var(--primary);">${todayOrders.length}</p>
    </div>
    <div class="card">
      <h3>Total Pendapatan Hari Ini</h3>
      <p style="font-size: 2rem; color: var(--primary);">Rp${totalRevenue.toLocaleString()}</p>
    </div>
    <div class="card">
      <h3>Grafik Pesanan 7 Hari Terakhir</h3>
      <canvas id="chart" width="400" height="200"></canvas>
    </div>
  `;
}

// === PRODUK ===
function renderProducts() {
  const products = getData(STORAGE_KEYS.products);
  return `
    <h2>🍔 Manajemen Produk</h2>
    <button onclick="showAddProductForm()">+ Tambah Produk</button>
    <div id="productForm"></div>
    <div id="productList">${renderProductList(products)}</div>
  `;
}

function renderProductList(products) {
  return products.map((p, i) => `
    <div class="card">
      <strong>${p.name}</strong> - Rp${p.price} - Stok: ${p.stock}
      <br/><button onclick="deleteProduct(${i})">Hapus</button>
    </div>
  `).join('');
}

function showAddProductForm() {
  const form = `
    <div class="card">
      <input id="prodName" placeholder="Nama Produk" />
      <input id="prodPrice" type="number" placeholder="Harga" />
      <input id="prodStock" type="number" placeholder="Stok" />
      <textarea id="prodDesc" placeholder="Deskripsi"></textarea>
      <select id="prodSize">
        <option>1Kg</option>
        <option>500g</option>
        <option>250g</option>
      </select>
      <input type="file" id="prodImage" accept="image/*" />
      <button onclick="addProduct()">Simpan</button>
    </div>
  `;
  document.getElementById('productForm').innerHTML = form;
}

function addProduct() {
  const newProduct = {
    name: document.getElementById('prodName').value,
    price: parseInt(document.getElementById('prodPrice').value),
    stock: parseInt(document.getElementById('prodStock').value),
    desc: document.getElementById('prodDesc').value,
    size: document.getElementById('prodSize').value,
    image: ''
  };
  const products = getData(STORAGE_KEYS.products);
  products.push(newProduct);
  setData(STORAGE_KEYS.products, products);
  toast('Produk berhasil ditambahkan!');
  showPage('products');
}

function deleteProduct(index) {
  const products = getData(STORAGE_KEYS.products);
  products.splice(index, 1);
  setData(STORAGE_KEYS.products, products);
  toast('Produk dihapus!');
  showPage('products');
}

// === PESANAN ===
function renderOrders() {
  const orders = getData(STORAGE_KEYS.orders);
  return `
    <h2>📦 Manajemen Pesanan</h2>
    ${orders.map((o, i) => `
      <div class="card">
        <strong>${o.customer}</strong> - Total: Rp${o.total} - Status: 
        <select onchange="updateOrderStatus(${i}, this.value)">
          <option ${o.status === 'Baru' ? 'selected' : ''}>Baru</option>
          <option ${o.status === 'Diproses' ? 'selected' : ''}>Diproses</option>
          <option ${o.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
        </select>
      </div>
    `).join('')}
  `;
}

function updateOrderStatus(index, status) {
  const orders = getData(STORAGE_KEYS.orders);
  orders[index].status = status;
  setData(STORAGE_KEYS.orders, orders);
  toast('Status pesanan diperbarui!');
}

// === PENGATURAN ===
function renderSettings() {
  const settings = getData(STORAGE_KEYS.settings)[0] || {};
  return `
    <h2>⚙️ Pengaturan Toko</h2>
    <div class="card">
      <label>Nama Toko</label>
      <input id="storeNameInput" value="${settings.storeName || ''}" />
      <label>WhatsApp Bisnis</label>
      <input id="storeWA" value="${settings.whatsapp || ''}" />
      <label>Logo Toko</label>
      <input type="file" id="storeLogoInput" accept="image/*" onchange="previewLogo(event)" />
      <img id="logoPreview" src="${settings.logo || ''}" width="100" style="margin-top: 10px;" />
      <br/><button onclick="saveSettings()">Simpan</button>
    </div>
  `;
}

function previewLogo(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('logoPreview').src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function saveSettings() {
  const settings = {
    storeName: document.getElementById('storeNameInput').value,
    whatsapp: document.getElementById('storeWA').value,
    logo: document.getElementById('logoPreview').src
  };
  setData(STORAGE_KEYS.settings, [settings]);
  document.getElementById('storeNameDisplay').innerText = settings.storeName;
  document.getElementById('storeLogoPreview').src = settings.logo;
  toast('Pengaturan toko disimpan!');
}

// === INISIALISASI ===
(function init() {
  const settings = getData(STORAGE_KEYS.settings)[0];
  if (settings) {
    document.getElementById('storeNameDisplay').innerText = settings.storeName;
    document.getElementById('storeLogoPreview').src = settings.logo;
  }

  if (!localStorage.getItem(STORAGE_KEYS.orders)) {
    setData(STORAGE_KEYS.orders, [
      { customer: 'Budi', total: 50000, status: 'Baru', date: new Date().toISOString().split('T')[0] }
    ]);
  }

  showPage('dashboard');
})();