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
// Print Only A4
// Print
document.getElementById("printBtn").onclick = () => {

    const printArea = document.querySelector(".a4");

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
<title>Aadhaar Print</title>

<link rel="stylesheet" href="../css/aadhaar.css">

<style>
body{
margin:0;
background:#fff;
}

.uploadArea,
.bottomButtons,
h1,
h2{
display:none !important;
}

.a4{
width:210mm;
min-height:297mm;
margin:0 auto;
padding:10mm;
box-shadow:none;
}

.card{
width:86mm;
height:54mm;
margin-bottom:8mm;
}

.card img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}
</style>

</head>

<body>

${printArea.outerHTML}

</body>

</html>
`);

    printWindow.document.close();

    printWindow.focus();

    setTimeout(() => {
        printWindow.print();
    }, 500);

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

    if (!frontPreview.src) return;

    openCrop(frontPreview.src, frontPreview, printFront);

};

document.getElementById("backCrop").onclick = () => {

    if (!backPreview.src) return;

    openCrop(backPreview.src, backPreview, printBack);

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

// ===== Crop Functions =====

function openCrop(imageSrc, previewTarget, printTarget) {

    currentTarget = previewTarget;
    currentPrintTarget = printTarget;

    cropModal.style.display = "flex";

    cropImage.src = imageSrc;

    if (cropper) {
        cropper.destroy();
    }

    cropper = new Cropper(cropImage, {
        aspectRatio: 86 / 54,
        viewMode: 1,
        autoCropArea: 1,
        responsive: true
    });

}

// ===== Crop Modal Buttons =====

// Rotate Left
rotateLeftBtn.onclick = () => {
    if (cropper) {
        cropper.rotate(-90);
    }
};

// Rotate Right
rotateRightBtn.onclick = () => {
    if (cropper) {
        cropper.rotate(90);
    }
};

// Apply Crop
cropSaveBtn.onclick = () => {

    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
        width: 860,
        height: 540,
        imageSmoothingQuality: "high"
    });

    const croppedImage = canvas.toDataURL("image/png");

    currentTarget.src = croppedImage;
    currentPrintTarget.src = croppedImage;

    cropper.destroy();
    cropper = null;

    cropModal.style.display = "none";

};

// Cancel Crop
cropCancelBtn.onclick = () => {

    if (cropper) {
        cropper.destroy();
        cropper = null;
    }

    cropModal.style.display = "none";

};

// Close Modal
cropModal.onclick = (e) => {

    if (e.target === cropModal) {

        if (cropper) {
            cropper.destroy();
            cropper = null;
        }

        cropModal.style.display = "none";

    }

};
