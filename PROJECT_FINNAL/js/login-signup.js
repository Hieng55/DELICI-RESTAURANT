const inputEmail = document.querySelector(".input-info .email");
const inputPass = document.querySelector(".input-info .password");
const attEmail = document.querySelector(" .text-email");
const attPass = document.querySelector(" .text-pass");
const buttonLogin = document.querySelector(".login-button");
buttonLogin.addEventListener("click", () => {
    attEmail.innerHTML = inputEmail.value == "" ? "You have not entered your email" : "";
    attPass.innerHTML = inputPass.value == "" ? "You have not entered your password" : "";
    if (inputEmail.value != "" && inputPass.value != "") {
        window.location.href = "index.html";
    }
    const infoLogin = {
        name: inputEmail.value,
        pass: inputPass.value,
    };
    localStorage.setItem("LOGIN", JSON.stringify(infoLogin));
    console.log(infoLogin);
});
const eyePass = document.querySelector(".passeye .fa-eye-slash");
console.log(eyePass);
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
