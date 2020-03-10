/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	var api   = wp.customize;

	function cream_magazine_visibility( control, selector ) {

		wp.customize( control, function( value ) {

			value.bind( function( newVal ) {

				if( newVal ) {

					$(selector).show();

				} else {

					$(selector).hide();

				}
			} );
		} );
	}

	function cream_magazine_text( control, selector ) {

		wp.customize( control, function( value ) {

			value.bind( function( to ) {

				$(selector).text( to );

			} );

		} );
	}

	function cream_magazine_font_family_css( control, selector ) {

		wp.customize( control, function( value ) {

			value.bind( function( newVal ) {

				var cssProperty = 'font-family';

				var link = $('link#'+control);

				var style = $('style#'+control+'-'+cssProperty);

				var fontName = newVal.split(":")[0];

				fontName = fontName.replace(new RegExp("\\+","g"), ' ');

				if( link.length ) {

					link.remove();
				}				

				link = '<link id="'+ control +'" href="https://fonts.googleapis.com/css?family=' + newVal + '" type="text/css" rel="stylesheet">';

				
				if( style.length ) {

					style.remove();
				}

				var style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + fontName + ';' + '}' + '</style>';

				$('head').append(link + style);

			} );
		} );
	}

	function cream_magazine_design_css( control, selector, type ) {

		wp.customize( control, function( value ) {

			value.bind( function( newVal ) {

				var cssProperty, style;

				if( type === 'background-color' ) {

					cssProperty = 'background-color';

					var style = $('style#'+control+'-'+cssProperty);

					if( ! style.length ) {

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					} else {

						$('style#'+control+'-'+cssProperty).remove();

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					}			

				}

				if( type === 'color' ) {

					cssProperty = 'color';

					var style = $('style#'+control+'-'+cssProperty);

					if( ! style.length ) {

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					} else {

						$('style#'+control+'-'+cssProperty).remove();

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					}				
				}

				if( type === 'border-color' ) {

					cssProperty = 'border-color';

					var style = $('style#'+control+'-'+cssProperty);

					if( ! style.length ) {

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					} else {

						$('style#'+control+'-'+cssProperty).remove();

						style = '<style id="' + control + '-' + cssProperty + '" type="text/css">' + selector + '{' + cssProperty + ':' + newVal + ' !important;' + '}' + '</style>';
					}				
				}

				$('head').append(style);
			} );
		} );
	}

	// Visibility Change
	cream_magazine_visibility( 'cream_magazine_enable_banner_author_meta', '.cm_banner .cm-post-meta .post_author' );

	cream_magazine_visibility( 'cream_magazine_enable_banner_date_meta', '.cm_banner .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_banner_cmnts_no_meta', '.cm_banner .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_banner_categories_meta', '.cm_banner .entry_cats' );
	
	cream_magazine_visibility( 'cream_magazine_enable_home_button', '.primary-navigation ul li.home-btn' );

	cream_magazine_visibility( 'cream_magazine_enable_search_button', '.primary-navigation li.primarynav_search_icon' );
	
	cream_magazine_visibility( 'cream_magazine_enable_scroll_top_button', '#toTop' );

	cream_magazine_visibility( 'cream_magazine_enable_blog_author_meta', '.blog-container .content-entry article .cm-post-meta .post_author' );
	
	cream_magazine_visibility( 'cream_magazine_enable_blog_date_meta', '.blog-container .content-entry article .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_blog_cmnts_no_meta', '.blog-container .content-entry article .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_blog_categories_meta', '.blog-container .content-entry article .entry_cats' );

	cream_magazine_visibility( 'cream_magazine_enable_archive_author_meta', '.archive-container .content-entry article .cm-post-meta .post_author' );

	cream_magazine_visibility( 'cream_magazine_enable_archive_date_meta', '.archive-container .content-entry article .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_archive_cmnts_no_meta', '.archive-container .content-entry article .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_archive_categories_meta', '.archive-container .content-entry article .entry_cats' );

	cream_magazine_visibility( 'cream_magazine_enable_search_author_meta', '.search-container .content-entry article .cm-post-meta .post_author' );

	cream_magazine_visibility( 'cream_magazine_enable_search_date_meta', '.search-container .content-entry article .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_search_cmnts_no_meta', '.search-container .content-entry article .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_search_categories_meta', '.search-container .content-entry article .entry_cats' );

	cream_magazine_visibility( 'cream_magazine_enable_post_single_author_meta', 'body.single .content-entry article.post-detail .cm-post-meta .post_author' );

	cream_magazine_visibility( 'cream_magazine_enable_post_single_date_meta', 'body.single .content-entry article.post-detail .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_post_single_cmnts_no_meta', 'body.single .content-entry article.post-detail .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_post_single_tags_meta', 'body.single .content-entry article.post-detail .post_tags' );
	
	cream_magazine_visibility( 'cream_magazine_enable_post_single_featured_image', 'body.single .content-entry article.post-detail .post_thumb' );
	
	cream_magazine_visibility( 'cream_magazine_enable_post_single_featured_image_caption', 'body.single .content-entry article.post-detail .post_thumb figcaption' );
	
	cream_magazine_visibility( 'cream_magazine_enable_author_section', '.author_box' );

	cream_magazine_visibility( 'cream_magazine_enable_related_section_author_meta', '.cm_related_post_container .cm-post-meta .post_author' );

	cream_magazine_visibility( 'cream_magazine_enable_related_section_date_meta', '.cm_related_post_container .cm-post-meta .posted_date' );

	cream_magazine_visibility( 'cream_magazine_enable_related_section_cmnts_no_meta', '.cm_related_post_container .cm-post-meta .comments' );
	
	cream_magazine_visibility( 'cream_magazine_enable_related_section_categories_meta', '.cm_related_post_container .entry_cats' );

	cream_magazine_visibility( 'cream_magazine_enable_page_single_featured_image', 'body.page .content-entry article.page .post_thumb' );
	
	cream_magazine_visibility( 'cream_magazine_enable_page_single_featured_image_caption', 'body.page .content-entry article.page .post_thumb figcaption' );
	
	cream_magazine_visibility( 'cream_magazine_enable_breadcrumb', '.breadcrumb' );
	
	
	// Text Change
	cream_magazine_text( 'blogname', '.site-title a' ); 

	cream_magazine_text( 'blogdescription', '.site-description' );  

	cream_magazine_text( 'cream_magazine_ticker_news_title', '.ticker_title' );

	cream_magazine_text( 'cream_magazine_copyright_credit', '.copyright-text' );  

	cream_magazine_text( 'cream_magazine_related_section_title', '.cm_related_post_container .section-title h2' );  


	// Font Family Change
	cream_magazine_font_family_css( 'cream_magazine_body_font_family', 'body' );

	cream_magazine_font_family_css( 'cream_magazine_headings_font_family', 'h1,h2,h3,h4,h5,h6' );



	// Tagline Color

	cream_magazine_design_css( 'cream_magazine_tagline_color', '.site-description', 'color' );

	// Theme Color
	cream_magazine_design_css( 'cream_magazine_primary_theme_color', 'button,input[type="button"],input[type="reset"],input[type="submit"],.primary-navigation > ul > li.home-btn,.cm_header_lay_three .primary-navigation > ul > li.home-btn,.news_ticker_wrap .ticker_head,#toTop,.section-title h2::after,.sidebar-widget-area .widget .widget-title h2::after,.footer-widget-container .widget .widget-title h2::after,#comments div#respond h3#reply-title::after,#comments h2.comments-title:after,.post_tags a,.owl-carousel .owl-nav button.owl-prev, .owl-carousel .owl-nav button.owl-next,.cm_author_widget .author-detail-link a,.error_foot form input[type="submit"], .widget_search form input[type="submit"],.header-search-container input[type="submit"],.trending_widget_carousel .owl-dots button.owl-dot,.pagination .page-numbers.current,.post-navigation .nav-links .nav-previous a, .post-navigation .nav-links .nav-next a,#comments form input[type="submit"],footer .widget.widget_search form input[type="submit"]:hover,.widget_product_search .woocommerce-product-search button[type="submit"],.woocommerce ul.products li.product .button,.woocommerce .woocommerce-pagination ul.page-numbers li span.current,.woocommerce .product div.summary .cart button.single_add_to_cart_button,.woocommerce .product div.woocommerce-tabs div.panel #reviews #review_form_wrapper .comment-form p.form-submit .submit,.woocommerce .product section.related > h2::after,.woocommerce .cart .button:hover, .woocommerce .cart .button:focus, .woocommerce .cart input.button:hover, .woocommerce .cart input.button:focus, .woocommerce #respond input#submit:hover, .woocommerce #respond input#submit:focus, .woocommerce button.button:hover, .woocommerce button.button:focus, .woocommerce input.button:hover, .woocommerce input.button:focus,.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover,.woocommerce a.remove:hover,.woocommerce-account .woocommerce-MyAccount-navigation ul li.is-active a,.woocommerce a.button:hover, .woocommerce a.button:focus,.widget_product_tag_cloud .tagcloud a:hover, .widget_product_tag_cloud .tagcloud a:focus,.woocommerce .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle,.error_page_top_portion,.header-search-container button.cm-submit-btn', 'background-color' );
	
	cream_magazine_design_css( 'cream_magazine_primary_theme_color', 'a:hover,.post_title h2 a:hover,.post_title h2 a:focus,.post_meta li a:hover,.post_meta li a:focus,ul.social-icons li a[href*=".com"]:hover::before,.ticker_carousel .owl-nav button.owl-prev i, .ticker_carousel .owl-nav button.owl-next i,.news_ticker_wrap .ticker_items .item a:hover,.news_ticker_wrap .ticker_items .item a:focus,.cm_banner .post_title h2 a:hover,.cm_banner .post_meta li a:hover,.cm_middle_post_widget_one .post_title h2 a:hover, .cm_middle_post_widget_one .post_meta li a:hover,.cm_middle_post_widget_three .post_thumb .post-holder a:hover,.cm_middle_post_widget_three .post_thumb .post-holder a:focus,.cm_middle_post_widget_six .middle_widget_six_carousel .item .card .card_content a:hover, .cm_middle_post_widget_six .middle_widget_six_carousel .item .card .card_content a:focus,.cm_post_widget_twelve .card .post-holder a:hover, .cm_post_widget_twelve .card .post-holder a:focus,.cm_post_widget_seven .card .card_content a:hover, .cm_post_widget_seven .card .card_content a:focus,.copyright_section a:hover,.footer_nav ul li a:hover,.breadcrumb ul li:last-child span,.pagination .page-numbers:hover,#comments ol.comment-list li article footer.comment-meta .comment-metadata span.edit-link a:hover,#comments ol.comment-list li article .reply a:hover,.social-share ul li a:hover,ul.social-icons li a:hover,ul.social-icons li a:focus,.woocommerce ul.products li.product a:hover,.woocommerce ul.products li.product .price,.woocommerce .woocommerce-pagination ul.page-numbers li a.page-numbers:hover,.woocommerce div.product p.price, .woocommerce div.product span.price,.video_section .video_details .post_title h2 a:hover,.primary-navigation.dark li a:hover,footer .footer_inner a:hover,.footer-widget-container ul.post_meta li:hover span, .footer-widget-container ul.post_meta li:hover a,ul.post_meta li a:hover,.cm-post-widget-two .big-card .post-holder .post_title h2 a:hover,.cm-post-widget-two .big-card .post_meta li a:hover,.copyright_section .copyrights a,.breadcrumb ul li a:hover, .breadcrumb ul li a:hover span', 'color' );
	
	cream_magazine_design_css( 'cream_magazine_primary_theme_color', '.ticker_carousel .owl-nav button.owl-prev, .ticker_carousel .owl-nav button.owl-next,.error_foot form input[type="submit"], .widget_search form input[type="submit"],.pagination .page-numbers:hover,#comments form input[type="submit"],.social-share ul li a:hover,.header-search-container form,.widget_product_search .woocommerce-product-search button[type="submit"],.woocommerce .woocommerce-pagination ul.page-numbers li span.current,.woocommerce .woocommerce-pagination ul.page-numbers li a.page-numbers:hover,.woocommerce a.remove:hover,.ticker_carousel .owl-nav button.owl-prev:hover, .ticker_carousel .owl-nav button.owl-next:hover,footer .widget.widget_search form input[type="submit"]:hover,.trending_widget_carousel .owl-dots button.owl-dot,.the_content blockquote,.widget_tag_cloud .tagcloud a:hover', 'border-color' );

	// Category Common Background Color

	cream_magazine_design_css( 'cream_magazine_common_cat_bg_color', '.entry_cats ul.post-categories li a', 'background-color' );
	
	// Category 1 Background Color

	cream_magazine_design_css( 'cream_magazine_cat_bg_color_1', '.entry_cats ul.post-categories li:nth-child(9n+1) a', 'background-color' );
	
	// Category 2 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_2', '.entry_cats ul.post-categories li:nth-child(9n+2) a', 'background-color' );
	
	// Category 3 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_3', '.entry_cats ul.post-categories li:nth-child(9n+3) a', 'background-color' );
	
	// Category 4 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_4', '.entry_cats ul.post-categories li:nth-child(9n+4) a', 'background-color' );
	
	// Category 5 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_5', '.entry_cats ul.post-categories li:nth-child(9n+5) a', 'background-color' );
	
	// Category 6 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_6', '.entry_cats ul.post-categories li:nth-child(9n+6) a', 'background-color' );
	
	// Category 7 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_7', '.entry_cats ul.post-categories li:nth-child(9n+7) a', 'background-color' );
	
	// Category 8 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_8', '.entry_cats ul.post-categories li:nth-child(9n+8) a', 'background-color' );
	
	// Category 9 Background Color
	
	cream_magazine_design_css( 'cream_magazine_cat_bg_color_9', '.entry_cats ul.post-categories li:nth-child(9n+9) a', 'background-color' );
	
	// Category Common Text Color
	cream_magazine_design_css( 'cream_magazine_common_cat_txt_color', '.entry_cats ul.post-categories li a', 'color' );

	// Category Text Color On Hover
	cream_magazine_design_css( 'cream_magazine_cat_hover_txt_color', '.entry_cats ul.post-categories li a:hover', 'color' );
	
	// Category Background Color On Hover	
	cream_magazine_design_css( 'cream_magazine_cat_hover_bg_color', '.entry_cats ul.post-categories li a:hover', 'background-color' );
	
	// Content's Link Color
	cream_magazine_design_css( 'cream_magazine_content_link_color', 'body.single .content-entry article.post-detail .the_content a, .content-entry article.page .the_content a', 'color' );
	
	// Content's Link Color - On Hover
	cream_magazine_design_css( 'cream_magazine_content_link_hover_color', 'body.single .content-entry article.post-detail .the_content a:hover, .content-entry article.page .the_content a:hover', 'color' );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a' ).css( {
					'color': to
				} );
			}
		} );
	} );

} )( jQuery );
