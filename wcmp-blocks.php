<?php
/**
 * Plugin Name: WCMp Blocks
 * Plugin URI: https://github.com/wcmarketplace/wcmp-guten-blocks
 * Description: WCMp blocks for the Gutenberg editor.
 * Version: 0.0.1
 * Author: WC Marketplace
 * Author URI: https://wc-marketplace.com
 * Text Domain:  wcmp-blocks
 * Requires at least: 5.0
 * Requires PHP: 5.6
 * WC requires at least: 3.7
 * WC tested up to: 4.0
 *
 * @package WCMp\Blocks
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$minimum_wp_version = '5.0';

if ( version_compare( $GLOBALS['wp_version'], $minimum_wp_version, '<' ) ) {
	/**
	 * Outputs for an admin notice about running WCMp Blocks on outdated WordPress.
	 *
	 * @since 1.0.0
	 */
	function wcmp_blocks_admin_unsupported_wp_notice() {
                ?>
                <div class="notice notice-error is-dismissible">
                        <p><?php esc_html_e( 'WCMp Blocks requires a more recent version of WordPress and has been paused. Please update WordPress to continue enjoying WooCommerce Blocks.', 'wcmp-blocks' ); ?></p>
                </div>
                <?php
		
	}
	add_action( 'admin_notices', 'wcmp_blocks_admin_unsupported_wp_notice' );
	return;
}

/**
 * Load WCMp Blocks package class.
 *
 */
class WCMp_Blocks {
        /**
	 * The single instance of the class.
	 *
	 * @var object
	 */
	protected static $instance = null;
        
        /**
	 * Constructor
	 *
	 * @return void
	 */
	protected function __construct() {}

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	final public static function instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}
		return static::$instance;
	}

	/**
	 * Init the plugin.
	 */
	public function init() {
		if ( ! $this->has_dependencies() ) {
			return;
		}
		$this->define_constants();
		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ) );
	}
        
	/**
	 * Check dependencies exist.
	 *
	 * @return boolean
	 */
	protected function has_dependencies() {
		return class_exists( 'WCMp' ) && function_exists( 'register_block_type' );
	}
        
	/**
	 * Setup plugin once all other plugins are loaded.
	 *
	 * @return void
	 */
	public function on_plugins_loaded() {
		$this->load_plugin_textdomain();
		$this->includes();
                
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'register_blocks_assets' ) );
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_frontend_assets' ) );
		add_filter( 'block_categories', array( __CLASS__, 'register_block_categories' ) );
		add_action( 'init', array( __CLASS__, 'register_blocks' ) );

	}
        
	/**
	 * Register assets block categories.
	 */
	public static function register_block_categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'wcmp',
					'title' => __( 'WC Marketplace', 'wcmp-blocks' ),
					'icon'  => 'wordpress',
				),
			)
		);
	}
        
	/**
	 * Register assets as needed.
	 */
	public static function register_blocks_assets() {
		// Register block styles for both frontend + backend.
		wp_register_style(
				'wcmp_blocks-style-css', 
				WCMPB_PLUGIN_URL . 'dist/blocks.style.build.css', 
				is_admin() ? array( 'wp-editor' ) : null, 
				filemtime( WCMPB_PLUGIN_PATH . '/dist/blocks.style.build.css' ) 
		);
		
		// Register block editor script for backend.
		wp_register_script(
				'wcmp_blocks-scripts-js', 
				WCMPB_PLUGIN_URL . 'dist/blocks.build.js',
				array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
				filemtime( WCMPB_PLUGIN_PATH . '/dist/blocks.build.js' ), 
				true 
		);

		// Register block editor styles for backend.
		wp_register_style(
				'wcmp_blocks-editor-css', 
				WCMPB_PLUGIN_URL . 'dist/blocks.editor.build.css', 
				array( 'wp-edit-blocks' ), 
				filemtime( WCMPB_PLUGIN_PATH . '/dist/blocks.editor.build.css' ) 
		);

		// WP Localized globals
		$params = apply_filters( 'wcmp_blocks_scripts_data_params',
		array(
			'pluginDirPath' => WCMPB_PLUGIN_PATH,
			'pluginDirUrl'  => WCMPB_PLUGIN_URL,
			'allVendors'	=> wcmp_vendor_list_item(),
		) );
		wp_localize_script( 'wcmp_blocks-scripts-js', 'wcmp_blocks_scripts_data_params', $params );
	}

	/**
	 * Enqueue assets for frontend.
	 */
	public static function enqueue_frontend_assets() {
		if ( !wp_script_is( 'wcmp_blocks-style-css', 'registered' ) ) {
			wp_register_style(
				'wcmp_blocks-style-css', 
				WCMPB_PLUGIN_URL . 'dist/blocks.style.build.css', 
				is_admin() ? array( 'wp-editor' ) : null,
				filemtime( WCMPB_PLUGIN_PATH . '/dist/blocks.style.build.css' ) 
			);
		}
		wp_enqueue_style( 'wcmp_blocks-style-css' );
	}
        
	/**
	 * Register blocks, hooking up assets and render functions as needed.
	 */
	public static function register_blocks() {
		$blocks = [
			'TopRatedVendors',
			'VendorTopProducts',
		];
                
		foreach ( $blocks as $class ) {
			require_once 'src/blocks/' . $class . '/' . $class . '.php';
			$instance = new $class();
			$instance->register_block_type();
		}
	}

	/**
	 * Define Constants.
	 */
	protected function define_constants() {
		if ( ! defined( 'WCMPB_ABSPATH' ) ) define( 'WCMPB_ABSPATH', dirname( __FILE__ ) . '/' );
		if ( ! defined( 'WCMPB_PLUGIN_URL' ) ) define( 'WCMPB_PLUGIN_URL', plugin_dir_url(__FILE__) );
		if ( ! defined( 'WCMPB_PLUGIN_PATH' ) ) define( 'WCMPB_PLUGIN_PATH', untrailingslashit( plugin_dir_path(__FILE__) ) );
		if ( ! defined( 'WCMPB_VERSION' ) ) define( 'WCMPB_VERSION', '0.0.1' );
	}
        
        /**
	 * includes files.
	 */
	protected function includes() {
		include_once WCMPB_ABSPATH . 'inc/functions.php';
		include_once WCMPB_ABSPATH . 'src/blocks/AbstractBlock.php';
	}

	/**
	 * Load Localisation files.
	 */
	protected function load_plugin_textdomain() {
		load_plugin_textdomain( 'wcmp-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );
	}
}
WCMp_Blocks::instance()->init();