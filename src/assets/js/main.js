$(document).ready(function () {

    // Get the modal
    var modal = document.getElementById("id_disclaimer_modal");
    // Get the button that opens the modal
    var btn = document.getElementById("id_disclaimer");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close_disclaimer")[0];
    // When the user clicks the button, open the modal
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // };
    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    var modal_faq = document.getElementById("id_faq_modal");
    var btn_faq = document.getElementById("id_faq");
    var span_faq = document.getElementsByClassName("close_faq")[0];
    // btn_faq.onclick = function () {
    //     modal_faq.style.display = "block";
    // };
    // span_faq.onclick = function () {
    //     modal_faq.style.display = "none";
    // };
    window.onclick = function (event) {
        if (event.target == modal_faq) {
            modal_faq.style.display = "none";
        }
    };
    // Check for click events on the navbar burger icon
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    function mobile_expandable_menu() {
        if ($(window).width() < 768) {
            $('.navbar-link').next('.navbar-dropdown').hide();
            $('.navbar-link').on('click', function () {
                $(this).next('.navbar-dropdown').slideToggle();
            });
        } else {
            $('.navbar-link').next('.navbar-dropdown').css('display', '');
            $('.navbar-link').unbind('click');
        }
    }
    var screen_resize_timout;
    $(window).on("resize", function (e) {
        clearTimeout(screen_resize_timout);
        screen_resize_timout = setTimeout(mobile_expandable_menu, 500);
    });
    mobile_expandable_menu();
    // change white icon if browser is dark theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = './favicon.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }


    $('#tabs li').on('click', function () {
        var tab = $(this).data('tab');

        $('#tabs li').removeClass('is-active');
        $(this).addClass('is-active');

        $('#tab-content div').removeClass('is-active');
        $('div[data-content="' + tab + '"]').addClass('is-active');
    });
});