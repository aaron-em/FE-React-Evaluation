(this["webpackJsonpfe-react-eval"]=this["webpackJsonpfe-react-eval"]||[]).push([[0],{40:function(e){e.exports=JSON.parse('{"thingsApi":{"url":"/","cacheSeconds":3600}}')},55:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),i=a(9),s=a(32),o=a(36),u=a.n(o),m=a(37),d=a(38),p=a(5),f=a(39),E=a(13),v=function(e){return{type:"user.LOGIN",authenticatedUserName:e}},b=function(){return{type:"user.LOGOUT"}},h={authenticatedUserName:null};var g=a(18),y=a.n(g),N=a(26),O=a(20),j=a(11),w=a(40);var k=function e(t){var a=Object.entries(t).map((function(t){var a=Object(j.a)(t,2),n=a[0],r=a[1];return"object"===typeof r?Object(O.a)({},n,e(r)):Object(O.a)({},n,r)})).reduce((function(e,t){return Object(E.a)({},e,{},t)}),{});return Object.freeze(a),a}(Object(E.a)({},w)),S=a(19),x=a.n(S),A={skills:[{id:1,name:"Reading",type:"Essential",DateLearned:x()().subtract(30,"years").add(2,"years").format(),detail:"Reading is essential and fun"},{id:2,name:"Writing",type:"Essential",DateLearned:x()().subtract(30,"years").add(2,"years").format(),detail:"Writing is essential and fun"},{id:3,name:"Riding A Bike",type:"Practical",DateLearned:x()().subtract(30,"years").add(5,"years").format(),detail:"Riding A Bike is not essential"},{id:4,name:"Driving A Car",type:"Practical",DateLearned:x()().subtract(30,"years").add(16,"years").format(),detail:"Driving A Car is essential in some countries"},{id:5,name:"Coding",type:"Professional",DateLearned:x()().subtract(30,"years").add(24,"years").format(),detail:"Coding is profitable"}],interests:[{id:1,name:"Soccer",type:"Sport",current:!0,detail:"Soccer is a Sport and Sports are cool"},{id:2,name:"Football",type:"Sport",current:!0,detail:"Football is a Sport and Sports are physical"},{id:3,name:"Chess",type:"Game",current:!1,detail:"Chess is a game and games are fun"},{id:4,name:"Racing",type:"Sport",current:!1,detail:"Racing is a loud sport"},{id:5,name:"Horseback Riding",type:"Sport",current:!0,detail:"Horseback Riding is an ancient sport"}]};function R(){return(R=Object(N.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.thingsApi.url,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch fresh data (HTTP ".concat(a.status," ").concat(a.statusText,")"));case 6:return e.abrupt("return",new Promise((function(e){setTimeout((function(){return e(A)}),150)})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={fakeGet:function(){return R.apply(this,arguments)}};function L(e){return{type:"data.RECEIVE",response:e}}var I=function(){return function(){var e=Object(N.a)(y.a.mark((function e(t,a){var n,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Math.floor((new Date).getTime()/1e3),r=a().lastFetch,!(n-r<k.thingsApi.cacheSeconds)){e.next=5;break}return t(L()),e.abrupt("return");case 5:return e.prev=5,e.next=8,U.fakeGet();case 8:c=e.sent,t(L(c)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0.message),t({type:"data.ERROR",error:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,a){return e.apply(this,arguments)}}()};var C={lastFetch:0,lastError:null,skills:[],interests:[]};var D=Object(i.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user.LOGIN":return Object(E.a)({},e,{authenticatedUserName:t.authenticatedUserName});case"user.LOGOUT":return Object(E.a)({},e,{authenticatedUserName:null});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=(new Date).getTime();switch(t.type){case"data.RECEIVE":return t.response&&(e=Object(E.a)({},e,{lastFetch:a},t.response)),e;case"data.ERROR":return Object(E.a)({},e,{lastFetch:a,lastError:t.error});default:return e}}}),M=a(16),P=a(2);a(55);function T(e){var t=e.type,a=e.title,n=e.item;return r.a.createElement(M.b,{className:"card-link",to:"".concat(t,"/").concat(n.id)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"inner"},r.a.createElement("h2",null,a," ",n.id),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"NAME:"),r.a.createElement("td",null,n.name)),r.a.createElement("tr",null,r.a.createElement("th",null,"TYPE:"),r.a.createElement("td",null,r.a.createElement(H,{text:n.type}))))))))}function F(e){var t=e.type,a=e.title,n=e.items;return r.a.createElement("div",{className:"cards"},n.map((function(e,n){return r.a.createElement(T,{key:n,type:t,title:a,item:e})})))}function G(e){var t=e.type,a=Object(P.f)().id,n=Object(p.d)((function(e){return e.data[t].find((function(e){return e.id===function(e){return("number"===typeof(t=e)||!!t.match(/^[0-9]+$/))&&parseInt(e,10);var t}(a)}))}));return"undefined"===typeof n?r.a.createElement(ae,null):r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,n.name),r.a.createElement(H,{text:n.type}),r.a.createElement("p",null,n.detail))}var W=function(){return function(e){var t=e.value,a=e.label,n=void 0===a?"":a;return r.a.createElement("span",{role:"img","aria-label":n},t)}({value:"\u2728"})},q=a(41);function B(e){var t=function(e){var t,a=e.map((function(e){return e/255})),n=Object(j.a)(a,3),r=n[0],c=n[1],l=n[2],i=Math.max(r,c,l),s=Math.min(r,c,l),o=i-s,u=(i+s)/2;return t=0===o?0:i===r?(c-l)/o:i===c?2+(l-r)/o:4+(r-c)/o,t*=60,t+=t<0?360:0,[t%=360,0===o?0:o/(1-Math.abs(2*u-1)),u]}(function(e){return e.split(/(..)/).filter(Boolean).map((function(e){return parseInt(e,16)}))}(Object(q.hex)(e).slice(6,12))),a=Object(j.a)(t,3),n=a[0],r=a[1],c=a[2],l=function(e){return.7+e/5},i=function(e){var t=Object(j.a)(e,3),a=t[0],n=t[1],r=t[2],c=(1-Math.abs(2*r-1))*n,l=c*(1-Math.abs(a/60%2-1)),i=r-c/2;return(a>=300?[c,0,l]:a>=240?[l,0,c]:a>=180?[0,l,c]:a>=120?[0,c,l]:a>=60?[l,c,0]:[c,l,0]).map((function(e){return Math.round(255*(e+i))}))}([n,l(r),l(c)]).map((function(e){return e.toString(16).padStart(2,"0")})).join("");return"#".concat(i)}a(59);function H(e){var t=e.text,a=Object(n.useState)(B(t)),c=Object(j.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){i(B(t))}),[t]),r.a.createElement("div",{className:"colored-pill",style:{backgroundColor:l}},t)}var $=a(33),J=(a(60),a.p+"static/media/noinc-logo.de3da5c6.png");function V(e){var t=e.text,a=e.to,n=Object(P.g)({path:a,exact:"/"===a});return r.a.createElement("div",{className:"link"},r.a.createElement(M.b,{className:n?"active":"",to:a},t))}function z(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:J,alt:"N0.1nc"}))}var Y=Object(p.b)((function(e){return{loggedInUser:e.user.authenticatedUserName}}),(function(e){return{logUserOut:function(){return e(b())}}}))((function(e){var t=e.loggedInUser,a=e.logUserOut;return r.a.createElement("div",{className:"user-display"},r.a.createElement($.b,{className:"icon-user"}),r.a.createElement("div",{className:"user-name"},t),r.a.createElement($.a,{className:"icon-logout",title:"Log Out",onClick:a}))}));function K(){return r.a.createElement("div",{className:"App-header"},r.a.createElement(z,null),r.a.createElement(V,{text:"Home",to:"/"}),r.a.createElement(V,{text:"Skills",to:"/skills"}),r.a.createElement(V,{text:"Interests",to:"/interests"}),r.a.createElement(Y,null))}a(61);function Q(e){var t=e.slice(0,1).toUpperCase()+e.slice(1);return{plural:t,singular:t.replace(/s$/,"")}}function X(e){var t=e.type,a=Object(p.d)((function(e){return e.data[t]})),c=Object(n.useState)(Q(t)),l=Object(j.a)(c,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){s(Q(t))}),[t]),r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,i.plural),r.a.createElement(F,{type:t,title:i.singular,items:a}))}var Z=a(21),_=(a(62),a(63),function(e){return!e.match(/^\S+@\S+\.\S+$/)&&"Please enter a valid email address."}),ee=function(e){return 0===e.length&&"Please enter a value."};function te(e){var t=e.onSuccess;return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:J,alt:"N0.1nc"})),r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"Form"},r.a.createElement("p",null,"Log in to our ",r.a.createElement(W,null),"Magic Portal",r.a.createElement(W,null)),r.a.createElement(Z.c,{initialValues:{emailAddress:"",password:""},onSubmit:function(e,a){var n=a.setSubmitting;t(e.emailAddress),n(!1)}},(function(e){var t=e.errors,a=e.touched;return r.a.createElement(Z.b,null,r.a.createElement("div",{className:"field"},r.a.createElement(Z.a,{className:a.emailAddress&&t.emailAddress&&"invalid",name:"emailAddress",placeholder:"Email Address",validate:_}),r.a.createElement("div",{className:"error"},a.emailAddress&&t.emailAddress?t.emailAddress:"\xa0")),r.a.createElement("div",{className:"field"},r.a.createElement(Z.a,{className:a.password&&t.password&&"invalid",type:"password",name:"password",placeholder:"Password",validate:ee}),r.a.createElement("div",{className:"error"},a.password&&t.password?t.password:"\xa0")),r.a.createElement("div",{className:"field"},r.a.createElement("button",{type:"submit"},"LOGIN")))}))))))}function ae(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"Not Found"))}a(64);function ne(e){var t=e.username,a=Object(p.d)((function(e){return e.data})).interests;return r.a.createElement("div",{className:"page home"},t?r.a.createElement("h1",{className:"welcome-banner"},"Welcome ",t):null,r.a.createElement("p",{className:"lipsum"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement(F,{type:"interests",title:"Interest",items:a.slice(0,3)}))}function re(e){var t=e.type;return r.a.createElement("div",{className:"page ".concat(t)},r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/".concat(t)},r.a.createElement(X,{type:t})),r.a.createElement(P.a,{path:"/".concat(t,"/:id")},r.a.createElement(G,{type:t}))))}function ce(){return r.a.createElement("div",{className:"page not-found"},r.a.createElement(ae,null))}a(65);function le(e){var t=e.children;return r.a.createElement("div",{className:"App-content"},t)}function ie(){var e=Object(p.c)(),t=Object(p.d)((function(e){return e.user})).authenticatedUserName,a=!!t;return r.a.createElement("div",{className:"App"},a?r.a.createElement(le,null,r.a.createElement(M.a,null,r.a.createElement(K,null),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/"},r.a.createElement(ne,{username:t})),r.a.createElement(P.a,{path:"/skills"},r.a.createElement(re,{type:"skills"})),r.a.createElement(P.a,{path:"/interests"},r.a.createElement(re,{type:"interests"})),r.a.createElement(P.a,{path:"*"},r.a.createElement(ce,null))))):r.a.createElement(te,{onSuccess:function(t){e(I()),function(t){e(v(t))}(t)}}))}var se={key:"root",storage:u.a},oe=Object(s.a)(se,D),ue=Object(i.createStore)(oe,Object(d.composeWithDevTools)(Object(i.applyMiddleware)(f.a))),me=Object(s.b)(ue);function de(){return r.a.createElement(p.a,{store:ue},r.a.createElement(m.a,{loading:null,persistor:me},r.a.createElement(ie,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(66);l.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.ce511835.chunk.js.map