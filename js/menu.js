const products = [
    {
        nameFood: "Greek Salad",
        price: "$25.50",
        image: "img/menu/menu-food-1.jpg",
        title: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    },
    {
        nameFood: "Lasagne",
        price: "$40.00",
        image: "img/menu/menu-food-2.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    },
    {
        nameFood: "Butternut Pumpkin",
        price: "$10.00",
        image: "img/menu/menu-food-3.jpg",
        title: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    },
    {
        nameFood: "Tokusen Wagyu",
        price: "$39.50",
        image: "img/menu/menu-food-4.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        nameFood: "Olivas Rellenas",
        price: "$25.00",
        image: "img/menu/menu-food-5.jpg",
        title: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    },
    {
        nameFood: "Opu Fish",
        price: "$49.00",
        image: "img/menu/menu-food-6.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        nameFood: "Tokusen Wagyu",
        price: "$49.00",
        image: "img/menu/menu-food-7.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        nameFood: "Greek Salad",
        price: "$49.00",
        image: "img/menu/menu-food-8.jpg",
        title: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
];

const menu = document.getElementById("food-menu");
const menu1 = document.getElementById("food-menu1");
function renderMenu(menuInner) {
    products.forEach((product) => {
        menuInner.innerHTML += `<a href="detailsproduct.html" class="col-12 col-sm-6 col-md-4 col-lg-3 scale">
        <div class="image"> <img src="${product.image}" alt=""></div>
        <div class="name">${product.nameFood}</div>
        <div class="des">${product.title}</div>
        <div class="price">${product.price}</div>
        </a>`;
    });
}
renderMenu(menu);
renderMenu(menu1);
