<?php
/**
 * Class to define customizer settings for breadcrumbs
 *
 * @since 2.0.0
 * @package Cream_Magazine
 */

if( ! class_exists( 'Cream_Magazine_Breadcrumbs_Customize' ) ) {

	class Cream_Magazine_Breadcrumbs_Customize {

		/**
		 * Constructor method.
		 *
		 * @since  1.0.0
		 * @access private
		 * @return void
		 */
		public function __construct() {
			
			add_action( 'customize_register', [ $this, 'register_sections' ] );

			add_action( 'customize_register', [ $this, 'register_settings' ] );
		}

		/**
		 * Sets up the customizer sections.
		 *
		 * @since  2.0.0
		 * @access public
		 * @param  object  $wp_customize
		 * @return void
		 */
		public function register_sections( $wp_customize ) {

			$wp_customize->add_section( 
				'cream_magazine_breadcrumb_options', 
				array(
					'title'			=> esc_html__( 'Breadcrumb', 'cream-magazine' ),
					'panel'			=> 'cream_magazine_theme_customization',
				) 
			);
		}

		public function register_settings( $wp_customize ) {

			$defaults = cream_magazine_get_default_theme_options();

			// Display Breadcrumbs

			$wp_customize->add_setting( 
				'cream_magazine_enable_breadcrumb', 
				array(
					'sanitize_callback'	=> 'wp_validate_boolean',
					'default'			=> $defaults['cream_magazine_enable_breadcrumb'],
					'transport'			=> 'postMessage',
				) 
			);

			$wp_customize->add_control( new Cream_Magazine_Toggle_Switch_Control( $wp_customize,
				'cream_magazine_enable_breadcrumb', 
				array(
					'label'				=> esc_html__( 'Enable Breadcrumb', 'cream-magazine' ),
					'section'			=> 'cream_magazine_breadcrumb_options',
					'type'				=> 'checkbox' 
				) 
			) );


			// Separator 2

			$wp_customize->add_setting(
				'cream_magazine_breadcrumb_separator_1',
				array(
					'sanitize_callback' => 'esc_html',
					'default' => '',
				)
			);

			$wp_customize->add_control(
				new Cream_Magazine_Separator_Control(
					$wp_customize,
					'cream_magazine_breadcrumb_separator_1',
					array(
						'section' => 'cream_magazine_breadcrumb_options',
						'active_callback' => 'cream_magaine_is_breadcrumbs_active',
					)
				)
			);


			// Select Breadcrumb Source

			$wp_customize->add_setting( 
				'cream_magazine_breadcrumb_sources', 
				array(
					'sanitize_callback'	=> 'cream_magazine_sanitize_select',
					'default'			=> $defaults['cream_magazine_breadcrumb_sources'],
				) 
			);

			$wp_customize->add_control( 
				'cream_magazine_breadcrumb_sources', 
				array(
					'label'				=> esc_html__( 'Breadcrumb Source', 'cream-magazine' ),
					'description'		=> sprintf( __( 'You can use theme&rsquo;s default breadcrumb or use any one of the plugin for breadcrumb, %sBreadcrumb NavXT%s or %sYoast SEO%s or %sRank Math%s', 'cream-magazine' ), '<a href="https://wordpress.org/plugins/breadcrumb-navxt/" target="_blank">', '</a>', '<a href="https://wordpress.org/plugins/wordpress-seo/" target="_blank">', '</a>', '<a href="https://wordpress.org/plugins/seo-by-rank-math/" target="_blank">', '</a>' ),
					'section'			=> 'cream_magazine_breadcrumb_options',
					'type'				=> 'select', 
					'choices'			=> cream_magazine_breadcrumb_sources(),
					'active_callback' => 'cream_magazine_is_breadcrumbs_active',
				) 
			);
		}
	}
}

new Cream_Magazine_Breadcrumbs_Customize();