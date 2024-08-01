var mySidenav = document.getElementById("mySidenav")
function openNav() {
    mySidenav.style.opacity = "1";
    mySidenav.style.zIndex = "1";
}

function closeNav() {
    mySidenav.style.opacity = "0";
    mySidenav.style.zIndex = "0";
}

function myDropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

var text = document.getElementById('modal-text');

function openModal(element) {
    modal.style.display = "block";
    text.innerHTML = element.text;
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}