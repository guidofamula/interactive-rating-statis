const mainCard = document.querySelector(".main-card"),
    thanksCard = document.querySelector(".thanks"),
    buttonSubmit = document.getElementById("button-submit"),
    rateTestimoni = document.getElementById("rate-testimoni"),
    numberRate = document.querySelectorAll(".number-rate"),
    backHome = document.getElementById("back-home");
buttonSubmit.addEventListener("click", () => {
    thanksCard.classList.replace("hidden", "fade-in"),
        (mainCard.style.display = "none");
}),
    numberRate.forEach((e) => {
        e.addEventListener("click", () => {
            rateTestimoni.innerHTML = e.innerHTML;
        });
    }),
    backHome.addEventListener("click", () => {
        mainCard.classList.remove("hidden"), thanksCard.classList.add("hidden");
    });
