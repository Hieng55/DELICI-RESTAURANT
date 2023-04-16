const inputEmail = document.querySelector(".input-info .email");
const inputPass = document.querySelector(".input-info .password");
const inputName = document.querySelector(".input-info .name");
const inputPhone = document.querySelector(".input-info .number");
const attEmail = document.querySelector(" .text-email");
const attPass = document.querySelector(" .text-pass");
const attName = document.querySelector(" .text-name");
const attPhone = document.querySelector(" .text-phone");
const buttonLogin = document.querySelector(".login-button");
buttonLogin.addEventListener("click", () => {
    attEmail.innerHTML = inputEmail.value == "" ? "You have not entered your email" : "";
    attPass.innerHTML = inputPass.value == "" ? "You have not entered your password" : "";
    attName.innerHTML = inputName.value == "" ? "You have not entered your full name" : "";
    attPhone.innerHTML = inputPhone.value == "" ? "You have not entered your phone number" : "";
    if (inputEmail.value != "" && inputPass.value != "" && inputName.value != "" && inputPhone.value != "") {
        window.location.href = "index.html";
    }
});
const eyePass = document.querySelector(".passeye .fa-eye-slash");
// console.log(eyePass);
const eyeShow = document.querySelector(".passeye .fa-eye");

eyePass.addEventListener("click", () => {
    eyePass.classList.add("active");
    eyeShow.classList.remove("active");
    inputPass.setAttribute("type", "text");
});
eyeShow.addEventListener("click", () => {
    eyePass.classList.remove("active");
    eyeShow.classList.add("active");
    inputPass.setAttribute("type", "password");
});
