# WC Marketplace Blocks [![Latest Tag](https://img.shields.io/github/tag/wcmarketplace/wcmp-guten-blocks.svg?style=flat&label=Latest%20Tag)](https://github.com/wcmarketplace/wcmp-guten-blocks/releases)

[![Made with PHP](https://img.shields.io/badge/Made%20with-PHP-blue.svg?style=for-the-badge)](https://wc-marketplace.com)

Feature plugin for WC Marketplace + Gutenberg to explore new Blocks for WC Marketplace, and how WC Marketplace might work with the block editor.

WCMp Blocks basically a package for WC Marketplace with development version.

## Installing the stable version

We soon release a new version of WC Marketplace Blocks onto WordPress.org every few weeks, which can be used as an easier way to preview the features. But you can use this version by as follows -

1. Make sure you have WordPress 5.0+ and WC Marketplace 3.2+

2. Get a copy of this plugin using the green "Clone or download" button on the right and placed it within WordPress setup "plugins" directory.
3. Activate the plugin.

## Installing the development version

1. Get a copy of this plugin using the green "Clone or download" button on the right.

2. `npm install` to install the dependencies.

3. `npm run start` to compile and run the block in development mode.
4. `npm run build` Use to build production code for your block inside `dist` folder.
5. Activate the plugin.

## Installing as WCMp package

1. Get a copy of this plugin using the green "Clone or download" button on the right.
2. Place the plugin folder within "WCMp plugin" `packages` folder.
3. Load "WCMp Block" plugin module in `$packages` variable of `Package.php`
4. Set `add_filter( "wcmp_load_package_{$package_dir}", '__return_true' )`. And for "WCMp Blocks" `$package_dir` should be `wcmp-guten-blocks/wcmp-blocks.php` unless folder renamed.
