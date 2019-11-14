<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
    // Exit if accessed directly.
}

if ( !class_exists( '\\Helpie_FAQ' ) ) {
    class Helpie_FAQ
    {
        public  $plugin_domain ;
        public  $views_dir ;
        public  $version ;
        public function __construct()
        {
            $this->setup_autoload();
            $this->plugin_domain = HELPIE_FAQ_DOMAIN;
            $this->version = HELPIE_FAQ_VERSION;
            /*  FAQ Register Post types and its Taxonomies */
            $this->register_cpt_and_taxonomy();
            /*  FAQ Init Hook */
            add_action( 'init', array( $this, 'init_hook' ) );
            /*  FAQ Activation Hook */
            register_activation_hook( HELPIE_FAQ__FILE__, array( $this, 'hfaq_activate' ) );
            /*  FAQ Admin Section Initialization Hook */
            add_action( 'admin_init', array( $this, 'load_admin_hooks' ) );
            /*  FAQ Enqueing Script Action hook */
            add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
            /*  FAQ Shortcode */
            require_once HELPIE_FAQ_PATH . 'includes/shortcodes.php';
            /* All Plugins Loaded Hook */
            add_action( 'plugins_loaded', array( $this, 'plugins_loaded_action' ) );
            /* Notifications */
            new \HelpieFaq\Includes\Notifications();
            // These components will handle the hooks internally, no need to call this in a hook
            $this->load_components();
            /* Setup Post Meta For Auto-ordering */
            add_action( 'save_post', function ( $postId ) {
                global  $post ;
                if ( isset( $post ) && $post->post_type != HELPIE_FAQ_POST_TYPE ) {
                    return;
                }
                add_post_meta(
                    $postId,
                    'click_counter',
                    0,
                    true
                );
            } );
            add_action(
                'create_term',
                function ( $term_id, $tt_id, $taxonomy ) {
                // $term = get_term($term_id, $taxonomy);
                add_term_meta(
                    $term_id,
                    'click_counter',
                    0,
                    true
                );
            },
                10,
                3
            );
            add_action(
                'edit_term',
                function ( $term_id, $tt_id, $taxonomy ) {
                // $term = get_term($term_id, $taxonomy);
                add_term_meta(
                    $term_id,
                    'click_counter',
                    0,
                    true
                );
            },
                10,
                3
            );
            // $Upgrades = new \HelpieFaq\Includes\Upgrades();
            \HelpieFaq\Includes\Upgrades::add_actions();
        }
        
        public function load_components()
        {
        }
        
        public function init_hook()
        {
            /*  FAQ Ajax Hooks */
            require_once HELPIE_FAQ_PATH . 'includes/ajax-handler.php';
            /*  FAQ Widget */
            $this->load_widgets();
        }
        
        public function plugins_loaded_action()
        {
            /*  FAQ Settings */
            new \HelpieFaq\Includes\Settings();
            /*  Helpie KB Integration */
            new \HelpieFaq\Includes\Kb_Integrator();
            /*  Woo Commerce Integration */
            new \HelpieFaq\Includes\Woo_Integrator();
            /*  Helpie FAQ Plugin Translation  */
            load_plugin_textdomain( 'helpie-faq', false, basename( dirname( __FILE__ ) ) . '/languages/' );
        }
        
        public function load_admin_hooks()
        {
            $admin = new \HelpieFaq\Includes\Admin( $this->plugin_domain, $this->version );
            /* remove 'helpdesk_cateory' taxonomy submenu from Helpie FAQ Menu */
            $admin->remove_kb_category_submenu();
        }
        
        public function load_widgets()
        {
            $widgets = new \HelpieFaq\Includes\Widgets\Register_Widgets();
            $widgets->load();
            $elementor_widgets = new \HelpieFaq\Includes\Widgets\Register_Elementor_Widgets();
            $elementor_widgets->load();
            // Only load if Gutenberg is available.
            
            if ( function_exists( 'register_block_type' ) ) {
                $faq_model = new \HelpieFaq\Features\Faq\Faq_Model();
                $fields = $faq_model->get_fields();
                $style_config = $faq_model->get_style_config();
                $gutenberg_blocks = new \HelpieFaq\Includes\Widgets\Blocks\Register_Blocks( $fields, $style_config );
                $gutenberg_blocks->load();
            }
        
        }
        
        public function register_cpt_and_taxonomy()
        {
            $cpt = new \HelpieFaq\Includes\Cpt();
            $cpt->register();
        }
        
        /**
         * @since 1.0.0
         * @access public
         * @deprecated
         *
         * @return string
         */
        public function get_version()
        {
            return helpie_FAQ_VERSION;
        }
        
        /**
         * Throw error on object clone
         *
         * The whole idea of the singleton design pattern is that there is a single
         * object therefore, we don't want the object to be cloned.
         *
         * @access public
         * @since 1.0.0
         * @return void
         */
        public function __clone()
        {
            // Cloning instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'helpie-faq' ), '1.0.0' );
        }
        
        /**
         * Disable unserializing of the class
         *
         * @access public
         * @since 1.0.0
         * @return void
         */
        public function __wakeup()
        {
            // Unserializing instances of the class is forbidden.
            _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'helpie-faq' ), '1.0.0' );
        }
        
        /**
         * @static
         * @since 1.0.0
         * @access public
         * @return Plugin
         * Note: Check how this works
         */
        public static function instance()
        {
            
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
                do_action( 'elementor/loaded' );
            }
            
            return self::$instance;
        }
        
        protected function setup_constants()
        {
            if ( !defined( 'HELPIE_FAQ_PATH' ) ) {
                define( 'HELPIE_FAQ_PATH', __DIR__ );
            }
        }
        
        protected function setup_autoload()
        {
            require_once HELPIE_FAQ_PATH . '/includes/autoloader.php';
            \HelpieFaq\Autoloader::run();
        }
        
        public function hfaq_activate()
        {
            /* Register Post Type and its taxonomy only for setup demo content on activation */
            $cpt = new \HelpieFaq\Includes\Cpt();
            $cpt->register_helpie_faq_cpt();
            $args = array(
                'post_type'   => 'helpie_faq',
                'post_status' => array( 'publish', 'pending', 'trash' ),
            );
            $the_query = new \WP_Query( $args );
            // Create Post only if it does not already exists
            
            if ( $the_query->post_count < 1 ) {
                /* Setup Demo FAQ Question And Answer */
                $utils_helper = new \HelpieFaq\Includes\Utils\Helpers();
                $utils_helper->insert_term_with_post(
                    "helpie_faq",
                    "Getting Started",
                    "helpie_faq_category",
                    "Yours First FAQ Question",
                    "Yours relevent questions answer."
                );
            }
            
            $this->create_page_on_activate();
            wp_reset_postdata();
        }
        
        public function create_page_on_activate()
        {
            $create_page = new \HelpieFaq\Includes\Utils\Create_Pages();
            $create_page::create(
                'helpie_faq_page',
                'helpie_faq_page_id',
                'Helpie FAQ',
                '[helpie_faq]'
            );
        }
        
        /* Note: Nice Idea */
        public function load_view( $view )
        {
            $path = trailingslashit( $this->views_dir ) . $view;
            if ( file_exists( $path ) ) {
                include $path;
            }
        }
        
        public function enqueue_scripts()
        {
            wp_enqueue_script(
                $this->plugin_domain . '-bundle',
                HELPIE_FAQ_URL . 'assets/main.bundle.js',
                array( 'jquery' ),
                $this->version,
                'all'
            );
            // wp_enqueue_script($this->plugin_domain . '-search', HELPIE_FAQ_URL . 'lib/stylus/js/search.js', array('jquery'), $this->version, 'all');
            wp_enqueue_style(
                $this->plugin_domain . '-bundle-styles',
                HELPIE_FAQ_URL . 'assets/main.bundle.css',
                array(),
                $this->version,
                'all'
            );
            $nonce = wp_create_nonce( 'helpie_faq_nonce' );
            wp_localize_script( $this->plugin_domain . '-bundle', 'helpie_faq_nonce', $nonce );
            wp_localize_script( $this->plugin_domain . '-bundle', 'my_faq_ajax_object', array(
                'ajax_url' => admin_url( 'admin-ajax.php' ),
            ) );
            wp_localize_script( $this->plugin_domain . '-bundle', 'Helpie_FAQ_URL', HELPIE_FAQ_URL );
            // You Can Access these object from javascript
            $faq_strings = new \HelpieFaq\Languages\FAQ_Strings();
            $loco_strings = $faq_strings->get_strings();
            wp_localize_script( $this->plugin_domain . '-bundle', 'faqStrings', $loco_strings );
        }
    
    }
}
new Helpie_FAQ();