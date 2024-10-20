let textInput = document.querySelector("#url");

let fgColor = document.querySelector("#fg-color").value.slice(1);

let bgColor = document.querySelector("#bg-color").value.slice(1);

let card = document.querySelector(".main-container");

let span = document.querySelector(".toggler");

let icon = document.querySelector("i");

let img = document.querySelector("select");

let imgSize = img[img.selectedIndex].textContent;

let qrCodeDetails = document.querySelector(".QR-code-details");

let generateBtn = document.querySelector(".generate-btn");

let saveBtn = document.querySelector(".save-btn");

let downloadImgLink = document.querySelector(".download-img-link");

let qrCodeImg = document.querySelector("#qr-code-img");

span.addEventListener("click", function (e) {

  card.classList.toggle("dark-mode");
  let result = icon.classList.contains("fa-moon");
  if (result) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  span.classList.toggle("dark-mode-toggler");
});

textInput.addEventListener("keyup", function () {
  if (textInput.value.trim()) {
    generateBtn.removeAttribute("disabled");
    generateBtn.style.backgroundColor = "#9234e8";
  } else {
    generateBtn.setAttribute("disabled", null);
    generateBtn.style.backgroundColor = "#cb9af5";
  }
});

function handleImgSize() {
  imgSize = "";
  imgSize = img[img.selectedIndex].textContent;
}

function handleColor() {
  fgColor = "";
  bgColor = "";
  fgColor = document.querySelector("#fg-color").value.slice(1);
  bgColor = document.querySelector("#bg-color").value.slice(1);
  console.log(fgColor);
}

generateBtn.addEventListener("click", function () {
  qrCodeDetails.style.display = "block";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}&data=${textInput.value}&bgcolor=${bgColor}&color=${fgColor}&format=jpg`;
});

saveBtn.addEventListener("click", (e) => {
  downloadImgLink.href = `https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}&data=${textInput.value}&bgcolor=${bgColor}&color=${fgColor}&format=jpg`;
});

function showDifferentSizes() {
  if (window.matchMedia("(min-width: 640px)").matches) {
    for (let i = 3; i <= 4; i++) {
      img.options[i].removeAttribute("disabled");
    }
  } else {
    for (let i = 3; i <= 4; i++) {
      img.options[i].setAttribute("disabled", null);
    }
  }
}

showDifferentSizes();
