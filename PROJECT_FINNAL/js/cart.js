const infoProduct = JSON.parse(localStorage.getItem("INFORCART"));
console.log(infoProduct);
if (infoProduct.length == 0) {
    document.querySelector(".cart-product table").classList.add("active");
    document.querySelector(".cart-product h3").innerHTML = "You have not selected a product.</br> Please order product from the menu";
}
const checkout = document.querySelector(".group-product");
let infoDetail = {};
function renderInfoCart(listProduct) {
    listProduct.forEach((infoItem, index) => {
        if (infoItem) {
            checkout.innerHTML += ` 
            <tr class="cart-item">
                <td class="imageItem"><img src="${infoItem.image}" alt="Product"></td>
                <td class="nameItem">${infoItem.nameItem}</td>
                <td class="selectItem">${infoItem.select}</td>
                <td class="price">$ <span>${infoItem.price}</span></td>
                    <td class="quantity">
                        <button onclick="minus(${index})" class="minus" type="button" name="button"><i class="fa-solid fa-minus"></i></button>
                        <input type="text" name="quantity" value="1" />
                        <button onclick="plus(${index})" class="plus" type="button" name="button"><i class="fa-solid fa-plus"></i></button>
                    </td>
                <td onclick="removea(${index})" class="close"><i class="fa-solid fa-trash-can"></i></td>
            </tr>
    `;
        }
    });
}

renderInfoCart(infoProduct);

let listCartItem = document.querySelectorAll(".cart-item");
console.log(listCartItem);
const input = document.querySelector(".quantity input");
const price = document.querySelector(".cart-item .price span");
const nameItem = document.querySelector(".group-product .cart-item .nameItem");
// let value = parseInt(input.value);
infoProduct.forEach((value, index) => {
    value.id = index;
});
console.log(infoProduct);

function plus(id) {
    const item = infoProduct.find((item) => item.id === id);
    let quantityInput = listCartItem[id].querySelector("input");
    let quantity = parseInt(quantityInput.value);
    let price = listCartItem[id].querySelector(".price span");
    let quaPlus = quantity + 1;
    quantityInput.value = quaPlus;
    price.innerHTML = (quaPlus * parseFloat(item.price)).toFixed(2);
    item.priceTotal = (quaPlus * parseFloat(item.price)).toFixed(2);
    item.quantity = quaPlus;
    update();
    console.log(infoProduct);
    localStorage.setItem("INFORCART", JSON.stringify(infoProduct));
}

function minus(id) {
    const item = infoProduct.find((item) => item.id === id);
    let quantityInput = listCartItem[id].querySelector("input");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        let quaMinus = quantity - 1;
        quantityInput.value = quaMinus;
        let price = listCartItem[id].querySelector(".price span");
        price.innerHTML = (quaMinus * parseFloat(item.price)).toFixed(2);
        item.priceTotal = (quaMinus * parseFloat(item.price)).toFixed(2);
        item.quantity = quaMinus;
        update();

        localStorage.setItem("INFORCART", JSON.stringify(infoProduct));
    }
}
const checkoutButton = document.querySelector(".cart-total .btn2");
checkoutButton.addEventListener("click", () => {
    localStorage.setItem("INFORDETAIL", JSON.stringify(infoDetail));
    // console.log(infoDetail);
});
const sub = document.querySelector(".cart-total ul li .money b");
const quantity = document.querySelector(".cart-total ul li .number b");
const total = document.querySelector(".cart-total ul li .money-total b");
const selectItem = document.querySelector(".group-product .cart-item .selectItem");
function update() {
    const totalPrice = infoProduct.reduce((acc, item) => {
        return acc + item.price * parseInt(listCartItem[item.id].querySelector("input").value);
    }, 0);

    total.innerHTML = totalPrice.toFixed(2);
}
function loadTotalPrice() {
    const totalAllPrice = infoProduct.reduce((acc, itemMoney) => {
        return acc + parseInt(itemMoney.price);
    }, 0);
    total.innerHTML = totalAllPrice;
}
loadTotalPrice();
function removea(id) {
    const itemIndex = infoProduct.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
        infoProduct.splice(itemIndex, 1);
        listCartItem[id].remove();
        update();
        localStorage.setItem("INFORCART", JSON.stringify(infoProduct));
        localStorage.setItem("INFORCARTDETAIL", JSON.stringify(infoProduct));
        loadCart();
    }
    if (infoProduct.length == 0) {
        document.querySelector(".cart-product table").classList.add("active");
        document.querySelector(".cart-product h3").innerHTML = "You have not selected a product.</br> Please order product from the menu";
    }
}
window.addEventListener("load", (event) => {
    const infoCartDetail = JSON.parse(localStorage.getItem("INFORCART"));
    // console.log(infoCartDetail);
    let inputValues = document.querySelectorAll(".cart-item input");
    if (infoCartDetail) {
        inputValues.forEach((input, index) => {
            if (infoCartDetail[index].quantity) {
                input.value = infoCartDetail[index].quantity;
            } else {
                input.value = 1;
            }
        });
    }
});
