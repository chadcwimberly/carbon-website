/*! For license information please see ff4cdcd0b9254eccd3b33455573174482364e5d8-eb4f4a682ff6cd7e8298.js.LICENSE.txt */
"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[937580],{240684:function(e,t,r){var n=r(667294),o=r(263366),a=r(487462),c=r(497326),i=r(151721),s=r(390971),l=r(108679),u=r.n(l);function f(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var d=n.createContext();var m={initialChunks:{}},p="PENDING",y="REJECTED";var g=function(e){return e};function h(e){var t=e.defaultResolveComponent,r=void 0===t?g:t,l=e.render,h=e.onLoad;function A(e,t){void 0===t&&(t={});var g=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),A={};function v(e){return t.cacheKey?t.cacheKey(e):g.resolve?g.resolve(e):"static"}function b(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,s.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return u()(o,a,{preload:!0}),a}var Y,S,E=function(e){var t=v(e),r=A[t];return r&&r.status!==y||((r=g.requireAsync(e)).status=p,A[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:g.resolve(e),chunkName:g.chunkName(e),error:t?t.message:t}),r.status=y}))),r},w=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},f(!r.__chunkExtractor||g.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(g.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(g.chunkName(r))),(0,c.Z)(n)):(!1!==t.ssr&&(g.isReady&&g.isReady(r)||g.chunkName&&m.initialChunks[g.chunkName(r)])&&n.loadSync(),n)}(0,i.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return(0,a.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return v(this.props)},n.getCache=function(){return A[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),A[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;h&&setTimeout((function(){h(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=b(g.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:g.resolve(this.props),chunkName:g.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=b(t,e.props,k);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,o.Z)(e,["__chunkExtractor","forwardedRef"]));return E(t)},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,c=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,s=i.error,u=i.loading,f=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(s)throw s;var d=n||t.fallback||null;return u?d:l({fallback:d,result:f,options:t,props:(0,a.Z)({},c,{ref:r})})},r}(n.Component),C=(S=function(e){return n.createElement(d.Consumer,null,(function(t){return n.createElement(Y,Object.assign({__chunkExtractor:t},e))}))},(Y=w).displayName&&(S.displayName=Y.displayName+"WithChunkExtractor"),S),k=n.forwardRef((function(e,t){return n.createElement(C,Object.assign({forwardedRef:t},e))}));return k.displayName="Loadable",k.preload=function(e){k.load(e)},k.load=function(e){return E(e)},k}return{loadable:A,lazy:function(e,t){return A(e,(0,a.Z)({},t,{suspense:!0}))}}}var A=h({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),v=A.loadable,b=A.lazy,Y=h({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),S=Y.loadable,E=Y.lazy;var w=v;w.lib=S,b.lib=E;t.ZP=w},241309:function(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,A=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case i:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case y:case s:return e;default:return t}}case o:return t}}}function S(e){return Y(e)===f}t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===i||e===c||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===A||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h)}},390971:function(e,t,r){e.exports=r(241309)},946409:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(667294),o=r(515567),a=r(294184),c=r.n(a);const i="undefined"!=typeof window?[[document,"scroll"],[window,"resize"],[window,"orientationchange"]]:[];var s=r(456848);var l=({onSearchChange:e,onDropdownChange:t,selectedCategory:r,categoryList:a,type:l="icon"})=>{const[u,f]=(()=>{const e=(0,n.useRef)(null),{0:t,1:r}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{function n(){const n=e.current.getBoundingClientRect().top<=parseInt(getComputedStyle(e.current).top,10);n&&!t?r(!0):!n&&t&&r(!1)}return n(),i.forEach((e=>{e[0].addEventListener(e[1],n)})),()=>{i.forEach((e=>{e[0].removeEventListener(e[1],n)}))}}),[e,t]),[e,t]})(),d="icon"===l?"Search by descriptors like “add”, or “check”":"Search by descriptors like “electronics”, or “weather”";return n.createElement("div",{"data-stuck":f||void 0,ref:u,className:c()(s.cb,{[s.Hw]:"icon"!==l})},n.createElement(o.olm,{labelText:`filter ${l}s by searching for their name or category`,onChange:e,placeHolderText:d,size:"lg"}),n.createElement(o.Ltx,{className:s.j6,id:"category-filter",size:"lg",direction:"bottom",selectedItem:r,onChange:t,label:`Filter ${l}s by category`,items:[`All ${l}s`,...a]}))}},74082:function(e,t,r){r.d(t,{H:function(){return o}});var n=r(667294);const o=n.createContext();t.Z=({children:e,type:t,site:r="carbon"})=>n.createElement(o.Provider,{value:{site:r,type:t}},e)},889152:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(667294),o=r(199122),a=r(514394),c=r(294184),i=r.n(c),s=r(337495),l=r(809375),u=r(456848);const f=()=>n.createElement("svg",{width:"32px",height:"32px",viewBox:"0 0 64 64"},n.createElement("desc",null,"Created with Sketch."),n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.createElement("image",{id:"illustrator",x:"0",y:"0",width:"64",height:"64",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGOfPtRkwAAAS9QTFRFMSAY+34Y/n8YdD8Y63cYg0YYp1cY/38Y+n0YpFYY3nEYPCUYOSMYcj4Y83oYSisYvWEYTCwY8HkY3XAYUi8Yu2AY8XkY6nYY73gYVjEYRCgYbTwYPyYY2G4YfkMYoVQYtV0Y2m4Y0moYaToY2W0Y4XEY4nIYhUYYrVkY8noY9nwYYzgYMyEYz2kY1WwYaDoYbz0YnlMYn1MYOyUYqFcYuF4YbjwYSSsYgEUYjUoY4XIYTi0YyWcYyGYYolUYplYYiEgYNiMY/X8YwmMYMiAYgEQYPiYY7ngYcz4YSCsY5nQYlk8Y53QYuV8YQScYqlgYNCEYXjQYcT0Y+XwYWzQYlE4YzGgYul8YiUkYwGIYh0gYVjIYvGEYhkcYjEoYslsY7XcY7HYYeUEYd0EY7ncYMwmPCAAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAB0ElEQVRYCe2V13LCMBBFl2BYEgiBQAik995777333pP//4bsyiBkzxgs85AMgx5kXWvvsbRey4AlNijRj/8EAB4bb19swaPf9AqKR0JlBVDuSZzjd4wraoH4DcOv6sI5CAiAL6w4DERDkTTkGKdSDgoA1iqOD8RPRRYB1JiAAcXx9WN8K7Iw4ND045HVYVMc5LCFhSwAkzaPRRYAnNJcopG6RYvDJpwBO/U0995A3arNY5HOgBueen2g7joiLVHEkBRi4Ay45alMhvtm6QmRkqII4I5iUwBpugSlRwMwzbGPAC90WfICmCAjvgE88XU5R9BYgajjZ4AkAzY8AHrJl2YfV8K2PqCOH3zPvg4aDG1mCe63ID7lANt2GTWuDeAKxDjbxFrWdAEjKQbkW0IXcJn3mqN5k+A6B8d2gEgHgGvAKAG6qs0mKiKmt4KwjwDy+OWjLXohCG5XcEWWqrNs4mCGFA5rAc7J0ZnzwwEDJrUAfeRYl4C9LZKtOoA4P1L5HYyRrGpigssc9LOhRa4ApkhjmwYgRvE9eT90M2BWA7BP8e0KIDJIN074Bp3UPmWChjTj9GOxBjqpCqCSRK6NSh2UVw74fXptohi8mtn394Bf0ww4OLSdUjgAAAAASUVORK5CYII="}))),d=()=>n.createElement(l.Re,{size:32,className:u.qv});var m=({allIconResults:e,setSelectedCategory:t,selectedCategory:r,type:c="icons",pageName:l,pageUrl:m})=>n.createElement("div",{className:u.f_},e?n.createElement(n.Fragment,null,n.createElement("span",{className:u.UR},`0 results found in the "${r}" category.`),n.createElement("h2",{className:s.h2},e," matches found in"," ",n.createElement("button",{type:"button",onClick:()=>t(`All ${c}`),className:i()(u.we,"cds--link")},"all ",c,"."))):n.createElement(n.Fragment,null,n.createElement("h2",{className:s.h2},"No result found"),n.createElement("p",{className:s.An},"It appears we don’t have an icon that matches your search. Try different search terms or give us a hand—submit your own design to the library!"),n.createElement(a.X2,{className:"resource-card-group"},n.createElement(a.sg,{colMd:4,colLg:4,noGutterSm:!0},n.createElement(o.Z,{subTitle:`Submit ${"icon"===l?"an icon":"a pictogram"} design`,href:"https://github.ibm.com/brand/pictograms/issues/new"},n.createElement(d,null))),n.createElement(a.sg,{colMd:4,colLg:4,noGutterSm:!0},n.createElement(o.Z,{actionIcon:"download",href:m,subTitle:`Download the ${l} master`},n.createElement(f,null))))))},808823:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(145987),o=r(667294),a=r(197582);function c(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function l(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function u(e,t){var r=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function f(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,n=void 0===r?i:r,o=t.stripRegexp,a=void 0===o?s:o,u=t.transform,f=void 0===u?c:u,d=t.delimiter,m=void 0===d?" ":d,p=l(l(e,n,"$1\0$2"),a,"\0"),y=0,g=p.length;"\0"===p.charAt(y);)y++;for(;"\0"===p.charAt(g-1);)g--;return p.slice(y,g).split("\0").map(f).join(m)}(e,(0,a.__assign)({delimiter:"",transform:u},t))}var d=r(212327),m=r(46194),p=r(515567),y=r(820640),g=r.n(y),h=r(294184),A=r.n(h),v=r(74082),b="ActionBar-module--tooltip--286f6",Y="ActionBar-module--trigger--5b6a7";var S=({moduleName:e,name:t,source:r,setIsActionBarVisible:n,isActionBarVisible:a,isLastCard:c})=>{const{site:i}=(0,o.useContext)(v.H),{0:s,1:l}=(0,o.useState)(`Copy <${e} />`),u=(0,o.useRef)(),f="carbon"===i,y=c?"end":"center";return o.createElement("div",{ref:u,onBlur:e=>{const t=u.current.contains(e.relatedTarget);n(t)},"aria-hidden":!a,className:A()("ActionBar-module--container--f7ff6",{"ActionBar-module--hidden--f07d4":!a})},o.createElement(p.zxk,{kind:"ghost",size:"small",hasIconOnly:!0,tooltipAlignment:y,tooltipPosition:"top",iconDescription:"Download SVG",renderIcon:d.UW,onFocus:()=>n(!0),onClick:()=>{const e=document.body.appendChild(document.createElement("a")),n=new Blob([r],{type:"image/svg+xml"}),o=window.URL.createObjectURL(n);e.download=`${t}.svg`,e.href=o,e.click(),document.body.removeChild(e)},className:b,triggerClassName:Y}),f&&o.createElement(p.zxk,{kind:"ghost",size:"small",hasIconOnly:!0,tooltipAlignment:y,tooltipPosition:"top",iconDescription:s,renderIcon:m.EK,onClick:()=>{l("Copied!"),setTimeout((()=>{l(`Copy ${e}`)}),2e3),g()(`<${e} />`,{format:"text/plain"})},onFocus:()=>n(!0),className:b,triggerClassName:Y}))},E=r(456848);const w=["icon","containerIsVisible","isLastCard"];var C=e=>{var t;let{icon:r,containerIsVisible:a,isLastCard:c}=e,i=(0,n.Z)(e,w);const{name:s,Component:l,friendlyName:u,assets:d,moduleInfo:m,output:p}=r,{0:y,1:g}=(0,o.useState)(!1),h=null!==(t=null==m?void 0:m.global)&&void 0!==t?t:p[0].moduleName;let{source:A}=d[0];return d.length>1&&(A=d.find((({size:e})=>32===e)).source),o.createElement("li",{onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},className:E.$h},o.createElement("div",{className:E.Lj},o.createElement("span",{className:E.Qk},u),a&&o.createElement(o.Fragment,null,o.createElement("div",{className:E.ov},l?o.createElement(l,Object.assign({size:32},i),o.createElement("title",null,u)):o.createElement("p",null,"Error: no component found for ",f(u))),o.createElement(S,{isLastCard:c,name:s,source:A,moduleName:h,isActionBarVisible:y,setIsActionBarVisible:g}))))}},277995:function(e,t,r){var n=r(830587),o=r(335121);t.Z=({assetType:e})=>{const t=(0,n.ZP)({minWidth:o.AVK.md.width,maxWidth:o.AVK.lg.width}),r=(0,n.ZP)({minWidth:o.AVK.lg.width});let a=2;return"pictograms"===e&&r&&(a=4),"icons"===e&&(t?a=4:r&&(a=6)),a}},197565:function(e,t,r){var n=r(667294);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(null),{0:r,1:o}=(0,n.useState)(!1),a=(0,n.useRef)(),c=(0,n.useCallback)((()=>{const{current:e}=a;e&&e.disconnect()}),[]),i=(0,n.useCallback)((()=>{a.current=new IntersectionObserver((([e])=>o(e.isIntersecting)),{rootMargin:"75%"}),e&&a.current.observe(e)}),[e]);return(0,n.useLayoutEffect)((()=>(i(),()=>{c()})),[i,c]),[t,r]}},108679:function(e,t,r){var n=r(121296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var o=m(r);o&&o!==p&&e(t,o,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var i=s(t),y=s(r),g=0;g<c.length;++g){var h=c[g];if(!(a[h]||n&&n[h]||y&&y[h]||i&&i[h])){var A=d(r,h);try{l(t,h,A)}catch(v){}}}}return t}},396103:function(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,A=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case a:case i:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case y:case s:return e;default:return t}}case o:return t}}}function S(e){return Y(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=g,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return S(e)||Y(e)===u},t.isConcurrentMode=S,t.isContextConsumer=function(e){return Y(e)===l},t.isContextProvider=function(e){return Y(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return Y(e)===d},t.isFragment=function(e){return Y(e)===a},t.isLazy=function(e){return Y(e)===g},t.isMemo=function(e){return Y(e)===y},t.isPortal=function(e){return Y(e)===o},t.isProfiler=function(e){return Y(e)===i},t.isStrictMode=function(e){return Y(e)===c},t.isSuspense=function(e){return Y(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===i||e===c||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===A||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h)},t.typeOf=Y},121296:function(e,t,r){e.exports=r(396103)},456848:function(e,t,r){r.d(t,{$h:function(){return d},FX:function(){return y},Hw:function(){return u},Lj:function(){return m},Qk:function(){return A},UR:function(){return f},YK:function(){return h},cb:function(){return c},f_:function(){return l},g7:function(){return p},j6:function(){return a},ng:function(){return o},ov:function(){return i},p1:function(){return g},qv:function(){return s},we:function(){return n}});var n="SvgLibrary-module--all-svgs--3fb31",o="SvgLibrary-module--category-title--8c6c1",a="SvgLibrary-module--dropdown--71b2f",c="SvgLibrary-module--filter-row--a84cb",i="SvgLibrary-module--flex-container--2b628",s="SvgLibrary-module--icon--4550f",l="SvgLibrary-module--no-result--8a782",u="SvgLibrary-module--pictograms--10c38",f="SvgLibrary-module--search-label--2cbea",d="SvgLibrary-module--svg-card--38a08",m="SvgLibrary-module--svg-card-inside--d538c",p="SvgLibrary-module--svg-category--a5d7d",y="SvgLibrary-module--svg-grid--08486",g="SvgLibrary-module--svg-library--8c55d",h="SvgLibrary-module--svg-page--c08cb",A="SvgLibrary-module--trigger-text--425fa"},830587:function(e,t,r){var n=r(388038);t.ZP=n.default,n.useMedia,n.useMediaLayout},388038:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(667294),o=r(551654);t.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(e){return!0}};var a=function(e){return function(r,a){void 0===a&&(a=!1);var c=n.useState(a),i=c[0],s=c[1],l=o.queryObjectToString(r);return e((function(){var e=!0,r="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(l),n=function(){e&&s(Boolean(r.matches))};return r.addListener(n),s(r.matches),function(){e=!1,r.removeListener(n)}}),[l]),i}};t.useMedia=a(n.useEffect),t.useMediaLayout=a(n.useLayoutEffect),t.default=t.useMedia},826426:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},551654:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(826426);t.camelToHyphen=n.default;var o=r(371168);t.queryObjectToString=o.default;var a=r(98419);t.noop=a.default},98419:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},371168:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(826426);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],r=e[1],o=n.default(t),a=r;return"boolean"==typeof a?a?o:"not "+o:("number"==typeof a&&/[height|width]$/.test(o)&&(a+="px"),"("+o+": "+a+")")})).join(" and ")}}}]);