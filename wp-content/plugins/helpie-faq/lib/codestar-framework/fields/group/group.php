<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Group
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
class HFPSFramework_Option_group extends HFPSFramework_Options {

  public function __construct( $field, $value = '', $unique = '' ) {
    parent::__construct( $field, $value, $unique );
  }

  public function output() {

    echo $this->element_before();

    $fields      = array_values( $this->field['fields'] );
    $last_id     = ( is_array( $this->value ) ) ? max( array_keys( $this->value ) ) : 0;
    $acc_title   = ( isset( $this->field['accordion_title'] ) ) ? $this->field['accordion_title'] : esc_html__( 'Adding', 'hfps-framework' );
    $field_title = ( isset( $fields[0]['title'] ) ) ? $fields[0]['title'] : $fields[1]['title'];
    $field_id    = ( isset( $fields[0]['id'] ) ) ? $fields[0]['id'] : $fields[1]['id'];
    $el_class    = ( isset( $this->field['title'] ) ) ? sanitize_title( $field_title ) : 'no-title';
    $search_id   = hfps_array_search( $fields, 'id', $acc_title );

    if( ! empty( $search_id ) ) {

      $acc_title = ( isset( $search_id[0]['title'] ) ) ? $search_id[0]['title'] : $acc_title;
      $field_id  = ( isset( $search_id[0]['id'] ) ) ? $search_id[0]['id'] : $field_id;

    }

    echo '<div class="hfps-group hfps-group-'. $el_class .'-adding hidden">';

      echo '<h4 class="hfps-group-title">'. $acc_title .'</h4>';
      echo '<div class="hfps-group-content">';
      foreach ( $fields as $field ) {
        $field['sub']   = true;
        $unique         = $this->unique .'[_nonce]['. $this->field['id'] .']['. $last_id .']';
        $field_default  = ( isset( $field['default'] ) ) ? $field['default'] : '';
        echo hfps_add_element( $field, $field_default, $unique );
      }
      echo '<div class="hfps-element hfps-text-right hfps-remove"><a href="#" class="button hfps-warning-primary hfps-remove-group">'. esc_html__( 'Remove', 'hfps-framework' ) .'</a></div>';
      echo '</div>';

    echo '</div>';

    echo '<div class="hfps-groups hfps-accordion">';

      if( ! empty( $this->value ) ) {

        foreach ( $this->value as $key => $value ) {

          $title = ( isset( $this->value[$key][$field_id] ) ) ? $this->value[$key][$field_id] : '';

          if ( is_array( $title ) && isset( $this->multilang ) ) {
            $lang  = hfps_language_defaults();
            $title = $title[$lang['current']];
            $title = is_array( $title ) ? $title[0] : $title;
          }

          $field_title = ( ! empty( $search_id ) ) ? $acc_title : $field_title;

          echo '<div class="hfps-group hfps-group-'. $el_class .'-'. ( $key + 1 ) .'">';
          echo '<h4 class="hfps-group-title">'. $field_title .': '. $title .'</h4>';
          echo '<div class="hfps-group-content">';

          foreach ( $fields as $field ) {
            $field['sub'] = true;
            $unique = $this->unique . '[' . $this->field['id'] . ']['.$key.']';
            $value  = ( isset( $field['id'] ) && isset( $this->value[$key][$field['id']] ) ) ? $this->value[$key][$field['id']] : '';
            echo hfps_add_element( $field, $value, $unique );
          }

          echo '<div class="hfps-element hfps-text-right hfps-remove"><a href="#" class="button hfps-warning-primary hfps-remove-group">'. esc_html__( 'Remove', 'hfps-framework' ) .'</a></div>';
          echo '</div>';
          echo '</div>';

        }

      }

    echo '</div>';

    echo '<a href="#" class="button button-primary hfps-add-group">'. $this->field['button_title'] .'</a>';

    echo $this->element_after();

  }

}
