<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Notice
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
class HFPSFramework_Option_notice extends HFPSFramework_Options {

  public function __construct( $field, $value = '', $unique = '' ) {
    parent::__construct( $field, $value, $unique );
  }

  public function output() {

    echo $this->element_before();
    echo '<div class="hfps-notice hfps-'. $this->field['class'] .'">'. $this->field['content'] .'</div>';
    echo $this->element_after();

  }

}
