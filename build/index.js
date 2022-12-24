/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/TopRatedVendors/block.js":
/*!*********************************************!*\
  !*** ./src/blocks/TopRatedVendors/block.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");

/**
 * BLOCK: TopRatedVendors
 *
 */

//  Import CSS.
/*import './editor.scss';
import './style.scss';*/

/**
 * External dependencies
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;




// load MVX Components



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
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('Top Rated Vendors', 'mvx-blocks'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: "top-vendor"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display marketplace top rated vendors.', 'mvx-blocks'),
  keywords: [__('Top rated vendors', 'mvx-blocks'), __('MVX Vendors', 'mvx-blocks'), __('Rating vendors', 'mvx-blocks'), __('Vendors', 'mvx-blocks')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    block_columns: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_COLUMNS
    },
    block_rows: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ROWS
    },
    contentVisibility: {
      type: 'object',
      default: {
        banner: true,
        logo: true,
        rating: true,
        title: true,
        social_link: true
      }
    }
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
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      block_title,
      block_columns,
      block_rows,
      contentVisibility,
      preview
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: __('Layout', 'mvx-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: __('Rows', 'mvx-blocks'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: __('Content', 'mvx-blocks'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Banner', 'mvx-blocks'),
      help: contentVisibility.banner ? __('Vendor banner is visible.', 'mvx-blocks') : __('Vendor banner is hidden.', 'mvx-blocks'),
      checked: contentVisibility.banner,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          banner: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Logo', 'mvx-blocks'),
      help: contentVisibility.logo ? __('Vendor logo is visible.', 'mvx-blocks') : __('Vendor logo is hidden.', 'mvx-blocks'),
      checked: contentVisibility.logo,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          logo: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Rating', 'mvx-blocks'),
      help: contentVisibility.rating ? __('Vendor rating is visible.', 'mvx-blocks') : __('Vendor rating is hidden.', 'mvx-blocks'),
      checked: contentVisibility.rating,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          rating: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Title', 'mvx-blocks'),
      help: contentVisibility.banner ? __('Vendor title is visible.', 'mvx-blocks') : __('Vendor title is hidden.', 'mvx-blocks'),
      checked: contentVisibility.title,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          title: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Social link', 'mvx-blocks'),
      help: contentVisibility.social_link ? __('Vendor social link is visible.', 'mvx-blocks') : __('Vendor social link is hidden.', 'mvx-blocks'),
      checked: contentVisibility.social_link,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          social_link: value
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: "top-vendor",
        size: "24"
      }),
      label: __('Top Rated Vendors', 'mvx-blocks'),
      className: "mvx-block mvx-block-top-rated-vendors"
    }, __('Display top rated vendors in a grid.', 'mvx-blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-top-rated-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      placeholder: __('Add some title', 'mvx-blocks'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    }))));
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
  save: props => {
    return 'null';
  }
});

/***/ }),

/***/ "./src/blocks/VendorCoupons/block.js":
/*!*******************************************!*\
  !*** ./src/blocks/VendorCoupons/block.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorCoupons/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorCoupons/style.scss");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");

/**
 * BLOCK: VendorsQuickInfo
 *
 */

//  Import CSS.



/**
 * External dependencies
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;




// load MVX Components



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

const BLOCK_NAME = 'coupon-vendors';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('MVX: Vendor\'s Coupons', 'mvx-blocks'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "top-vendor"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays coupons added by the vendor on the vendor shop page.', 'mvx-blocks'),
  keywords: [__('Coupon Vendor', 'mvx-blocks'), __('MVX Vendors', 'mvx-blocks'), __('Vendors', 'mvx-blocks')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_rows: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ROWS
    },
    contentVisibility: {
      type: 'object',
      default: {}
    }
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
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      block_title,
      block_rows,
      contentVisibility,
      preview,
      vendor_id
    } = attributes;
    const bindVendorsOptionData = [{
      value: '',
      label: 'Select a Vendor...'
    }];
    let vendors = mvx_blocks_scripts_data_params.allVendors;
    vendors.map(function (vendor_data) {
      bindVendorsOptionData.push({
        value: vendor_data.vendor_id,
        label: vendor_data.vendor_title
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Layout', 'mvx-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'mvx-blocks'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "top-vendor",
        size: "24"
      }),
      label: __('Contact Vendor', 'mvx-blocks'),
      className: "mvx-block mvx-block-coupon-vendors"
    }, __('Title', 'mvx-blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-coupon-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'mvx-blocks'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: vendor_id,
      onChange: value => {
        setAttributes({
          vendor_id: value
        });
      },
      options: bindVendorsOptionData
    }))));
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
  save: props => {
    return 'null';
  }
});

/***/ }),

/***/ "./src/blocks/VendorTopProducts/block.js":
/*!***********************************************!*\
  !*** ./src/blocks/VendorTopProducts/block.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorTopProducts/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorTopProducts/style.scss");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");

/**
 * BLOCK: TopRatedVendors
 *
 */

//  Import CSS.



/**
 * External dependencies
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;




// load MVX Components



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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendor-top-products', {
  title: __('Vendor Top Products', 'mvx-blocks'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "products"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display top products of a vendor.', 'mvx-blocks'),
  keywords: [__('Top Products', 'mvx-blocks'), __('MVX Vendor Products', 'mvx-blocks'), __('Products', 'mvx-blocks'), __('Vendor', 'mvx-blocks')],
  attributes: {
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_columns: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_COLUMNS
    },
    block_rows: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ROWS
    },
    contentVisibility: {
      type: 'object',
      default: {
        title: true,
        price: true,
        rating: true,
        button: true
      }
    }
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
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      vendor_id,
      block_columns,
      block_rows,
      contentVisibility
    } = attributes;
    const bindVendorsOptionData = [{
      value: '',
      label: 'Select a Vendor...'
    }];
    let vendors = mvx_blocks_scripts_data_params.allVendors;
    vendors.map(function (vendor_data) {
      bindVendorsOptionData.push({
        value: vendor_data.vendor_id,
        label: vendor_data.vendor_title
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Layout', 'mvx-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'mvx-blocks'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'mvx-blocks'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Content', 'mvx-blocks'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Product title', 'woocommerce'),
      help: contentVisibility.title ? __('Product title is visible.', 'woocommerce') : __('Product title is hidden.', 'woocommerce'),
      checked: contentVisibility.title,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          title: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Product price', 'woocommerce'),
      help: contentVisibility.price ? __('Product price is visible.', 'woocommerce') : __('Product price is hidden.', 'woocommerce'),
      checked: contentVisibility.price,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          price: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Product rating', 'woocommerce'),
      help: contentVisibility.rating ? __('Product rating is visible.', 'woocommerce') : __('Product rating is hidden.', 'woocommerce'),
      checked: contentVisibility.rating,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          rating: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Add to Cart button', 'woocommerce'),
      help: contentVisibility.button ? __('Add to Cart button is visible.', 'woocommerce') : __('Add to Cart button is hidden.', 'woocommerce'),
      checked: contentVisibility.button,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          button: value
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "products",
        size: "24"
      }),
      label: __('Vendor Top Products', 'mvx-blocks'),
      className: "mvx-block mvx-block-vendor-top-products"
    }, __('Display top products of selected vendor in a grid.', 'mvx-blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-top-products__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: vendor_id,
      onChange: value => {
        setAttributes({
          vendor_id: value
        });
      },
      options: bindVendorsOptionData
    }))));
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
  save: props => {
    return 'null';
  }
});

/***/ }),

/***/ "./src/blocks/VendorsQuickInfo/block.js":
/*!**********************************************!*\
  !*** ./src/blocks/VendorsQuickInfo/block.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorsQuickInfo/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorsQuickInfo/style.scss");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");

/**
 * BLOCK: VendorsQuickInfo
 *
 */

//  Import CSS.



/**
 * External dependencies
 */
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;




// load MVX Components



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

const BLOCK_NAME = 'quick-info-vendors';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('Contact Vendor', 'mvx-blocks'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19 13H5v-2h14v2z"
  })),
  category: 'mvx',
  description: __('Ddd.', 'mvx-blocks'),
  keywords: [__('Contact Vendor', 'mvx-blocks'), __('MVX Vendors', 'mvx-blocks'), __('Vendors', 'mvx-blocks')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_rows: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ROWS
    },
    contentVisibility: {
      type: 'object',
      default: {}
    }
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
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      block_title,
      block_rows,
      contentVisibility,
      preview,
      vendor_id
    } = attributes;
    const bindVendorsOptionData = [{
      value: '',
      label: 'Select a Vendor...'
    }];
    let vendors = mvx_blocks_scripts_data_params.allVendors;
    vendors.map(function (vendor_data) {
      bindVendorsOptionData.push({
        value: vendor_data.vendor_id,
        label: vendor_data.vendor_title
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Layout', 'mvx-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'mvx-blocks'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "top-vendor",
        size: "24"
      }),
      label: __('Contact Vendor', 'mvx-blocks'),
      className: "mvx-block mvx-block-quick-info-vendors"
    }, __('Title', 'mvx-blocks'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-quick-info-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'mvx-blocks'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: vendor_id,
      onChange: value => {
        setAttributes({
          vendor_id: value
        });
      },
      options: bindVendorsOptionData
    }))));
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
  save: props => {
    return 'null';
  }
});

/***/ }),

/***/ "./src/components/icons/index.js":
/*!***************************************!*\
  !*** ./src/components/icons/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MVXIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


class MVXIcon extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      icon,
      size = 20,
      className
    } = this.props;
    let path, mvxIcon;
    switch (icon) {
      case 'top-vendor':
        path = 'M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z';
        break;
      case 'products':
        path = 'M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z';
        break;
    }
    if (!path) {
      return null;
    }
    const iconClass = ['mvx-icon', 'mvx-icon-' + icon, className].filter(Boolean).join(' ');
    const viewbox = '0 0 ' + size + ' ' + size;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('svg', {
      className: iconClass,
      width: size,
      height: size,
      viewBox: viewbox,
      role: "img"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)('path', {
      d: path
    }));
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons/index.js */ "./src/components/icons/index.js");
/* harmony import */ var _blocks_TopRatedVendors_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/TopRatedVendors/block.js */ "./src/blocks/TopRatedVendors/block.js");
/* harmony import */ var _blocks_VendorTopProducts_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/VendorTopProducts/block.js */ "./src/blocks/VendorTopProducts/block.js");
/* harmony import */ var _blocks_VendorsQuickInfo_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/VendorsQuickInfo/block.js */ "./src/blocks/VendorsQuickInfo/block.js");
/* harmony import */ var _blocks_VendorCoupons_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/VendorCoupons/block.js */ "./src/blocks/VendorCoupons/block.js");

// load base components

// load blocks




const {
  updateCategory
} = wp.blocks;
const {
  SVG,
  G,
  Path,
  Polygon,
  Rect,
  Circle
} = wp.components;
(function () {
  updateCategory('mvx', {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      fill: "#181718",
      "fill-rule": "nonzero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10.8,0H9.5C8,0,6.7,1.3,6.7,2.8V4C6.9,4,7,4,7.2,4.1V2.8c0-1.3,1-2.3,2.3-2.3h1.3 c1.3,0,2.3,1,2.3,2.3v1.7c0.2,0,0.3,0,0.5,0V2.8C13.6,1.3,12.3,0,10.8,0z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.8,4.4C7.6,6.8,3.7,1.9,1.8,4.9c-1.1,1.7,0.3,7.6,1.2,13c2,1.3,4.4,2.1,7,2.1 c2.7,0,5.2-0.8,7.3-2.3C18.6,12.3,19.5,3.7,16.8,4.4z M6.7,10.3V9.9h0.7v0.4v0.2H6.7V10.3z M5.6,8.9h0.3v0.3H5.6V8.9z M3.9,9.2h0.6 v0.6H3.9V9.2z M5,10.8H4.3v-0.6H5V10.8z M5.1,9.9H4.7V9.5h0.3V9.9z M5.3,9.1H4.9V8.7h0.5V9.1z M5.4,9.4h0.7v0.7H5.4V9.4z M14.3,16.3h-0.6v-0.6h0.6V16.3z M13.9,15.4v-0.3h0.3v0.3H13.9z M11.7,14.2l1.4,1.6h-0.6v1h1v-0.6l0.8,0.9h-2.4l-1.6-1.7l-1.6,1.7 H6.3l2.5-3l-2.2-2.6V11H6.1l-0.5-0.6h0.9v0.4h1.2v-0.4h0.3l2.3,2.6L13,9.8c0.4-0.5,1-0.8,1.7-0.8h1.4L11.7,14.2z M13.1,15.5V15h0.5 v0.5H13.1z M13.2,16.1v0.5h-0.5v-0.5H13.2z M5.9,11.8v-0.5h0.2h0.3v0.3v0.2H5.9z"
    })))
  });
})();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_COLUMNS": () => (/* binding */ DEFAULT_COLUMNS),
/* harmony export */   "DEFAULT_ROWS": () => (/* binding */ DEFAULT_ROWS),
/* harmony export */   "MAX_COLUMNS": () => (/* binding */ MAX_COLUMNS),
/* harmony export */   "MAX_ROWS": () => (/* binding */ MAX_ROWS),
/* harmony export */   "MIN_COLUMNS": () => (/* binding */ MIN_COLUMNS),
/* harmony export */   "MIN_ROWS": () => (/* binding */ MIN_ROWS),
/* harmony export */   "MVXICONCOLOR": () => (/* binding */ MVXICONCOLOR),
/* harmony export */   "NAMESPACE": () => (/* binding */ NAMESPACE)
/* harmony export */ });
const NAMESPACE = 'mvx';
const MVXICONCOLOR = '#e83746';
const MAX_COLUMNS = 5;
const MIN_COLUMNS = 1;
const DEFAULT_COLUMNS = 3;
const MAX_ROWS = 5;
const MIN_ROWS = 1;
const DEFAULT_ROWS = 1;

/***/ }),

/***/ "./src/blocks/VendorCoupons/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/VendorCoupons/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorCoupons/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/VendorCoupons/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorTopProducts/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/VendorTopProducts/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorTopProducts/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/VendorTopProducts/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsQuickInfo/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/VendorsQuickInfo/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsQuickInfo/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/VendorsQuickInfo/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmvx_block"] = globalThis["webpackChunkmvx_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map