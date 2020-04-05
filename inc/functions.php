<?php
defined( 'ABSPATH' ) || exit;

/**
 * Get Vendor dropdown list object.
 */
function wcmp_vendor_list_item() {
    $vendors = get_wcmp_vendors( array(), 'id' );
    $vendor_list = array();
    foreach ( $vendors as $vendor_id ) {
        $vendor_title = ( get_user_meta( $vendor_id, '_vendor_page_title', true) ) ? get_user_meta( $vendor_id, '_vendor_page_title', true) : false;
        $vendor_list[] = array( 'vendor_id' => $vendor_id, 'vendor_title' => $vendor_title );
    }
    return $vendor_list;
}