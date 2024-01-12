const products = [
    {
        id: 1,
        priceInner: 200,
        nameWine: "Cabernet Sauvignon:",
        price: "$200.00",
        image: "img/menu-wine/nomal-1.jpg",
        title: "Cabernet Sauvignon is a popular red wine and is produced from the Cabernet Sauvignon grape variety,",
    },
    {
        id: 2,
        priceInner: 150,
        nameWine: "Merlot",
        price: "$150.00",
        image: "img/menu-wine/nomal-2.jpg",
        title: "Also a popular red wine, made from the Merlot grape variety, is light, soft and easy to drink.",
    },
    {
        id: 3,
        priceInner: 300,
        nameWine: "Pinot Noir",
        price: "$300.00",
        image: "img/menu-wine/nomal-3.jpg",
        title: "A complex and delicate red wine, produced from the Pinot Noir grape variety, with ripe fruit flavors, low tannins and high acidity.",
    },
    {
        id: 4,
        priceInner: 200.5,
        nameWine: "Chardonnay",
        price: "$200.50",
        image: "img/menu-wine/nomal-4.jpg",
        title: "A popular white wine, produced from the Chardonnay grape variety, has a light, complex flavor with flavors of fruit and spice.",
    },
    {
        id: 5,
        priceInner: 200,
        nameWine: "Riesling ",
        price: "$200.00",
        image: "img/menu-wine/nomal-5.jpg",
        title: "A popular white wine, made from the Sauvignon Blanc grape variety, has a fresh, sour taste and aromas of coriander.",
    },
    {
        id: 6,
        priceInner: 500,
        nameWine: "Syrah",
        price: "$500.00",
        image: "img/menu-wine/nomal-6.jpg",
        title: "A red wine produced from the Syrah grape variety, with a rich, spicy flavor and high alcohol content.",
    },
    {
        id: 7,
        priceInner: 300,
        nameWine: "Zinfandel",
        price: "$300.00",
        image: "img/menu-wine/nomal-7.jpg",
        title: "A popular red wine in the United States, produced from the Zinfandel grape variety, has rich.",
    },
    {
        id: 8,
        priceInner: 200,
        nameWine: "Malbec",
        price: "$200.00",
        image: "img/menu-wine/nomal-8.jpg",
        title: "Famous German white wine, with sweet, fruity flavors and high acidity.",
    },
];
const wines = [
    {
        id: 9,
        priceInner: 1000,
        nameWine: "Cabernet Sauvignon",
        price: "$1000.00",
        image: "img/menu-wine/vip-1.jpg",
        title: "Cabernet Sauvignon is a popular red wine and is produced from the Cabernet Sauvignon grape variety,",
    },
    {
        id: 10,
        priceInner: 800,
        nameWine: "Merlot",
        price: "$800.00",
        image: "img/menu-wine/vip-2.jpg",
        title: "Also a popular red wine, made from the Merlot grape variety, is light, soft and easy to drink.",
    },
    {
        id: 11,
        priceInner: 900,
        nameWine: "Pinot Noir",
        price: "$900.00",
        image: "img/menu-wine/vip-3.jpg",
        title: "A complex and delicate red wine, produced from the Pinot Noir grape variety, with ripe fruit flavors, low tannins and high acidity.",
    },
    {
        id: 12,
        priceInner: 600.5,
        nameWine: "Chardonnay",
        price: "$600.50",
        image: "img/menu-wine/vip-4.jpg",
        title: "A popular white wine, produced from the Chardonnay grape variety, has a light, complex flavor with flavors of fruit and spice.",
    },
    {
        id: 13,
        priceInner: 3000,
        nameWine: "Riesling ",
        price: "$3000.00",
        image: "img/menu-wine/vip-5.jpg",
        title: "A popular white wine, made from the Sauvignon Blanc grape variety, has a fresh, sour taste and aromas of coriander.",
    },
    {
        id: 14,
        priceInner: 900,
        nameWine: "Syrah",
        price: "$900.00",
        image: "img/menu-wine/vip-6.jpg",
        title: "A red wine produced from the Syrah grape variety, with a rich, spicy flavor and high alcohol content.",
    },
    {
        id: 15,
        priceInner:1500,
        nameWine: "Zinfandel",
        price: "$1500.00",
        image: "img/menu-wine/vip-7.jpg",
        title: "A popular red wine in the United States, produced from the Zinfandel grape variety, has rich.",
    },
    {
        id: 16,
        priceInner: 700,
        nameWine: "Argaux Premier Cru Classé",
        price: "$700.00",
        image: "img/menu-wine/vip-8.jpg",
        title: "Famous German white wine, with sweet, fruity flavors and high acidity.",
    },
];
const menu = document.getElementById("food-menu");
const wine = document.getElementById("food-menu1");
function renderMenu(menuInner) {
    products.forEach((product) => {
        menuInner.innerHTML += `<div onclick="handelWine(${product.id})" class="col-12 col-sm-6 col-md-4 col-lg-3 scale">
        <div class="image"> <img src="${product.image}" alt=""></div>
        <div class="name">${product.nameWine}</div>
        <div class="des">${product.title}</div>
        <div class="price">${product.price}</div>
        </div>`;
    });
}
renderMenu(menu);
function renderWines(wineInner) {
    wines.forEach((product) => {
        wineInner.innerHTML += `<a href="detailsproduct.html" class="col-12 col-sm-6 col-md-4 col-lg-3 scale">
        <div class="image"> <img src="${product.image}" alt=""></div>
        <div class="name">${product.nameWine}</div>
        <div class="des">${product.title}</div>
        <div class="price">${product.price}</div>
        </a>`;
    });
}
renderWines(wine);
const button4 = document.querySelector(".group-info .btn4");
const error = document.querySelector(".content-book .error");
console.log(button4);
button4.addEventListener("click", function () {
    const bookPerson = document.querySelector(" .group1");
    const bookDay = document.querySelector(".day");
    const time = document.querySelector(" .time");
    const mess = document.querySelector("#mess");
    const input = document.querySelector("#name");
    const input2 = document.querySelector("#email");
    if (bookPerson.value == "" || bookDay.value == "" || time.value == "" || mess.value == "" || input.value == "" || input2.value == "") {
        error.classList.remove("active");
        error.innerHTML = "Please enter all the information";
    } else {
        error.classList.add("active");
        error.innerHTML = "You have successfully booked a table";
    }
});
function handelWine(id) {
    const findProductId = products.find((item) => item.id === id);
    localStorage.setItem("PRODUCT", JSON.stringify(findProductId));
    window.location.href = "detailsproduct.html";
}
