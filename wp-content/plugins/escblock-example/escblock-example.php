<?php
/**
 * Plugin Name:       Escblock-example
 * Plugin URI:        www.escblock.com
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Neverfat
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       escblock-example
 *
 * @package           escblock-example
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function escblock_example_escblock_example_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'escblock_example_escblock_example_block_init' );
