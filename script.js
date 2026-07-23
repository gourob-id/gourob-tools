document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".tool button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("🚧 এই ফিচারটি খুব শীঘ্রই যোগ করা হবে!");
        });
    });

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {
        startBtn.addEventListener("click", () => {
            window.scrollTo({
                top: document.querySelector(".cards").offsetTop,
                behavior: "smooth"
            });
        });
    }

    console.log("Gourob Tools - ID Print Pro Loaded");
});
