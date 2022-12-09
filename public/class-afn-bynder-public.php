<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://kenchase.com
 * @since      1.0.0
 *
 * @package    Afn_Bynder
 * @subpackage Afn_Bynder/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Afn_Bynder
 * @subpackage Afn_Bynder/public
 * @author     Ken Chase <kenchase@kenchase.com>
 */
class Afn_Bynder_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Afn_Bynder_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Afn_Bynder_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/dist/afn-bynder-public.min.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Afn_Bynder_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Afn_Bynder_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( 'google-books-api', 'https://www.google.com/books/jsapi.js', '', $this->version, false );
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/dist/afn-bynder-public.min.js', array( 'jquery', 'google-books-api' ), $this->version, false );
	}

	/**
	 * Registers all shortcodes at once
	 *
	 * @return [type] [description]
	 */
	public function register_shortcodes() {
		add_shortcode( 'afn-api-test',  array( $this, 'afn_api_test' ));
	}

	/**
	 * Processes shortcode apn-api-test
	 *
	 * @param	array	$atts		The attributes from the shortcode
	 * @return	mixed	$output		Output of the buffer
	 */

	public function afn_api_test($atts) {
		// Output some HTML
		ob_start();
		include( plugin_dir_path( dirname(__FILE__) ) . 'public/templates/tpl-afn-api-test.php' );
		return ob_get_clean();
	}

}
