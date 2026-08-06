document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");

    openBtn.addEventListener("click", () => {

        document.getElementById("welcome").scrollIntoView({
            behavior: "smooth"
        });

    });

});
