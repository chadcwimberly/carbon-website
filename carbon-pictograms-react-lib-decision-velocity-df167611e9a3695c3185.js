"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[63550,74715,66095,420,69602,78364],{12404:function(e,t,r){var n=r(95752),l=r(45697),a=r(67294);function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=c(l),o=c(a);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=["className","children","tabIndex"],g=["tabindex"],O=o.default.forwardRef((function(e,t){var r=e.className,l=e.children,a=e.tabIndex,c=b(e,p),i=n.getAttributes(f(f({},c),{},{tabindex:a})),u=i.tabindex,s=b(i,g);return r&&(s.className=r),null!=u&&(s.tabIndex=u),t&&(s.ref=t),o.default.createElement("svg",s,l)}));O.displayName="Icon",O.propTypes={"aria-hidden":i.default.string,"aria-label":i.default.string,"aria-labelledby":i.default.string,children:i.default.node,className:i.default.string,height:i.default.oneOfType([i.default.number,i.default.string]),preserveAspectRatio:i.default.string,tabIndex:i.default.string,viewBox:i.default.string,width:i.default.oneOfType([i.default.number,i.default.string]),xmlns:i.default.string},O.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=O,t._extends=d,t._objectWithoutProperties=b},66494:function(e,t,r){var n=r(12404),l=r(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var c,i=a(l),o=["children"],u=i.default.forwardRef((function(e,t){var r=e.children,l=n._objectWithoutProperties(e,o);return i.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},l),c||(c=i.default.createElement("path",{d:"M16.023,31.355\tc-5.518,0-10.821-2.985-13.56-8.101l-1.124,3.188l-0.679-0.24l1.526-4.329l4.329,1.576l-0.246,0.676l-3.134-1.141\tc3.657,6.742,12.008,9.564,19.052,6.28c3.703-1.727,6.461-4.917,7.712-8.689c-0.615,0.858-1.409,1.596-2.351,2.162\tc-1.8,1.082-3.91,1.397-5.949,0.89c-1.768-0.441-3.294-1.456-4.374-2.893l-0.831,3.332l-0.698-0.174l1.114-4.471l4.443,1.156\tl-0.182,0.697l-3.152-0.82c0.973,1.223,2.312,2.089,3.854,2.473c1.854,0.465,3.771,0.175,5.404-0.808\tc2.12-1.273,3.412-3.507,3.463-5.98c0-0.046,0-0.093,0-0.14L31.36,16c0,0.034-0.001,0.068-0.001,0.102h0.001\tc-0.001,0.016-0.001,0.032-0.001,0.047c-0.062,5.886-3.53,11.279-8.868,13.767C20.397,30.894,18.193,31.355,16.023,31.355z M1.36,16\tH0.64C0.644,10.056,4.125,4.593,9.508,2.083c3.718-1.734,7.888-1.917,11.746-0.513c3.585,1.305,6.498,3.836,8.283,7.174l1.123-3.186\tl0.68,0.239l-1.526,4.329l-4.329-1.575l0.246-0.677l3.135,1.141c-1.704-3.148-4.465-5.534-7.858-6.769\tc-3.673-1.338-7.65-1.164-11.194,0.489c-3.7,1.725-6.458,4.914-7.709,8.683c0.614-0.854,1.406-1.589,2.348-2.155\tc3.477-2.088,7.936-1.167,10.323,2.003l0.831-3.333l0.698,0.174l-1.114,4.47l-4.443-1.156l0.182-0.697l3.152,0.82\tc-0.973-1.223-2.312-2.088-3.854-2.472C8.375,8.609,6.457,8.897,4.823,9.88C2.657,11.181,1.362,13.469,1.36,16z"})),r)}));e.exports=u}}]);