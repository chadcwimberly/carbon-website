"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[62883],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),s=a(88650),i=a.n(s),r=a(1597),l=a(64905),o=a(81151),p=a(75900),d=a.n(p);var c=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:o}=a||s,p=`${i}/edit/${o}${l}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=a(56328),h=a(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===s,o=new RegExp(`${s}/?(#.*)?$`),p=a.replace(o,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var k=y,g=a(17680),f=a(75387),v=a(50041);var b=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:s,Title:p}=e;const{frontmatter:d={},relativePagePath:h,titleType:y}=t,{tabs:v,title:x,theme:w,description:T,keywords:N,date:E}=d,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,r.useStaticQuery)("2456312558"),S=P?s.pathname.replace(P,""):s.pathname,L=v?S.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",D=w||C;return n.createElement(o.Z,{tabs:v,homepage:!1,theme:D,pageTitle:x,pageDescription:T,pageKeywords:N,titleType:y},n.createElement(c,{title:p?n.createElement(p,null):x,label:"label",tabs:v,theme:D}),v&&n.createElement(k,{title:x,slug:S,tabs:v,currentTab:L}),n.createElement(g.Z,{padded:!0},a,n.createElement(u,{relativePagePath:h}),n.createElement(b,{date:E})),n.createElement(m.Z,{pageContext:t,location:s,slug:S,tabs:v,currentTab:L}),n.createElement(l.Z,null))}},62539:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return k}});var n=a(45987),s=(a(67294),a(64983)),i=a(28399),r=a(42758);const l=["components"],o={},p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=p("PageDescription"),c=p("InlineNotification"),u=p("AnchorLinks"),m=p("AnchorLink"),h={_frontmatter:o},y=i.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,s.kt)(y,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(d,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Carbon uses a clear naming approach and type tokens to manage typography across\ncomplex and layered layouts and patterns, and these tokens sit within two type\nsets: expressive and productive.")),(0,s.kt)(c,{mdxType:"InlineNotification"},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"v11 update:")," The two v10 type sets—Productive and Expressive—have been\nblended together to work as a unified collection in v11. As a result of this\nconvergence, type token names have been renamed to better define their\nrelationship to one another and reflect its styling. Helpful links:\n",(0,s.kt)("a",{parentName:"p",href:"https://v10.carbondesignsystem.com/guidelines/typography/overview"},"v10 type tokens"),"\n| ",(0,s.kt)("a",{parentName:"p",href:"/migrating/guide/design#type-tokens-breaking"},"Type token migration guide"),".")),(0,s.kt)(u,{mdxType:"AnchorLinks"},(0,s.kt)(m,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Utility styles"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Body styles"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Fixed heading styles"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Fluid heading styles"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Fluid display styles"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Questions")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"Carbon uses type tokens to manage typography, and these tokens sit within two\ntype sets. The productive and expressive type sets support designers creating\nfor a full range of user needs and activities across product and web pages. To\nunderstand when to use styles from each set, see\n",(0,s.kt)("a",{parentName:"p",href:"/guidelines/typography/style-strategies"},"Style strategies"),"."),(0,s.kt)("h4",null,"Base type sizes"),(0,s.kt)("p",null,"The productive type set uses a base type size of 14px, while the expressive type\nset uses a base type size of 16px."),(0,s.kt)("h4",null,"Style naming conventions"),(0,s.kt)("p",null,"Within ",(0,s.kt)("strong",{parentName:"p"},"Body styles")," and ",(0,s.kt)("strong",{parentName:"p"},"Supporting styles"),", the same set of styles are\noffered, and an easy way to spot which type set they belong to is to look at the\nsuffix. Productive styles are named with a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-01")," and expressive style\nnames have a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,s.kt)("h4",null,"Two heading sets"),(0,s.kt)("p",null,"There are two heading sets, one for productive and one for expressive. The major\ndifference between them is in how they are implemented in code because of the\nnature of the pages."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The productive type set uses ",(0,s.kt)("em",{parentName:"p"},"fixed")," headings. Product pages have a higher\ndensity of information housed inside containers for space efficiency, and in\nthese situations fixed type styles are a must.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The expressive type set has two fixed headings that are to be used where smaller headings\nare needed. The remaining headings are ",(0,s.kt)("em",{parentName:"p"},"fluid"),". Web pages need to be able to\nflex and work at different breakpoints, and the fluid heading styles change\nsize at different breakpoints, and can extrapolate/stretch in between sizes\nfor smooth transitions."))),(0,s.kt)("h2",null,"Utility styles"),(0,s.kt)("p",null,"The utility styles are used with productive and expressive moments and\ninclude styles for code snippets, labels for captions and helper text, as well\nas legal copy. Productive styles have a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-01")," and expressive styles\nhave a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,s.kt)(r.Z,{typesets:"smallStyle",mdxType:"TypesetStyle"}),(0,s.kt)("h2",null,"Body styles"),(0,s.kt)("p",null,"There are two body styles for productive and expressive moments. Productive\nstyles have a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-01")," and expressive styles have a suffix of ",(0,s.kt)("inlineCode",{parentName:"p"},"-02"),"."),(0,s.kt)(r.Z,{typesets:"body",mdxType:"TypesetStyle"}),(0,s.kt)("h2",null,"Fixed heading styles"),(0,s.kt)("p",null,"The fixed heading styles are used for product pages where multiple containers\nare used and space efficiency is key. Fixed means they are not responsive. The\ntype size remains constant regardless of break point."),(0,s.kt)("p",null,"Creators of web pages also use the fixed headings ",(0,s.kt)("inlineCode",{parentName:"p"},"-01")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"-02")," where smaller\nheadings are needed."),(0,s.kt)(r.Z,{typesets:"fixedHeadings",mdxType:"TypesetStyle"}),(0,s.kt)("h2",null,"Fluid heading styles"),(0,s.kt)("p",null,"The fluid heading styles are primarily used in web pages, and are therefore part\nof the expressive set of type styles. These headings are responsive and the type\nstyles change size at different breakpoints."),(0,s.kt)("p",null,"Do not use these styles inside a container. They may be used in product pages\nwhere text sits outside of a container, and a blend of expressive and productive\ntype styles is desired for hierarchy and distinction. For more information, see\n",(0,s.kt)("a",{parentName:"p",href:"/guidelines/typography/style-strategies"},"Style strategies"),"."),(0,s.kt)(r.Z,{typesets:"fluidHeadings",breakpointControls:!0,mdxType:"TypesetStyle"}),(0,s.kt)("h2",null,"Fluid display styles"),(0,s.kt)("p",null,"The callout and display styles are part of the expressive set and being fluid,\nthey will adjust at different breakpoints. Do not use these styles inside a\ncontainer. For guidance about using display styles, see\n",(0,s.kt)("a",{parentName:"p",href:"/guidelines/typography/style-strategies#expressive-use-cases"},"Style strategies"),"."),(0,s.kt)(r.Z,{typesets:"fluidCallouts,fluidDisplay",breakpointControls:!0,mdxType:"TypesetStyle"}),(0,s.kt)("h2",null,"Questions?"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For IBMers only:")," If you have any questions about using either of these\nexperiences, reach out to the teams on Slack or sign up to share your work in a\nreview."),(0,s.kt)("h4",null,"Carbon Design System"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Slack channel:\n",(0,s.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/whats-happening/meetups/"},"Meetups")," with\nCarbon Design System")),(0,s.kt)("h4",null,"Carbon for IBM Dotcom"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Slack channel:\n",(0,s.kt)("a",{parentName:"li",href:"https://cognitive-app.slack.com/archives/C2PLX8GQ6"},"#carbon-for-ibm-dotcom")),(0,s.kt)("li",{parentName:"ul"},"Office hours with Carbon for IBM.com. See our\n",(0,s.kt)("a",{parentName:"li",href:"https://cognitive-app.slack.com/archives/C2PLX8GQ6"},"Slack channel")," for\ndetails.")))}k.isMDXComponent=!0}}]);