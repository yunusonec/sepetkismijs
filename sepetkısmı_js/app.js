// JavaScript kodları

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let cartPageURL = 'sepetim.html';

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
            'https://i.dummyjson.com/data/products/1/1.jpg',
            'https://i.dummyjson.com/data/products/1/2.jpg',
            'https://i.dummyjson.com/data/products/1/3.jpg',
            'https://i.dummyjson.com/data/products/1/4.jpg',
            'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
        ]
    },
    // Diğer ürünleri buraya ekleyin
    {
        id: 2,
        name: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
      },
      {
        id: 3,
        name: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
      },
      {
        id: 4,
        name: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
      },
      {
        id: 5,
        name: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
      },
      {
        id: 6,
        name: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        images: [
          "https://i.dummyjson.com/data/products/6/1.png",
          "https://i.dummyjson.com/data/products/6/2.jpg",
          "https://i.dummyjson.com/data/products/6/3.png",
          "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
      },
      {
        id: 7,
        name: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/7/1.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        ]
      },
      {
        id: 8,
        name: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/8/1.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        ]
      },
      {
        id: 9,
        name: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/9/1.jpg",
          "https://i.dummyjson.com/data/products/9/2.png",
          "https://i.dummyjson.com/data/products/9/3.png",
          "https://i.dummyjson.com/data/products/9/4.jpg",
          "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        ]
      },
      {
        id: 10,
        name: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        images: [
          "https://i.dummyjson.com/data/products/10/1.jpg",
          "https://i.dummyjson.com/data/products/10/2.jpg",
          "https://i.dummyjson.com/data/products/10/3.jpg",
          "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
      },
      {
        id: 11,
        name: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/11/1.jpg",
          "https://i.dummyjson.com/data/products/11/2.jpg",
          "https://i.dummyjson.com/data/products/11/3.jpg",
          "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
        ]
      },
      {
        id: 12,
        name: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        stock: 52,
        brand: "Royal_Mirage",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/12/1.jpg",
          "https://i.dummyjson.com/data/products/12/2.jpg",
          "https://i.dummyjson.com/data/products/12/3.png",
          "https://i.dummyjson.com/data/products/12/4.jpg",
          "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        ]
      },
      {
        id: 13,
        name: "Fog Scent Xpressio Perfume",
        description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        stock: 61,
        brand: "Fog Scent Xpressio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/13/1.jpg",
          "https://i.dummyjson.com/data/products/13/2.png",
          "https://i.dummyjson.com/data/products/13/3.jpg",
          "https://i.dummyjson.com/data/products/13/4.jpg",
          "https://i.dummyjson.com/data/products/13/thumbnail.webp"
        ]
      },
      {
        id: 14,
        name: "Non-Alcoholic Concentrated Perfume Oil",
        description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        stock: 114,
        brand: "Al Munakh",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/14/1.jpg",
          "https://i.dummyjson.com/data/products/14/2.jpg",
          "https://i.dummyjson.com/data/products/14/3.jpg",
          "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
        ]
      },
      {
        id: 15,
        name: "Eau De Perfume Spray",
        description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        stock: 105,
        brand: "Lord - Al-Rehab",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/15/1.jpg",
          "https://i.dummyjson.com/data/products/15/2.jpg",
          "https://i.dummyjson.com/data/products/15/3.jpg",
          "https://i.dummyjson.com/data/products/15/4.jpg",
          "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
        ]
      },
      
      
      
  
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.thumbnail}">
            <div class=name>${value.name}</div>
            <div class=price>${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Sepete Ekle</button>`;
        list.appendChild(newDiv);
    });
}

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    else {
    listCards[key].quantity += 1; // Ürün zaten sepete ekliyse sadece miktarını artır
    }
    listCards[key].price = listCards[key].quantity * products[key].price; // Ürünün güncellenmiş fiyatını hesapla
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price ;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.thumbnail}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
// Yeni sayfa açmak için bir fonksiyon oluşturuyoruz
function goToCartPage() {
    // Sepetteki ürünleri yeni sayfaya aktarabilirsiniz (örneğin localStorage veya URL parametreleri ile)
    // Bu örnekte sepetteki ürünleri localStorage kullanarak yeni sayfaya aktarıyoruz
    localStorage.setItem('cartItems', JSON.stringify(listCards));

    // Yeni sayfanın URL'ini belirliyoruz, örneğin 'cart.html' olarak varsayalım
    const cartPageURL = 'sepetim.html';

    // Yeni sayfaya yönlendirme işlemini gerçekleştiriyoruz
    window.location.href = cartPageURL;
}

// "Sepetime Git" butonuna tıklanınca goToCartPage fonksiyonunu çağırıyoruz
document.querySelector('.goToCart').addEventListener('click', goToCartPage);

/*---------------------------------------------------*/
// Yeni Sayfa Kısmı
// Yeni sayfada sepeti göstermek için fonksiyon

// Sepet sayfasında sepet ürünlerini göstermek için fonksiyon


function showCartItems() {
    const cartList = document.querySelector('.cartList');
    const totalElement = document.querySelector('.total');
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // Sepet listesini temizle
    cartList.innerHTML = '';

    // Eğer sepette ürün varsa listeye ekleyin ve toplam fiyatı hesaplayın
    if (cartItems) {
        let totalPrice = 0;
        let count = 0;
        cartItems.forEach((item, key) => {
            if (item) {
                const newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="${item.thumbnail}"/></div>
                    <div>${item.name}</div>
                    <div>${item.price.toLocaleString()} TL</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                        <div class="count">${item.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
                    </div>
                `;
                cartList.appendChild(newDiv);
                totalPrice += item.price;
                count += item.quantity;
            }
        });

        // Toplam tutarı göster
        totalElement.innerText = `Toplam: ${totalPrice.toLocaleString()} TL`;
        quantity.innerText = count;
    } else {
        totalElement.innerText = 'Sepetiniz boş';
        quantity.innerText = '0';
    }
}










initApp();




