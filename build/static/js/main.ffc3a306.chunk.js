(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{1:function(e,a,t){e.exports={page:"home_page__KlNfK",home:"home_home__7JP_9",leftClouds:"home_leftClouds__3K1gC",rightClouds:"home_rightClouds__3cfJi",container:"home_container__2lV9x",tabs:"home_tabs__zcJ3r",hero:"home_hero__Y4c_h",heroContent:"home_heroContent__YNQyY",mountains:"home_mountains__1BwsC",heroText:"home_heroText__2oxI0",visitorCount:"home_visitorCount__1ovQD",infoText:"home_infoText__11Jo0",active:"home_active__3-rMF",numberInput:"home_numberInput__mWFEE",profanityContainer:"home_profanityContainer__Ltvr6",profanityToggle:"home_profanityToggle__vBe6r",button:"home_button__11AC6",generateTextButton:"home_generateTextButton__2sJAJ",outputIpsum:"home_outputIpsum__1CJug"}},12:function(e,a,t){e.exports={container:"TabNav_container__1lleq",navTabs:"TabNav_navTabs__2GF_E",navItem:"TabNav_navItem__3m5gG",active:"TabNav_active__3Y4Jn",navLink:"TabNav_navLink__3F016"}},15:function(e,a,t){e.exports={navContent:"nav_navContent__2mUff",navLink:"nav_navLink__29L5G"}},2:function(e,a,t){e.exports={documentation:"Documentation_documentation__3uSxh",APIrequestExample:"Documentation_APIrequestExample__1KR8a",apiDescription:"Documentation_apiDescription__g9HnS",prettyPrint:"Documentation_prettyPrint__21ULe",heading:"Documentation_heading__poRTd",info:"Documentation_info__1_dHX"}},24:function(e,a,t){e.exports=t(38)},29:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),o=t.n(c),l=(t(29),t(15)),s=t.n(l),m=t(8),i=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:s.a.navContent},r.a.createElement(m.b,{className:s.a.navLink,to:"/"},"Home"),r.a.createElement(m.b,{className:s.a.navLink,to:"/documentation"},"Documentation"),r.a.createElement("a",{className:s.a.navLink,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/strangeforloop/Twin-Peaks-Lorem-Ipsum"},"Github")))},u=t(9),p=function(){return r.a.createElement("div",null,"Should redirect")},h=t(6),f=t(2),d=t.n(f),E=t(12),g=t.n(E);function v(e){return r.a.createElement("div",{className:g.a.container},r.a.createElement("ul",{className:g.a.navTabs},e.tabs.map((function(a){var t=a===e.selected?g.a.active:"";return r.a.createElement("li",{className:"".concat(g.a.navItem," ").concat(t),key:a},r.a.createElement("a",{href:"#",className:" ".concat(g.a.navLink," ").concat(t),onClick:function(){return e.setSelected(a)}},a))}))),e.children)}function _(e){return e.isSelected?r.a.createElement("div",null,e.children):null}var b=function(){var e=Object(n.useState)("Default"),a=Object(h.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)("Default"),l=Object(h.a)(o,2),s=l[0],m=l[1];return r.a.createElement("div",{className:d.a.documentation},r.a.createElement("h3",null,"How to Use the API"),r.a.createElement("div",{className:d.a.APIrequestExample},r.a.createElement("p",{className:d.a.heading},"API - Get Lorem Ipsum By Paragraphs"),r.a.createElement(v,{tabs:["Default","Specific Paragraph Count","Profanity Toggle"],selected:t,setSelected:c},r.a.createElement(_,{isSelected:"Default"===t},r.a.createElement("div",{className:d.a.info},r.a.createElement("h5",null,"Lorem Ipsum Paragraphs"),r.a.createElement("p",{className:d.a.apiDescription},"Get paragraphs of lorem ipsum."),r.a.createElement("p",{className:d.a.prettyPrint},"GET https://twinpeaksloremipsum.com/api/paragraphs"))),r.a.createElement(_,{isSelected:"Specific Paragraph Count"===t},r.a.createElement("div",{className:d.a.info},r.a.createElement("h5",null,"Paragraph Count"),r.a.createElement("p",{className:d.a.apiDescription},"Get a Specific Number of Lorem Ipsum Paragraphs"),r.a.createElement("p",{className:d.a.prettyPrint},"GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs"))),r.a.createElement(_,{isSelected:"Profanity Toggle"===t},r.a.createElement("div",{className:d.a.info},r.a.createElement("h5",null,"Profanity Toggle for Lorem Ipsum Paragraphs"),r.a.createElement("p",{className:d.a.apiDescription},"Toggle the profanity on or off."),r.a.createElement("p",{className:d.a.prettyPrint},"GET https://twinpeaksloremipsum.com/api/paragraphs/:numberOfParagraphs/?profanity=true"))))),r.a.createElement("div",{className:d.a.APIrequestExample},r.a.createElement("p",{className:d.a.heading},"API - Get Lorem Ipsum By Words"),r.a.createElement(v,{tabs:["Default","Specific Word Count"],selected:s,setSelected:m},r.a.createElement(_,{isSelected:"Default"===s},r.a.createElement("div",{className:d.a.info},r.a.createElement("h5",null,"Lorem Ipsum Paragraphs"),r.a.createElement("p",{className:d.a.apiDescription},"Get paragraphs of lorem ipsum."),r.a.createElement("p",{className:d.a.prettyPrint},"GET https://twinpeaksloremipsum.com/api/words"))),r.a.createElement(_,{isSelected:"Specific Word Count"===s},r.a.createElement("div",null,r.a.createElement("h5",null,"Paragraph Count"),r.a.createElement("p",{className:d.a.apiDescription},"Get a Specific Number of Lorem Ipsum Paragraphs"),r.a.createElement("p",{className:d.a.prettyPrint},"GET https://twinpeaksloremipsum.com/api/words/:numberOfWords"))))))},N=function(){return r.a.createElement("div",null,"About the thingy")},y=t(10),T=t.n(y),w=t(14),x=t(1),C=t.n(x),P=function(){var e=Object(n.useState)(3),a=Object(h.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)("paragraphs"),l=Object(h.a)(o,2),s=l[0],m=l[1],i=Object(n.useState)(!1),u=Object(h.a)(i,2),p=u[0],f=u[1],d=Object(n.useState)(""),E=Object(h.a)(d,2),g=E[0],v=E[1],_=Object(n.useRef)(null),b=function(e){"paragraphs"===s?N(e):y(e)},N=function(e){for(var a="",t=0;t<e.length;t++)a+=e[t]+"\n\n";console.log(a),v(a)},y=function(e){for(var a="",t=0;t<e.length;t++)a+=e[t]+" ";console.log(a),v(a)},x=function(e){console.log(e.target.value),m(e.target.value)},P=function(){var e=Object(w.a)(T.a.mark((function e(a){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("http://localhost:5000/api/".concat(s,"/").concat(t,"/?profanity=").concat(p));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log(r),b(r);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:C.a.page},r.a.createElement("div",{className:C.a.home},r.a.createElement("div",{className:C.a.hero},r.a.createElement("img",{src:"/assets/SVG/clouds_left.svg",alt:"clouds",className:C.a.leftClouds}),r.a.createElement("img",{src:"/assets/SVG/clouds_right.svg",alt:"clouds",className:C.a.rightClouds}),r.a.createElement("div",{className:C.a.heroContent},r.a.createElement("img",{src:"/assets/SVG/mountains.svg",alt:"twin peaks mountains",className:C.a.mountains}),r.a.createElement("div",{className:C.a.heroText},r.a.createElement("h1",null,"Twin Peaks",r.a.createElement("span",{style:{display:"block"}},"Lorem Ipsum")),r.a.createElement("p",{className:C.a.visitorCount},"Population: 51,201"),r.a.createElement("p",{className:C.a.infoText},"The text is not what it seems. Choose either paragraphs containing dialog from Twin Peaks or words associated with Twin Peaks.")))),r.a.createElement("form",{onSubmit:P},r.a.createElement("div",{className:C.a.tabs},r.a.createElement("input",{type:"radio",name:"lorem-type",onChange:x,id:"paragraphs",value:"paragraphs",checked:"paragraphs"===s}),r.a.createElement("label",{"data-tab-target":"#paragraphs-controls",for:"paragraphs",className:C.a.button},"Paragraphs"),r.a.createElement("input",{type:"radio",name:"lorem-type",onChange:x,id:"words",value:"words",checked:"words"===s}),r.a.createElement("label",{"data-tab-target":"#words-controls",for:"words",className:C.a.button},"Words")),r.a.createElement("div",{className:"tabs-content"},r.a.createElement("div",{id:"paragraphs-controls","data-tab-content":!0,className:"".concat(C.a.paragraphControls," ").concat(C.a.active)},r.a.createElement("div",{className:C.a.test},r.a.createElement("input",{type:"number",id:"number-ipsum",className:C.a.numberInput,onChange:function(e){c(e.target.value)},value:t}),"paragraphs"===s?r.a.createElement("div",{className:C.a.profanityContainer},r.a.createElement("input",{type:"checkbox",id:"remove-profanity",className:C.a.profanityToggle,name:"profanity-toggle",onChange:function(e){f(e.target.checked)}}),r.a.createElement("label",{for:"profanity-toggle"},"Remove Profanity")):r.a.createElement("div",{className:C.a.profanityContainer}))),r.a.createElement("div",{id:"words-controls","data-tab-content":!0,className:"words-controls"},r.a.createElement("input",{type:"number",id:"number-ipsum",className:C.a.numberInput,placeholder:"paragraphs",value:t})),r.a.createElement("input",{type:"submit",className:"".concat(C.a.generateTextButton," ").concat(C.a.button),id:"generateIpsum",value:"Generate Text"})))),r.a.createElement("section",{className:"".concat(C.a.outputIpsum," ").concat(C.a.container),id:"output-ipsum"},r.a.createElement("button",{onClick:function(e){console.log({inputAreaRef:_}),_.current.select(),document.execCommand("copy")}},"Copy"),r.a.createElement("textarea",{ref:_,placeholder:"Select Paragraphs or Words and how many to generate. Then click the Generate Text button.",defaultValue:g})))},k=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center","margin-top":"10%"}},r.a.createElement("h1",null,"404"),r.a.createElement("div",null,"This page is not as it seems..."))};t(36);function S(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Every day, once a day, give yourself a present."),r.a.createElement("p",null,"Developed with \u2665 by Anna."))}t(37);var I=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("main",null,r.a.createElement(u.c,{className:"appContent"},r.a.createElement(u.a,{exact:!0,path:"/documentation"},r.a.createElement(b,null)),r.a.createElement(u.a,{path:"/github"},r.a.createElement(p,null)),r.a.createElement(u.a,{path:"/about"},r.a.createElement(N,null)),r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(u.a,{path:"*"},r.a.createElement(k,null)))),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1],o=Object(u.f)(),l=o.loremType,s=o.number;return Object(n.useEffect)((function(){var e=function(){var e=Object(w.a)(T.a.mark((function e(){var a,t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/".concat(l,"/").concat(s));case 2:return a=e.sent,console.log({response:a}),e.next=6,a.json();case 6:t=e.sent,c(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(w.a)(T.a.mark((function e(){var a,t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/".concat(l));case 2:return a=e.sent,console.log({response:a}),e.next=6,a.json();case 6:t=e.sent,c(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s?(console.log("calling makeRequest"),e()):(console.log("calling makeDefaultRequest"),a())}),[l,s]),r.a.createElement("div",null,t?r.a.createElement("div",null,"words"===l?t.map((function(e){return e+" "})):t.map((function(e){return r.a.createElement("p",null,e)}))):r.a.createElement("div",null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/api/:loremType/"},r.a.createElement(D,null)),r.a.createElement(u.a,{path:"/api/:loremType/:number"},r.a.createElement(D,null)),r.a.createElement(u.a,null,r.a.createElement(I,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ffc3a306.chunk.js.map