/**
 * BLOCK: TopRatedVendors
 *
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

/**
 * External dependencies
 */
const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
import { InspectorControls } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
import {
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';

// load WCMp Components
import { 
	NAMESPACE,
	WCMPICONCOLOR,
	DEFAULT_COLUMNS,
	MIN_COLUMNS,
	MAX_COLUMNS,
	DEFAULT_ROWS,
	MIN_ROWS,
	MAX_ROWS, 
} from '../../utils/constants';
import WCMpIcon from '../../components/icons';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( NAMESPACE+'/vendor-top-products', {
	title: __( 'Vendor Top Products', 'wcmp-blocks' ), 
	icon: {
		src: <WCMpIcon icon="products"/>, 
		foreground: WCMPICONCOLOR,
	},
	category: 'wcmp', 
        description: __(
		'Display top products of a vendor.',
		'wcmp-blocks'
	),
	keywords: [
		__( 'Top Products', 'wcmp-blocks' ),
		__( 'WCMp Vendor Products', 'wcmp-blocks' ),
		__( 'Products', 'wcmp-blocks' ),
		__( 'Vendor', 'wcmp-blocks' ),
	],
	attributes: {
		vendor_id: {
			type: 'string',
			default: '',
		},
		block_columns: {
			type: 'number',
			default: DEFAULT_COLUMNS
		},
		block_rows: {
			type: 'number',
			default: DEFAULT_ROWS
		},
		contentVisibility: {
			type: 'object',
			default: {
				title: true,
				price: true,
				rating: true,
				button: true,
			},
		},
	},
	example: {},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		const {
			vendor_id,			
			block_columns,
			block_rows,
			contentVisibility,
		} = attributes;

		const bindVendorsOptionData = [{ value: '', label: 'Select a Vendor...' }];
		let vendors = wcmp_blocks_scripts_data_params.allVendors;
		vendors.map( function( vendor_data ){
			bindVendorsOptionData.push( { value: vendor_data.vendor_id, label: vendor_data.vendor_title } );
		});

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<PanelBody
						title={ __( 'Layout', 'wcmp-blocks' ) }
						initialOpen = { true }
					>
						<RangeControl
							label={ __(
								'Product Columns',
								'wcmp-blocks'
							) }
							value={ block_columns }
							onChange={ ( value ) =>
								setAttributes( { block_columns: value } )
							}
							min={ MIN_COLUMNS }
							max={ MAX_COLUMNS }
						/>
						<RangeControl
							label={ __(
								'Product Rows',
								'wcmp-blocks'
							) }
							value={ block_rows }
							onChange={ ( value ) =>
								setAttributes( { block_rows: value } )
							}
							min={ MIN_ROWS }
							max={ MAX_ROWS }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Content', 'wcmp-blocks' ) }
						initialOpen = { false }
					>
						<ToggleControl
							label={ __(
								'Product title',
								'woocommerce'
							) }
							help={
								contentVisibility.title
									? __(
											'Product title is visible.',
											'woocommerce'
									)
									: __(
											'Product title is hidden.',
											'woocommerce'
									)
							}
							checked={ contentVisibility.title }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, title: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Product price',
								'woocommerce'
							) }
							help={
								contentVisibility.price
									? __(
											'Product price is visible.',
											'woocommerce'
									)
									: __(
											'Product price is hidden.',
											'woocommerce'
									)
							}
							checked={ contentVisibility.price }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, price: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Product rating',
								'woocommerce'
							) }
							help={
								contentVisibility.rating
									? __(
											'Product rating is visible.',
											'woocommerce'
									)
									: __(
											'Product rating is hidden.',
											'woocommerce'
									)
							}
							checked={ contentVisibility.rating }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, rating: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Add to Cart button',
								'woocommerce'
							) }
							help={
								contentVisibility.button
									? __(
											'Add to Cart button is visible.',
											'woocommerce'
									)
									: __(
											'Add to Cart button is hidden.',
											'woocommerce'
									)
							}
							checked={ contentVisibility.button }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, button: value } } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				<Placeholder 
					icon= { <WCMpIcon icon="products" size="24" />}
					label={ __( 'Vendor Top Products', 'wcmp-blocks' ) }
					className="wcmp-block wcmp-block-vendor-top-products"
				>
					{ __(
						'Display top products of selected vendor in a grid.',
						'wcmp-blocks'
					) }
					<div className="wcmp-block__selection wcmp-block-vendor-top-products__selection">
					<SelectControl
						value={ vendor_id } 
						onChange={ ( value ) => {
							setAttributes( { vendor_id: value } );
						} }
						options={ bindVendorsOptionData }
					/>
			
					</div>
				</Placeholder>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return 'null';
	},
} );
