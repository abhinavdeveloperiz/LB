
/**OWL CAROUSEL**/
$(document).ready(function () {
    $('.carousel-1').owlCarousel({
        loop: true,
        center: true,
        nav: false,
        dots: false, // hide navigation bullets
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.carousel-2').owlCarousel({
        loop: true,
        center: true,
        margin: 25,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
});

$(document).ready(function () {
    $('.carousel-3').owlCarousel({
        loop: true,
        center: true,
        margin: 25,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
});


/**PAGE LOADER**/
window.addEventListener('load', function () {
    // Hide the preloader once the page is fully loaded
    var loader = document.getElementById("loader-wrapper");
    loader.style.display = "none";
});


/**NAVBAR SCROLLED**/
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) { // adjust the scroll position value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) return; // ignore Ctrl+scroll and Meta+scroll
    event.deltaY *= 0.5;
});


/**SCROLL DOWN FUNCTIONALITY**/
document.querySelectorAll('.scroll-down-arrow').forEach(button => {
    button.addEventListener('click', function () {
        window.scrollTo({
            top: document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    });
});


