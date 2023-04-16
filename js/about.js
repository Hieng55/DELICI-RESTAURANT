// show modal
const modal = document.getElementById("videoModal");
const btnModal = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
btnModal.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
