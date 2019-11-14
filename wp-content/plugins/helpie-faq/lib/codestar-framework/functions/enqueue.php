<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Framework admin enqueue style and scripts
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! function_exists( 'hfps_admin_enqueue_scripts' ) ) {
  function hfps_admin_enqueue_scripts() {

    // admin utilities
    wp_enqueue_media();

    // wp core styles
    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_style( 'wp-jquery-ui-dialog' );

    // framework core styles
    wp_enqueue_style( 'hfps-framework', HFPS_URI .'/assets/css/hfps-framework.css', array(), '1.0.0', 'all' );
    wp_enqueue_style( 'font-awesome', HFPS_URI .'/assets/css/font-awesome.css', array(), '4.7.0', 'all' );

    if ( HFPS_ACTIVE_LIGHT_THEME ) {
      wp_enqueue_style( 'hfps-framework-theme', HFPS_URI .'/assets/css/hfps-framework-light.css', array(), "1.0.0", 'all' );
    }

    if ( is_rtl() ) {
      wp_enqueue_style( 'hfps-framework-rtl', HFPS_URI .'/assets/css/hfps-framework-rtl.css', array(), '1.0.0', 'all' );
    }

    // wp core scripts
    wp_enqueue_script( 'wp-color-picker' );
    wp_enqueue_script( 'jquery-ui-dialog' );
    wp_enqueue_script( 'jquery-ui-sortable' );
    wp_enqueue_script( 'jquery-ui-accordion' );

    // framework core scripts
    wp_enqueue_script( 'hfps-plugins',    HFPS_URI .'/assets/js/hfps-plugins.js',    array(), '1.0.0', true );
    wp_enqueue_script( 'hfps-framework',  HFPS_URI .'/assets/js/hfps-framework.js',  array( 'hfps-plugins' ), '1.0.0', true );

  }
  add_action( 'admin_enqueue_scripts', 'hfps_admin_enqueue_scripts' );
}
