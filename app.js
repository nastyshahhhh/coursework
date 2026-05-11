const defaultMenuItems = [
    {
        id: 1,
        name: "Филадельфия Gold",
        category: "rolls",
        tag: "Роллы",
        price: 28.9,
        desc: "Лосось, сливочный сыр, авокадо, огурец и фирменный соус унаги.",
        img: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=900",
        featured: true
    },
    {
        id: 2,
        name: "Калифорния с крабом",
        category: "rolls",
        tag: "Роллы",
        price: 25.5,
        desc: "Снежный краб, тобико, авокадо, огурец и японский майонез.",
        img: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=900",
        featured: true
    },
    {
        id: 3,
        name: "Унаги маки",
        category: "rolls",
        tag: "Роллы",
        price: 24.9,
        desc: "Копченый угорь, рис, нори, кунжут и густой соус унаги.",
        img: "https://avatars.mds.yandex.net/i?id=4c77c38c8d6eec01056cddcca763954f_l-5246120-images-thumbs&n=13",
        featured: false
    },
    {
        id: 4,
        name: "Тонкоцу рамен",
        category: "wok",
        tag: "WOK и рамен",
        price: 23.9,
        desc: "Насыщенный бульон, лапша, свинина чашу, яйцо аджитама и зелень.",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=900",
        featured: true
    },
    {
        id: 5,
        name: "WOK с курицей терияки",
        category: "wok",
        tag: "WOK и рамен",
        price: 21.9,
        desc: "Яичная лапша, курица, овощи, кунжут и соус терияки.",
        img: "https://menunedeli.ru/wp-content/uploads/2026/01/Lapsha-udon-s-kuritsei-v-souse-teriyaki-15-933x700.jpg",
        featured: true
    },
    {
        id: 6,
        name: "Том Ям с креветками",
        category: "wok",
        tag: "WOK и рамен",
        price: 29.9,
        desc: "Креветки, шампиньоны, кокосовое молоко, лайм и паста том ям.",
        img: "https://avatars.mds.yandex.net/i?id=1ba8967e0f5443ce2065e067c89b063f4d84e46a-8455861-images-thumbs&n=13",
        featured: false
    },
    {
        id: 7,
        name: "Пад-тай",
        category: "wok",
        tag: "WOK и рамен",
        price: 26.4,
        desc: "Рисовая лапша, креветки, арахис, ростки сои и тамаринд.",
        img: "https://avatars.mds.yandex.net/i?id=c91f29f763dbfb054857979724cd52ee_l-5869499-images-thumbs&n=13",
        featured: false
    },
    {
        id: 8,
        name: "Гедза с курицей",
        category: "hot",
        tag: "Горячее",
        price: 17.9,
        desc: "Шесть японских пельменей с курицей, капустой и соусом понзу.",
        img: "https://avatars.mds.yandex.net/i?id=6da170b14819b9ff98a2b3b363caedd16bd3eb2d-3410853-images-thumbs&n=13",
        featured: false
    },
    {
        id: 9,
        name: "Эби темпура",
        category: "hot",
        tag: "Горячее",
        price: 22.9,
        desc: "Креветки в хрустящей темпуре с пряным соусом и лаймом.",
        img: "https://cdn-ru16.foodpicasso.com/assets/7d/3c/d4/01/7d3cd40137c040eb6c6d75c7e8274964---jpeg_1000x_103c0_convert.jpeg",
        featured: true
    },
    {
        id: 10,
        name: "Карааге",
        category: "hot",
        tag: "Горячее",
        price: 18.9,
        desc: "Сочная курица в хрустящей панировке, имбирь и чесночный соус.",
        img: "https://avatars.mds.yandex.net/i?id=94b2b65bc9430f04a132dc381e463971ba1ba097-10468051-images-thumbs&n=13",
        featured: false
    },
    {
        id: 11,
        name: "Моти ассорти",
        category: "dessert",
        tag: "Десерты",
        price: 14.9,
        desc: "Три вкуса: матча, клубника и черный кунжут.",
        img: "https://sun9-12.vkuserphoto.ru/s/v1/ig2/rr0TBtgFaVO9wJiFv1uU1shXzQK0-yfYbR9c_qhI780uV2TLgpnyfIJVRBqltAr5bq3i6WP4to0SKcsJqYtrLHTU.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1080x0",
        featured: false
    },
    {
        id: 12,
        name: "Матча чизкейк",
        category: "dessert",
        tag: "Десерты",
        price: 13.5,
        desc: "Нежный чизкейк с японским чаем матча и сливочным кремом.",
        img: "https://avatars.mds.yandex.net/i?id=178403fbb6c55dd8d7c102918ed0b79ce460fdf9-12752893-images-thumbs&n=13",
        featured: false
    }
];

let menuItems = defaultMenuItems;

const formatPrice = (value) => `${value.toFixed(2)} BYN`;

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
}[char]));

function parseMenuFromXmlDocument(doc) {
    const parserError = doc.querySelector("parsererror");
    if (parserError) return null;

    const root = doc.documentElement;
    if (!root || root.localName !== "menu") return null;

    const items = [];
    root.querySelectorAll("item").forEach((el) => {
        const nameEl = el.querySelector("name");
        const descEl = el.querySelector("description");
        if (!nameEl || !descEl) return;

        const id = Number(el.getAttribute("id"));
        const price = parseFloat(String(el.getAttribute("price") || "").replace(",", "."));
        const img = el.getAttribute("image") || "";

        if (!Number.isFinite(id) || !Number.isFinite(price) || !img) return;

        items.push({
            id,
            name: nameEl.textContent.trim(),
            category: el.getAttribute("category") || "",
            tag: el.getAttribute("tag") || "",
            price,
            desc: descEl.textContent.trim(),
            img,
            featured: el.getAttribute("featured") === "true"
        });
    });

    return items.length ? items : null;
}

async function loadMenuFromXml() {
    try {
        const response = await fetch("data/menu.xml", { cache: "no-store" });
        if (!response.ok) return null;

        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "application/xml");
        return parseMenuFromXmlDocument(doc);
    } catch {
        return null;
    }
}

const getCart = () => JSON.parse(localStorage.getItem("yangJiCart") || "[]");
const setCart = (cart) => localStorage.setItem("yangJiCart", JSON.stringify(cart));

let cart = getCart();

function showToast(message) {
    const oldToast = document.querySelector(".toast");
    if (oldToast) oldToast.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.append(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(12px)";
        setTimeout(() => toast.remove(), 250);
    }, 2200);
}

function productCard(item) {
    return `
        <article class="product-card reveal">
            <div class="product-card__image">
                <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy">
            </div>
            <div class="product-card__body">
                <span class="product-card__tag">${escapeHtml(item.tag)}</span>
                <div class="product-card__top">
                    <h3>${escapeHtml(item.name)}</h3>
                    <span class="product-card__price">${formatPrice(item.price)}</span>
                </div>
                <p>${escapeHtml(item.desc)}</p>
                <button class="btn btn--primary btn--wide" type="button" data-add-to-cart="${item.id}">
                    Добавить в корзину
                </button>
            </div>
        </article>
    `;
}

function addToCart(id) {
    const product = menuItems.find((item) => item.id === Number(id));
    if (!product) return;

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    setCart(cart);
    updateCart();
    showToast(`${product.name} добавлено в корзину`);
}

function changeQuantity(id, delta) {
    cart = cart.map((item) => {
        if (item.id === Number(id)) {
            return { ...item, quantity: item.quantity + delta };
        }
        return item;
    }).filter((item) => item.quantity > 0);

    setCart(cart);
    updateCart();
}

function clearCart() {
    cart = [];
    setCart(cart);
    updateCart();
}

function updateCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = count;
    });

    document.querySelectorAll("[data-cart-total]").forEach((node) => {
        node.textContent = formatPrice(total);
    });

    document.querySelectorAll("[data-cart-items]").forEach((node) => {
        if (!cart.length) {
            node.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <h3>Корзина пустая</h3>
                    <p>Добавьте блюда на странице меню.</p>
                </div>
            `;
            return;
        }

        node.innerHTML = cart.map((item) => `
            <div class="cart-item">
                <div>
                    <div class="cart-item__name">${escapeHtml(item.name)}</div>
                    <div class="cart-item__price">${formatPrice(item.price)} x ${item.quantity}</div>
                </div>
                <div class="cart-item__controls">
                    <button type="button" data-cart-minus="${item.id}" aria-label="Уменьшить">−</button>
                    <strong>${item.quantity}</strong>
                    <button type="button" data-cart-plus="${item.id}" aria-label="Увеличить">+</button>
                </div>
            </div>
        `).join("");
    });

    renderOrderPreview();
}

function openCart() {
    const panel = document.querySelector("[data-cart-panel]");
    const overlay = document.querySelector("[data-overlay]");
    if (!panel || !overlay) return;

    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    overlay.classList.add("active");
    document.body.classList.add("cart-open");
}

function closeCart() {
    const panel = document.querySelector("[data-cart-panel]");
    const overlay = document.querySelector("[data-overlay]");
    if (!panel || !overlay) return;

    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    overlay.classList.remove("active");
    document.body.classList.remove("cart-open");
}

function renderFeaturedMenu() {
    const container = document.querySelector("[data-featured-menu]");
    if (!container) return;

    container.innerHTML = menuItems
        .filter((item) => item.featured)
        .slice(0, 6)
        .map(productCard)
        .join("");
}

function renderMenuList() {
    const list = document.querySelector("[data-menu-list]");
    if (!list) return;

    const search = document.querySelector("[data-menu-search]");
    const activeFilter = document.querySelector("[data-menu-filter].active");
    const empty = document.querySelector("[data-menu-empty]");
    const query = (search?.value || "").trim().toLowerCase();
    const category = activeFilter?.dataset.menuFilter || "all";

    const filteredItems = menuItems.filter((item) => {
        const matchesCategory = category === "all" || item.category === category;
        const matchesQuery = [item.name, item.desc, item.tag].join(" ").toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    list.innerHTML = filteredItems.map(productCard).join("");
    if (empty) empty.hidden = filteredItems.length > 0;
    observeReveals();
}

function renderOrderPreview() {
    const preview = document.querySelector("[data-order-preview]");
    if (!preview) return;

    if (!cart.length) {
        preview.innerHTML = "<span>Корзина пока пустая</span>";
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    preview.innerHTML = `
        <strong>Ваш заказ:</strong>
        <ul>
            ${cart.map((item) => `<li>${escapeHtml(item.name)} x ${item.quantity}</li>`).join("")}
        </ul>
        <strong>Итого: ${formatPrice(total)}</strong>
    `;
}

function setupMenuFilters() {
    const search = document.querySelector("[data-menu-search]");
    const filters = document.querySelectorAll("[data-menu-filter]");

    if (search) {
        search.addEventListener("input", renderMenuList);
    }

    filters.forEach((button) => {
        button.addEventListener("click", () => {
            filters.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            renderMenuList();
        });
    });
}

function setupOrderForm() {
    const form = document.querySelector("[data-order-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!cart.length) {
            showToast("Сначала добавьте блюда в корзину");
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        showToast(`Заказ принят! Сумма: ${formatPrice(total)}`);
        form.reset();
        clearCart();
    });
}

function setupNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        const opened = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(opened));
    });

    document.querySelectorAll(".nav__link").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function observeReveals() {
    const items = document.querySelectorAll(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
}

document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");
    const plusButton = event.target.closest("[data-cart-plus]");
    const minusButton = event.target.closest("[data-cart-minus]");

    if (addButton) addToCart(addButton.dataset.addToCart);
    if (plusButton) changeQuantity(plusButton.dataset.cartPlus, 1);
    if (minusButton) changeQuantity(minusButton.dataset.cartMinus, -1);
});

document.addEventListener("DOMContentLoaded", async () => {
    document.querySelectorAll("[data-cart-open]").forEach((button) => button.addEventListener("click", openCart));
    document.querySelectorAll("[data-cart-close], [data-overlay]").forEach((button) => button.addEventListener("click", closeCart));

    const fromXml = await loadMenuFromXml();
    if (fromXml) {
        menuItems = fromXml;
        document.querySelectorAll("[data-menu-xml-loaded]").forEach((node) => {
            node.hidden = false;
        });
    }

    setupNavigation();
    setupMenuFilters();
    setupOrderForm();
    renderFeaturedMenu();
    renderMenuList();
    updateCart();
    observeReveals();
});
