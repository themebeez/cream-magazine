<?php

if( ! function_exists( 'cream_magazine_categories_tax_slug' ) ) {

	function cream_magazine_categories_tax_slug() {

		$taxonomy = 'category';

		$cat_terms = get_terms( $taxonomy );

		$dropdown = array();

		foreach( $cat_terms as $cat_term ) {

			$dropdown[$cat_term->slug] = $cat_term->name;
		}

		return $dropdown;
	}
}



if( ! function_exists( 'cream_magazine_categories_tax_id' ) ) {

	function cream_magazine_categories_tax_id() {

		$taxonomy = 'category';

		$cat_terms = get_terms( $taxonomy );

		$dropdown = array();

		foreach( $cat_terms as $cat_term ) {

			$dropdown[$cat_term->term_id] = $cat_term->name;
		}

		return $dropdown;
	}
}


if( ! function_exists( 'cream_magazine_ticker_news_on_pages' ) ) {

	function cream_magazine_ticker_news_on_pages() {

		return array(
			'choice_1' => esc_html__( 'Front Page Only', 'cream-magazine' ),
			'choice_2' => esc_html__( 'Blog Page Only', 'cream-magazine' ),
			'choice_3' => esc_html__( 'Both Front Page & Blog Page', 'cream-magazine' )
		);
	}
}


if( ! function_exists( 'cream_magazine_save_value_as' ) ) {

	function cream_magazine_save_value_as() {

		return array(
			'slug' => esc_html__( 'Slug', 'cream-magazine' ),
			'id' => esc_html__( 'ID', 'cream-magazine' )
		);
	}
}


if( ! function_exists( 'cream_magazine_header_layouts' ) ) {

	function cream_magazine_header_layouts() {

		return array(
			'header_1' => get_template_directory_uri() . '/admin/images/header-placeholders/header_1.png',
			'header_2' => get_template_directory_uri() . '/admin/images/header-placeholders/header_2.png',
		);
	}
}


if( ! function_exists( 'cream_magazine_sidebar_positions' ) ) {

	function cream_magazine_sidebar_positions() {

		return array(
			'left' => get_template_directory_uri() . '/admin/images/sidebar-placeholders/sidebar_left.png',
			'right' => get_template_directory_uri() . '/admin/images/sidebar-placeholders/sidebar_right.png',
			'none' => get_template_directory_uri() . '/admin/images/sidebar-placeholders/sidebar_none.png',
		);
	}
}


if( ! function_exists( 'cream_magazine_google_font_family_choices' ) ) {

	function cream_magazine_google_font_family_choices() {

		return array(
		    'Roboto:400,400i,500,500i,700,700i' => 'Roboto',
		    'Muli:400,400i,600,600i,700,700i,800,800i' => 'Muli',
		    'Open+Sans:400,400i,600,600i,700,700i,800,800i' => 'Open Sans',
		    'Lato:400,400i,700,700i' => 'Lato',
		    'Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i' => 'Montserrat',
		    'Source+Sans+Pro:400,400i,600,600i,700,700i' => 'Source Sans Pro',
		    'Oswald:400,500,600,700' => 'Oswald',
		    'Raleway:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' => 'Raleway',
		    'Noto+Sans:400,400i,700,700i' => 'Noto Sans',
		    'Merriweather:400,400i,700,700i' => 'Merriweather',
		    'Ubuntu:400,400i,500,500i,700,700i' => 'Ubuntu',
		    'Playfair+Display:400,400i,700,700i' => 'Playfair Display',		    
		    'Lora:400,400i,700,700i' => 'Lora'   
		);
	}
}