"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[25635,37965,66095,420,69602,78364],{49998:function(e,t,r){var n=r(66604),c=r(45697),o=r(67294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(c),u=i(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],v=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,c=e.children,o=e.tabIndex,i=d(e,p),a=n.getAttributes(f(f({},i),{},{tabindex:o})),l=a.tabindex,s=d(a,v);return r&&(s.className=r),null!=l&&(s.tabIndex=l),t&&(s.ref=t),u.default.createElement("svg",s,c)}));g.displayName="Icon",g.propTypes={"aria-hidden":a.default.string,"aria-label":a.default.string,"aria-labelledby":a.default.string,children:a.default.node,className:a.default.string,height:a.default.oneOfType([a.default.number,a.default.string]),preserveAspectRatio:a.default.string,tabIndex:a.default.string,viewBox:a.default.string,width:a.default.oneOfType([a.default.number,a.default.string]),xmlns:a.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=g,t._extends=b,t._objectWithoutProperties=d},12314:function(e,t,r){var n=r(49998),c=r(67294);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(66604),r(45697);var i,a=o(c),u=["children"],l=a.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,u);return a.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),i||(i=a.default.createElement("path",{d:"M1.36,11.318V16H0.64v-4.683c0-2.221,1.342-4.163,3.347-4.969C3.242,5.749,2.79,4.834,2.79,3.85\tc0-1.77,1.44-3.21,3.21-3.21s3.21,1.44,3.21,3.21c0,0.984-0.452,1.898-1.197,2.499c2.005,0.806,3.347,2.748,3.347,4.969V16h-0.72\tv-4.683c0-2.16-1.467-4.016-3.566-4.514C6.924,6.768,6.813,6.64,6.799,6.487c-0.014-0.154,0.071-0.3,0.212-0.363\tc0.899-0.4,1.48-1.293,1.48-2.275c0-1.373-1.117-2.49-2.49-2.49S3.51,2.477,3.51,3.85c0,0.982,0.581,1.875,1.48,2.275\tc0.141,0.063,0.226,0.209,0.212,0.362C5.188,6.641,5.077,6.769,4.926,6.804C2.827,7.302,1.36,9.158,1.36,11.318z M28.014,21.349\tc0.745-0.601,1.197-1.516,1.197-2.499c0-1.771-1.44-3.21-3.211-3.21s-3.211,1.439-3.211,3.21c0,0.983,0.452,1.898,1.197,2.499\tc-2.005,0.806-3.347,2.748-3.347,4.969V31h0.721v-4.683c0-2.16,1.466-4.016,3.565-4.514c0.15-0.036,0.261-0.163,0.275-0.317\tc0.015-0.153-0.071-0.3-0.212-0.362c-0.899-0.399-1.479-1.292-1.479-2.274c0-1.373,1.117-2.49,2.49-2.49s2.49,1.117,2.49,2.49\tc0,0.982-0.58,1.875-1.479,2.274c-0.141,0.062-0.227,0.209-0.212,0.362c0.015,0.154,0.125,0.281,0.275,0.317\tc2.1,0.498,3.565,2.354,3.565,4.514V31h0.721v-4.683C31.36,24.097,30.019,22.154,28.014,21.349z M6.36,23v-5.131l2.386,2.386\tl0.509-0.51L6,16.491l-3.254,3.254l0.509,0.51l2.386-2.386V23c0,2.404,1.956,4.36,4.36,4.36h9v-0.72h-9\tC7.993,26.64,6.36,25.007,6.36,23z M25.64,8v5.13l-2.385-2.385l-0.51,0.509L26,14.509l3.255-3.255l-0.51-0.509L26.36,13.13V8\tc0-2.404-1.956-4.36-4.36-4.36H11v0.72h11C24.007,4.36,25.64,5.993,25.64,8z"})),r)}));e.exports=l},66604:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return b},getAttributes:function(){return f},toSVG:function(){return d},toString:function(){return s}});var a=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,o=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=i(e,a),s=f.tabindex,b=i(f,u),d=c(c(c({},l),b),{},{width:t,height:r,viewBox:o});return d["aria-label"]||d["aria-labelledby"]||d.title?(d.role="img",null!=s&&(d.focusable="true",d.tabindex=s)):d["aria-hidden"]=!0,d}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=(void 0===o?[]:o).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(b(c),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(b(f(c)),">").concat(i,"</").concat(r,">")}function b(e){return Object.keys(e).reduce((function(t,r,n){var c="".concat(r,'="').concat(e[r],'"');return 0===n?c:t+" "+c}),"")}function d(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,c=void 0===n?{}:n,o=e.content,i=void 0===o?[]:o,a=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?c:f(c);Object.keys(u).forEach((function(e){a.setAttribute(e,c[e])}));for(var l=0;l<i.length;l++)a.appendChild(d(i[l]));return a}}}]);