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
const submit = document.querySelector(".input-container span");

const info = JSON.parse(localStorage.getItem("INFORBOOKNG"));
console.log(info);
let formData = JSON.parse(localStorage.getItem("formData"));
console.log(formData);
if (formData) {
    let phone = formData.find((item) => item.name === "phone");
    let email = formData.find((item) => item.name === "email");
    submit.addEventListener("click", () => {
        if (inputEmailCheck.value === email.value || inputEmailCheck.value === phone.value) {
            groupInfo.classList.add("active");
        } else {
            groupInfo.classList.remove("active");
        }
    });
}
const inputEmailCheck = document.querySelector(".input");
const groupInfo = document.querySelector(".info-account .group-info");

console.log(info);
const bookingInner = document.querySelector("#booking");

function updateBookingInfo(infoLocals) {
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
    submit.addEventListener("click", () => {
        if (inputEmailCheck.value === infoLocals[0].email) {
            groupInfo.classList.add("active");
        } else {
            groupInfo.classList.remove("active");
        }
    });
}
function showInforBooking(infoLocals) {
    updateBookingInfo(infoLocals);
}
showInforBooking(info);

const remove = document.querySelector(".remove .btn2");
remove.addEventListener("click", () => {
    localStorage.removeItem("INFORBOOKNG");
    bookingInner.innerHTML = `  <div class="booking-table">
    <h3 class="text-center">Table Reservation Information</h3>
    <ul class="booking-content">
        <li class="bookName">Guest name: <span></span></li>
        <li class="bookEmail">Email: <span></span></li>
        <li class="bookPerson">Number of guests: <span></span></li>
        <li class="bookDay">Date: <span></span></li>
        <li class="bookTime">Time: <span></span></li>
        <li class="bookStatus">Status: <span></span></li>
    </ul>
    </div>`;
});
