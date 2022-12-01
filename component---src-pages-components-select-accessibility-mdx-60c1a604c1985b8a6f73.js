"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[45195],{28399:function(e,t,r){r.d(t,{Z:function(){return T}});var n=r(67294),i=r(88650),a=r.n(i),s=r(1597),o=r(80304),l=r(94656),u=r(75900),d=r.n(u);var c=e=>{let{title:t,theme:r,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:o,branch:l}=r||i,u=`${a}/edit/${l}${o}/src/pages${t}`;return a?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,i=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),o=t===i,l=new RegExp(`${i}/?(#.*)?$`),u=r.replace(l,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var y=k,L=r(17680),b=r(75387),w=r(50041);var S=e=>{let{date:t}=e;const r=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:r,location:i,Title:u}=e;const{frontmatter:d={},relativePagePath:h,titleType:k}=t,{tabs:w,title:T,theme:x,description:g,keywords:C,date:f}=d,{interiorTheme:v}=(0,b.Z)(),{site:{pathPrefix:A}}=(0,s.useStaticQuery)("2456312558"),N=A?i.pathname.replace(A,""):i.pathname,R=w?N.split("/").filter(Boolean).slice(-1)[0]||a()(w[0],{lower:!0}):"",E=x||v;return n.createElement(l.Z,{tabs:w,homepage:!1,theme:E,pageTitle:T,pageDescription:g,pageKeywords:C,titleType:k},n.createElement(c,{title:u?n.createElement(u,null):T,label:"label",tabs:w,theme:E}),w&&n.createElement(y,{title:T,slug:N,tabs:w,currentTab:R}),n.createElement(L.Z,{padded:!0},r,n.createElement(m,{relativePagePath:h}),n.createElement(S,{date:f})),n.createElement(p.Z,{pageContext:t,location:i,slug:N,tabs:w,currentTab:R}),n.createElement(o.Z,null))}},12276:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return l},default:function(){return y}});var n=r(45987),i=(r(67294),r(64983)),a=r(28399),s=r(15877);const o=["components"],l={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=u("AnchorLinks"),c=u("AnchorLink"),m=u("Row"),p=u("Column"),h={_frontmatter:l},k=a.Z;function y(e){let{components:t}=e,r=(0,n.Z)(e,o);return(0,i.kt)(k,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Resources"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,i.kt)("h2",null,"How it works"),(0,i.kt)("p",null,"The select Carbon component is a form input field, where a user is submitting\ndata and chooses a single option from a list of options. The label element is\nused to explicitly associate a form control with a label. A label is attached to\na specific form control through the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," attribute. The value of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"for")," attribute must be the same as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute of the form\ncontrol. Also note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute may have the same value as the name\nattribute, but both must be provided, and the id must be unique in the Web page."),(0,i.kt)("h2",null,"Accessibility considerations"),(0,i.kt)("p",null,"This component has been validated to meet the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,i.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Avoid very long option names to facilitate understandability and\nperceivability."),(0,i.kt)("li",{parentName:"ol"},"Do not use the same word or phrase at the beginning of a set of options."),(0,i.kt)("li",{parentName:"ol"},"Use a unique id for each option."),(0,i.kt)("li",{parentName:"ol"},"If the select field is required include the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"},"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),(0,i.kt)("h2",null,"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_2_2"},"3.2.2 On Input"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic"},"3.2.2"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_1"},"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/error-identification"},"3.3.1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels or Instructions"),"\n(WCAG Success Criteria\n",(0,i.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-cues"},"3.3.2"),")")))),(0,i.kt)("h2",null,"Accessibility testing"),(0,i.kt)("p",null,"Accessibility issues are tracked in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+select%22+"},"Carbon Component GitHub repository"),"."),(0,i.kt)("h3",null,"Automated test"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,i.kt)("br",null),"- Chrome version 77.0.3865.90",(0,i.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"DAP test:"),(0,i.kt)("br",null),"- No violations")))))),(0,i.kt)("h3",null,"macOS screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,i.kt)("br",null),"- Chrome version 77.0.3865.90",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"VoiceOver(VO) Test:"),(0,i.kt)(s.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Control-Option-Right arrow to the "Select" text. VO announces the label and that it is a text element.'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Control-Option-Right arrow to the "Optional helper text". VO announces the label and that it is a text element.'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Control-Option-Right arrow to the select box. VO announces the label, "Choose an Option" and that it is a select pop-up button.'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Press the Space key. VO announces that you are on a dimmed menu item."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Navigate up and down the menu using the arrow keys. VO announces each menu item."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Press the Space key to make a selection."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Tab away from the select box and then back. VO announces the selected option."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Press Space to open the menu and then press Esc to close the menu.")))))))),(0,i.kt)("h3",null,"Windows screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(s.StructuredListHead,{mdxType:"StructuredListHead"},(0,i.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,i.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,i.kt)("br",null),"- JAWS 18",(0,i.kt)("br",null),"- Firefox version 68",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"JAWS test:"),(0,i.kt)(s.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Press Alt-Down arrow . JAWS announces the text, "Select, optional helper text".'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Tab to the select box. JAWS announces the main region, the select combo box and and that the arrow keys should be used to make a selection."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Use the Up and Down arrow keys to navigate through the list. JAWS announces each option."),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Tab away from the select box and then back. JAWS announces the selected option.")))))))),(0,i.kt)("h3",null,"iOS screen reader tests"),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,i.kt)(s.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,i.kt)(s.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,i.kt)(s.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,i.kt)(s.StructuredListBody,{mdxType:"StructuredListBody"},(0,i.kt)(s.StructuredListRow,{mdxType:"StructuredListRow"},(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,i.kt)("br",null),"- Safari version 13.1.3",(0,i.kt)("br",null),"- Carbon React version 7.7.1"),(0,i.kt)(s.StructuredListCell,{mdxType:"StructuredListCell"},(0,i.kt)("strong",null,"VoiceOver test:"),(0,i.kt)(s.OrderedList,{mdxType:"OrderedList"},(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Swipe right, VO announces "Select main landmark".'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Swipe right, VO announces "Optional helper text".'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},'Swipe right to navigate to the select box. VO announces "Select. Choose an option pop-up button, double tap to activate the picker."'),(0,i.kt)(s.ListItem,{mdxType:"ListItem"},"Double tap to open the menu, VO does not announce anything. (Note: There is an open issue for VoiceOver on iOS.)")))))))))}y.isMDXComponent=!0}}]);