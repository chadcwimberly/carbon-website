"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78364,37965,66095,420,69602],{49998:function(e,t,r){var n=r(66604),o=r(45697),i=r(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=a(o),u=a(i);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=["className","children","tabIndex"],O=["tabindex"],g=u.default.forwardRef((function(e,t){var r=e.className,o=e.children,i=e.tabIndex,a=d(e,p),c=n.getAttributes(f(f({},a),{},{tabindex:i})),l=c.tabindex,s=d(c,O);return r&&(s.className=r),null!=l&&(s.tabIndex=l),t&&(s.ref=t),u.default.createElement("svg",s,o)}));g.displayName="Icon",g.propTypes={"aria-hidden":c.default.string,"aria-label":c.default.string,"aria-labelledby":c.default.string,children:c.default.node,className:c.default.string,height:c.default.oneOfType([c.default.number,c.default.string]),preserveAspectRatio:c.default.string,tabIndex:c.default.string,viewBox:c.default.string,width:c.default.oneOfType([c.default.number,c.default.string]),xmlns:c.default.string},g.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=g,t._extends=b,t._objectWithoutProperties=d},66604:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.r(t),r.d(t,{defaultAttributes:function(){return l},formatAttributes:function(){return b},getAttributes:function(){return f},toSVG:function(){return d},toString:function(){return s}});var c=["width","height","viewBox"],u=["tabindex"],l={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,r=e.height,n=e.viewBox,i=void 0===n?"0 0 ".concat(t," ").concat(r):n,f=a(e,c),s=f.tabindex,b=a(f,u),d=o(o(o({},l),b),{},{width:t,height:r,viewBox:i});return d["aria-label"]||d["aria-labelledby"]||d.title?(d.role="img",null!=s&&(d.focusable="true",d.tabindex=s)):d["aria-hidden"]=!0,d}function s(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,o=void 0===n?{}:n,i=e.content,a=(void 0===i?[]:i).map(s).join("");return"svg"!==r?"<".concat(r," ").concat(b(o),">").concat(a,"</").concat(r,">"):"<".concat(r," ").concat(b(f(o)),">").concat(a,"</").concat(r,">")}function b(e){return Object.keys(e).reduce((function(t,r,n){var o="".concat(r,'="').concat(e[r],'"');return 0===n?o:t+" "+o}),"")}function d(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,o=void 0===n?{}:n,i=e.content,a=void 0===i?[]:i,c=document.createElementNS("http://www.w3.org/2000/svg",r),u="svg"!==r?o:f(o);Object.keys(u).forEach((function(e){c.setAttribute(e,o[e])}));for(var l=0;l<a.length;l++)c.appendChild(d(a[l]));return c}}}]);