<?php
/**
 * Plugin Name:       AP Contact Card
 * Description:       A WordPress block to insert a card that shows personal contact information.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Andrea Porotti
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ap-contact-card
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ap_register_blocks() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ap_register_blocks' );


function ap_add_blocks_category( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
        array_push(
            $block_categories,
            array(
                'slug'  => 'ap-blocks',
                'title' => __( 'AP Blocks', 'ap-contact-card' ),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}
add_filter( 'block_categories_all', 'ap_add_blocks_category', 10, 2 );