let images = ["kube.png", "mongodb.png", "postgres.jpg", "aws.jpg", "git.jpg"];
let index = 0;

setInterval(function () {
    document.getElementById("others").src = images[index];
    index = (index + 1) % images.length;
}, 1000 * 3);

function copyText() {
    var copyText = document.getElementById("myInput");
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function copyText() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})