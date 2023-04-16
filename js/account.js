$(function () {
    $("#datepicker").datepicker();
});
$(function () {
    $(".list-info li").click(function () {
        $(this).addClass("after");
        $(this).siblings().removeClass("after");
        $tab = $(this).attr("dataid");
        $($tab).addClass("active");
        $($tab).siblings().removeClass("active");
    });
});

let formData = JSON.parse(localStorage.getItem("formData"));
console.log(formData);
let fullName = formData.find((item) => item.name === "fullName");
let phone = formData.find((item) => item.name === "phone");
let email = formData.find((item) => item.name === "email");
let town = formData.find((item) => item.name === "town");
let address = formData.find((item) => item.name === "address");
let cod = formData.find((item) => item.name === "payment");
const inputEmailCheck = document.querySelector(".input");
const groupInfo = document.querySelector(".info-account .group-info");
const submit = document.querySelector(".input-container span");
submit.addEventListener("click", () => {
    if (inputEmailCheck.value == email.value || inputEmailCheck.value == phone.value) {
        groupInfo.classList.add("active");
    } else {
        groupInfo.classList.remove("active");
    }
});
const info = JSON.parse(localStorage.getItem("INFORBOOKNG"));
console.log(info);
const bookingInner = document.querySelector("#booking");

function showInforBooking(infoLocals) {
    bookingInner.innerHTML = ` <div class="booking-table">
    <h3 class="text-center">Table Reservation Information</h3>
    <ul class="booking-content">
        <li class="bookName">Guest name: <span>${infoLocals[0].name}</span></li>
        <li class="bookEmail">Email: <span>${infoLocals[0].email}</span></li>
        <li class="bookPerson">Number of guests: <span>${infoLocals[0].bookPerson}</span></li>
        <li class="bookDay">Date: <span>${infoLocals[0].bookDay}</span></li>
        <li class="bookTime">Time: <span>${infoLocals[0].time}</span></li>
        <li class="bookStatus">Status: <span>Success</span></li>
    </ul>
    <div class="remove">
        <button class="btn2">
            <span><i class="fa-solid fa-trash-can"></i></span><span class="text"> Remove Booking </span>
        </button>
    </div>
    </div>`;
    console.log(infoLocals);
}
showInforBooking(info);
const remove = document.querySelector(".remove .btn2");
remove.addEventListener("click", () => {
    localStorage.removeItem("INFORBOOKNG");
    showInforBooking();
});
