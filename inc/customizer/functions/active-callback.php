<?php
/**
 * Active Callback functions for this theme
 *
 * @package Cream_Magazine
 */

/*
 *	Active Callback For When Ticker News Is Enabled
 */
if( ! function_exists( 'cream_magaine_is_ticker_news_enabled' ) ) {

	function cream_magaine_is_ticker_news_enabled( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_enable_ticker_news' )->value() == true ) {
			return true;
		} else {
			return false;
		}
	}
}

/*
 *	Active Callback For When Banner/Slider Is Enabled
 */
if( ! function_exists( 'cream_magaine_is_banner_active' ) ) {

	function cream_magaine_is_banner_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_enable_banner' )->value() == true ) {
			return true;
		} else {
			return false;
		}
	}
}

/*
 * Active callback function for when header layout one is active	
 */
if( ! function_exists( 'cream_magaine_is_header_one_active' ) ) {

	function cream_magaine_is_header_one_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_select_header_layout' )->value() == 'header_1' ) {
			return true;
		} else {
			return false;
		}
	}
}


/*
 * Active callback function for when header layout two is active	
 */
if( ! function_exists( 'cream_magaine_is_header_two_active' ) ) {

	function cream_magaine_is_header_two_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_select_header_layout' )->value() == 'header_2' ) {
			return true;
		} else {
			return false;
		}
	}
}


/*
 *	Active Callback For When Related Section Is Active
 */
if( ! function_exists( 'cream_magaine_is_related_section_active' ) ) {

	function cream_magaine_is_related_section_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_enable_related_section' )->value() == true ) {
			return true;
		} else {
			return false;
		}
	}
}


/*
 *	Active Callback For When Enable Common Sidebar Position For Post Is Active
 */
if( ! function_exists( 'cream_magazine_is_post_common_sidebar_position_active' ) ) {

	function cream_magazine_is_post_common_sidebar_position_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_enable_post_common_sidebar_position' )->value() == true ) {
			return true;
		} else {
			return false;
		}
	}
}


/*
 *	Active Callback For When Enable Common Sidebar Position For Page Is Active
 */
if( ! function_exists( 'cream_magazine_is_page_common_sidebar_position_active' ) ) {

	function cream_magazine_is_page_common_sidebar_position_active( $control ) {
		
		if( $control->manager->get_setting( 'cream_magazine_enable_page_common_sidebar_position' )->value() == true ) {
			return true;
		} else {
			return false;
		}
	}
}
