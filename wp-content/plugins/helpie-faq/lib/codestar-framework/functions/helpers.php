<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Add framework element
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_add_element' ) ) {
  function hfps_add_element( $field = array(), $value = '', $unique = '' ) {

    $output     = '';
    $depend     = '';
    $sub        = ( isset( $field['sub'] ) ) ? 'sub-': '';
    $unique     = ( isset( $unique ) ) ? $unique : '';
    $languages  = hfps_language_defaults();
    $class      = 'HFPSFramework_Option_' . $field['type'];
    $wrap_class = ( isset( $field['wrap_class'] ) ) ? ' ' . $field['wrap_class'] : '';
    $el_class   = ( isset( $field['title'] ) ) ? sanitize_title( $field['title'] ) : 'no-title';
    $hidden     = ( isset( $field['show_only_language'] ) && ( $field['show_only_language'] != $languages['current'] ) ) ? ' hidden' : '';
    $is_pseudo  = ( isset( $field['pseudo'] ) ) ? ' hfps-pseudo-field' : '';

    if ( isset( $field['dependency'] ) ) {
      $hidden  = ' hidden';
      $depend .= ' data-'. $sub .'controller="'. $field['dependency'][0] .'"';
      $depend .= ' data-'. $sub .'condition="'. $field['dependency'][1] .'"';
      $depend .= ' data-'. $sub .'value="'. $field['dependency'][2] .'"';
    }

    $output .= '<div class="hfps-element hfps-element-'. $el_class .' hfps-field-'. $field['type'] . $is_pseudo . $wrap_class . $hidden .'"'. $depend .'>';

    if( isset( $field['title'] ) ) {
      $field_desc = ( isset( $field['desc'] ) ) ? '<p class="hfps-text-desc">'. $field['desc'] .'</p>' : '';
      $output .= '<div class="hfps-title"><h4>' . $field['title'] . '</h4>'. $field_desc .'</div>';
    }

    $output .= ( isset( $field['title'] ) ) ? '<div class="hfps-fieldset">' : '';

    $value   = ( !isset( $value ) && isset( $field['default'] ) ) ? $field['default'] : $value;
    $value   = ( isset( $field['value'] ) ) ? $field['value'] : $value;

    if( class_exists( $class ) ) {
      ob_start();
      $element = new $class( $field, $value, $unique );
      $element->output();
      $output .= ob_get_clean();
    } else {
      $output .= '<p>'. esc_html__( 'This field class is not available!', 'hfps-framework' ) .'</p>';
    }

    $output .= ( isset( $field['title'] ) ) ? '</div>' : '';
    $output .= '<div class="clear"></div>';
    $output .= '</div>';

    return $output;

  }
}

/**
 *
 * Encode string for backup options
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_encode_string' ) ) {
  function hfps_encode_string( $string ) {
    return serialize( $string );
  }
}

/**
 *
 * Decode string for backup options
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_decode_string' ) ) {
  function hfps_decode_string( $string ) {
    return unserialize( $string );
  }
}

/**
 *
 * Get google font from json file
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_get_google_fonts' ) ) {
  function hfps_get_google_fonts() {

    global $hfps_google_fonts;

    if( ! empty( $hfps_google_fonts ) ) {

      return $hfps_google_fonts;

    } else {

      ob_start();
      hfps_locate_template( 'fields/typography/google-fonts.json' );
      $json = ob_get_clean();

      $hfps_google_fonts = json_decode( $json );

      return $hfps_google_fonts;
    }

  }
}

/**
 *
 * Get icon fonts from json file
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_get_icon_fonts' ) ) {
  function hfps_get_icon_fonts( $file ) {

    ob_start();
    hfps_locate_template( $file );
    $json = ob_get_clean();

    return json_decode( $json );

  }
}

/**
 *
 * Array search key & value
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_array_search' ) ) {
  function hfps_array_search( $array, $key, $value ) {

    $results = array();

    if ( is_array( $array ) ) {
      if ( isset( $array[$key] ) && $array[$key] == $value ) {
        $results[] = $array;
      }

      foreach ( $array as $sub_array ) {
        $results = array_merge( $results, hfps_array_search( $sub_array, $key, $value ) );
      }

    }

    return $results;

  }
}

/**
 *
 * Getting POST Var
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_get_var' ) ) {
  function hfps_get_var( $var, $default = '' ) {

    if( isset( $_POST[$var] ) ) {
      return $_POST[$var];
    }

    if( isset( $_GET[$var] ) ) {
      return $_GET[$var];
    }

    return $default;

  }
}

/**
 *
 * Getting POST Vars
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_get_vars' ) ) {
  function hfps_get_vars( $var, $depth, $default = '' ) {

    if( isset( $_POST[$var][$depth] ) ) {
      return $_POST[$var][$depth];
    }

    if( isset( $_GET[$var][$depth] ) ) {
      return $_GET[$var][$depth];
    }

    return $default;

  }
}

/**
 *
 * Load options fields
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
if ( ! function_exists( 'hfps_load_option_fields' ) ) {
  function hfps_load_option_fields() {

    $located_fields = array();

    foreach ( glob( HFPS_DIR .'/fields/*/*.php' ) as $hfps_field ) {
      $located_fields[] = basename( $hfps_field );
      hfps_locate_template( str_replace(  HFPS_DIR, '', $hfps_field ) );
    }

    $override_name = apply_filters( 'hfps_framework_override', 'hfps-framework-override' );
    $override_dir  = get_template_directory() .'/'. $override_name .'/fields';

    if( is_dir( $override_dir ) ) {

      foreach ( glob( $override_dir .'/*/*.php' ) as $override_field ) {

        if( ! in_array( basename( $override_field ), $located_fields ) ) {

          hfps_locate_template( str_replace( $override_dir, '/fields', $override_field ) );

        }

      }

    }

    do_action( 'hfps_load_option_fields' );

  }
}
