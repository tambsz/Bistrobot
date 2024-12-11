const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const reservationButton = document.getElementById("reservation-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click()
);

navLinks.forEach(link => {
    link.addEventListener("click",() =>menuOpenButton.click());
})

reservationButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();
    } else {
        console.error("Voiceflow widget is not loaded yet.");
    }
});