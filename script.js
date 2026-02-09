/* =========================
   MENU DATA (base)
   ========================= */
const menuData = [
  { id:1, price:65, category:"main", rating:4.8, image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80" },
  { id:2, price:35, category:"main", rating:4.6, image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" },
  { id:3, price:25, category:"main", rating:4.7, image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
  { id:4, price:22, category:"salads", rating:4.5, image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" },
  { id:5, price:20, category:"salads", rating:4.4, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
  { id:6, price:15, category:"appetizers", rating:4.6, image:"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80" },
  { id:7, price:16, category:"appetizers", rating:4.5, image:"https://images.unsplash.com/photo-1625944525533-473fbb7a9c11?auto=format&fit=crop&w=800&q=80" },
  { id:8, price:28, category:"desserts", rating:4.9, image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80" },
  { id:9, price:12, category:"drinks", rating:4.7, image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80" },
  { id:10, price:10, category:"drinks", rating:4.6, image:"https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=800&q=80" }
];

/* =========================
   i18n TEXTS
   ========================= */
const I18N = {
  ar: {
    page_title: "مطعم النخيل - قائمة الطعام والطلبات",
    page_desc: "مطعم النخيل يقدم أشهى المأكولات العربية والدولية. طلب عبر الواتساب، خدمة توصيل سريعة، قائمة طعام متنوعة.",
    og_title: "مطعم النخيل - أشهى المأكولات العربية",
    og_desc: "اطلب وجبتك المفضلة عبر الواتساب واستمتع بتوصيل سريع",

    restaurant_name: "مطعم النخيل",
    nav_home: "الرئيسية",
    nav_menu: "قائمة الطعام",
    nav_order: "كيفية الطلب",
    nav_location: "موقعنا",

    hero_title: "أشهى المأكولات العربية والأجنبية",
    hero_subtitle: "نقدم لكم في مطعم النخيل أفضل المأكولات الشرقية والغربية بأعلى معايير الجودة والنظافة. طلب عبر الواتساب مع خدمة توصيل سريعة.",
    btn_browse_menu: "تصفح القائمة",
    btn_whatsapp_order: "طلب عبر واتساب",
    btn_visit: "زيارتنا",

    menu_title: "قائمة الطعام",
    cat_all: "الكل",
    cat_main: "الوجبات الرئيسية",
    cat_appetizers: "المقبلات",
    cat_salads: "السلطات",
    cat_drinks: "المشروبات",
    cat_desserts: "الحلويات",

    add_to_cart: "أضف للسلة",
    sar: "ر.س",

    order_title: "كيفية الطلب",
    order_feature1_title: "طلب عبر الموقع أو الواتساب",
    order_feature1_desc: "يمكنك تصفح القائمة واختيار الوجبات المفضلة لديك وإضافتها إلى سلة التسوق، ثم إرسال الطلب عبر الواتساب بضغطة زر واحدة.",
    order_feature2_title: "توصيل سريع",
    order_feature2_desc: "نوفر خدمة التوصيل السريع خلال 30-45 دقيقة في جميع أنحاء المدينة. توصيل مجاني للطلبات فوق 100 ريال.",
    order_feature3_title: "دفع آمن",
    order_feature3_desc: "نقبل جميع وسائل الدفع: نقداً عند الاستلام، البطاقات المصرفية، أو المحافظ الإلكترونية.",
    order_whatsapp_btn: "اطلب الآن عبر واتساب",

    phone_box_title: "للحجوزات والاستفسارات",
    phone_box_hours: "نحن نعمل من الساعة 10 صباحاً حتى 12 منتصف الليل",

    location_title: "موقع المطعم",
    address_title: "العنوان",
    address_value: "حي الروضة، شارع الملك فهد، الرياض، المملكة العربية السعودية",
    hours_title: "ساعات العمل",
    hours_value1: "الأحد - الخميس: 10:00 ص - 12:00 ص",
    hours_value2: "الجمعة والسبت: 1:00 م - 1:00 ص",
    contact_info_title: "معلومات الاتصال",
    contact_phone: "الهاتف: +966 55 123 4567",
    contact_email: "البريد الإلكتروني: info@alnakhil-restaurant.com",
    open_maps: "افتح في خرائط جوجل",
    map_title: "خريطة موقع المطعم",
    map_hint: "اضغط على الزر أعلاه لفتح الموقع في خرائط جوجل",

    footer_about_title: "عن المطعم",
    footer_about_text: "مطعم النخيل يقدم أشهى المأكولات العربية والدولية منذ عام 2005. نحن نلتزم بمعايير الجودة والنظافة العالية لضمان رضا عملائنا.",
    footer_links_title: "روابط سريعة",
    footer_follow: "تابعنا",
    footer_link_home: "الرئيسية",
    footer_link_menu: "قائمة الطعام",
    footer_link_order: "كيفية الطلب",
    footer_link_location: "موقعنا",
    copyright: "مطعم النخيل. جميع الحقوق محفوظة.",

    cart_title: "سلة الطلبات",
    cart_empty: "سلة الطلبات فارغة",
    cart_total: "المجموع",
    cart_send_whatsapp: "إرسال الطلب عبر واتساب",
    cart_clear: "تفريغ السلة",

    alert_cart_empty: "سلة الطلبات فارغة. أضف بعض الوجبات أولاً.",
    confirm_clear: "هل أنت متأكد من تفريغ سلة الطلبات؟",
    added_to_cart: "تم إضافة",
    to_cart: "إلى السلة",

    wa_intro: "مرحباً، أريد طلب الوجبات التالية من مطعم النخيل:",
    wa_total: "المجموع:",
    wa_name: "الاسم: [يرجى كتابة اسمك]",
    wa_address: "العنوان: [يرجى كتابة عنوانك]",
    wa_phone: "رقم الهاتف: [يرجى كتابة رقم هاتفك]"
  },

  en: {
    page_title: "Al Nakhil Restaurant - Menu & Orders",
    page_desc: "Al Nakhil Restaurant offers the best Arabic and international dishes. Order via WhatsApp with fast delivery.",
    og_title: "Al Nakhil Restaurant - Delicious Arabic Food",
    og_desc: "Order your favorite meal via WhatsApp and enjoy fast delivery.",

    restaurant_name: "Al Nakhil Restaurant",
    nav_home: "Home",
    nav_menu: "Menu",
    nav_order: "How to Order",
    nav_location: "Location",

    hero_title: "The Best Arabic & International Cuisine",
    hero_subtitle: "At Al Nakhil Restaurant, we serve the finest Eastern and Western dishes with top quality and hygiene. Order via WhatsApp with fast delivery.",
    btn_browse_menu: "Browse Menu",
    btn_whatsapp_order: "Order via WhatsApp",
    btn_visit: "Visit Us",

    menu_title: "Food Menu",
    cat_all: "All",
    cat_main: "Main Dishes",
    cat_appetizers: "Appetizers",
    cat_salads: "Salads",
    cat_drinks: "Drinks",
    cat_desserts: "Desserts",

    add_to_cart: "Add to Cart",
    sar: "SAR",

    order_title: "How to Order",
    order_feature1_title: "Order via Website or WhatsApp",
    order_feature1_desc: "Browse the menu, add items to your cart, then send your order via WhatsApp with one click.",
    order_feature2_title: "Fast Delivery",
    order_feature2_desc: "We deliver within 30–45 minutes across the city. Free delivery for orders above 100 SAR.",
    order_feature3_title: "Secure Payment",
    order_feature3_desc: "We accept all payment methods: cash on delivery, bank cards, and e-wallets.",
    order_whatsapp_btn: "Order Now via WhatsApp",

    phone_box_title: "For Reservations & Inquiries",
    phone_box_hours: "We are open from 10 AM to 12 AM",

    location_title: "Restaurant Location",
    address_title: "Address",
    address_value: "Al Rawdah District, King Fahd Road, Riyadh, Saudi Arabia",
    hours_title: "Working Hours",
    hours_value1: "Sun - Thu: 10:00 AM - 12:00 AM",
    hours_value2: "Fri & Sat: 1:00 PM - 1:00 AM",
    contact_info_title: "Contact Information",
    contact_phone: "Phone: +966 55 123 4567",
    contact_email: "Email: info@alnakhil-restaurant.com",
    open_maps: "Open in Google Maps",
    map_title: "Restaurant Map",
    map_hint: "Click the button above to open the location in Google Maps",

    footer_about_title: "About the Restaurant",
    footer_about_text: "Al Nakhil Restaurant has been serving delicious Arabic and international cuisine since 2005. We follow the highest standards of quality and hygiene.",
    footer_links_title: "Quick Links",
    footer_follow: "Follow Us",
    footer_link_home: "Home",
    footer_link_menu: "Menu",
    footer_link_order: "How to Order",
    footer_link_location: "Location",
    copyright: "Al Nakhil Restaurant. All rights reserved.",

    cart_title: "Cart",
    cart_empty: "Your cart is empty",
    cart_total: "Total",
    cart_send_whatsapp: "Send Order via WhatsApp",
    cart_clear: "Clear Cart",

    alert_cart_empty: "Your cart is empty. Add some items first.",
    confirm_clear: "Are you sure you want to clear the cart?",
    added_to_cart: "Added",
    to_cart: "to cart",

    wa_intro: "Hello, I would like to order the following from Al Nakhil Restaurant:",
    wa_total: "Total:",
    wa_name: "Name: [Please type your name]",
    wa_address: "Address: [Please type your address]",
    wa_phone: "Phone: [Please type your phone number]"
  },

  de: {
    page_title: "Al Nakhil Restaurant - Menü & Bestellungen",
    page_desc: "Al Nakhil Restaurant bietet die besten arabischen und internationalen Gerichte. Bestellung per WhatsApp mit schneller Lieferung.",
    og_title: "Al Nakhil Restaurant - Leckeres arabisches Essen",
    og_desc: "Bestelle dein Lieblingsgericht per WhatsApp und genieße schnelle Lieferung.",

    restaurant_name: "Al Nakhil Restaurant",
    nav_home: "Startseite",
    nav_menu: "Speisekarte",
    nav_order: "So bestellst du",
    nav_location: "Standort",

    hero_title: "Die besten arabischen & internationalen Gerichte",
    hero_subtitle: "Im Al Nakhil Restaurant servieren wir die besten orientalischen und internationalen Speisen mit höchster Qualität und Hygiene. Bestellung per WhatsApp mit schneller Lieferung.",
    btn_browse_menu: "Menü ansehen",
    btn_whatsapp_order: "Per WhatsApp bestellen",
    btn_visit: "Besuchen",

    menu_title: "Speisekarte",
    cat_all: "Alle",
    cat_main: "Hauptgerichte",
    cat_appetizers: "Vorspeisen",
    cat_salads: "Salate",
    cat_drinks: "Getränke",
    cat_desserts: "Desserts",

    add_to_cart: "In den Warenkorb",
    sar: "SAR",

    order_title: "So bestellst du",
    order_feature1_title: "Bestellen über die Website oder WhatsApp",
    order_feature1_desc: "Durchsuche das Menü, lege Gerichte in den Warenkorb und sende deine Bestellung mit einem Klick per WhatsApp.",
    order_feature2_title: "Schnelle Lieferung",
    order_feature2_desc: "Wir liefern innerhalb von 30–45 Minuten in der ganzen Stadt. Kostenlose Lieferung ab 100 SAR.",
    order_feature3_title: "Sichere Zahlung",
    order_feature3_desc: "Wir akzeptieren alle Zahlungsarten: Barzahlung bei Lieferung, Bankkarten oder E-Wallets.",
    order_whatsapp_btn: "Jetzt per WhatsApp bestellen",

    phone_box_title: "Reservierungen & Anfragen",
    phone_box_hours: "Wir sind von 10:00 bis 00:00 Uhr geöffnet",

    location_title: "Standort des Restaurants",
    address_title: "Adresse",
    address_value: "Al Rawdah Viertel, King Fahd Road, Riad, Saudi-Arabien",
    hours_title: "Öffnungszeiten",
    hours_value1: "So - Do: 10:00 - 00:00",
    hours_value2: "Fr & Sa: 13:00 - 01:00",
    contact_info_title: "Kontaktinformationen",
    contact_phone: "Telefon: +966 55 123 4567",
    contact_email: "E-Mail: info@alnakhil-restaurant.com",
    open_maps: "In Google Maps öffnen",
    map_title: "Restaurantkarte",
    map_hint: "Klicke auf den Button oben, um den Standort in Google Maps zu öffnen",

    footer_about_title: "Über das Restaurant",
    footer_about_text: "Al Nakhil Restaurant serviert seit 2005 köstliche arabische und internationale Küche. Wir halten die höchsten Standards für Qualität und Hygiene ein.",
    footer_links_title: "Schnelllinks",
    footer_follow: "Folge uns",
    footer_link_home: "Startseite",
    footer_link_menu: "Speisekarte",
    footer_link_order: "So bestellst du",
    footer_link_location: "Standort",
    copyright: "Al Nakhil Restaurant. Alle Rechte vorbehalten.",

    cart_title: "Warenkorb",
    cart_empty: "Dein Warenkorb ist leer",
    cart_total: "Gesamt",
    cart_send_whatsapp: "Bestellung per WhatsApp senden",
    cart_clear: "Warenkorb leeren",

    alert_cart_empty: "Dein Warenkorb ist leer. Bitte füge zuerst Gerichte hinzu.",
    confirm_clear: "Möchtest du den Warenkorb wirklich leeren?",
    added_to_cart: "Hinzugefügt",
    to_cart: "zum Warenkorb",

    wa_intro: "Hallo, ich möchte folgende Gerichte vom Al Nakhil Restaurant bestellen:",
    wa_total: "Gesamt:",
    wa_name: "Name: [Bitte deinen Namen eingeben]",
    wa_address: "Adresse: [Bitte deine Adresse eingeben]",
    wa_phone: "Telefon: [Bitte deine Telefonnummer eingeben]"
  }
};

/* =========================
   MENU ITEM TRANSLATIONS
   ========================= */
const menuI18N = {
  1:{
    ar:{ name:"منسف لحم", desc:"لحم ضأن مطهو بصلصة اللبن مع الأرز واللوز المحمص" },
    en:{ name:"Mansaf Lamb", desc:"Slow-cooked lamb with yogurt sauce, rice, and toasted almonds" },
    de:{ name:"Mansaf mit Lamm", desc:"Langsam gegartes Lamm mit Joghurtsoße, Reis und gerösteten Mandeln" }
  },
  2:{
    ar:{ name:"كبة مقلية", desc:"كبة محشية باللحم المفروم والبصل والصنوبر" },
    en:{ name:"Fried Kibbeh", desc:"Stuffed kibbeh with minced meat, onions, and pine nuts" },
    de:{ name:"Frittierte Kibbeh", desc:"Gefüllte Kibbeh mit Hackfleisch, Zwiebeln und Pinienkernen" }
  },
  3:{
    ar:{ name:"شاورما لحم", desc:"شاورما لحم مع خبز طازج وثومية وطماطم" },
    en:{ name:"Beef Shawarma", desc:"Beef shawarma with fresh bread, garlic sauce, and tomatoes" },
    de:{ name:"Rind-Shawarma", desc:"Rind-Shawarma mit frischem Brot, Knoblauchsoße und Tomaten" }
  },
  4:{
    ar:{ name:"فتوش", desc:"سلطة خضار طازجة مع خبز مقلي وصوص الليمون" },
    en:{ name:"Fattoush", desc:"Fresh salad with crispy bread and lemon dressing" },
    de:{ name:"Fattoush", desc:"Frischer Salat mit knusprigem Brot und Zitronendressing" }
  },
  5:{
    ar:{ name:"تبولة", desc:"سلطة برغل مع البقدونس والطماطم والبصل وعصير الليمون" },
    en:{ name:"Tabbouleh", desc:"Bulgur salad with parsley, tomatoes, onions, and lemon juice" },
    de:{ name:"Taboulé", desc:"Bulgur-Salat mit Petersilie, Tomaten, Zwiebeln und Zitronensaft" }
  },
  6:{
    ar:{ name:"حمص بالطحينة", desc:"حمص مهروس مع طحينة وزيت الزيتون والليمون" },
    en:{ name:"Hummus", desc:"Mashed chickpeas with tahini, olive oil, and lemon" },
    de:{ name:"Hummus", desc:"Pürierte Kichererbsen mit Tahini, Olivenöl und Zitrone" }
  },
  7:{
    ar:{ name:"متبل باذنجان", desc:"باذنجان مشوي مهروس مع الطماطم وزيت الزيتون" },
    en:{ name:"Eggplant Moutabal", desc:"Smoked eggplant dip with olive oil and spices" },
    de:{ name:"Auberginen-Moutabal", desc:"Geräucherter Auberginen-Dip mit Olivenöl und Gewürzen" }
  },
  8:{
    ar:{ name:"كنافة بالنوتيلا", desc:"كنافة محشية بالنوتيلا ومغطاة بالقشطة" },
    en:{ name:"Nutella Kunafa", desc:"Kunafa filled with Nutella and topped with cream" },
    de:{ name:"Kunafa mit Nutella", desc:"Kunafa gefüllt mit Nutella und mit Sahne/Cream getoppt" }
  },
  9:{
    ar:{ name:"عصير برتقال طازج", desc:"عصير برتقال طازج مع قطع البرتقال" },
    en:{ name:"Fresh Orange Juice", desc:"Fresh orange juice with orange pulp" },
    de:{ name:"Frischer Orangensaft", desc:"Frisch gepresster Orangensaft mit Fruchtstückchen" }
  },
  10:{
    ar:{ name:"ليمون بالنعناع", desc:"عصير ليمون طازج مع أوراق النعناع" },
    en:{ name:"Mint Lemonade", desc:"Fresh lemonade with mint leaves" },
    de:{ name:"Minz-Limonade", desc:"Frische Zitronenlimonade mit Minzblättern" }
  }
};

/* =========================
   CART STORAGE
   ========================= */
let cart = JSON.parse(localStorage.getItem("restaurantCart")) || [];

/* =========================
   DOM
   ========================= */
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.getElementById("nav");
const navMenu = document.getElementById("navMenu");

const langSelect = document.getElementById("langSelect");

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCartBtn = document.getElementById("closeCartBtn");
const overlay = document.getElementById("overlay");

const menuItemsContainer = document.getElementById("menuItems");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

const currentYearElement = document.getElementById("currentYear");
const categoryBtns = document.querySelectorAll(".category-btn");

/* =========================
   LANGUAGE
   ========================= */
let currentLang = localStorage.getItem("siteLang") || "ar";

function setMeta(lang){
  const t = I18N[lang];

  document.title = t.page_title;

  const desc = document.querySelector('meta[name="description"]');
  if(desc) desc.setAttribute("content", t.page_desc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if(ogTitle) ogTitle.setAttribute("content", t.og_title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if(ogDesc) ogDesc.setAttribute("content", t.og_desc);
}

function setFont(lang){
  const fontLink = document.getElementById("fontLink");
  if(!fontLink) return;

  if(lang === "ar"){
    fontLink.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap";
  }else{
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap";
  }
}

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("siteLang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.classList.toggle("ltr", lang !== "ar");

  setMeta(lang);
  setFont(lang);

  const t = I18N[lang];

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(t[key]) el.textContent = t[key];
  });

  // Update WhatsApp buttons text param by language
  updateWhatsappLinks();

  // Re-render menu + cart
  const activeCat = document.querySelector(".category-btn.active")?.getAttribute("data-category") || "all";
  renderMenuItems(activeCat);
  updateCart();
}

function updateWhatsappLinks(){
  const heroWhatsapp = document.getElementById("heroWhatsapp");
  const orderWhatsapp = document.getElementById("orderWhatsapp");

  const t = I18N[currentLang];

  // Keep it short and safe for WA
  let msg = "";
  if(currentLang === "ar") msg = "مرحباً، أريد طلب وجبة من مطعم النخيل";
  if(currentLang === "en") msg = "Hello, I would like to order from Al Nakhil Restaurant";
  if(currentLang === "de") msg = "Hallo, ich möchte bei Al Nakhil Restaurant bestellen";


  const url = `https://wa.me/966551234567?text=${encodeURIComponent(msg)}`;

  if(heroWhatsapp) heroWhatsapp.href = url;
  if(orderWhatsapp) orderWhatsapp.href = url;
}

/* =========================
   MENU TRANSLATION
   ========================= */
function getMenuItemText(item){
  const data = menuI18N[item.id];
  if(!data) return { name: "Item", desc: "" };

  return data[currentLang] || data.ar;
}

/* =========================
   MENU RENDER
   ========================= */
function renderMenuItems(category){
  menuItemsContainer.innerHTML = "";

  const filteredItems = category === "all"
    ? menuData
    : menuData.filter(item => item.category === category);

  const t = I18N[currentLang];

  filteredItems.forEach(item=>{
    const translated = getMenuItemText(item);

    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.setAttribute("data-id", item.id);

    menuItem.innerHTML = `
      <img 
        src="${item.image}" 
        alt="${translated.name}" 
        class="item-image"
        onerror="this.onerror=null; this.src='https://kitchen.sayidaty.net/uploads/small/25/2511d021169f619a40b2955a77aca990_w750_h500.jpg';"
      />

      <div class="item-content">
        <div class="item-header">
          <h4 class="item-title">${translated.name}</h4>
          <div class="item-price">${item.price} ${t.sar}</div>
        </div>
        <p class="item-description">${translated.desc}</p>
        <div class="item-footer">
          <div class="item-rating">
            ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}
            <span style="color:#666; margin-right:5px;">(${item.rating})</span>
          </div>
          <button class="add-to-cart" data-id="${item.id}">
            <i class="fas fa-plus"></i> ${t.add_to_cart}
          </button>
        </div>
      </div>
    `;

    menuItemsContainer.appendChild(menuItem);
  });

  document.querySelectorAll(".add-to-cart").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = parseInt(btn.getAttribute("data-id"));
      addToCart(id);
    });
  });
}

/* =========================
   CART
   ========================= */
function addToCart(id){
  const item = menuData.find(x=>x.id === id);
  if(!item) return;

  const existing = cart.find(x=>x.id === id);
  if(existing) existing.quantity += 1;
  else cart.push({ ...item, quantity: 1 });

  localStorage.setItem("restaurantCart", JSON.stringify(cart));
  updateCart();

  const t = I18N[currentLang];
  const translated = getMenuItemText(item);

  showNotification(`${t.added_to_cart} ${translated.name} ${t.to_cart}`);
}

function removeFromCart(id){
  cart = cart.filter(x=>x.id !== id);
  localStorage.setItem("restaurantCart", JSON.stringify(cart));
  updateCart();
}

function updateQuantity(id, change){
  const item = cart.find(x=>x.id === id);
  if(!item) return;

  item.quantity += change;

  if(item.quantity < 1){
    removeFromCart(id);
  }else{
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
    updateCart();
  }
}

function updateCart(){
  const t = I18N[currentLang];

  // count
  const totalItems = cart.reduce((sum, item)=> sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // items
  cartItemsContainer.innerHTML = "";

  if(cart.length === 0){
    cartItemsContainer.innerHTML = `
      <div style="text-align:center; padding:40px 20px; color:#999;">
        <i class="fas fa-shopping-cart" style="font-size:3rem; margin-bottom:15px;"></i>
        <p>${t.cart_empty}</p>
      </div>
    `;
  }else{
    cart.forEach(item=>{
      const translated = getMenuItemText(item);

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${translated.name}</div>
          <div class="cart-item-price">${item.price} ${t.sar}</div>
        </div>
        <div class="cart-item-controls">
          <button class="quantity-btn decrease" data-id="${item.id}" aria-label="Decrease">
            <i class="fas fa-minus"></i>
          </button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}" aria-label="Increase">
            <i class="fas fa-plus"></i>
          </button>
          <button class="remove-item" data-id="${item.id}" aria-label="Remove">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    document.querySelectorAll(".decrease").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        updateQuantity(parseInt(btn.getAttribute("data-id")), -1);
      });
    });

    document.querySelectorAll(".increase").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        updateQuantity(parseInt(btn.getAttribute("data-id")), 1);
      });
    });

    document.querySelectorAll(".remove-item").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        removeFromCart(parseInt(btn.getAttribute("data-id")));
      });
    });
  }

  // total
  const total = cart.reduce((sum, item)=> sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `${total} ${t.sar}`;
}

/* =========================
   CART UI OPEN/CLOSE
   ========================= */
function openCart(){
  cartSidebar.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart(){
  cartSidebar.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

/* =========================
   NOTIFICATION
   ========================= */
function showNotification(message){
  const notification = document.createElement("div");
  notification.textContent = message;

  const isLTR = currentLang !== "ar";

  notification.style.cssText = `
    position: fixed;
    bottom: 100px;
    ${isLTR ? "left: 20px;" : "right: 20px;"}
    background: var(--primary);
    color: white;
    padding: 15px 22px;
    border-radius: 14px;
    box-shadow: var(--box-shadow);
    z-index: 3000;
    font-weight: 900;
    transform: translateX(${isLTR ? "-150%" : "150%"});
    transition: transform 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(()=> notification.style.transform = "translateX(0)", 10);

  setTimeout(()=>{
    notification.style.transform = `translateX(${isLTR ? "-150%" : "150%"})`;
    setTimeout(()=> notification.remove(), 300);
  }, 2500);
}

/* =========================
   CHECKOUT
   ========================= */
function checkoutViaWhatsApp(){
  const t = I18N[currentLang];

  if(cart.length === 0){
    alert(t.alert_cart_empty);
    return;
  }

  let message = `${t.wa_intro}\n\n`;

  cart.forEach(item=>{
    const translated = getMenuItemText(item);
    message += `${translated.name} - ${item.quantity} × ${item.price} ${t.sar} = ${item.quantity * item.price} ${t.sar}\n`;
  });

  const total = cart.reduce((sum, item)=> sum + (item.price * item.quantity), 0);
  message += `\n${t.wa_total} ${total} ${t.sar}`;
  message += `\n\n${t.wa_name}`;
  message += `\n${t.wa_address}`;
  message += `\n${t.wa_phone}`;

  const whatsappUrl = `https://wa.me/966551234567?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/* =========================
   EVENTS
   ========================= */
document.addEventListener("DOMContentLoaded", ()=>{
  currentYearElement.textContent = new Date().getFullYear();

  // Load language
  langSelect.value = currentLang;
  applyLang(currentLang);

  // Render default
  renderMenuItems("all");
  updateCart();
});

langSelect.addEventListener("change", ()=> applyLang(langSelect.value));

// Mobile menu
mobileMenuBtn.addEventListener("click", ()=>{
  nav.classList.toggle("active");
  mobileMenuBtn.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach(link=>{
  link.addEventListener("click", ()=>{
    if(nav.classList.contains("active")){
      nav.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Category filter
categoryBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    categoryBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderMenuItems(btn.getAttribute("data-category"));
  });
});

// Cart open/close
cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// Clear cart
clearCartBtn.addEventListener("click", ()=>{
  const t = I18N[currentLang];
  if(cart.length === 0) return;

  if(confirm(t.confirm_clear)){
    cart = [];
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
    updateCart();
    showNotification(t.cart_clear);
  }
});

// Checkout
checkoutBtn.addEventListener("click", checkoutViaWhatsApp);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if(targetId === "#") return;

    const el = document.querySelector(targetId);
    if(!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });
  });
});

// Active nav on scroll
window.addEventListener("scroll", ()=>{
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(section=>{
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 120){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }
  });
});
