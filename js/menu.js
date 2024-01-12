const products = [
    {
        id: 1,
        nameFood: "Greek Salad",
        price: "$25.50",
        priceInner: 25,
        image: "img/menu/menu-food-1.jpg",
        title: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    },
    {
        id: 2,
        nameFood: "Lasagne",
        price: "$40.00",
        priceInner: 49,
        image: "img/menu/menu-food-2.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    },
    {
        id: 3,
        nameFood: "Butternut Pumpkin",
        price: "$10.00",
        priceInner: 10,
        image: "img/menu/menu-food-3.jpg",
        title: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    },
    {
        id: 4,
        nameFood: "Tokusen Wagyu",
        price: "$39.50",
        priceInner: 39.50,
        image: "img/menu/menu-food-4.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        id: 5,
        nameFood: "Olivas Rellenas",
        price: "$25.00",
        priceInner: 49,
        image: "img/menu/menu-food-5.jpg",
        title: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    },
    {
        id: 6,
        nameFood: "Opu Fish",
        price: "$49.00",
        priceInner: 49,
        image: "img/menu/menu-food-6.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        id: 7,
        nameFood: "Tokusen Wagyu",
        price: "$49.00",
        priceInner: 49,
        image: "img/menu/menu-food-7.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        id: 8,
        nameFood: "Greek Salad",
        price: "$49.00",
        priceInner: 49,
        image: "img/menu/menu-food-8.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
];

const menu = document.getElementById("food-menu");
const menu1 = document.getElementById("food-menu1");
function renderMenu(menuInner) {
    products.forEach((product) => {
        menuInner.innerHTML += `<div onclick="handelProduct(${product.id})" class="col-12 col-sm-6 col-md-4 col-lg-3 scale">
        <div class="image"> <img src="${product.image}" alt=""></div>
        <div class="name">${product.nameFood}</div>
        <div class="des">${product.title}</div>
        <div class="price">${product.price}</div>
        </div>`;
    });
}
renderMenu(menu);
renderMenu(menu1);
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
        error.innerHTML = "Please enter all the information";
    } else {
        error.classList.add("active");
        error.innerHTML = "You have successfully booked a table";
    }
});
function handelProduct(id) {
    const findProductId = products.find((item) => item.id === id);
    localStorage.setItem("PRODUCT", JSON.stringify(findProductId));

    window.location.href = "detailsproduct.html";
}
