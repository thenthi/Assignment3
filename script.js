const button = document.getElementById ("clickbutton")
const picture = document.getElementById ("mypic")
console.log (picture.src);

button.addEventListener("click", changepic);

function changepic() {
    if (picture.src.includes("pic.jpg")) {
        picture.src="pic2.png"
    }
    else {
        picture.src="pic.jpg"
    }
}