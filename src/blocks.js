/**
 * WCMp Blocks
 *
 * All blocks related JavaScript files should be imported here.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

// load base components
import './components/icons/index.js';
// load blocks
import './blocks/TopRatedVendors/block.js';
import './blocks/VendorTopProducts/block.js';

const { updateCategory } = wp.blocks;
const { SVG, G, Path, Polygon, Rect, Circle } = wp.components;

(function() {
	updateCategory('wcmp', { icon: (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
        <image id="image0" width="24" height="24" x="0" y="0"
            href="data:image/png;base64,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
        OjAwV6RwhQAAAABJRU5ErkJggg==" />
		</SVG>
	) });
})();