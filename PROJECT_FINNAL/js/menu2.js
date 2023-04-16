const button4 = document.querySelector(".group-info .btn4");
const error = document.querySelector(".error");
button4.addEventListener("click", function () {
    const bookPerson = document.querySelector(" .group1").value;
    const bookDay = document.querySelector(".day").value;
    const time = document.querySelector(" .time").value;
    const mess = document.querySelector("#mess").value;
    const input = document.querySelector("#name").value;
    const input2 = document.querySelector("#email").value;
    if (input == "") {
        error.innerHTML = "Please enter your name";
    } else if (input2 == "") {
        error.innerHTML = "Please enter your email";
    } else if (bookDay == "") {
        error.innerHTML = "Please select a date to reserve your table";
    } else {
        error.innerHTML = "";
    }
    console.log(bookPerson);
    console.log(bookDay);
    console.log(time);
    console.log(mess);
});
