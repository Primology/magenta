(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(64),s=t.n(i),c=t(137),l=t(138),o=(t(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function m(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(3),d=t.n(u),f=t(8),p=t(9),h=t(10),g=t(12),v=t(11),E=t(6),b=t(13),y=function(e){return r.a.createElement("div",{className:"person-description ".concat(void 0!==e.className?e.className:"")},r.a.createElement("h2",null,"Ivan Stevkovski"),r.a.createElement("p",null,"Experienced Frontend Developer and ",r.a.createElement("br",null)," UI/UX Design Enthusiast."))},k=function(e){return r.a.createElement("button",{className:"button-hire ".concat(void 0!==e.className?e.className:"")},e.children,r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))},w=t(136),N=function(e){return r.a.createElement("nav",{className:"header-navigation"},r.a.createElement(w.a,{to:"/",className:"brand"},"Magenta."),r.a.createElement("div",null,r.a.createElement(w.a,{to:"/about",className:"link ".concat(void 0!==e.aboutActive?e.aboutActive:"")},"About"),r.a.createElement(w.a,{to:"/about",className:"link"},"Learn More"),r.a.createElement(w.a,{to:"/contact",className:"link ".concat(void 0!==e.contactActive?e.contactActive:"")},"Contact")))},j=function(e){var a=void 0!==e.socialMedia?e.socialMedia:"",t=void 0!==e.fontAwesome?e.fontAwesome:"fab";return r.a.createElement("a",{className:"button-circle ".concat(a," ").concat(void 0!==e.className?e.className:""),href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:e.onClick},r.a.createElement("i",{className:void 0!==e.material?"material-icons":t},void 0!==e.material?e.material:""))},O=function(e){return r.a.createElement("div",{className:"social-links ".concat(e.marginPosition)},r.a.createElement(j,{href:"https://www.linkedin.com/in/istevkovski/",socialMedia:"linkedin"}),r.a.createElement(j,{href:"https://www.facebook.com/istevkovski",socialMedia:"facebook"}),r.a.createElement(j,{href:"https://www.instagram.com/istevkovski/",socialMedia:"instagram"}),r.a.createElement(j,{href:"https://www.voxteneo.com/team/ivan-stevkovski/",fontAwesome:"fa",socialMedia:"info"}),e.children)},P=function(e){return r.a.createElement("div",{className:"side-display ".concat(e.className)},e.children,r.a.createElement("div",{className:"slide-buttons ".concat(e.sideButtonsState)},r.a.createElement(j,{material:"keyboard_arrow_up",className:"prev",onClick:e.handleOfferingDecrease}),r.a.createElement(j,{material:"keyboard_arrow_down",className:"next",onClick:e.handleOfferingIncrease})))},D=function(e){return r.a.createElement("div",{className:"feature-display-card ".concat(e.className)},e.children)},x=t(30),S=t.n(x);t(125),t(127),t(130);S.a.initializeApp({apiKey:"AIzaSyBawBKQIpvSr1KlM020HAPwgqGiQp9KjVA",authDomain:"magenta-3b649.firebaseapp.com",databaseURL:"https://magenta-3b649.firebaseio.com",projectId:"magenta-3b649",storageBucket:"magenta-3b649.appspot.com",messagingSenderId:"912094932859"});S.a.database(),S.a.firestore();var I=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).state={offerings:[],offeringsPagination:0},t.offeringsPaginationIncrease=t.offeringsPaginationIncrease.bind(Object(E.a)(t)),t.offeringsPaginationDecrease=t.offeringsPaginationDecrease.bind(Object(E.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"offeringsPaginationIncrease",value:function(){this.state.offeringsPagination<this.state.offerings.length-3&&this.setState({offeringsPagination:this.state.offeringsPagination+1})}},{key:"offeringsPaginationDecrease",value:function(){this.state.offeringsPagination>0&&this.setState({offeringsPagination:this.state.offeringsPagination-1})}},{key:"offeringsLoadHelper",value:function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.firestore().collection("offerings").orderBy("enum","asc").get();case 2:a=e.sent,this.setState({offerings:a.docs.map(function(e){return e.data()})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.offeringsLoadHelper();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state.offerings.map(function(a,t){return t>=e.state.offeringsPagination&&t<e.state.offeringsPagination+3?r.a.createElement(D,{key:"offering".concat(t),className:"padding-default"},r.a.createElement("div",null,r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:a.icon}}),r.a.createElement("h4",null,a.description))):null});return r.a.createElement("div",{className:"home main-view"},r.a.createElement("div",{className:"main-display"},r.a.createElement(N,null),r.a.createElement("div",{className:"wrapper-flex margin-default-bottom",style:{alignItems:"center"}},r.a.createElement(y,null)),r.a.createElement(k,null,"Hire Me!"),r.a.createElement(O,{marginPosition:"both"})),r.a.createElement(P,{handleOfferingIncrease:this.offeringsPaginationIncrease,handleOfferingDecrease:this.offeringsPaginationDecrease},void 0!==a?a:""))}}]),a}(n.Component),C=t(66),M={svgColorGray:{filter:"invert(28%) sepia(14%) saturate(0%) hue-rotate(185deg) brightness(100%) contrast(89%)"}},A=function(){return r.a.createElement("div",{className:"profile-image"},r.a.createElement("img",{src:"./assets/icons/user.svg",alt:"",style:Object(C.a)({height:"92px"},M.svgColorGray)}))},F=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).state={skills:[]},t.firebasePullSkills=t.firebasePullSkills.bind(Object(E.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"firebasePullSkills",value:function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.firestore().collection("skills").orderBy("enum","asc").get();case 2:a=e.sent,this.setState({skills:a.docs.map(function(e){return e.data()})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.firebasePullSkills()}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-information"},r.a.createElement("div",null,r.a.createElement("p",null,"Profession:"),r.a.createElement("span",{className:"color-text-orange"},"Front-end Developer")),r.a.createElement("div",null,r.a.createElement("p",null,"Experience:"),r.a.createElement("span",{className:"color-text-orange"},"1.2 years")),r.a.createElement("div",{className:"highlights"},r.a.createElement("p",null,"Hightlights:"),r.a.createElement("div",null,r.a.createElement("span",null,"Part of more than ",r.a.createElement("span",{className:"color-text-orange"},"20")," projects"),r.a.createElement("span",null,"Over ",r.a.createElement("span",{className:"color-text-orange"},"20")," certificates"),r.a.createElement("span",null,"Part of a ",r.a.createElement("span",{className:"color-text-orange"},"professional")," company"),r.a.createElement("span",null,"Full-time ",r.a.createElement("span",{className:"color-text-orange"},"Front-end Developer")))),r.a.createElement("div",{className:"skills"},r.a.createElement("p",null,"Skills:"),r.a.createElement("div",null,this.state.skills.length?this.state.skills.map(function(e,a){return r.a.createElement("span",{key:"skill-".concat(a)},e.skill)}):"")))}}]),a}(n.Component),B=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).state={projects:[],sideDisplayPagination:0},t.sideDisplayPaginationIncrease=t.sideDisplayPaginationIncrease.bind(Object(E.a)(t)),t.sideDisplayPaginationDecrease=t.sideDisplayPaginationDecrease.bind(Object(E.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"sideDisplayPaginationIncrease",value:function(){this.state.sideDisplayPagination<this.state.projects.length-3&&this.setState({sideDisplayPagination:this.state.sideDisplayPagination+1})}},{key:"sideDisplayPaginationDecrease",value:function(){this.state.sideDisplayPagination>0&&this.setState({sideDisplayPagination:this.state.sideDisplayPagination-1})}},{key:"sideDisplayCardsLoadHelper",value:function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.firestore().collection("projects").orderBy("enum","asc").get();case 2:a=e.sent,this.setState({projects:a.docs.map(function(e){return e.data()})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.sideDisplayCardsLoadHelper();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state.projects.map(function(a,t){return t>=e.state.sideDisplayPagination&&t<e.state.sideDisplayPagination+3?r.a.createElement(D,{key:"project".concat(t)},r.a.createElement("div",{className:"project-card"},r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-angrycreative fa-3x"}),r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:a.icon}})),r.a.createElement("div",null,r.a.createElement("h4",null,a.name),r.a.createElement("p",null,a.description)),r.a.createElement("a",{href:a.link,target:"blank"},a.link))):null});return r.a.createElement("div",{className:"about main-view"},r.a.createElement("div",{className:"main-display"},r.a.createElement(N,{aboutActive:"active"}),r.a.createElement("div",{className:"person-information wrapper-flex margin-default-bottom",style:{alignItems:"center"}},r.a.createElement(A,null),r.a.createElement(y,{className:"margin-default-left"})),r.a.createElement(F,null),r.a.createElement(O,{marginPosition:"both"})),r.a.createElement(P,{handleOfferingIncrease:this.sideDisplayPaginationIncrease,handleOfferingDecrease:this.sideDisplayPaginationDecrease},void 0!==a?a:""))}}]),a}(n.Component),L=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).state={senderId:"",senderFamilyName:"",senderMessage:""},t.handleOnChange=t.handleOnChange.bind(Object(E.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"handleOnChange",value:function(e){"senderId"===e.target.id?this.setState({senderId:e.target.value}):"senderFamilyName"===e.target.id?this.setState({senderFamilyName:e.target.value}):"senderMessage"===e.target.id&&this.setState({senderMessage:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"contact-form"},r.a.createElement("h2",null,"Get in touch!"),r.a.createElement("div",{className:"tiny-form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"senderId"},"Name:"),r.a.createElement("input",{id:"senderId",type:"text",value:this.state.senderId,onChange:this.handleOnChange})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"senderFamilyName"},"Surname:"),r.a.createElement("input",{id:"senderFamilyName",value:this.state.senderFamilyName,onChange:this.handleOnChange,type:"text"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"senderMessage"},"Body:"),r.a.createElement("textarea",{id:"senderMessage",value:this.state.senderMessage,onChange:this.handleOnChange}))),r.a.createElement("a",{href:"mailto:istevkovski@outlook.com?subject=MagentaMail:%20".concat(this.state.senderId,"%20").concat(this.state.senderFamilyName,"\n                    &body=").concat(encodeURIComponent(this.state.senderMessage))},"Send!"))}}]),a}(n.Component),_=function(e){return r.a.createElement("div",{className:"tiny-display-card"},e.children)},H=function(){return r.a.createElement("div",{className:"tiny-display-cards-wrapper"},r.a.createElement("div",{className:"message"},r.a.createElement("h4",null,"Stay secure, sleep easy:")),r.a.createElement("div",{className:"tiny-cards"},r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement("img",{src:"./assets/icons/chess-king.svg",alt:"eye.svg"})),r.a.createElement("div",null,r.a.createElement("h2",null,"The King in the game"))),r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement("img",{src:"./assets/icons/eye.svg",alt:"eye.svg"})),r.a.createElement("div",null,r.a.createElement("h2",null,"Sharp eye for detail"))),r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-users fa-3x"})),r.a.createElement("div",null,r.a.createElement("h2",null,"Satisfaction guaranteed"))),r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-internet-explorer fa-3x"})),r.a.createElement("div",null,r.a.createElement("h2",null,"Support down to IE11")))))},U=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).state={},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"sideDisplayCardsLoadHelper",value:function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.firestore().collection("projects").orderBy("enum","asc").get();case 2:a=e.sent,this.setState({projects:a.docs.map(function(e){return e.data()})}),console.log(a.docs.map(function(e){return e.data()}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"contact main-view"},r.a.createElement("div",{className:"main-display"},r.a.createElement(N,{contactActive:"active"}),r.a.createElement("div",{className:"person-information wrapper-flex margin-default-bottom",style:{alignItems:"center"}},r.a.createElement(A,null),r.a.createElement(y,null)),r.a.createElement(O,{marginPosition:"both"}),r.a.createElement(H,null)),r.a.createElement(P,{sideButtonsState:"off",className:"padding-default"},r.a.createElement(L,null)))}}]),a}(n.Component);s.a.render(r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(l.a,{path:"/",exact:!0,component:I}),r.a.createElement(l.a,{path:"/about",component:B}),r.a.createElement(l.a,{path:"/contact",component:U}),r.a.createElement("footer",null,"2019 copyright \xa9 Ivan Stevkovski")))},null),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");o?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):m(a,e)})}}()},68:function(e,a,t){e.exports=t(135)},73:function(e,a,t){}},[[68,2,1]]]);
//# sourceMappingURL=main.d041a799.chunk.js.map