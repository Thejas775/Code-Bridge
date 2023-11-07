function addNewClass() {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");
    preloader.addEventListener("animationend", function() {
        preloader.style.display = "none";
    });
}




