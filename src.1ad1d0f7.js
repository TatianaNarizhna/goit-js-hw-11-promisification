parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"ThKP":[function(require,module,exports) {
var n=function(n){return new Promise(function(e){setTimeout(function(){e(n)},n)})},e=function(n){return console.log("Resolved after ".concat(n,"ms"))};n(2e3).then(e),n(1e3).then(e),n(1500).then(e);
},{}],"VQB5":[function(require,module,exports) {
function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?e(Object(c),!0).forEach(function(e){r(t,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],c=function(e,r){return new Promise(function(n,c){n(e.map(function(e){return e.name===r?t(t({},e),{},{active:!e.active}):e}))})},o=function(e){return console.table(e)};c(n,"Mango").then(o),c(n,"Lux").then(o);
},{}],"dG4R":[function(require,module,exports) {
function t(t,o){return a(t)||e(t,o)||r(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}function e(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],o=!0,e=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);o=!0);}catch(u){e=!0,a=u}finally{try{o||null==c.return||c.return()}finally{if(e)throw a}}return r}}function a(t){if(Array.isArray(t))return t}var i=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},c=function(t){var n=i(200,500);return new Promise(function(r,o){setTimeout(function(){Math.random()>.3&&r([t.id,n]),o(t.id)},n)})},u=function(n){var r=t(n,2),o=r[0],e=r[1];console.log("Transaction ".concat(o," processed in ").concat(e,"ms"))},l=function(t){console.warn("Error processing transaction ".concat(t,". Please try again later."))};c({id:70,amount:150}).then(u).catch(l),c({id:71,amount:230}).then(u).catch(l),c({id:72,amount:75}).then(u).catch(l),c({id:73,amount:100}).then(u).catch(l);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./code.js/task1"),require("./code.js/task2"),require("./code.js/task3");
},{"./sass/main.scss":"clu1","./code.js/task1":"ThKP","./code.js/task2":"VQB5","./code.js/task3":"dG4R"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.1ad1d0f7.js.map