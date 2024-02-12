const next = document.querySelector(".next");
const prev = document.querySelector(".previous");

const numImg = document.querySelectorAll(".img-container img").length;
let currImg = 1;

let timeoutID;

next.addEventListener("click", () => {
    currImg++;
    clearTimeout(timeoutID);
    updateImage();
});

prev.addEventListener("click", () => {
    currImg--;
    clearTimeout(timeoutID);
    updateImage();
});

const imgcontainer = document.querySelector(".img-container");

function updateImage() {
    if (currImg > numImg) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = numImg;
    }
    imgcontainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;

    timeoutID = setTimeout(() => {
        currImg++;
        updateImage();
    }, 10000);
}

updateImage();