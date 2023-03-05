
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
    
})(jQuery);

function explodeConfetti() {

    (async () => {
        await loadConfettiPreset(tsParticles); // this is required only if you are not using the bundle script
      
        await tsParticles.load("tsparticles", {
            "background": {
                color: "rgba(0,0,0,1)",
                opacity: 0.9
            },
            "emitters": [
                {
                    life: {
                      duration: 5,
                      count: 2,
                    },
                    position: {
                      x: 0,
                      y: 40,
                    },
                    particles: {
                      move: {
                        direction: "top-right",
                      },
                    },
                    size: {
                        mode: 'percent',
                        height: 10,
                        width: 10
                    },
                  },
                  {
                    life: {
                      duration: 5,
                      count: 2,
                    },
                    position: {
                      x: 100,
                      y: 40,
                    },
                    size: {
                        mode: 'percent',
                        height: 10,
                        width: 10
                    },
                    particles: {
                      move: {
                        direction: "top-left",
                      },                    
                    },
                  },
            ],
          preset: "confetti",
        });
      })();

    $(".tk-message").css('display', 'flex')

}

function moveButton() {
    const button = document.getElementById('huye');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    // Ajustar la posición del botón para que se mantenga dentro de los límites de la ventana
    const maxPosX = window.innerWidth - buttonWidth;
    const maxPosY = window.innerHeight - buttonHeight;
    const posX = Math.min(randomX, maxPosX);
    const posY = Math.min(randomY, maxPosY);
    
    button.style.transform = `translate(${posX}px, ${posY}px)`;

}
  

