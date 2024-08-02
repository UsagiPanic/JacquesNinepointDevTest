var mySidenav = document.getElementById("mySidenav")
function openNav() {
    mySidenav.style.opacity = "1";
    mySidenav.style.zIndex = "5";
}

function closeNav() {
    mySidenav.style.opacity = "0";
    mySidenav.style.zIndex = "0";
}

function openDropdown() {
    if (modal.style.display == 'block') {
        closeModal();
    } else {
        document.getElementById("myDropdown").classList.toggle("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        closeDropdown();
    }
} 

function closeDropdown() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function updateDropdownText(newText) {
    document.getElementsByClassName("dropbtn")[0].innerHTML = newText;
}

function resetDropdownText() {
    document.getElementsByClassName("dropbtn")[0].innerHTML = "Select";
}

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modal-content");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];


function openModal(element) {
    document.getElementById('modal-text').innerHTML = element.text;
    updateDropdownText(element.text);
    modal.style.display = "block";
    modalContent.style.display = "flex";
    closeDropdown();
}

function closeModal() {
    modal.style.display = "none";
    modalContent.style.display = "none";
    resetDropdownText();
    openDropdown();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}