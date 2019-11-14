<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Get icons from admin ajax
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! function_exists( 'hfps_get_icons' ) ) {
  function hfps_get_icons() {

    do_action( 'hfps_add_icons_before' );

    $jsons = apply_filters( 'hfps_add_icons_json', glob( HFPS_DIR . '/fields/icon/*.json' ) );

    if( ! empty( $jsons ) ) {

      foreach ( $jsons as $path ) {

        $object = hfps_get_icon_fonts( 'fields/icon/'. basename( $path ) );

        if( is_object( $object ) ) {

          echo ( count( $jsons ) >= 2 ) ? '<h4 class="hfps-icon-title">'. $object->name .'</h4>' : '';

          foreach ( $object->icons as $icon ) {
            echo '<a class="hfps-icon-tooltip" data-hfps-icon="'. $icon .'" data-title="'. $icon .'"><span class="hfps-icon hfps-selector"><i class="'. $icon .'"></i></span></a>';
          }

        } else {
          echo '<h4 class="hfps-icon-title">'. esc_html__( 'Error! Can not load json file.', 'hfps-framework' ) .'</h4>';
        }

      }

    }

    do_action( 'hfps_add_icons' );
    do_action( 'hfps_add_icons_after' );

    die();
  }
  add_action( 'wp_ajax_hfps-get-icons', 'hfps_get_icons' );
}

/**
 *
 * Export options
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! function_exists( 'hfps_export_options' ) ) {
  function hfps_export_options() {

    header('Content-Type: plain/text');
    header('Content-disposition: attachment; filename=backup-options-'. gmdate( 'd-m-Y' ) .'.txt');
    header('Content-Transfer-Encoding: binary');
    header('Pragma: no-cache');
    header('Expires: 0');

    echo hfps_encode_string( get_option( HFPS_OPTION ) );

    die();
  }
  add_action( 'wp_ajax_hfps-export-options', 'hfps_export_options' );
}

/**
 *
 * Set icons for wp dialog
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if( ! function_exists( 'hfps_set_icons' ) ) {
  function hfps_set_icons() {

    echo '<div id="hfps-icon-dialog" class="hfps-dialog" title="'. esc_html__( 'Add Icon', 'hfps-framework' ) .'">';
    echo '<div class="hfps-dialog-header hfps-text-center"><input type="text" placeholder="'. esc_html__( 'Search a Icon...', 'hfps-framework' ) .'" class="hfps-icon-search" /></div>';
    echo '<div class="hfps-dialog-load"><div class="hfps-icon-loading">'. esc_html__( 'Loading...', 'hfps-framework' ) .'</div></div>';
    echo '</div>';

  }
  add_action( 'admin_footer', 'hfps_set_icons' );
  add_action( 'customize_controls_print_footer_scripts', 'hfps_set_icons' );
}
