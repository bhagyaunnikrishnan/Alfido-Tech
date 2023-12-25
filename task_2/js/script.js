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

const projectModals = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function(modalClick) {
    projectModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        projectModal(i);
    });
});

projectCloseBtns.forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener("click", () => {
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove("active");
        });
    });
});