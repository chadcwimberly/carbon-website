"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[99521],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var i=a(67294),n=a(88650),o=a.n(n),s=a(1597),l=a(64905),c=a(68636),r=a(75900),d=a.n(r);var p=e=>{let{title:t,theme:a,tabs:n=[]}=e;return i.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:c}=a||n,r=`${o}/edit/${c}${l}/src/pages${t}`;return o?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},m=a(56328),b=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===n,c=new RegExp(`${n}/?(#.*)?$`),r=a.replace(c,t);return i.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},i.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(i.Component);var h=u,y=a(17680),k=a(75387),A=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?i.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(A.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:d={},relativePagePath:b,titleType:u}=t,{tabs:A,title:v,theme:C,description:E,keywords:w,date:x}=d,{interiorTheme:N}=(0,k.Z)(),{site:{pathPrefix:T}}=(0,s.useStaticQuery)("2456312558"),P=T?n.pathname.replace(T,""):n.pathname,D=A?P.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",L=C||N;return i.createElement(c.Z,{tabs:A,homepage:!1,theme:L,pageTitle:v,pageDescription:E,pageKeywords:w,titleType:u},i.createElement(p,{title:r?i.createElement(r,null):v,label:"label",tabs:A,theme:L}),A&&i.createElement(h,{title:v,slug:P,tabs:A,currentTab:D}),i.createElement(y.Z,{padded:!0},a,i.createElement(g,{relativePagePath:b}),i.createElement(f,{date:x})),i.createElement(m.Z,{pageContext:t,location:n,slug:P,tabs:A,currentTab:D}),i.createElement(l.Z,null))}},60781:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return y}});var i=a(45987),n=(a(67294),a(64983)),o=a(28399);a(68498);const s=["components"],l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},r=c("PageDescription"),d=c("AnchorLinks"),p=c("AnchorLink"),g=c("Row"),m=c("Column"),b=c("Caption"),u={_frontmatter:l},h=o.Z;function y(e){let{components:t}=e,a=(0,i.Z)(e,s);return(0,n.kt)(h,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Toggletips display and hide additional information upon the click of a UI\ntrigger element and can contain interactive elements.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon already incorporates accessibility into the toggletip component.\nDesigners only need to indicate the toggletip’s content."),(0,n.kt)("h3",null,"Keyboard interactions"),(0,n.kt)("p",null,"Toggletips use an information icon button for the trigger. These buttons are in\nthe tab order and are activated by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Space"),". The activation\ntoggles the tip open and closed, and focus remains on the trigger."),(0,n.kt)("p",null,"When the toggletip contains interactive elements, pressing",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," will move focus\nto the first component in the toggletip. When the toggletip only has\nnon-interactive text, or when the focus is on the last component in the\ntoggletip, pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," will close the toggletip and move focus to the next\ntab stop on the page. Pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Esc")," also closes an open toggletip and returns\nfocus to the trigger if the focus is inside the tooltip."),(0,n.kt)(g,{mdxType:"Row"},(0,n.kt)(m,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACZElEQVQoz3WSX0hTURzHv0dnRvkQViTRMmhDbIbNZTZ3zu7ddbve6d2faLpNsF58CSpJRYtIih4qrQw1oZ6EMK0H68kgfMuHqBcDM83Ne0coFPVQQb0oJ+51ggr94Mvh8Dvnc76/3/khaO2FocajA0iUDyLm6EfU3gc72nG2egjT7z9B13WiaZplafkLOOdoqhgyz0fsfQCqYUObyTBDOXTX3MSO9CNePogGx8DeqL1PsKOdlOGyCdAzOkktpPNejk4iop7OwSsg5rxdFCnpDZwo81vksDvHXXB1DViXdSjuuoVCdCBacv9A2HZPKEQbbLhiAudn0+T33+8WYA+8AReUkIgz4Dui+0bK6+qD8IkSHrfOrwHXSw4e7MkN7n+Qp9i6dzaDQyntREPVDXC+As5XyXD/xPZ8cOLzyoEaX+0Fyau0Cj7aEgj4W0TRd8p4eCMwN2jttdQVPYRyuBtRLKO2pMvMv37xDs+GJ3J6usYK2i51IBRSxxOJOE8mEzyZTPJ4PM5lWV7YCsxbaypHvf0mwpUdCFd0YvTRJFKpRUxNvSF3Op8WnL/WBFlWxkKhCFdVdUVV1VW/388ppR8MlsPh2AzcKCO+/VgC53+gfZ0mz0cm8s+Nl0ISlSc1NfWcMfGn2+3+5fF4VimlbyVJgiHjMvkfcDGt4fNcCrMzcyStLVguNl+HKHh2i6y62CcKVkmSrIIgFDPGipxOJ1wu1yaHZCtQ0zRjBpHJZIiuZyxGnyqPHwM7WQVGPaCMgVEKxhhodt3oalv2czYBszIHe2bmIxob40QUJOJlXkIpJYwxU+vAf6r8AbT/nTEOAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The information icon and tooltip elmements are in the tab order",title:"The information icon and tooltip elmements are in the tab order",src:"/static/e61e4cba13512e16d7f338a8ca19be76/3cbba/toggletip-accessibility-1.png",srcSet:["/static/e61e4cba13512e16d7f338a8ca19be76/7fc1e/toggletip-accessibility-1.png 288w","/static/e61e4cba13512e16d7f338a8ca19be76/a5df1/toggletip-accessibility-1.png 576w","/static/e61e4cba13512e16d7f338a8ca19be76/3cbba/toggletip-accessibility-1.png 1152w","/static/e61e4cba13512e16d7f338a8ca19be76/0b124/toggletip-accessibility-1.png 1728w","/static/e61e4cba13512e16d7f338a8ca19be76/0c3f5/toggletip-accessibility-1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(b,{mdxType:"Caption"},"The information icon button that triggers the toggletip is in the page tab order, as are interactive elements inside an open toggletip."))),(0,n.kt)(g,{mdxType:"Row"},(0,n.kt)(m,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACh0lEQVQoz2WSXUhTcRjGn+PZ8Hbd6BzdpCKlWxgqtPOxna+dnbOdbezD7WyBH9nMJEFJvM+LrsqbIE1NvSkKolHZfTfGKkxMb1qxNUXqsiCJCDnxXzKC/vDwfy6e9/fCywMcP0dqF47kNhypHZyIv4UjsYnNnTIqlQoRValUbMceTqfzP9VfLpdDf38/ZElsCARDtkTAQ6cDHTTxsizRh4eHqFarVLlcthWLRRiG0aCqqk3TNDoUCtHEi6JIW5b1F2iaJlKpFAFCCYaRlDuQkU8iEAxDFAWsrKygVCpRBwcHNjIkCAJUVYWmadB1veZFUUQdGI3GyFYIgijLsjTql/Vxn6RPBBQ5LwhilGQsy6I2Njbsw8PDZJgExyRJyguCcEVRFPLH68C5uVvU7Ox1RCKRF9msaWVN08pms1Y6nbZUVX0PgCLh9fXnjdPT10iuYJqZei6TyZDcxzpw/OokdSk/BlUNPolEYlY4bBwZhnGkKIrFcdxrt9tdAxYKTxsvjlyGqmqPjEjMMozIv7ltwurq6gJYWadYKQjWz97jBOEnw53/yjDebyzLHvE897K5ubkGfFx41hjLjcAnywv+gP6L9fFfGK/3O8uyv3meLxIguS+i3ZMIe4hmFM0zkdLPTiVZr6+NZZlWjuOdBPbpw2fqzast+5B6A3rnjBx0T6Q0z1SSY/ytDONtYxjWVa/OqO8BBvvWMNi72p31LPekOxd6AdjJ7QSJx9LSErbf7VK7WyX7pPEQmc7F7nj7fE+i/U4fABqA7fb8TTQ1NaGlpQXIe+9j4NxaTeaZVaRPL9cWWT8sqEGFIj3c29+j9vartdok2xYRP7WIROvdepcHhi7UgC6XC38AQ7wGF+LismwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Enter or Space open a toggletip, Esc dismisses",title:"Enter or Space open a toggletip, Esc dismisses",src:"/static/070e0bcd9454217d35b65ca151b5b90a/3cbba/toggletip-accessibility-2.png",srcSet:["/static/070e0bcd9454217d35b65ca151b5b90a/7fc1e/toggletip-accessibility-2.png 288w","/static/070e0bcd9454217d35b65ca151b5b90a/a5df1/toggletip-accessibility-2.png 576w","/static/070e0bcd9454217d35b65ca151b5b90a/3cbba/toggletip-accessibility-2.png 1152w","/static/070e0bcd9454217d35b65ca151b5b90a/0b124/toggletip-accessibility-2.png 1728w","/static/070e0bcd9454217d35b65ca151b5b90a/0c3f5/toggletip-accessibility-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(b,{mdxType:"Caption"},"Toggletips appear when the information icon button is activated and disappear by activating the icon again, pressing Esc, or tabbing away from the toggletip."))),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The icon button has ",(0,n.kt)("inlineCode",{parentName:"li"},'aria-label="Show information"'),"."),(0,n.kt)("li",{parentName:"ul"},"The button uses ",(0,n.kt)("inlineCode",{parentName:"li"},"aria-expanded")," to set toggletip visibility and\n",(0,n.kt)("inlineCode",{parentName:"li"},"aria-controls")," to handle navigation to the content.")))}y.isMDXComponent=!0}}]);