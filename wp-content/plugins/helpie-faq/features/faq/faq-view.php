<?php

namespace HelpieFaq\Features\Faq;

if ( !defined( 'ABSPATH' ) ) {
    exit;
}
// Exit if accessed directly

if ( !class_exists( '\\HelpieFaq\\Features\\Faq\\Faq_View' ) ) {
    class Faq_View
    {
        public function get( $viewProps )
        {
            require_once HELPIE_FAQ_PATH . 'lib/stylus/stylus.php';
            $stylus = new \Stylus\Stylus();
            $additional_classes = $this->get_additional_classes( $viewProps );
            $id = '';
            if ( isset( $viewProps['collection']['id'] ) ) {
                $id .= $viewProps['collection']['id'];
            }
            $html = '<section id="' . $id . '" class="helpie-faq accordions ' . $additional_classes . '">';
            if ( isset( $viewProps['collection']['title'] ) && $viewProps['collection']['title'] != '' ) {
                $html .= '<h3 class="collection-title">' . $viewProps['collection']['title'] . '</h3>';
            }
            if ( isset( $viewProps['collection']['show_search'] ) && $viewProps['collection']['show_search'] == 'on' ) {
                $html .= $stylus->search->get_view( $viewProps['collection'] );
            }
            $html .= $stylus->accordion->get_view( $viewProps );
            $html .= '</section>';
            return $html;
        }
        
        public function get_additional_classes( $viewProps )
        {
            $additional_classes = "";
            if ( isset( $viewProps['collection']['theme'] ) && $viewProps['collection']['theme'] == 'dark' ) {
                $additional_classes .= " dark";
            }
            if ( isset( $viewProps['collection']['toggle'] ) && $viewProps['collection']['toggle'] == 'on' ) {
                $additional_classes .= " toggle";
            }
            if ( isset( $viewProps['collection']['open_first'] ) && $viewProps['collection']['open_first'] == 'on' ) {
                $additional_classes .= " open-first";
            }
            return $additional_classes;
        }
    
    }
    // END CLASS
}
