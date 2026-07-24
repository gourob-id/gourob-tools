// ===== Crop Variables =====
let cropper = null;
let currentTarget = null;
let currentPrintTarget = null;

const cropModal = document.getElementById("cropModal");
const cropImage = document.getElementById("cropImage");

const rotateLeftBtn = document.getElementById("rotateLeftBtn");
const rotateRightBtn = document.getElementById("rotateRightBtn");
const cropSaveBtn = document.getElementById("cropSaveBtn");
const cropCancelBtn = document.getElementById("cropCancelBtn");

const frontInput = document.getElementById("frontInput");
const backInput = document.getElementById("backInput");

const frontPreview = document.getElementById("frontPreview");
const backPreview = document.getElementById("backPreview");

const printFront = document.getElementById("printFront");
const printBack = document.getElementById("printBack");

function loadImage(input, preview, printImg) {

    input.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.src = e.target.result;
            preview.style.display = "block";

            printImg.src = e.target.result;
        };

        reader.readAsDataURL(file);

    });

}

loadImage(frontInput, frontPreview, printFront);
loadImage(backInput, backPreview, printBack);

// Remove Front
document.getElementById("frontRemove").onclick = () => {

    frontInput.value = "";

    frontPreview.src = "";
    frontPreview.style.display = "none";

    printFront.src = "";

};

// Remove Back
document.getElementById("backRemove").onclick = () => {

    backInput.value = "";

    backPreview.src = "";
    backPreview.style.display = "none";

    printBack.src = "";

};

// Print
document.getElementById("printBtn").onclick = () => {

    window.print();

};

// Placeholder Buttons
document.getElementById("fitBtn").onclick = () => {

    alert("Fit To Page - Coming Soon");

};

document.getElementById("actualBtn").onclick = () => {

    alert("Actual Size - Coming Soon");

};

document.getElementById("resetBtn").onclick = () => {

    location.reload();

};

document.getElementById("frontCrop").onclick = () => {

    alert("Crop Feature - Part 4");

};

document.getElementById("backCrop").onclick = () => {

    alert("Crop Feature - Part 4");

};

document.getElementById("frontLeft").onclick = () => {

    alert("Rotate Left - Part 4");

};

document.getElementById("frontRight").onclick = () => {

    alert("Rotate Right - Part 4");

};

document.getElementById("backLeft").onclick = () => {

    alert("Rotate Left - Part 4");

};

document.getElementById("backRight").onclick = () => {

    alert("Rotate Right - Part 4");

};

document.getElementById("pdfBtn").onclick = () => {

    alert("PDF Download - Part 5");

};
