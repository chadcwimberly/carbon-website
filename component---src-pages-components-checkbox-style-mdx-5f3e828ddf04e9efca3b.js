"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[86627],{28399:function(t,e,a){a.d(e,{Z:function(){return x}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),o=a(80304),d=a(94656),c=a(75900),p=a.n(c);var m=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var s=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:d}=a||l,c=`${r}/edit/${d}${o}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=a(56328),k=a(51721);let b=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),o=e===l,d=new RegExp(`${l}/?(#.*)?$`),c=a.replace(d,e);return n.createElement("li",{key:t,className:p()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},e}(n.Component);var u=b,N=a(17680),A=a(75387),h=a(50041);var y=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=t=>{let{pageContext:e,children:a,location:l,Title:c}=t;const{frontmatter:p={},relativePagePath:k,titleType:b}=e,{tabs:h,title:x,theme:w,description:C,keywords:E,date:f}=p,{interiorTheme:v}=(0,A.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),B=S?l.pathname.replace(S,""):l.pathname,z=h?B.split("/").filter(Boolean).slice(-1)[0]||r()(h[0],{lower:!0}):"",R=w||v;return n.createElement(d.Z,{tabs:h,homepage:!1,theme:R,pageTitle:x,pageDescription:C,pageKeywords:E,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):x,label:"label",tabs:h,theme:R}),h&&n.createElement(u,{title:x,slug:B,tabs:h,currentTab:z}),n.createElement(N.Z,{padded:!0},a,n.createElement(s,{relativePagePath:k}),n.createElement(y,{date:f})),n.createElement(g.Z,{pageContext:e,location:l,slug:B,tabs:h,currentTab:z}),n.createElement(o.Z,null))}},50455:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return k}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],o={},d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},c=d("Row"),p=d("Column"),m=d("Caption"),s={_frontmatter:o},g=r.Z;function k(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(g,Object.assign({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:unchecked"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:checked"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"checkmark"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-inverse"))))),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(p,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVQ4y7WUP2vCQBjG30TrtYuxWl4jGLMJHbroZ/BrOCpBEHHwsygugqvg4ldwFoSD/MPznB10EZ1SLhCw9tJoSw9+HLx39/DmeXIHIBmImMhD4z8FU4iYRcQ8Ir4hYjpRcLvdfmM8Hodr1Wo1VS6XXyqVSsYwDFKr1RRRn8/n0nMCadHzPDidTjCZTKDdbkOn04FWqwWz2QyOxyP4vv+jILmFMRbOnucRSilxXZc4jkM2m82XdRlCUL2Fc646jqMGQSBQKKVhjTGmyvZfI237cDjAdDqNbFa63S4sl0vY7XbAGIv93FgP6/U6aJoGxWJRpPuh63pe1/WsUG82m48LXi4XGA6HUYdpAFBFp4vFAvb7faKg1EPbtkP/rvF9/y4PpSlzzolt22S1Wj2LWSBSjxKOS1raNqUUgiAI/79GowG9Xg8sy4J+vw+u6wLnPDYcaXEwGITmGYaRKZVKOdM0M+K2mKb5NBqN4Hw+w3q9lgsm3OVXRHxHxBwiFhBR+9UDcc9r8xdB5RHBTx/tARh+LDevAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox states",title:"Checkbox states",src:"/static/5225efd4eeca898442ca697573c09e52/3cbba/checkbox-style-1.png",srcSet:["/static/5225efd4eeca898442ca697573c09e52/7fc1e/checkbox-style-1.png 288w","/static/5225efd4eeca898442ca697573c09e52/a5df1/checkbox-style-1.png 576w","/static/5225efd4eeca898442ca697573c09e52/3cbba/checkbox-style-1.png 1152w","/static/5225efd4eeca898442ca697573c09e52/92c65/checkbox-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read-only"),(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"inner fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))))),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(p,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVQoz02TS2gTURSGz525mWYm6SQQyWtM1EYQ7UJBkK5iFbHYbly4CLp1WdwogisXIggli2IXJQTswkAoWUjppiU09IF9oIHEJiamM/dOYjRZtKWFGkJqRu6Ylg78DNz/nvOf+Q4D0p1ZYHJeewJeB5jP0Z8WaITio/06Grz/Cs4pV8HRL8KnuXmo1yjK5r5b7j39APbLD8ErAri9CrjdblMAtz6C/W7S4Rp87FBcvBS4cMn67u1raNQJjqWynDL07OL5geuyz+OysbDPWZUzDIMTb77pdw8+CioyWL3+QH8wGMTmNA9ebgHczogQei4AAMeU/boFv38S/v1sEdmGog6wXWGXecMwILNFEGsIA3HBduOFDAAIAMxmyWQSIFdQLYZxzFJZATaMLlZVFRNCxVqVCqxJz+N1Xcc6pUL5hyqypoZhoPZfVmPgvb09sw4av3SU/lziSH2fJZtqNBpACBE0QvjE3BfUOf5/3ul0kKZpvK5TYX7pG5pfyqNeoClCCIJcLgerq6uWSCSCe+OzZKjX63ypVOIymYwrHA7jHg6zcHd3l1teXhZWVlY8CwsLUjqdti8uLvYVi0UAXddRuVzmEokENzk5yU1PT3Obm5tAKRUIIfz6+jqOxWKml0qlUK1W45mXz+e5jY0NYW1tzcLE7lWrVcTGxIzNCSemg4MDXtM0kX12j9Wpp6qqQCkVKaX8Gc98U0ox7OzsMKFgMMizTZ5ss9ls8oeHh2h8fJw7OWdImFepVPipqSkYGRnBZzyesYdCoQCqqlqGh4ftsixLgUDAzni1Wi3cbrdRNBoVQ6GQ3ePx2J1OZx9bTrFYxN1ul4tEIrLNZpMURbH7fD4pHo8DMJCqqkI4HAZJksBiscDExASbGlcqFTQzMwN+vx9kWYaxsTHY3t5GDFGz2YTR0VGwWq3g9XpP/5R/AV2KUptWLpkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Checkbox interactive states",title:"Checkbox interactive states",src:"/static/3db92258b7c64005e6996c25a7ca2498/3cbba/checkbox-style-2.png",srcSet:["/static/3db92258b7c64005e6996c25a7ca2498/7fc1e/checkbox-style-2.png 288w","/static/3db92258b7c64005e6996c25a7ca2498/a5df1/checkbox-style-2.png 576w","/static/3db92258b7c64005e6996c25a7ca2498/3cbba/checkbox-style-2.png 1152w","/static/3db92258b7c64005e6996c25a7ca2498/0b124/checkbox-style-2.png 1728w","/static/3db92258b7c64005e6996c25a7ca2498/0c3f5/checkbox-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Checkbox labels and group labels should be sentence case, with only the first\nword in a phrase and any proper nouns capitalized. Checkbox labels and group\nlabels should not exceed three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,l.kt)("td",{parentName:"tr",align:null},"height & width"),(0,l.kt)("td",{parentName:"tr",align:null},"16px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},"2px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border inset"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox label"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Checkbox item"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-02"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABCUlEQVQoz2NgwAJUVFQY+BkYGLgYGBjs09MZ1AwMGESFhBjExMUZREVFGcTExBiIBhfVUxmUlZUZBBkYGHgYGBhskhIZVPR0KTPQwtmeQdVch8HDwITRMzJSxN7ZWVhCVJRNVEyMmZ+fn3QDraXUGEKgfOemBl1lS0sZIR4eUXFJSR6QYSQb+F+niuGWYSHbAT4v3pSqVit5SwtZYW4ecXFJST7yDAz+z/DLezLjFAZxZveSCk0ZaytJYT4+YXEJCS4xcsLwm3Ypw3+GVAbvgFQGhpo8VobGWl6GI/sYuQN8GdjioslwoW49w3/pEoZc0zAGhgojBoaFcxikGBgYRNTUGAQMDfAaCACjyjiJV3z3bAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a checkbox group",title:"Structure and spacing measurements for a checkbox group",src:"/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png",srcSet:["/static/5ee7077ad2ce922821b35ba3e0ef71ef/7fc1e/checkbox-style-3.png 288w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/a5df1/checkbox-style-3.png 576w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/3cbba/checkbox-style-3.png 1152w","/static/5ee7077ad2ce922821b35ba3e0ef71ef/392b1/checkbox-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for a checkbox group | px / rem"),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQoz3WS3UvTcRjFP9NlkTXLRM3p5k/T4UvDTdlKkfky23RTbLMI51oKLb2Yb9OGyUx8SSdEbqnhWKkoXWRdJGREEFho0FV20VX9A0FX/QHf0ATrogPn6oEP5+EcnpXd4kVpJw8q25k2edgq9vE1rx+hGOOzppeQycOMycN8RQdTVR7WDF6+5fjZLuxmV9PLrqaPf7R1vo2dYjfR3CZWzjkRuBAI5MGF/Xu0zkvE4mXJ3EXU7uOH5zGIXzz/sCMzoaApx4Ar00hEcvBQcsJ2QRufCq4TSzbL1xUWOeIdiB4Yvo9QwrKli7n6TlYtPvlKsz9B9L+OR7xk8/1HqomnMcdA69/AqO0NUdvbo7P2CWPI7tUv2vxFi9Y+NWKD7/lXGTd0M13mJ3xxTDOpd+unkqul9Zsh7ebyRqmX9FOB/Ia0oNqasprbKlvLdUHkSoBw84A8NrtsjczGXPPhmHvm3lwdvna5EIILLe3cSDHSk1GdUJ+pO6mB44PDk5lDS09LpLOFpy+r9EnXsoyKsOSQ7aVk9IiO4DE9AYgPQdwIxL0CWZLVQXpqEWZtLR1p5fQqa2hU6sgjkUd3pv8UIERcrdZEW3oZYcmx/zZ3E8sJKioY5AQjwMBeEchJqWlElVpIg/4SnVmVDKjMONUGtJzhSeAA+PMLVboq3Gn6Q+BEto3xbBtBtZXbajN+VS2j6gbsyhJqMopZkFoOJxEc+r8P9BujpqcVj4K1NAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for vertical and horizontal checkbox groupings",title:"Structure and spacing measurements for vertical and horizontal checkbox groupings",src:"/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png",srcSet:["/static/282c552b238bb87062c7bda46de63357/7fc1e/checkbox-style-4.png 288w","/static/282c552b238bb87062c7bda46de63357/a5df1/checkbox-style-4.png 576w","/static/282c552b238bb87062c7bda46de63357/3cbba/checkbox-style-4.png 1152w","/static/282c552b238bb87062c7bda46de63357/392b1/checkbox-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for vertical and horizontal checkbox groupings | px / rem"))}k.isMDXComponent=!0}}]);