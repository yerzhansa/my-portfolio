!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=4)}([function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/sass/main.scss\n// module id = 0\n// module chunks = 0 1 2 3\n\n//# sourceURL=webpack:///./src/sass/main.scss?")},,,,function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(0);\n\nfunction blur() {\n    var imgWidth = document.querySelector('.section.review').offsetWidth;\n    var imgHeight = document.querySelector('.section.review').offsetHeight;\n    var top = document.querySelector('.feedback.review__feedback').offsetTop;\n    var left = document.querySelector('.feedback.review__feedback').offsetLeft;\n    var blur = document.querySelector('.feedback__blur');\n\n    blur.style.backgroundSize = imgWidth + 'px' + ' ' + imgHeight + 'px';\n    blur.style.backgroundPosition = -left + 'px' + ' ' + -top + 'px';\n}\n\nblur();\n\nwindow.addEventListener('resize', blur);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/template/pages/works/works.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/template/pages/works/works.js?")}]);