var typed = new Typed(".multiple-text", {
    strings: ["Web Developer!","Student."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const serviceModals = document.querySelectorAll(".service-modal");
const readmoreBtns = document.querySelectorAll(".read-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}

readmoreBtns.forEach((readmoreBtn, i) =>{
    readmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});