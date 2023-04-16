let formData = JSON.parse(localStorage.getItem("formData"));
console.log(formData);
let fullName = formData.find((item) => item.name === "fullName");
let phone = formData.find((item) => item.name === "phone");
let email = formData.find((item) => item.name === "email");
let town = formData.find((item) => item.name === "town");
let address = formData.find((item) => item.name === "address");
let cod = formData.find((item) => item.name === "payment");
// console.log(cod);
const infoShip = document.querySelector(".info-ship ul");
formData.forEach((data) => {
    infoShip.innerHTML = `
    <li><span>Recipient Name:</span><b>${fullName.value}</b></li>
    <li><span>Email:</span><b>${email.value}</b></li>
    <li><span>Phone Number:</span><b>${phone.value}</b></li>
    <li><span>Payment Method:</span><b>${cod.value}</b></li>
    <li><span>Shipping Address:</span><b>${address.value}</b></li>
    `;
});
