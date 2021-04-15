/*const header = document.querySelector("header");
const SectionOne = document.getElementById("Home");

const SectionOneOptions = {};

const SectionOneObserver = new IntersectionObserver(function(entries, SectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry.target);
    })
}, SectionOneOptions)

SectionOneObserver.observe(SectionOne);*/

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var Sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= Sticky) {
            navbar.classList.add("Sticky")
        } else {
            navbar.classList.remove("Sticky");
        }
    }
})

