var modalDiv = document.getElementById("modalDiv");
function openModal(img){
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");

    modalDiv.style.display = "block";
    modalImage.src = img.src;
    modalCaption.innerText = img.alt;
}

var span = document.getElementById("modalClose");
span.onclick = function() {
    modalDiv.style.display = "none";
}
