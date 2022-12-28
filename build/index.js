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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
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
  title: __('Top Rated Vendors', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: "top-vendor"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display marketplace top rated vendors.', 'multivendorx'),
  keywords: [__('Top rated vendors', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Rating vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: __('Content', 'multivendorx'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Banner', 'multivendorx'),
      help: contentVisibility.banner ? __('Vendor banner is visible.', 'multivendorx') : __('Vendor banner is hidden.', 'multivendorx'),
      checked: contentVisibility.banner,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          banner: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Logo', 'multivendorx'),
      help: contentVisibility.logo ? __('Vendor logo is visible.', 'multivendorx') : __('Vendor logo is hidden.', 'multivendorx'),
      checked: contentVisibility.logo,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          logo: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Rating', 'multivendorx'),
      help: contentVisibility.rating ? __('Vendor rating is visible.', 'multivendorx') : __('Vendor rating is hidden.', 'multivendorx'),
      checked: contentVisibility.rating,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          rating: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Title', 'multivendorx'),
      help: contentVisibility.banner ? __('Vendor title is visible.', 'multivendorx') : __('Vendor title is hidden.', 'multivendorx'),
      checked: contentVisibility.title,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          title: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: __('Vendor Social link', 'multivendorx'),
      help: contentVisibility.social_link ? __('Vendor social link is visible.', 'multivendorx') : __('Vendor social link is hidden.', 'multivendorx'),
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
      label: __('Top Rated Vendors', 'multivendorx'),
      className: "mvx-block mvx-block-top-rated-vendors"
    }, __('Display top rated vendors in a grid.', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-top-rated-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
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
  title: __('MVX: Vendor\'s Coupons', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "coupon"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays coupons added by the vendor on the vendor shop page.', 'multivendorx'),
  keywords: [__('Coupon Vendor', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "coupon",
        size: "24"
      }),
      label: __('Vendor Coupons', 'multivendorx'),
      className: "mvx-block mvx-block-coupon-vendors"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-coupon-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Select Vendor', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-coupon-vendors__selection"
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

/***/ "./src/blocks/VendorLists/block.js":
/*!*****************************************!*\
  !*** ./src/blocks/VendorLists/block.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorLists/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorLists/style.scss");
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

const BLOCK_NAME = 'list-vendors';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('MVX: Vendors List', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "vendor-list"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display list of registered vendors on your site.', 'multivendorx'),
  keywords: [__('Vendor list', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    block_rows: {
      type: 'number',
      default: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ROWS
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
      preview
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "vendor-list",
        size: "24"
      }),
      label: __('Vendor List', 'multivendorx'),
      className: "mvx-block mvx-block-list-vendors"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-list-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
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

/***/ "./src/blocks/VendorLocation/block.js":
/*!********************************************!*\
  !*** ./src/blocks/VendorLocation/block.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorLocation/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorLocation/style.scss");
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

const BLOCK_NAME = 'location-vendors';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('MVX: Vendor\'s Location', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "location"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display the vendor\'s store location on Google Maps.', 'multivendorx'),
  keywords: [__('Location Vendor', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "location",
        size: "24"
      }),
      label: __('Location Vendor', 'multivendorx'),
      className: "mvx-block mvx-block-location-vendors"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-location-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Select Vendor', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-location-vendors__selection"
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

/***/ "./src/blocks/VendorOnSellProducts/block.js":
/*!**************************************************!*\
  !*** ./src/blocks/VendorOnSellProducts/block.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorOnSellProducts/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorOnSellProducts/style.scss");
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

const BLOCK_NAME = 'vendor-on-sale-products';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('MVX: Vendor\'s On Sale Product', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "on-sale"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays a list of vendor on sale products on the vendor shop page.', 'multivendorx'),
  keywords: [__('Vendor On sale', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    no_of_product: {
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
      no_of_product,
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "on-sale",
        size: "24"
      }),
      label: __('Vendor On sell Product', 'multivendorx'),
      className: "mvx-block mvx-block-on-sale"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-on-sale__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Enter No of products', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-on-sale__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Number of products to show', 'multivendorx'),
      value: no_of_product,
      onChange: value => {
        setAttributes({
          no_of_product: value
        });
      }
    })), __('Select vendor', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-on-sale__selection"
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

/***/ "./src/blocks/VendorPolicies/block.js":
/*!********************************************!*\
  !*** ./src/blocks/VendorPolicies/block.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorPolicies/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorPolicies/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendor-policies', {
  title: __('MVX: Vendor\'s Policies', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "policies"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays vendor policies on the vendor shop page.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor policies', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_title: {
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
        shipping_policies: true,
        refund_policies: true,
        cancellation_policies: true
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
      block_title,
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Content', 'multivendorx'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Shipping Policies', 'woocommerce'),
      help: contentVisibility.shipping_policies ? __('Shipping Policies is visible.', 'woocommerce') : __('Shipping Policies is hidden.', 'woocommerce'),
      checked: contentVisibility.shipping_policies,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          shipping_policies: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Refund Policies', 'woocommerce'),
      help: contentVisibility.refund_policies ? __('Refund Policies is visible.', 'woocommerce') : __('Refund Policies is hidden.', 'woocommerce'),
      checked: contentVisibility.refund_policies,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          refund_policies: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Cancellation/Return/Exchange Policy', 'woocommerce'),
      help: contentVisibility.cancellation_policies ? __('Cancellation/Return/Exchange Policy is visible.', 'woocommerce') : __('Cancellation/Return/Exchange Policy is hidden.', 'woocommerce'),
      checked: contentVisibility.cancellation_policies,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          cancellation_policies: value
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "policies",
        size: "24"
      }),
      label: __('Vendor Plicies', 'multivendorx'),
      className: "mvx-block mvx-block-vendor-policies"
    }, __('Enter title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-policies__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Enter vendor name', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-policies__selection"
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

/***/ "./src/blocks/VendorProductCategories/block.js":
/*!*****************************************************!*\
  !*** ./src/blocks/VendorProductCategories/block.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorProductCategories/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorProductCategories/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendor-products-catagory', {
  title: __('MVX: Vendor\'s Product Categories', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "product-categories"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays a list of product categories added by the vendor on the vendor shop page.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor categories', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_title: {
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
        count: true,
        hierarchical: true
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
      block_title,
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Content', 'multivendorx'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Show product counts', 'woocommerce'),
      help: contentVisibility.count ? __('Product count is visible.', 'woocommerce') : __('Product count is hidden.', 'woocommerce'),
      checked: contentVisibility.count,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          count: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Show hierarchy', 'woocommerce'),
      help: contentVisibility.hierarchical ? __('Hierarchy is visible.', 'woocommerce') : __('Hierarchy is hidden.', 'woocommerce'),
      checked: contentVisibility.hierarchical,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          hierarchical: value
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "product-categories",
        size: "24"
      }),
      label: __('Vendor Product Categories', 'multivendorx'),
      className: "mvx-block mvx-block-vendor-products-catagory"
    }, __('Enter title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-products-catagory__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Enter vendor name', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-products-catagory__selection"
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

/***/ "./src/blocks/VendorProductsSearch/block.js":
/*!**************************************************!*\
  !*** ./src/blocks/VendorProductsSearch/block.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorProductsSearch/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorProductsSearch/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendor-search-products', {
  title: __('MVX: Vendor Product Search', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "product-search"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('A search form for vendor store products search.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor Products', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
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
      block_title,
      block_columns,
      block_rows,
      contentVisibility
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "product-search",
        size: "24"
      }),
      label: __('Product search', 'multivendorx'),
      className: "mvx-block mvx-block-vendor-search-products"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-search-products__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
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

/***/ "./src/blocks/VendorRecentProducts/block.js":
/*!**************************************************!*\
  !*** ./src/blocks/VendorRecentProducts/block.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorRecentProducts/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorRecentProducts/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendor-recent-products', {
  title: __('MVX: Vendor\'s Recent Products', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "recent-product"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays a list of vendor recent products on the vendor shop page.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor Products', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    vendor_id: {
      type: 'string',
      default: ''
    },
    block_title: {
      type: 'string',
      default: ''
    },
    no_of_product: {
      type: 'number',
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
      block_title,
      no_of_product,
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "recent-product",
        size: "24"
      }),
      label: __('Vendor recent Products', 'multivendorx'),
      className: "mvx-block mvx-block-vendor-recent-products"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-recent-products__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Select number of product', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-recent-products__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Number of products to show', 'multivendorx'),
      value: no_of_product,
      onChange: value => {
        setAttributes({
          no_of_product: value
        });
      }
    })), __('Select Vendor', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendor-recent-products__selection"
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
  title: __('Vendor Top Products', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "products"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Display top products of a vendor.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor Products', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Content', 'multivendorx'),
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
      label: __('Vendor Top Products', 'multivendorx'),
      className: "mvx-block mvx-block-vendor-top-products"
    }, __('Display top products of selected vendor in a grid.', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

/***/ "./src/blocks/VendorsContact/block.js":
/*!********************************************!*\
  !*** ./src/blocks/VendorsContact/block.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorsContact/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorsContact/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendors-quick-info', {
  title: __('MVX: Contact Vendor', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "contact-vendor"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Adds a contact form on vendor\'s shop page so that customers can contact vendor directly( Admin will also get a copy of the same )', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor Products', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    block_description: {
      type: 'string',
      default: ''
    },
    block_submit_title: {
      type: 'string',
      default: ''
    },
    recapta_id: {
      type: 'string',
      default: ''
    },
    recapta_script_v: {
      type: 'string',
      default: ''
    },
    site_key_v: {
      type: 'string',
      default: ''
    },
    secret_key_v: {
      type: 'string',
      default: ''
    },
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
        form: true,
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
      block_title,
      block_description,
      block_submit_title,
      recapta_id,
      recapta_script_v,
      site_key_v,
      secret_key_v,
      vendor_id,
      block_columns,
      block_rows,
      contentVisibility
    } = attributes;
    const bindVendorsOptionData = [{
      value: '',
      label: 'Select a type...'
    }];
    let vendors = mvx_blocks_scripts_data_params.allVendors;
    vendors.map(function (vendor_data) {
      bindVendorsOptionData.push({
        value: vendor_data.vendor_id,
        label: vendor_data.vendor_title
      });
    });
    const captaOptionData = [{
      value: '',
      label: 'Select a type...'
    }];
    let capta = mvx_blocks_scripts_data_params.recapta;
    capta.map(function (vendor_data) {
      captaOptionData.push({
        value: vendor_data.key,
        label: vendor_data.title
      });
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: __('Content', 'multivendorx'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Hide from guests: ', 'woocommerce'),
      help: contentVisibility.form ? __('Form is visible.', 'woocommerce') : __('Form is hidden.', 'woocommerce'),
      checked: contentVisibility.form,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          form: value
        }
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: __('Enable Google Recaptcha', 'woocommerce'),
      help: contentVisibility.button ? __('Google recapta is visible.', 'woocommerce') : __('Google recapta is hidden.', 'woocommerce'),
      checked: contentVisibility.button,
      onChange: value => setAttributes({
        contentVisibility: {
          ...contentVisibility,
          button: value
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "contact-vendor",
        size: "24"
      }),
      label: __('Contact Vendor', 'multivendorx'),
      className: "mvx-block mvx-block-contact-vendor"
    }, __('Title.', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Title:', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Description', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Description:', 'multivendorx'),
      value: block_description,
      onChange: value => {
        setAttributes({
          block_description: value
        });
      }
    })), __('Submit button text', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Submit Button Label Text:', 'multivendorx'),
      value: block_submit_title,
      onChange: value => {
        setAttributes({
          block_submit_title: value
        });
      }
    })), __('Recapta Type', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: recapta_id,
      onChange: value => {
        setAttributes({
          recapta_id: value
        });
      },
      options: captaOptionData
    })), __('Recapta Script', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
      placeholder: __('Recaptcha Script:', 'multivendorx'),
      value: recapta_script_v,
      onChange: value => {
        setAttributes({
          recapta_script_v: value
        });
      }
    })), __('Site Key', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Site key:', 'multivendorx'),
      value: site_key_v,
      onChange: value => {
        setAttributes({
          site_key_v: value
        });
      }
    })), __('Secret Key', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Secret key:', 'multivendorx'),
      value: secret_key_v,
      onChange: value => {
        setAttributes({
          secret_key_v: value
        });
      }
    })), __('Select Vendor', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-contact-vendor__selection"
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

/***/ "./src/blocks/VendorsInfo/block.js":
/*!*****************************************!*\
  !*** ./src/blocks/VendorsInfo/block.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorsInfo/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorsInfo/style.scss");
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

const BLOCK_NAME = 'info-vendors';
registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/' + BLOCK_NAME, {
  title: __('MVX: Vendor\'s Quick Info', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "quick-info"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Displays a brief info about the current product\'s vendor.', 'multivendorx'),
  keywords: [__('Quick Info', 'multivendorx'), __('MVX Vendors', 'multivendorx'), __('Vendors', 'multivendorx')],
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "quick-info",
        size: "24"
      }),
      label: __('Vendor Quick Info', 'multivendorx'),
      className: "mvx-block mvx-block-info-vendors"
    }, __('Title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-info-vendors__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Enter vendor name', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-info-vendors__selection"
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

/***/ "./src/blocks/VendorsReview/block.js":
/*!*******************************************!*\
  !*** ./src/blocks/VendorsReview/block.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/VendorsReview/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/VendorsReview/style.scss");
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

registerBlockType(_utils_constants__WEBPACK_IMPORTED_MODULE_5__.NAMESPACE + '/vendors-review', {
  title: __('MVX: Vendor Review', 'multivendorx'),
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: "review"
    }),
    foreground: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MVXICONCOLOR
  },
  category: 'mvx',
  description: __('Add a vendor review widget on vendor\'s shop page and single product page.', 'multivendorx'),
  keywords: [__('Top Products', 'multivendorx'), __('MVX Vendor Products', 'multivendorx'), __('Products', 'multivendorx'), __('Vendor', 'multivendorx')],
  attributes: {
    block_title: {
      type: 'string',
      default: ''
    },
    vendor_id: {
      type: 'string',
      default: ''
    },
    review_no: {
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
      block_title,
      review_no,
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
      title: __('Layout', 'multivendorx'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Columns', 'multivendorx'),
      value: block_columns,
      onChange: value => setAttributes({
        block_columns: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_COLUMNS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_COLUMNS
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: __('Product Rows', 'multivendorx'),
      value: block_rows,
      onChange: value => setAttributes({
        block_rows: value
      }),
      min: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MIN_ROWS,
      max: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.MAX_ROWS
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: "review",
        size: "24"
      }),
      label: __('Vendor Review', 'multivendorx'),
      className: "mvx-block mvx-block-vendors-review"
    }, __('Enter title', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendors-review__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Add some title', 'multivendorx'),
      value: block_title,
      onChange: value => {
        setAttributes({
          block_title: value
        });
      }
    })), __('Enter vendor name', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendors-review__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      value: vendor_id,
      onChange: value => {
        setAttributes({
          vendor_id: value
        });
      },
      options: bindVendorsOptionData
    })), __('Enter number of reviews', 'multivendorx'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mvx-block__selection mvx-block-vendors-review__selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      placeholder: __('Number of reviews', 'multivendorx'),
      value: review_no,
      onChange: value => {
        setAttributes({
          review_no: value
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
        path = 'M18.6,12.9c-0.2-0.1-0.5-0.1-0.7-0.1c-0.1,0-0.2,0-0.3,0h-0.1v-0.3c0-0.2,0-0.3,0-0.5c0-0.4,0-0.8,0-1.2  c0-0.7-0.3-1.2-0.9-1.5C16.4,9.2,16.2,9.1,16,9C16,9,15.9,9,15.8,9h-2.2v3c0,0.6-0.3,0.9-0.9,0.9H8.5v6.4h9.1c0.2,0,0.4,0,0.6,0 c0.9-0.1,1.7-0.8,1.7-1.7c0-0.9,0-1.8,0-2.8C20.1,13.8,19.5,13.1,18.6,12.9z M12.5,18.1H9.6V14h2.8V18.1z M19.1,17.4    c0,0.4-0.3,0.7-0.7,0.7c-0.5,0-1.1,0-1.7,0c-0.6,0-1.2,0-1.8,0h-1c-0.1,0-0.1,0-0.1,0L13.6,18V17c0-0.9,0-1.9,0-2.8 c0-0.1,0.1-0.3,0.3-0.4c0.7-0.3,1.1-0.9,1.1-1.7c0-0.5,0-0.9,0-1.3c0-0.2,0-0.4,0-0.6v-0.1H15c0.1,0,0.1,0,0.3,0c0.1,0,0.3,0,0.5,0  c0.4,0,0.7,0.3,0.7,0.8c0,0.7,0,1.3,0,2.1v1.1h0.7c0.3,0,0.7,0,1.1,0c0.5,0,0.7,0.3,0.7,0.7C19.1,15.6,19.1,16.4,19.1,17.4z M4,4.8  v14h2.8v-1.1H5.1v-12h13.7v1.3h1.1V4.7C17.8,4.8,8.6,4.8,4,4.8z';
        break;
      case 'contact-vendor':
        path = 'M16.3,4.1c1.4,0.2,2.4,1.3,2.4,2.7c0,2.7,0,5.3,0,7.9c0,1.5-1.2,2.7-2.8,2.7c-0.7,0-1.3,0-2.1,0c-0.1,0-0.1,0.1-0.2,0.1    c-0.4,0.7-0.8,1.3-1.2,2c-0.1,0.1-0.2,0.3-0.4,0.4c-0.1,0-0.1,0-0.3,0c-0.2-0.1-0.3-0.2-0.4-0.4c-0.4-0.7-0.8-1.3-1.2-2 c-0.1-0.1-0.1-0.1-0.2-0.1c-0.7,0-1.4,0-2.1,0c-1.5,0-2.7-1.3-2.7-2.7c0-2.7,0-5.4,0-8c0-1.3,0.7-2.3,1.9-2.7   C7.9,3.8,16.3,4,16.3,4.1z M11.9,18.6c0.1-0.1,0.7-1.3,1.1-1.8c0.1-0.2,0.3-0.3,0.5-0.3c0.8,0,1.5,0,2.3,0c1.1,0,1.8-0.7,1.8-1.8    c0-2.6,0-5.3,0-7.8c0-1.1-0.7-1.9-1.8-1.9c-2.7,0-5.3,0-7.9,0c-1.1,0-1.8,0.7-1.8,1.8c0,2.6,0,5.3,0,7.8c0,1.1,0.7,1.9,1.8,1.9  c0.8,0,1.5,0,2.3,0c0.3,0,0.4,0.1,0.5,0.3C11.1,17.3,11.9,18.5,11.9,18.6z M7.7,8.7c0-0.5,0.1-0.9,0.5-1.3c0.3-0.3,0.7-0.6,0.9-0.9  c0.3-0.3,0.5-0.3,0.8,0c0.6,0.6,1.3,1.3,1.9,1.9c0.3,0.3,0.3,0.5,0,0.7s-0.5,0.5-0.8,0.8c-0.1,0.1-0.1,0.1-0.1,0.3  c0.4,0.7,0.9,1.2,1.6,1.6c0.1,0.1,0.1,0.1,0.2-0.1c0.3-0.3,0.5-0.5,0.8-0.8c0.3-0.3,0.5-0.3,0.8,0c0.7,0.6,1.3,1.3,1.9,1.9  c0.3,0.3,0.3,0.5,0,0.7c-0.3,0.3-0.7,0.6-0.9,0.9c-0.5,0.5-1,0.6-1.6,0.5c-0.8-0.1-1.5-0.5-2.3-0.9c-1.3-0.9-2.5-2.1-3.3-3.5    C7.9,9.9,7.7,9.3,7.7,8.7z M10.7,8.7c-0.4-0.4-0.8-0.9-1.2-1.3C9.3,7.7,9.2,7.9,8.9,8.1C8.7,8.2,8.7,8.5,8.7,8.7    C8.7,9.2,8.8,9.6,9,9.9c0.8,1.5,1.9,2.7,3.5,3.5c0.4,0.3,0.9,0.4,1.3,0.5c0.3,0.1,0.5,0.1,0.7-0.1c0.3-0.3,0.5-0.5,0.7-0.7  c-0.4-0.4-0.8-0.8-1.3-1.3c-0.2,0.2-0.5,0.5-0.7,0.7c-0.2,0.2-0.4,0.3-0.7,0.2c-0.2-0.1-0.5-0.1-0.6-0.3c-0.6-0.3-1.1-0.9-1.5-1.4   c-0.3-0.3-0.5-0.6-0.5-1c-0.1-0.3,0-0.5,0.2-0.8C10.3,9.1,10.5,8.9,10.7,8.7z';
        break;
      case 'product-search':
        path = 'M18.5,4H5.7c-1,0-1.6,0.6-1.6,1.7v10.1c0,0.9,0,1.9,0,2.7c0,0.7,0.5,1.3,1.2,1.5c0.3,0,0.5,0,0.7,0h0.2c1.3,0,2.7,0,3.9,0  c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.5c-0.1-0.3-0.3-0.4-0.6-0.4c-1.1,0-2.1,0-3.1,0H5.1V5.1h13.8v1.7c0,1.1,0,2.1,0,3.3   c0,0.1,0.1,0.3,0.1,0.5c0.1,0.2,0.4,0.2,0.5,0.1c0.3-0.1,0.3-0.3,0.3-0.5c0-1.3,0-2.7,0-3.9V5.7C20.1,4.6,19.5,4,18.5,4z M18.2,17.4 c-0.5-0.5-0.9-0.9-1.3-1.3c-0.3-0.3-0.3-0.5-0.1-0.9c0.7-1.2,0.7-2.6-0.1-3.7c-0.7-1.2-1.9-1.9-3.3-1.9h-0.1c-0.1,0-0.3,0-0.3,0.1   c-1,0.1-1.9,0.7-2.6,1.5c-0.6,0.9-0.9,1.9-0.7,2.9c0.3,1.3,1,2.3,2.1,2.8c1.1,0.5,2.4,0.5,3.5-0.1c0.1-0.1,0.2-0.1,0.3-0.1  c0.1,0,0.3,0.1,0.5,0.2c0.6,0.6,1.2,1.2,1.8,1.8l0.2,0.2c0.1,0.1,0.1,0.1,0.1,0.1c0.1,0.1,0.3,0.1,0.5,0.1c0.1-0.1,0.3-0.1,0.3-0.3  c0.1-0.1,0.1-0.3-0.1-0.6L18.2,17.4z M15.3,15.3c-0.5,0.5-1.2,0.8-1.9,0.8l0,0c-0.7,0-1.4-0.3-1.9-0.8s-0.8-1.2-0.8-1.9 c0-1.5,1.2-2.7,2.7-2.7l0,0c0.7,0,1.4,0.3,1.9,0.8c0.5,0.5,0.8,1.2,0.8,1.9C16.1,14.1,15.9,14.8,15.3,15.3z';
        break;
      case 'quick-info':
        path = 'M15,4.6c-0.7-0.3-1.5-0.5-2.4-0.5C12.5,4,12.5,4,12.4,4h-0.9l-0.3,0.1c-0.2,0-0.4,0.1-0.7,0.1 C7.9,4.6,5.9,6.2,4.7,8.6C4.3,9.5,4.1,10.4,4,11.4c0,0.1,0,0.1,0,0.1v0.9l0.1,0.3c0,0.2,0.1,0.4,0.1,0.7c0.5,2.7,2.1,4.6,4.5,5.8    c1.1,0.5,2.5,0.8,3.7,0.7c2.8-0.2,5-1.5,6.5-3.9c0.9-1.3,1.2-2.8,1.1-4.4C19.7,8.3,18,5.9,15,4.6z M12,18.8c-0.1,0-0.1,0-0.1,0l0,0  c-3.8-0.1-6.8-3.2-6.7-7C5.2,10,5.9,8.2,7.3,7c1.3-1.3,3.1-1.9,4.9-1.9C14,5.2,15.8,5.9,17,7.3c1.3,1.3,1.9,3.1,1.9,4.9 C18.8,15.8,15.7,18.8,12,18.8z M11.4,10.4c0,1.4,0,2.8,0,4.2v1.2h1.1v-1.7c0-1.3,0-3.7,0-3.7S11.8,10.4,11.4,10.4z M11.4,8.2h1.1    v1.1h-1.1V8.2z';
        break;
      case 'vendor-list':
        path = 'M17.1,4.1C16.8,4,16.4,4,16,4h-0.1c-1.9,0-3.9,0-5.8,0H7.8C7.7,4,7.6,4,7.5,4C6.2,3.9,5.1,4.7,4.8,5.9 C4.7,6.2,4.7,6.6,4.7,7v0.1c0,1.2,0,2.4,0,3.6v1.5v1.5c0,1.3,0,2.5,0,3.7c0,1.2,0.9,2.4,2.1,2.6C7.1,20,7.4,20,7.8,20h0.1   c1.5,0,3.1,0,4.6,0H15c0.5,0,0.9,0,1.5,0h0.1c1.3,0,2.4-0.9,2.6-2.1c0.1-0.3,0.1-0.7,0.1-1.1v-0.1c0-2.2,0-4.4,0-6.5V6.8    C19.1,5.4,18.3,4.4,17.1,4.1z M18,16.9c0,0.3,0,0.5-0.1,0.7c-0.1,0.8-0.6,1.2-1.4,1.3C16.4,19,16.2,19,16,19c-1.3,0-2.8,0-4.1,0 s-2.8,0-4.1,0c-0.3,0-0.5,0-0.7-0.1c-0.8-0.1-1.3-0.7-1.3-1.5c0-0.2-0.1-0.4-0.1-0.7c0-1.3,0-2.5,0-3.7v-2.3c0-1.3,0-2.5,0-3.7  c0-0.3,0-0.5,0.1-0.8C6,5.6,6.4,5.1,7.2,5c0.2,0,0.5-0.1,0.7-0.1c2.8,0,5.5,0,8.3,0c0.3,0,0.5,0,0.7,0.1c0.8,0.1,1.3,0.7,1.3,1.5    c0,0.2,0.1,0.4,0.1,0.6C18,10.3,18,13.6,18,16.9z M15.2,8.2c-0.5,0-1,0-1.5,0H13l0,0h-0.3c-0.1,0-0.3,0-0.5,0c-0.3,0-0.7,0-1,0  c-0.1,0-0.1,0-0.3,0.1c-0.3,0.1-0.3,0.3-0.3,0.5c0.1,0.3,0.3,0.4,0.5,0.4c1.4,0,2.8,0,4.2,0c0.1,0,0.1-0.1,0.3-0.1  c0.2-0.1,0.3-0.3,0.3-0.5C15.6,8.3,15.4,8.2,15.2,8.2z M15.1,14.9c-1.3,0-2.7,0-4.1,0c-0.1,0-0.3,0.1-0.3,0.1   c-0.1,0.1-0.3,0.3-0.1,0.5c0.1,0.2,0.3,0.3,0.5,0.3c0.5,0,1,0,1.5,0h0.6h0.5c0.5,0,1,0,1.5,0c0.3,0,0.5-0.2,0.5-0.5 C15.7,15.1,15.5,14.9,15.1,14.9z M15.1,11.5h-1.4h-0.6h-0.6h-1.4c-0.3,0-0.5,0.2-0.5,0.5c0,0.1,0.1,0.3,0.1,0.3s0.3,0.1,0.4,0.1 c1.3,0,2.7,0,4,0c0.3,0,0.5-0.2,0.5-0.5C15.7,11.7,15.5,11.5,15.1,11.5z M8.5,8.2L8.5,8.2C8.2,8.2,8,8.4,8,8.6  c0,0.3,0.2,0.5,0.5,0.5C8.6,9.1,8.8,9,8.8,9S9,8.8,9,8.6C9,8.4,8.8,8.2,8.5,8.2z M8.5,14.9c-0.1,0-0.3,0.1-0.3,0.1S8,15.2,8,15.4    c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5c0-0.1-0.1-0.3-0.1-0.3S8.6,14.9,8.5,14.9z M8.4,11.5L8.4,11.5C8.2,11.5,8,11.7,8,12   c0,0.1,0.1,0.3,0.1,0.3s0.3,0.1,0.4,0.1C8.8,12.5,9,12.2,9,12C9,11.7,8.8,11.5,8.4,11.5z';
        break;
      case 'on-sale':
        path = 'M18.1,12.2c-0.3-0.6-0.7-1.2-1.1-1.8c-0.4-0.5-0.9-1.1-1.3-1.5C15.3,8.4,15,8,14.6,7.6c-0.9-1.1-1.3-2-1.4-3.1 c-0.1-0.3-0.1-0.4-0.3-0.5C12.7,4,12.5,4,12.3,4.2c-1.1,1-1.8,2.3-2.1,3.7c-0.2,0.7-0.3,1.5-0.2,2.5l0.1,0.9l-0.7-0.5   c-0.5-0.4-1.1-0.9-1.2-1.5C8.1,8.9,8,8.8,7.7,8.7c-0.1,0-0.1,0-0.1,0C7.5,8.7,7.3,8.8,7.1,9c-1.5,1.9-2.1,3.9-1.5,6.1   c0.7,2.9,3.5,5.6,7.9,4.9c2.1-0.3,3.7-1.7,4.7-3.9C18.7,14.7,18.7,13.4,18.1,12.2z M16.9,16.2c-0.9,1.7-2.2,2.5-3.8,2.7 c-0.3,0.1-0.6,0.1-0.9,0.1c-2.8,0-5-1.6-5.6-4.3c-0.3-1.3-0.1-2.6,0.5-3.9l0.3-0.5l0.4,0.4c0.5,0.5,1.1,1,1.7,1.3   c0.3,0.1,0.7,0.3,1.1,0.5l0.1,0.1c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.1,0.2-0.3,0.1-0.6c-0.3-0.7-0.3-1.5-0.3-2.4   c0.1-1.1,0.3-2.1,0.9-3.1l0.4-0.7l0.3,0.7c0.6,1.3,1.5,2.3,2.4,3.4c0.2,0.2,0.4,0.5,0.5,0.7c0.5,0.7,0.9,1.1,1.3,1.7    C17.7,13.4,17.7,14.8,16.9,16.2z';
        break;
      case 'review':
        path = 'M12.1,4C12,4,12,4,12.1,4C9.9,4,7.9,4.8,6.4,6.3S4,9.9,4,12c0,4.4,3.5,8,7.9,8c0,0,0,0,0.1,0c4.4,0,8-3.5,8-8  C20,7.6,16.5,4,12.1,4z M12,19L12,19c-1.9,0-3.7-0.7-4.9-2.1C5.7,15.6,5,13.9,5,12c0-1.9,0.7-3.7,2.1-4.9C8.4,5.7,10.1,5,12,5   c0,0,0,0,0.1,0c1.9,0,3.6,0.7,4.9,2.1s2,3.1,2,4.9C19,15.9,15.9,19,12,19z M16.1,10.5c-0.7-0.1-1.5-0.2-2.3-0.3 c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.3-0.3-0.6-0.5-0.9c-0.3-0.3-0.4-0.7-0.6-1.1c-0.1-0.3-0.3-0.3-0.5-0.3l0,0c-0.3,0-0.4,0.1-0.5,0.3   c-0.3,0.7-0.7,1.3-1,2.1c-0.1,0.1-0.1,0.1-0.3,0.2c-0.8,0.1-1.6,0.3-2.3,0.3c-0.3,0.1-0.5,0.1-0.5,0.3c-0.1,0.2,0,0.4,0.2,0.6   c0.5,0.5,1.1,1.1,1.7,1.6c0.1,0.1,0.1,0.2,0.1,0.3C9.1,14.3,9,15,8.9,15.7c-0.1,0.3,0,0.5,0.2,0.6c0.1,0.1,0.3,0.1,0.6,0    c0.3-0.1,0.6-0.3,0.9-0.5c0.4-0.2,0.7-0.4,1.1-0.6c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1c0.5,0.3,1.1,0.6,1.7,0.9l0.3,0.2    c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.1,0.2-0.3,0.2-0.5l-0.1-0.6c-0.1-0.5-0.2-1.1-0.3-1.7c-0.1-0.1,0-0.3,0.1-0.3c0.3-0.3,0.7-0.7,1.1-1 c0.2-0.2,0.4-0.4,0.6-0.6c0.1-0.1,0.2-0.3,0.2-0.4l0,0C16.6,10.7,16.3,10.6,16.1,10.5z M14.8,11.5c-0.1,0.1-0.2,0.2-0.3,0.3 c-0.2,0.3-0.5,0.5-0.7,0.7c-0.3,0.3-0.3,0.5-0.3,0.8c0.1,0.3,0.1,0.7,0.1,1c0,0.1,0.1,0.3,0.1,0.5v0.1l-0.2-0.1 c-0.1,0-0.1-0.1-0.1-0.1l-0.3-0.1c-0.3-0.1-0.7-0.3-0.9-0.5c-0.2-0.1-0.4-0.1-0.6,0c-0.3,0.2-0.7,0.3-1,0.5L10.1,15l0.1-0.4 c0.1-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.1-0.7c0.1-0.3,0-0.4-0.2-0.6c-0.3-0.3-0.5-0.5-0.7-0.8c-0.1-0.1-0.2-0.2-0.3-0.3L9,11.5 l1.1-0.1c0.1-0.1,0.3-0.1,0.5-0.1c0.2-0.1,0.3-0.1,0.5-0.3c0.1-0.3,0.3-0.7,0.5-1l0.1-0.3c0-0.1,0.1-0.1,0.1-0.1l0.1-0.2l0.4,0.7    c0.1,0.3,0.3,0.5,0.4,0.8c0.1,0.2,0.3,0.3,0.5,0.3c0.3,0.1,0.7,0.1,1.1,0.1l0.3,0.1c0.1,0,0.1,0,0.1,0L14.8,11.5L14.8,11.5z';
        break;
      case 'recent-product':
        path = 'M16.9,4.1c-0.1,0-2.7,0-5,0c-2.3,0-4.6,0-4.8,0C5.2,4.5,4,6,4,7.8c0,1,0,1.9,0,2.9V12v1c0,1.1,0,2.1,0,3.1 c0,0.3,0,0.5,0.1,0.7c0.3,1.6,1.4,2.7,3,3.1c0.3,0.1,9.6,0.1,9.9,0c1.8-0.3,3.1-1.8,3.1-3.7c0-2.7,0-5.6,0-8.4  C19.9,5.9,18.7,4.5,16.9,4.1z M18.8,16.2c0,1.6-1.1,2.7-2.7,2.7c-0.5,0-1.1,0-1.6,0c-0.5,0-0.9,0-1.3,0H12h-1.3c-0.9,0-1.9,0-2.9,0  c-1.2,0-2.2-0.7-2.5-1.7c-0.1-0.3-0.1-0.6-0.1-0.9c0-2.5,0-5.1,0-8.4c0-1.5,1.1-2.7,2.7-2.7c2.7,0,5.4,0,8.4,0  c1.5,0,2.7,1.1,2.7,2.7C18.8,10.6,18.8,13.4,18.8,16.2z M14.6,13.3c-0.1-0.1-0.3-0.2-0.4-0.3c-0.4-0.3-0.8-0.7-1.2-0.9  c-0.3-0.2-0.5-0.5-0.5-0.9c0-0.7,0-1.5,0-2.1c0-0.3,0-0.7,0-1.1c0-0.3-0.1-0.5-0.3-0.5c-0.1-0.1-0.3-0.1-0.5,0  c-0.1,0.1-0.3,0.3-0.3,0.5c0,0.5,0,0.9,0,1.5v0.7l0,0v0.5c0,0.5,0,0.9,0,1.4c0,0.3,0.1,0.5,0.3,0.5c0.1,0.1,0.1,0.1,0.2,0.1l0.7,0.5 c0.5,0.3,0.9,0.7,1.5,1.1c0.1,0.1,0.3,0.1,0.5,0.1c0.1-0.1,0.3-0.2,0.3-0.3C14.9,13.7,14.8,13.5,14.6,13.3z';
        break;
      case 'policies':
        path = 'M18.3,6.1c-0.7-0.3-1.5-0.5-2.3-0.7c-1.3-0.5-2.5-0.9-3.8-1.3C12.1,4,11.8,4,11.7,4C10,4.6,8.5,5.2,6.8,5.7L5.7,6.1    C5.3,6.2,5.1,6.4,5.1,6.8v0.3c0,1.5,0,3,0,4.5c0,0.8,0.1,1.6,0.5,2.4c0.5,1.5,1.6,2.8,3.1,4.1c0.9,0.7,1.9,1.3,3.1,1.9h0.3  c1.3-0.6,2.4-1.3,3.4-2.1c1.6-1.4,2.6-2.8,3-4.5c0.1-0.3,0.1-0.5,0.2-0.9c0-0.1,0.1-0.3,0.1-0.4V6.6C18.7,6.3,18.6,6.2,18.3,6.1z     M17.7,9.9L17.7,9.9c0,0.1,0,0.3,0,0.4c0,0.5,0,1.1,0,1.6c-0.1,1.3-0.7,2.5-1.7,3.8c-0.9,1.1-2.1,2.1-3.6,2.8   c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.1,0-0.3-0.1c-2.2-1.2-3.7-2.5-4.6-4.2c-0.5-0.9-0.8-1.9-0.8-3c0-1.3,0-2.5,0-3.8    c0-0.3,0.1-0.5,0.5-0.7c0.9-0.3,1.7-0.5,2.5-0.9c0.8-0.3,1.6-0.5,2.4-0.8c0.2-0.1,0.4-0.1,0.6,0c0.9,0.3,1.7,0.5,2.5,0.9    c0.8,0.3,1.6,0.5,2.3,0.8c0.3,0.1,0.5,0.3,0.5,0.7c0,0.5,0,1,0,1.5L17.7,9.9z M15.2,8.7c-0.1,0-0.3,0.1-0.5,0.3 c-0.3,0.3-0.5,0.7-0.7,1l-2.3,3.1L11,12.5c-0.4-0.4-0.7-0.7-1.1-1.1c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.1,0-0.3,0.1-0.4,0.2   c-0.3,0.3-0.2,0.6,0.1,0.9c0.7,0.8,1.5,1.5,2.3,2.3c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.3-0.1,0.5-0.3c1.1-1.5,2.3-3.1,3.5-4.7 c0.2-0.3,0.2-0.7-0.1-0.9C15.5,8.7,15.3,8.7,15.2,8.7z';
        break;
      case 'location':
        path = 'M13.4,4.2c-0.2-0.1-0.4-0.1-0.7-0.1c-0.1,0-0.1-0.1-0.3-0.1h-0.8l0,0c-0.1,0-0.1,0-0.1,0c-0.1,0-0.3,0.1-0.3,0.1   c-0.3,0.1-0.5,0.1-0.7,0.1c-2.3,0.7-3.9,2.7-4,5.1c-0.1,1.3,0.3,2.5,1.1,3.7c1,1.3,2,2.7,3,4c0.1,0.1,0.3,0.3,0.3,0.3   c0.4,0.3,0.9,0.5,1.3,0.3c0.5-0.1,0.9-0.3,1.2-0.7c1.2-1.6,2.1-2.9,3.1-4c0.9-1.2,1.3-2.6,1.1-4.1C17.3,6.6,15.7,4.8,13.4,4.2z   M15.7,12.4c-1,1.3-1.9,2.7-2.9,3.9c-0.2,0.3-0.5,0.4-0.7,0.4c-0.3,0-0.5-0.1-0.7-0.4c-1-1.3-1.9-2.7-2.9-3.9   c-0.7-0.9-0.9-1.7-0.9-2.7c0-1.3,0.5-2.5,1.4-3.3c0.9-0.9,2.1-1.3,3.4-1.3c2.3,0.1,4.1,1.9,4.3,4.1C16.7,10.4,16.5,11.4,15.7,12.4z   M14.6,19.1c-0.8,0-1.5,0-2.3,0h-1h-0.5c-0.4,0-0.8,0-1.2,0c-0.3,0-0.5,0.1-0.5,0.4C9,19.7,9.2,19.9,9.4,20h0.1h5.3 c0.2-0.1,0.3-0.1,0.3-0.3c0.1-0.1,0.1-0.3,0-0.5C15,19.1,14.8,19.1,14.6,19.1z M12.1,7.9L12.1,7.9c-0.5,0-0.9,0.2-1.3,0.5   s-0.5,0.8-0.5,1.3c0,1,0.8,1.7,1.7,1.7l0,0c0.5,0,0.9-0.2,1.3-0.5s0.5-0.8,0.5-1.3c0-0.5-0.2-0.9-0.5-1.3C13,8,12.5,7.9,12.1,7.9z    M12.1,10.4L12.1,10.4c-0.4,0-0.7-0.3-0.7-0.7S11.7,9,12.1,9l0,0c0.2,0,0.4,0.1,0.5,0.3c0.1,0.1,0.2,0.3,0.2,0.5    C12.9,10,12.5,10.4,12.1,10.4z';
        break;
      case 'coupon':
        path = 'M12,18.4c-1.5,0-2.9,0-4.4,0c-1.6,0-2.9-0.9-3.4-2.5c-0.1-0.3-0.1-0.6-0.1-0.9C4,14.8,4,14.5,4,14.2c0-0.5,0.1-0.7,0.7-0.9 c0.4-0.1,0.7-0.5,0.8-0.9c0.1-0.7-0.1-1.3-0.7-1.5c-0.1-0.1-0.3-0.1-0.3-0.2c-0.1-0.1-0.3-0.3-0.3-0.5c0-0.7-0.1-1.3,0.1-2  C4.6,6.6,6,5.6,7.6,5.6c2.9,0,5.7,0,8.6,0c0.2,0,0.4,0,0.5,0c1.5,0.1,2.9,1.4,3.1,2.9c0.1,0.5,0.1,1.1,0.1,1.6  c0,0.4-0.3,0.6-0.6,0.7c-0.4,0.1-0.7,0.5-0.8,0.9c-0.2,0.7,0.1,1.3,0.8,1.5c0.1,0.1,0.3,0.1,0.5,0.3c0.1,0.1,0.2,0.3,0.2,0.4    c0.1,0.7,0.1,1.3-0.1,1.9c-0.4,1.6-1.8,2.7-3.5,2.7C14.9,18.4,13.4,18.4,12,18.4z M12,17.4c1.5,0,2.9,0,4.4,0c1.2,0,2.1-0.7,2.4-1.9 c0.1-0.4,0.1-0.8,0.1-1.2c0-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.2-0.5-0.3c-1.3-1.1-1.1-3.2,0.5-4c0.1-0.1,0.1-0.1,0.1-0.2  c0-0.3,0-0.5,0-0.7c-0.1-1.1-1-2.1-2.1-2.3c-0.1,0-0.3,0-0.5,0c-2.9,0-5.7,0-8.6,0C6.5,6.7,5.5,7.4,5.3,8.6C5.2,8.9,5.2,9.3,5.2,9.7 c0,0.1,0.1,0.2,0.1,0.3c0.9,0.5,1.5,1.5,1.3,2.6c-0.1,0.8-0.6,1.3-1.3,1.7c-0.1,0.1-0.1,0.1-0.1,0.1c0,0.4,0,0.8,0.1,1.2    c0.3,1.1,1.2,1.9,2.4,1.9C9.1,17.4,10.5,17.4,12,17.4z M13.1,9.3c0.3-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.3,0.4,0.5  c0,0.1,0,0.1,0,0.1c0,1.5,0,3,0.1,4.5c0,0.2-0.1,0.4-0.3,0.5c-0.3,0.3-0.9,0-0.9-0.4c0-0.1,0-0.1,0-0.2c0-1.5,0-3,0-4.4 C13,9.5,13.1,9.4,13.1,9.3z';
        break;
      case 'product-categories':
        path = 'M18.2,4c-1.2,0-2.4,0-3.6,0c-1.1,0-1.9,0.8-1.9,1.9c0,1.3,0,2.5,0,3.7v1.1c0,0.4,0.2,0.6,0.6,0.6c0.5,0,1.1,0,1.7,0h0.7h0.7    c0.5,0,1.1,0,1.7,0c1.1,0,1.9-0.8,1.9-1.9c0-1.2,0-2.4,0-3.6C20,4.7,19.3,4,18.2,4z M19,9.5c0,0.5-0.3,0.7-0.7,0.7  c-0.7,0-1.3,0-1.9,0c-0.5,0-0.9,0-1.3,0H14h-0.1h-0.1V7c0-0.4,0-0.8,0-1.1c0-0.5,0.3-0.7,0.7-0.7c1.2,0,2.4,0,3.7,0 c0.5,0,0.7,0.3,0.7,0.7C19,7.1,19,8.3,19,9.5z M9.5,4C8.8,4,8.2,4,7.6,4S6.5,4,5.9,4C4.8,4,4,4.8,4,5.9c0,1.2,0,2.4,0,3.6   c0,1.1,0.7,1.9,1.9,1.9c0.5,0,1.1,0,1.6,0H9c0.6,0,1.1,0,1.7,0c0.4,0,0.7-0.2,0.7-0.7V9.9c0-1.3,0-2.7,0-4.1C11.4,4.7,10.6,4,9.5,4z  M10.2,10.2H9H5.9c-0.5,0-0.8-0.3-0.8-0.8c0-1.2,0-2.4,0-3.5c0-0.5,0.3-0.8,0.8-0.8c1.2,0,2.4,0,3.5,0c0.5,0,0.8,0.3,0.8,0.7    c0,1,0,1.9,0,2.9V10.2z M10.7,12.7c-0.6,0-1.2,0-1.8,0H8.3H7.6c-0.3,0-0.5,0-0.7,0c-0.3,0-0.7,0-1,0c-1.1,0-1.9,0.7-1.9,1.9 c0,1.2,0,2.4,0,3.5S4.8,20,5.9,20c1.2,0,2.3,0,3.5,0c1.1,0,1.9-0.7,1.9-1.9c0-1.5,0-2.9,0-4.4v-0.3C11.4,12.9,11.1,12.7,10.7,12.7z   M10.2,18.1c0,0.5-0.3,0.8-0.8,0.8c-0.6,0-1.2,0-1.8,0s-1.2,0-1.8,0c-0.5,0-0.8-0.3-0.8-0.8c0-1.2,0-2.4,0-3.5  c0-0.5,0.3-0.8,0.8-0.8h4.3v1.9C10.2,16.5,10.2,17.3,10.2,18.1z M16.4,12.7c-0.9,0-1.8,0.3-2.5,1c-0.7,0.7-1.1,1.5-1.1,2.6  c-0.1,2,1.5,3.6,3.6,3.7c1.7,0,3.6-1.3,3.7-3.6C20,14.7,18.7,12.8,16.4,12.7L16.4,12.7z M19,16.3c0,0.7-0.3,1.3-0.8,1.8 c-0.5,0.5-1.1,0.7-1.8,0.7l0,0c-0.7,0-1.3-0.3-1.9-0.9c-0.5-0.5-0.7-1.1-0.7-1.7c0-0.7,0.3-1.3,0.7-1.7c0.5-0.5,1.2-0.8,1.9-0.8l0,0 c0.7,0,1.3,0.3,1.8,0.8S19,15.7,19,16.3z';
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
/* harmony import */ var _blocks_VendorsContact_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/VendorsContact/block.js */ "./src/blocks/VendorsContact/block.js");
/* harmony import */ var _blocks_VendorCoupons_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/VendorCoupons/block.js */ "./src/blocks/VendorCoupons/block.js");
/* harmony import */ var _blocks_VendorLocation_block_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/VendorLocation/block.js */ "./src/blocks/VendorLocation/block.js");
/* harmony import */ var _blocks_VendorOnSellProducts_block_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/VendorOnSellProducts/block.js */ "./src/blocks/VendorOnSellProducts/block.js");
/* harmony import */ var _blocks_VendorPolicies_block_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/VendorPolicies/block.js */ "./src/blocks/VendorPolicies/block.js");
/* harmony import */ var _blocks_VendorsReview_block_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/VendorsReview/block.js */ "./src/blocks/VendorsReview/block.js");
/* harmony import */ var _blocks_VendorsInfo_block_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/VendorsInfo/block.js */ "./src/blocks/VendorsInfo/block.js");
/* harmony import */ var _blocks_VendorRecentProducts_block_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/VendorRecentProducts/block.js */ "./src/blocks/VendorRecentProducts/block.js");
/* harmony import */ var _blocks_VendorProductsSearch_block_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/VendorProductsSearch/block.js */ "./src/blocks/VendorProductsSearch/block.js");
/* harmony import */ var _blocks_VendorProductCategories_block_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/VendorProductCategories/block.js */ "./src/blocks/VendorProductCategories/block.js");
/* harmony import */ var _blocks_VendorLists_block_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/VendorLists/block.js */ "./src/blocks/VendorLists/block.js");

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

/***/ "./src/blocks/VendorLists/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/VendorLists/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorLists/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/VendorLists/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorLocation/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/VendorLocation/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorLocation/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/VendorLocation/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorOnSellProducts/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/VendorOnSellProducts/editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorOnSellProducts/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/VendorOnSellProducts/style.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorPolicies/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/VendorPolicies/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorPolicies/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/VendorPolicies/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorProductCategories/editor.scss":
/*!********************************************************!*\
  !*** ./src/blocks/VendorProductCategories/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorProductCategories/style.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/VendorProductCategories/style.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorProductsSearch/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/VendorProductsSearch/editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorProductsSearch/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/VendorProductsSearch/style.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorRecentProducts/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/VendorRecentProducts/editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorRecentProducts/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/VendorRecentProducts/style.scss ***!
  \****************************************************/
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

/***/ "./src/blocks/VendorsContact/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/VendorsContact/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsContact/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/VendorsContact/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsInfo/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/VendorsInfo/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsInfo/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/VendorsInfo/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsReview/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/VendorsReview/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/VendorsReview/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/VendorsReview/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

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