const products = [
    {
        nameWine: "Cabernet Sauvignon:",
        price: "$200.00",
        image: "img/menu-wine/nomal-1.jpg",
        title: "Cabernet Sauvignon is a popular red wine and is produced from the Cabernet Sauvignon grape variety,",
    },
    {
        nameWine: "Merlot",
        price: "$150.00",
        image: "img/menu-wine/nomal-2.jpg",
        title: "Also a popular red wine, made from the Merlot grape variety, is light, soft and easy to drink.",
    },
    {
        nameWine: "Pinot Noir",
        price: "$300.00",
        image: "img/menu-wine/nomal-3.jpg",
        title: "A complex and delicate red wine, produced from the Pinot Noir grape variety, with ripe fruit flavors, low tannins and high acidity.",
    },
    {
        nameWine: "Chardonnay",
        price: "$200.50",
        image: "img/menu-wine/nomal-4.jpg",
        title: "A popular white wine, produced from the Chardonnay grape variety, has a light, complex flavor with flavors of fruit and spice.",
    },
    {
        nameWine: "Riesling ",
        price: "$200.00",
        image: "img/menu-wine/nomal-5.jpg",
        title: "A popular white wine, made from the Sauvignon Blanc grape variety, has a fresh, sour taste and aromas of coriander.",
    },
    {
        nameWine: "Syrah",
        price: "$500.00",
        image: "img/menu-wine/nomal-6.jpg",
        title: "A red wine produced from the Syrah grape variety, with a rich, spicy flavor and high alcohol content.",
    },
    {
        nameWine: "Zinfandel",
        price: "$300.00",
        image: "img/menu-wine/nomal-7.jpg",
        title: "A popular red wine in the United States, produced from the Zinfandel grape variety, has rich.",
    },
    {
        nameWine: "Malbec",
        price: "$200.00",
        image: "img/menu-wine/nomal-8.jpg",
        title: "Famous German white wine, with sweet, fruity flavors and high acidity.",
    },
];
const wines = [
    {
        nameWine: "Cabernet Sauvignon",
        price: "$1000.00",
        image: "img/menu-wine/vip-1.jpg",
        title: "Cabernet Sauvignon is a popular red wine and is produced from the Cabernet Sauvignon grape variety,",
    },
    {
        nameWine: "Merlot",
        price: "$800.00",
        image: "img/menu-wine/vip-2.jpg",
        title: "Also a popular red wine, made from the Merlot grape variety, is light, soft and easy to drink.",
    },
    {
        nameWine: "Pinot Noir",
        price: "$900.00",
        image: "img/menu-wine/vip-3.jpg",
        title: "A complex and delicate red wine, produced from the Pinot Noir grape variety, with ripe fruit flavors, low tannins and high acidity.",
    },
    {
        nameWine: "Chardonnay",
        price: "$600.50",
        image: "img/menu-wine/vip-4.jpg",
        title: "A popular white wine, produced from the Chardonnay grape variety, has a light, complex flavor with flavors of fruit and spice.",
    },
    {
        nameWine: "Riesling ",
        price: "$3000.00",
        image: "img/menu-wine/vip-5.jpg",
        title: "A popular white wine, made from the Sauvignon Blanc grape variety, has a fresh, sour taste and aromas of coriander.",
    },
    {
        nameWine: "Syrah",
        price: "$900.00",
        image: "img/menu-wine/vip-6.jpg",
        title: "A red wine produced from the Syrah grape variety, with a rich, spicy flavor and high alcohol content.",
    },
    {
        nameWine: "Zinfandel",
        price: "$1500.00",
        image: "img/menu-wine/vip-7.jpg",
        title: "A popular red wine in the United States, produced from the Zinfandel grape variety, has rich.",
    },
    {
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
        menuInner.innerHTML += `<a href="detailsproduct.html" class="col-12 col-sm-6 col-md-4 col-lg-3 scale">
        <div class="image"> <img src="${product.image}" alt=""></div>
        <div class="name">${product.nameWine}</div>
        <div class="des">${product.title}</div>
        <div class="price">${product.price}</div>
        </a>`;
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
