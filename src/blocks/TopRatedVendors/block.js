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

const BLOCK_NAME = 'top-rated-vendors';

registerBlockType( NAMESPACE+'/'+BLOCK_NAME, { 
	title: __( 'Top Rated Vendors', 'wcmp-blocks' ), 
	icon: {
		src: <WCMpIcon icon="top-vendor"/>, 
		foreground: WCMPICONCOLOR,
	}, 
	category: 'wcmp', 
        description: __(
		'Display marketplace top rated vendors.',
		'wcmp-blocks'
	),
	keywords: [
		__( 'Top rated vendors', 'wcmp-blocks' ),
		__( 'WCMp Vendors', 'wcmp-blocks' ),
		__( 'Rating vendors', 'wcmp-blocks' ),
		__( 'Vendors', 'wcmp-blocks' ),
	],
	attributes: {
		block_title: {
			type: 'string',
			default: ''
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
				banner: true,
				logo: true,
				rating: true,
				title: true,
				social_link: true,
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
			block_title,
			block_columns,
			block_rows,
			contentVisibility,
			preview,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls key="inspector">
					<PanelBody
						title={ __( 'Layout', 'wcmp-blocks' ) }
						initialOpen = { true }
					>
						{/* <RangeControl
							label={ __(
								'Columns',
								'wcmp-blocks'
							) }
							value={ block_columns }
							onChange={ ( value ) =>
								setAttributes( { block_columns: value } )
							}
							min={ MIN_COLUMNS }
							max={ MAX_COLUMNS }
						/> */}
						<RangeControl
							label={ __(
								'Rows',
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
								'Vendor Banner',
								'wcmp-blocks'
							) }
							help={
								contentVisibility.banner
									? __(
											'Vendor banner is visible.',
											'wcmp-blocks'
									)
									: __(
											'Vendor banner is hidden.',
											'wcmp-blocks'
									)
							}
							checked={ contentVisibility.banner }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, banner: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Vendor Logo',
								'wcmp-blocks'
							) }
							help={
								contentVisibility.logo
									? __(
											'Vendor logo is visible.',
											'wcmp-blocks'
									)
									: __(
											'Vendor logo is hidden.',
											'wcmp-blocks'
									)
							}
							checked={ contentVisibility.logo }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, logo: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Vendor Rating',
								'wcmp-blocks'
							) }
							help={
								contentVisibility.rating
									? __(
											'Vendor rating is visible.',
											'wcmp-blocks'
									)
									: __(
											'Vendor rating is hidden.',
											'wcmp-blocks'
									)
							}
							checked={ contentVisibility.rating }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, rating: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Vendor Title',
								'wcmp-blocks'
							) }
							help={
								contentVisibility.banner
									? __(
											'Vendor title is visible.',
											'wcmp-blocks'
									)
									: __(
											'Vendor title is hidden.',
											'wcmp-blocks'
									)
							}
							checked={ contentVisibility.title }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, title: value } } )
							}
						/>
						<ToggleControl
							label={ __(
								'Vendor Social link',
								'wcmp-blocks'
							) }
							help={
								contentVisibility.social_link
									? __(
											'Vendor social link is visible.',
											'wcmp-blocks'
									)
									: __(
											'Vendor social link is hidden.',
											'wcmp-blocks'
									)
							}
							checked={ contentVisibility.social_link }
							onChange={ ( value ) =>
								setAttributes( { contentVisibility: { ...contentVisibility, social_link: value } } )
							}
						/>
					</PanelBody>
				</InspectorControls>
				<Placeholder 
					icon= { <WCMpIcon icon="top-vendor" size="24" />}
					label={ __( 'Top Rated Vendors', 'wcmp-blocks' ) }
					className="wcmp-block wcmp-block-top-rated-vendors"
				>
					{ __(
						'Display top rated vendors in a grid.',
						'wcmp-blocks'
					) }
					<div className="wcmp-block__selection wcmp-block-top-rated-vendors__selection">
						<TextControl
							placeholder={ __( 'Add some title', 'wcmp-blocks' ) }
							value={ block_title }
							onChange={ ( value ) => {
								setAttributes( { block_title: value } );
							} }
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
