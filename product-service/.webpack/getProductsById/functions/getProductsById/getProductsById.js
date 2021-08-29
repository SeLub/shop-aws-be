/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = JSON.parse('[{"count":4,"description":"This everyday laptop is powered by an Intel Celeron N4020 processor, 4GB DDR4 RAM, and 64 GB M.2 PCIe SSD storage","id":"7567ec4b-b10c-48c5-9345-fc73c48a80aa","price":255.99,"title":"Lenovo IdeaPad 14.0 Laptop Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD","imageId":"000054623"},{"count":6,"description":"NVIDIA GeForce RTX 30 Series Laptop GPUs with Boost Clock 1425 MHz and Maximum Graphics Power 105 W","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a0","price":1199,"title":"GIGABYTE G5 KC - 15.6 FHD IPS Anti-Glare 144Hz - Intel Core i5-10500H - NVIDIA GeForce RTX 3060","imageId":"000054602"},{"count":7,"description":"Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 14 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a2","price":329,"title":"2021 Newest HP Premium 14-inch HD Laptop, Intel Dual-Core Processor Up to 2.8GHz","imageId":"000054603"},{"count":12,"description":"The HP Laptop is powered with the latest Intel Celeron N4020 Processor and 8GB high-bandwidth DDR4 memory, powerful processing for advanced multitasking, demanding computing, smooth gaming, multiple tabs browsing, and everyday tasks. 128GB PCIe NVMe M.2 SSD (15x faster than HDD, stay cool and quiet) offers ample storage, quick boot-up times, fast data access, and improves the overall performance","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a1","price":399,"title":"Newest HP 15.6 FHD Micro-Edge Business Laptop, Intel Celeron N4020, 8GB RAM, 128GB SSD, Wi-Fi, Webcam, HDMI","imageId":"000054606"},{"count":7,"description":"Memory is 8GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 1TB Hard Disk Drive for ample storage space","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a3","price":519,"title":"2021 Newest Dell Inspiron 15 3000 Series 3593 Laptop","imageId":"000054608"},{"count":8,"description":"10th Gen Intel Core i3-10110U Dual-Core Processor 2.1GHz processor 4.1 GHz Turbo / 8GB DDR4 2666 SDRAM / 256GB NVMe Solid State Drive","id":"7567ec4b-b10c-48c5-9345-fc73348a80a1","price":449.99,"title":"Lenovo IdeaPad 3 15 Intel i3-10110U 8GB 256GB SSD 15.6-inch Touch Screen Laptop","imageId":"000054611"},{"count":2,"description":"17.3-inch FHD (Full HD 1920 x 1080) 360Hz 5ms 300-nits 100% sRGB color gamut with NVIDIA-GSYNC technology","id":"7567ec4b-b10c-48c5-9445-fc73c48a80a2","price":623,"title":"Alienware m17 R4, 17.3 inch FHD (Full HD) Gaming Laptop","imageId":"000054613"},{"count":3,"description":"Flex into whichever position is most comfortable with this convertible laptop, which is innovatively engineered to rotate 360 degrees.","id":"7567ec4b-b10c-45c5-9345-fc73c48a80a1","price":415,"title":"HP Chromebook x360 14a Laptop - Dual Core Intel Celeron N4020","imageId":"000054614"}]');

/***/ })
/******/ 	]);
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _productList_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 



const response = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

const handler = async event => {
        const { productId } = event.pathParameters || {};
        const product = await _productList_json__WEBPACK_IMPORTED_MODULE_0__.find(({ id }) => id === productId);
        if (!product)   { return response({ message: 'Error: Product not found!' }, 400);
          }
    return response({ ...product }, 200);
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;