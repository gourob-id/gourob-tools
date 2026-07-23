const frontInput = document.getElementById("frontImage");
const backInput = document.getElementById("backImage");

const frontPreview = document.getElementById("frontPreview");
const backPreview = document.getElementById("backPreview");

frontInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        frontPreview.src = URL.createObjectURL(file);
        frontPreview.style.display = "block";
    }
});

backInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        backPreview.src = URL.createObjectURL(file);
        backPreview.style.display = "block";
    }
});

document.getElementById("clearBtn").addEventListener("click", () => {
    frontInput.value = "";
    backInput.value = "";

    frontPreview.src = "";
    backPreview.src = "";

    frontPreview.style.display = "none";
    backPreview.style.display = "none";
});

document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
});
