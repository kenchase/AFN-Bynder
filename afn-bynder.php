<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://kenchase.com
 * @since             1.0.0
 * @package           Afn_Bynder
 *
 * @wordpress-plugin
 * Plugin Name:       AFN Bynder
 * Plugin URI:        https://kenchase.com
 * Description:       Test be for the Bynder API to be used on the AFN website.
 * Version:           1.0.0
 * Author:            Ken Chase
 * Author URI:        https://kenchase.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       afn-bynder
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'AFN_BYNDER_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-afn-bynder-activator.php
 */
function activate_afn_bynder() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-afn-bynder-activator.php';
	Afn_Bynder_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-afn-bynder-deactivator.php
 */
function deactivate_afn_bynder() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-afn-bynder-deactivator.php';
	Afn_Bynder_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_afn_bynder' );
register_deactivation_hook( __FILE__, 'deactivate_afn_bynder' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-afn-bynder.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_afn_bynder() {

	$plugin = new Afn_Bynder();
	$plugin->run();

}
run_afn_bynder();
