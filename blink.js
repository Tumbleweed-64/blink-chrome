function blinkText() {
    if ((document.body.style.color === "white") || (document.body.style.color === "")) {
        document.body.style.color = "black";
    } else if (document.body.style.color === "black") {
        document.body.style.color = "white";
    }
}

window.setInterval(blinkText, 500);
