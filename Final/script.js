document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown button and content
    var dropdownBtn = document.querySelector('.menu .dropbtn');
    var dropdownContent = document.querySelector('.menu .dropdown-content');

    // Toggle dropdown content visibility when clicking the dropdown button
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown content if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});