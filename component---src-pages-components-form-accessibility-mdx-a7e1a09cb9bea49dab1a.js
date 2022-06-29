"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78754],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var i=a(67294),n=a(88650),o=a.n(n),r=a(1597),s=a(64905),l=a(81151),c=a(75900),m=a.n(c);var p=e=>{let{title:t,theme:a,tabs:n=[]}=e;return i.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:l}=a||n,c=`${o}/edit/${l}${s}/src/pages${t}`;return o?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),h=a(51721);let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),s=t===n,l=new RegExp(`${n}/?(#.*)?$`),c=a.replace(l,t);return i.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},i.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(i.Component);var b=f,g=a(17680),k=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?i.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(y.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:m={},relativePagePath:h,titleType:f}=t,{tabs:y,title:w,theme:v,description:A,keywords:x,date:E}=m,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:C}}=(0,r.useStaticQuery)("2456312558"),T=C?n.pathname.replace(C,""):n.pathname,D=y?T.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",B=v||P;return i.createElement(l.Z,{tabs:y,homepage:!1,theme:B,pageTitle:w,pageDescription:A,pageKeywords:x,titleType:f},i.createElement(p,{title:c?i.createElement(c,null):w,label:"label",tabs:y,theme:B}),y&&i.createElement(b,{title:w,slug:T,tabs:y,currentTab:D}),i.createElement(g.Z,{padded:!0},a,i.createElement(d,{relativePagePath:h}),i.createElement(N,{date:E})),i.createElement(u.Z,{pageContext:t,location:n,slug:T,tabs:y,currentTab:D}),i.createElement(s.Z,null))}},21156:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return g}});var i=a(45987),n=(a(67294),a(64983)),o=a(28399);a(36569);const r=["components"],s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=l("PageDescription"),m=l("AnchorLinks"),p=l("AnchorLink"),d=l("Row"),u=l("Column"),h=l("Caption"),f={_frontmatter:s},b=o.Z;function g(e){let{components:t}=e,a=(0,i.Z)(e,r);return(0,n.kt)(b,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Design annotations are needed for specific instances shown below, but Carbon\nalready incorporates accessibility into the components that make up a form.\nRefer to form components’ individual accessibility tabs for specific\nconsiderations.")),(0,n.kt)(m,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon bakes keyboard operation into the components that make up a form,\nimproving the experience of blind users and others who operate via the keyboard.\nCarbon incorporates many other accessibility considerations, some of which are\ndescribed below."),(0,n.kt)("h3",null,"Information icons"),(0,n.kt)("p",null,"A common challenge for forms is how to surface additional information to the\nuser without making the form too dense. Carbon provides an information icon\n",(0,n.kt)("a",{parentName:"p",href:"/components/toggletip/usage"},"toggletip")," to ensure such information is\npredictable and keyboard accessible. The toggletip is a button, which is in the\ntab order. Both ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," open the tip, and ",(0,n.kt)("inlineCode",{parentName:"p"},"Esc")," dismisses it."),(0,n.kt)(d,{mdxType:"Row"},(0,n.kt)(u,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVQoz2NgQAP+itPAuDlpMwMvQwFDvOl8piDVGUyxxvMY4kzmg+VIAjADlRlqGTgY8hgSzBYwBKnOABsWb0qBgQwM5gzXzz5iiDaYGxqoMj00Um8OQ5T+HNINDFSeDtYUqDKdNUR9Jku04dz0INUZGS5CExgmV+xlXD/7DMOJPbfBmCiX+clPZQhQAhvKrspQw5hkNZ8hSm8uw5E1Lxiak7YyVEetZ6iNXc/QkLCJOAP9NboYfPSrGHzU2pj99RvVbGRz9PzkZnAkaexmtmDqYTFgaGbSYqhjMGRoJcIwxWkM//7/YjBn6GZwFpwo8vDOi4PPn736/OrFm0evX719+P7dh48vnryd+u7NR4a3rz8wE2VgkuVCpmC1GRxO/BO47lx7nPvk8fO2B/eeND2897Tx2eNX3Q9uPw999vg1w9OHrxiJMtBPYRqnr/w0Jg/xKQwP7z5nePf+NcOLFy8YXr58wfDx40eGN6/eM3z+9IXx44dPRHmZxV9xGhuI7S09heH+rWdML1++ZH729Dnz82cvmN+/+8D88tlbpg/vPjG8e/OBaANZkV1MKgAACTfL/Tci97MAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of information icon taking separate focus in a text input",title:"example of information icon taking separate focus in a text input",src:"/static/a76e47f2f4a002b7e70efd6092f4e26b/3cbba/form-accessibility-1.png",srcSet:["/static/a76e47f2f4a002b7e70efd6092f4e26b/7fc1e/form-accessibility-1.png 288w","/static/a76e47f2f4a002b7e70efd6092f4e26b/a5df1/form-accessibility-1.png 576w","/static/a76e47f2f4a002b7e70efd6092f4e26b/3cbba/form-accessibility-1.png 1152w","/static/a76e47f2f4a002b7e70efd6092f4e26b/92c65/form-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"The toggletip pattern is used to make form help text keyboard accessible."))),(0,n.kt)("h3",null,"Error handling"),(0,n.kt)("p",null,"Carbon incorporates accessible inline error and warning messages into many\ncomponents, such as text inputs. Error states are also conveyed programmatically\nto assistive technologies."),(0,n.kt)("h2",null,"Design recommendations"),(0,n.kt)("p",null,"Design annotations and considerations are needed for the following situations."),(0,n.kt)("h3",null,"Identify requirements at the start of the form"),(0,n.kt)("p",null,"Traditionally, a legend at the start of a form identifies the symbol (often an\nasterisk) used for required fields, and the symbol is repeated as part of the\nlabel for each appropriate field. This is still considered the most accessible\nimplementation. However, as discussed in\n",(0,n.kt)("a",{parentName:"p",href:"/components/form/usage/#optional-versus-required-fields"},"Optional versus required fields"),",\nCarbon allows for either the required or optional fields to be the inputs\nidentified. Especially where only optional fields are indicated, an instruction\nshould precede a form, providing the context for whether required or optional\nfields are indicated. The traditional phrasing is “All fields are required\nunless marked as optional” (or the reverse). See the Equal Access Toolkit topic\n",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/toolkit/design/visual/#required-fields"},"Required fields"),"\nfor more information."),(0,n.kt)("p",null,"By convention, simple username/password login forms do not need such an\ninstruction (or even to be marked as required), since the context is clear to\nusers."),(0,n.kt)("h3",null,"Be familiar with the accessibility of common form components"),(0,n.kt)("p",null,"The following topics each have their own accessibility considerations, which\nimprove the overall form experience:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/checkbox/accessibility"},"Checkbox")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/date-picker/accessibility"},"Date picker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/dropdown/accessibility"},"Dropdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/file-uploader/accessibility"},"File uploader")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/loading/accessibility"},"Loading")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/modal/accessibility"},"Modal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/notification/accessibility"},"Notification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/number-input/accessibility"},"Number input")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/radio-button/accessibility"},"Radio button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/select/accessibility"},"Select")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/slider/accessibility"},"Slider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/text-input/accessibility"},"Text input")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/components/toggle-tip/accessibility"},"Toggle tip"))),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon patterns or\ncreating a custom form or input component."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A form must be wrapped in a ",(0,n.kt)("inlineCode",{parentName:"li"},"<form>")," element."),(0,n.kt)("li",{parentName:"ul"},"Required fields must be identified programmatically, either via the label or\nwith ",(0,n.kt)("inlineCode",{parentName:"li"},"aria-required"),"."),(0,n.kt)("li",{parentName:"ul"},"Helper text and other instructions should be surfaced to users via\n",(0,n.kt)("inlineCode",{parentName:"li"},"aria-describedby")," or other accessible techniques. See\n",(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/toolkit/develop/user-input/#inputs"},"Programmatically associate inputs with labels"),"."),(0,n.kt)("li",{parentName:"ul"},"See the ARIA authoring practices on\n",(0,n.kt)("a",{parentName:"li",href:"https://w3c.github.io/aria-practices/#aria_lh_form"},"forms")," and\n",(0,n.kt)("a",{parentName:"li",href:"https://w3c.github.io/aria-practices/#naming_with_labels"},"labels")," for more\nconsiderations.")))}g.isMDXComponent=!0}}]);