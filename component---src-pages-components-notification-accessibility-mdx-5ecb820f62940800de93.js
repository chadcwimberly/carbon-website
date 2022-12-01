"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[91972],{28399:function(e,t,i){i.d(t,{Z:function(){return w}});var r=i(67294),n=i(88650),s=i.n(n),a=i(1597),o=i(80304),l=i(94656),c=i(75900),u=i.n(c);var d=e=>{let{title:t,theme:i,tabs:n=[]}=e;return r.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===i})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:i}=e;const{site:{siteMetadata:{repository:n}}}=(0,a.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:l}=i||n,c=`${s}/edit/${l}${o}/src/pages${t}`;return s?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=i(56328),h=i(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:i}=this.props,n=i.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===n,l=new RegExp(`${n}/?(#.*)?$`),c=i.replace(l,t);return r.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},r.createElement(a.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(r.Component);var y=k,L=i(17680),S=i(75387),b=i(50041);var g=e=>{let{date:t}=e;const i=new Date(t);return t?r.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(b.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",i.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:i,location:n,Title:c}=e;const{frontmatter:u={},relativePagePath:h,titleType:k}=t,{tabs:b,title:w,theme:T,description:f,keywords:C,date:v}=u,{interiorTheme:x}=(0,S.Z)(),{site:{pathPrefix:N}}=(0,a.useStaticQuery)("2456312558"),A=N?n.pathname.replace(N,""):n.pathname,E=b?A.split("/").filter(Boolean).slice(-1)[0]||s()(b[0],{lower:!0}):"",R=T||x;return r.createElement(l.Z,{tabs:b,homepage:!1,theme:R,pageTitle:w,pageDescription:f,pageKeywords:C,titleType:k},r.createElement(d,{title:c?r.createElement(c,null):w,label:"label",tabs:b,theme:R}),b&&r.createElement(y,{title:w,slug:A,tabs:b,currentTab:E}),r.createElement(L.Z,{padded:!0},i,r.createElement(m,{relativePagePath:h}),r.createElement(g,{date:v})),r.createElement(p.Z,{pageContext:t,location:n,slug:A,tabs:b,currentTab:E}),r.createElement(o.Z,null))}},87063:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return l},default:function(){return y}});var r=i(45987),n=(i(67294),i(64983)),s=i(28399),a=i(15877);const o=["components"],l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("AnchorLinks"),d=c("AnchorLink"),m=c("Row"),p=c("Column"),h={_frontmatter:l},k=s.Z;function y(e){let{components:t}=e,i=(0,r.Z)(e,o);return(0,n.kt)(k,Object.assign({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"AnchorLinks"},(0,n.kt)(d,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"Notification Carbon components are messages that communicate information to a\nuser. The WAI-ARIA ",(0,n.kt)("inlineCode",{parentName:"p"},'role="status"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'role="log"')," are equivalent to\n",(0,n.kt)("inlineCode",{parentName:"p"},'aria-live="polite"'),". It is used to display a message to the user in a way that\ndoes not interrupt the user’s current task and queues the notification until\nwhatever task the user is currently working on is complete. If the notification\ncontains an urgent message, a ",(0,n.kt)("inlineCode",{parentName:"p"},'role="alert"')," can be used, it is equivalent to\n",(0,n.kt)("inlineCode",{parentName:"p"},'aria-live="assertive"'),". It is used to display a message to the user that\ninterrupts the user’s current task. These are considerably more disruptive to\nusers than the",(0,n.kt)("inlineCode",{parentName:"p"},'role="status"'),"or",(0,n.kt)("inlineCode",{parentName:"p"},'role="log"'),". In either case, these notifications\nattract the user’s attention without receiving focus to communicate the message."),(0,n.kt)("p",null,"Details pertaining to these roles include specifics around containing\ninteractive elements, focus behavior, close behavior, and semantic contents. The\n",(0,n.kt)("inlineCode",{parentName:"p"},"role")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"log"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"alert")," can not contain interactive elements,\nshould not be given focus, and can optionally be closed by pressing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),"\nkey. The close button is given ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," so it is ignored by\nassistive technologies. Generally, plain text is preferred to be used within\nthese notifications. When read by screenreaders, any semantic meaning\nsurrounding the contents is not reflected to the user. For instace - Bold or\nitalic emphasis, and/or semantic elements such as ",(0,n.kt)("inlineCode",{parentName:"p"},"<li>")," etc. are not read to\nthe user. If semantics are included, it should be non-essential to the\nunderstanding or meaning of the contents."),(0,n.kt)("p",null,"Notification components are allowed interactive children (actions) though, and\nwhen an interactive element is provided, a ",(0,n.kt)("inlineCode",{parentName:"p"},'role="alertdialog"')," is used. These\nnotifications should immediately be given focus so the user can navigate through\nthe interactive elements. The close button is given an ARIA label of\n",(0,n.kt)("inlineCode",{parentName:"p"},'aria-label="close"'),", and the icon has ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," so it is ignored by\nassistive technologies. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," key is used to move focus to the action and\nclose button within the notification and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," key or ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," key activate\nthe appropriate button within the notification. It can also be optionally closed\nvia pressing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape")," key."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Avoid using a toast notification for critical alerts or long messages because\nthey are timed and will disappear automatically making it difficult for\npeople with various disabilities to get the entire message. An alert that\ndisappears too quickly can lead to failure of the optional\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html"},"WCAG 2.0 success criterion 2.2.3 (AAA)"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide a means to turn off nonessential alerts to enhance usability for\npeople with visual and cognitive disabilities. Additional information is\navailable in\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html"},"WCAG 2.0 success criterion 2.2.4 (AAA)"),".\nNote: Providing this functionality is optional.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure the use of color and hidden icons are not used as the only means of\nconveying the importance of the notification."))),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("h4",null,"Helpful resources for creating customized accessible implementations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#alert"},"W3C W3C WAI-ARIA Authoring Practices Alert Design Pattern"),"\ncovers the usage of ARIA names, state and roles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/forms/notifications/"},"W3C W3C Web Accessibility Tutorial - User Notifications"),"\nprovides a tutorial on notification accessibility."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_1"},"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},"3.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"},"3.3.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_3"},"3.3.3 Error Suggestion"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+notification%22+"},"Carbon Component GitHub repository"),"."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP Test"),(0,n.kt)("br",null),"- Violations")))))),(0,n.kt)("h3",null,"macOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press Control-Option-Shift keys to enter the Web content."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Tab key. VO announces the notification text and the close button."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))),(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.0.2",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press Control-Option-Shift keys to enter the Web content."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Tab key. VO announces the notification text and the close button."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Firefox version 68",(0,n.kt)("br",null),"- JAWS version 18",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press H, JAWS announce the notification title."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press Alt-Down Arrow, JAWS announces each line of the notification text."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Tab, JAWS announces the close button."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Press the Space key or Enter key to close the notification.")))))))),(0,n.kt)("h3",null,"iOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(a.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(a.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(a.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(a.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(a.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(a.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(a.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Swipe right to the notification and to read the notification text."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Swipe right to the X icon. VO announces the close button."),(0,n.kt)(a.ListItem,{mdxType:"ListItem"},"Double tap to close the notification.")))))))))}y.isMDXComponent=!0}}]);