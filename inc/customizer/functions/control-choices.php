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

		    'Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700' => 'Roboto',
		    'Nunito:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700' => 'Nunito',
		    'DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700' => 'DM Sans',
		    'Muli:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700' => 'Muli',
		    'Open+Sans:400,400i,600,600i,700,700i' => 'Open Sans',
		    'Lato:400,400i,700,700i' => 'Lato',
		    'IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700' => 'IBM Plex Serif',
		    'Noto+Sans:ital,wght@0,400;0,700;1,400;1,700'=>'Noto Sans',
		    'Noto+Sans+JP:wght@400;500;700' => 'Noto Sans JP',
		    'Noto+Sans+KR:wght@400;500;700' => 'Noto Sans KR',
		    'Source+Sans+Pro:400,400i,600,600i,700,700i' => 'Source Sans Pro',
		    'Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i' => 'Montserrat',
		    'Ubuntu:400,400i,500,500i,700,700i' => 'Ubuntu',
		    'Cairo:wght@400;600;700' =>'Cairo',
		    'Heebo:wght@400;500;700' => 'Heebo',
		    'Karma:wght@400;500;600;700' => 'Karma',
		    'Mukta:wght@400;500;600;700' => 'Mukta',
		    'Baloo+Tamma+2:wght@400;500;600;700' => 'Baloo Tamma 2',
		    'Baloo+Chettan+2:wght@400;500;600;700' => 'Baloo Chettan 2',
		    'Kanit:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700' => 'Kanit',
		);
	}
}