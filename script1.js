let scrollContainer = document.querySelector(".gallery"),
    backBtn = document.getElementById("backBtn"),
    nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1665;
    scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1665;
    scrollContainer.style.scrollBehavior = "smooth";
})
