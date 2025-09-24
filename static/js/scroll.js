    // Get the button
    let myButton = document.getElementById("myBtn");

    // Show the button when the user scrolls down 20px from the top
    window.onscroll = function() { scrollFunction(); };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }

    // Scroll to the top when the user clicks the button
    myButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Function to scroll to the footer section
    function autoScrollToFooter() {
        const footer = document.getElementById("footer");
        window.scrollTo({
            top: footer.offsetTop, // Scroll to the footer's position
            behavior: "smooth"      // Smooth scrolling
        });
    }