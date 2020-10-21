let Index = 1;
showSlides(Index);

function buttonSlides(n) {
    showSlides(Index += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { Index = 1 }
    if (n < 1) { Index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[Index - 1].style.display = "block";
}



function dropDown(event) {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    const dropDownEl = document.getElementById("dropdown");
    if (!dropDownEl.contains(event.target) || event.target.classList.contains("dropdown-item")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (event.target.classList.contains("dropdown-item")) {
        document.getElementById("dropdown-btn").innerHTML = "<b>" + event.target.innerHTML + "</b> &#9662;";
    }
};



function popupCart(event) {
    let popup = document.getElementById("popup");
    popup.classList.toggle("show");
}