(function($) {

    'use strict';

    jQuery(document).ready(function() {

        var rtlCarousel = false;

        if (jQuery('body').hasClass('rtl')) {

            rtlCarousel = true;
        }

        if (cream_magazine_script_obj.enable_sticky_menu_section == '1') {

            $("nav.main-navigation").sticky();
        }

        /*
        =============================================
        = Init Primary navigation
        =============================================
        */

        jQuery('.primary-navigation').stellarNav({

            theme: 'dark',
            breakpoint: 991,
            closeBtn: false,
            scrollbarFix: true,
            sticky: false,
        });

        if (cream_magazine_script_obj.show_search_icon == '1') {

            jQuery(".primary-navigation > ul").append('<li class="primarynav_search_icon"><a class="search_box" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></a></li>');

            /* Toggle header search container on click of search icon */

            jQuery("body").on( 'click', '.search_box', function() {

                jQuery(".header-search-container").toggle();
            });
        }

        jQuery("body").on( 'click', '.menu-toggle', function(event) {

            event.preventDefault();
        });

        /*
        =============================================
        = Init Sticky sidebar
        =============================================
        */
        if (cream_magazine_script_obj.enable_sticky_sidebar == '1') {

            jQuery('.sticky_portion').theiaStickySidebar({

                additionalMarginTop: 10,
            });
        }

        /*
        =============================================
        = Append back to top button
        =============================================
        */
        if (cream_magazine_script_obj.show_to_top_btn == '1') {
            
            jQuery(window).on( 'scroll', function() {

                if (jQuery(this).scrollTop() != 0) {

                    jQuery('#toTop').fadeIn();
                } else {

                    jQuery('#toTop').fadeOut();
                }
            });

            jQuery('body').on( 'click', '#toTop', function() {

                jQuery("html, body").animate({ scrollTop: 0 }, 800);

                return false;
            });
        }

        if (cream_magazine_script_obj.show_news_ticker == '1') {

            jQuery('.ticker_carousel').owlCarousel({

                rtl: rtlCarousel,
                items: 1,
                loop: true,
                margin: 0,
                smartSpeed: 4000,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                mouseDrag: false,
                touchDrag: false,
                animateOut: 'slideOutUp',
                animateIn: 'slideInUp',
                navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>'],
            });
        }

        if (cream_magazine_script_obj.show_banner_slider == '1') {

            jQuery('.cm_banner-carousel-five').owlCarousel({

                rtl: rtlCarousel,
                items: 1,
                loop: true,
                margin: 0,
                smartSpeed: 800,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
            });
        }

        jQuery('.middle_widget_six_carousel').owlCarousel({

            rtl: rtlCarousel,
            items: 2,
            loop: true,
            margin: 30,
            smartSpeed: 800,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 15,
                },
                768: {
                    items: 2,
                    margin: 15,
                },
                992: {
                    items: 2
                },
                1024: {

                    items: 2
                },
                1200: {
                    items: 2
                }
            },
        });

    });
})(jQuery);