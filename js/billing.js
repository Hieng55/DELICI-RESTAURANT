const inputs = document.querySelectorAll(".input-info .input");
const names = document.querySelector(".fullname b");
const street = document.querySelector(".street b");
const city = document.querySelector(".city b");
const phone = document.querySelector(".phone b");
const email = document.querySelector(".email b");
const infoCartDetail = JSON.parse(localStorage.getItem("INFORCART"));
console.log(infoCartDetail);
const productInner = document.querySelector(".product-name .popup");
function renderInfoBilling(groupProduct) {
    groupProduct.forEach((product) => {
        productInner.innerHTML += ` 
            <div class="popup-product d-flex align-items-center">
                <div class="image">
                    <img src="${product.image}" alt="" />
                </div>
                <div class="popup-item">
                    <h6><b>Product :</b> <i>${product.nameItem}</i></h6>
                    <p class="select"><b>Select :</b><i>${product.select}</i></p>
                    <div class="money">
                        <p class="quantity-product"><b>Quantity :</b> <i>${product.quantity}</i></p>
                    </div>
                    <p class="price">${product.priceTotal ? product.priceTotal : product.price}</p>
                </div>
            </div>
       `;
    });
}
renderInfoBilling(infoCartDetail);
const billingSubtotal = document.querySelector(".billing-product .subtotal strong b");
const totalBilling = document.querySelector(".total-billing strong b");
function billingTotalProduct() {
    const billingTotal = infoCartDetail.reduce((acc, money) => {
        return acc + parseInt(money.priceTotal ? money.priceTotal : money.priceInner);
    }, 0);
    billingSubtotal.innerHTML = billingTotal.toFixed(2);
    totalBilling.innerHTML = billingTotal.toFixed(2);
}
const codeDiscount = ["hien", "hot", "big"];
const inputCode = document.querySelector(".discount .input-group input");
const buttonCode = document.querySelector(".input-group button");
const attCode = document.querySelector(".text-code");
buttonCode.addEventListener("click", () => {
    if (codeDiscount.includes(inputCode.value)) {
        const totalCode = billingSubtotal.innerHTML;
        const discountTotal = (totalCode * 10) / 100;
        totalBilling.innerHTML = (totalCode - discountTotal).toFixed(2);
    } else {
        attCode.innerHTML = "Discount code does not exist";
    }
});
billingTotalProduct();

$("#billing-form").validate({
    rules: {
        fullName: {
            required: true,
        },
        phone: {
            required: true,
        },
        email: {
            required: true,
        },
        town: {
            required: true,
        },
        address: {
            required: true,
        },
    },
    messages: {
        fullName: "Please enter your name",
        email: "Please enter your email",
        phone: "Please enter your phone",
        town: "Please enter your City",
        address: "Please enter your address",
    },
    submitHandler: function (form) {
        form.submit();
        let formData = $("form").serializeArray();
        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "InfoProducts.html"; // Chuyển đến trang mới
    },
});
