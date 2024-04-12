var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Paimame visus meniu nuorodų elementus
const menuLinks = document.querySelectorAll('nav ul li a');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sMenu = document.getElementById("sidemenu");

function openmenu() {
    sMenu.style.right = "0";
}

function closemenu() {
    sMenu.style.right = "-200px";
}

// Eini per kiekvieną nuorodą ir pridedame klausytoją, kuris uždarys meniu paspaudus nuorodą
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sMenu.style.right = "-200px"; // Uždarome meniu pakeisdami teisingai pusę
    });
});
