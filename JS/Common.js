window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById("scroll").addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});
