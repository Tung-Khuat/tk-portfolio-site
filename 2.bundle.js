(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{419:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(9),i=n(40),s=n(126),c=[{label:"About",href:"#about"},{label:"Portfolio",href:"#portfolio"},{label:"Contact",href:"#contact"}];function l(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0; \n    right: 0;\n    ul {\n        padding: 35px 0 50px;\n        list-style:none;\n        text-align: center;\n    }\n    ul li {\n        display: inline-block;\n        text-transform: uppercase;\n        font-size: 14px;\n        font-weight: 700;\n        font-family: Proxima Nova Bold, sans-serif;\n        color: ","; \n        &:not(:first-of-type):before {\n            content: '/';\n            padding: 0 12px 0 9px;\n        }\n    }\n    a {\n        display: inline-block;\n        position: relative;\n        &:hover:after {\n            content: ' ';\n            display: block;\n            width: 100%;\n            border-bottom: 2px solid;\n            position: absolute;\n            bottom: -0.7em;\n            border-color: ",";\n        }\n    }\n\n    "," {\n        display: ",";\n    }\n"]);return l=function(){return e},e}n.d(t,"a",(function(){return d}));var u=a.c.nav(l(),(function(e){return e.color}),(function(e){return e.underlineColor}),s.a.desktop.medium,(function(e){return e.displayOnMobile?"block":"none"}));function d(e){var t=e.textColor,n=e.underlineColor,a=(e.customNavList,e.displayOnMobile),s=e.customNavArray,l=Object(r.useContext)(i.a);return o.a.createElement(u,{displayOnMobile:a,color:t||l.darkest,underlineColor:n||l.highlight},o.a.createElement("ul",null,s&&s.map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.href},e.label))})),!s&&c.map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.href},e.label))}))))}},421:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(0),o=n.n(r),a=n(9),i=n(419),s=n(76),c=n(126);function l(){var e=b(["\n    font-family: Albertiny, Photograph-Signature;\n    font-size: 70px;\n"]);return l=function(){return e},e}function u(){var e=b(["\n    position: absolute;\n    top: 10%;\n    right: 0;\n    transform: translateX(50%);\n    "," {\n       display: none;\n    }\n"]);return u=function(){return e},e}function d(){var e=b(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: auto;\n    transform: translate(-50%, -50%);\n"]);return d=function(){return e},e}function f(){var e=b(["\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: ",";\n    height: 100vh;\n    transition: 1s width cubic-bezier(.77,0,.175,1);\n    z-index: 50;\n\n    "," {\n        width: 100%;\n        height: 20vh;\n        position: relative;\n    }\n"]);return f=function(){return e},e}function p(){var e=b(["\n    padding: ",";\n    "," {\n        padding: ",";\n    }\n"]);return p=function(){return e},e}function m(){var e=b(["\n    width: ",";\n    transition: 1s width cubic-bezier(.77,0,.175,1);\n    "," {\n        width: 100%;\n    }\n"]);return m=function(){return e},e}function h(){var e=b(["\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    "," {\n        display: block;\n    }\n"]);return h=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=a.c.section(h(),c.a.desktop.medium),v=Object(a.c)(s.h)(m(),(function(e){return e.contentWidth+"%"}),c.a.desktop.medium),y=a.c.div(p(),(function(e){return e.noPadding?0:"79px"}),c.a.desktop.medium,(function(e){return e.noPadding?0:"50px"})),k=Object(a.c)(s.h)(f(),(function(e){return e.titleWidth+"%"}),c.a.desktop.medium),x=a.c.div(d()),w=a.c.div(u(),c.a.desktop.medium),C=a.c.div(l());function z(e){var t=e.children,n=e.title,r=e.titleBackground,a=e.titleFontColor,s=e.underlineColor,c=e.navFontColor,l=e.noPadding,u=e.sectionId,d=e.expanded,f=e.middleElement,p=e.customNavArray,m=50;return d&&(m=30),o.a.createElement(g,{id:u||n.toLowerCase()},o.a.createElement(k,{background:r,color:a,titleWidth:m},f&&o.a.createElement(w,null,f),o.a.createElement(x,null,o.a.createElement(C,null,n)),o.a.createElement(i.a,{textColor:c,underlineColor:s,customNavArray:p})),o.a.createElement(v,{contentWidth:100-m},o.a.createElement(y,{noPadding:l},t)))}},422:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r),a=n(9);function i(){var e=l(["\n    transform: translateY(25%) scale(0);\n    transition: .4s transform cubic-bezier(.6,-.28,.735,.045) 0s;\n    z-index: 200;\n    position: relative;\n    text-transform: uppercase;\n    font-size: 12px;\n    top: 50%;\n    left: 0;\n    display: block;\n    text-align: center;\n"]);return i=function(){return e},e}function s(){var e=l(["\n    border-top: 1.125em solid transparent;\n    border-right: none;\n    border-bottom: 1em solid transparent;\n    border-left: 1.875em solid ",";;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform-origin: left bottom;\n    -ms-transform-origin: left bottom;\n    transform-origin: left bottom;\n    border-radius: 3px 3px 0 0;\n    z-index: 100;\n    transform: rotateY(-90deg);\n"]);return s=function(){return e},e}function c(){var e=l(["\n    color: ",";\n    font-size: ",";\n    display: block;\n    width: 3.75em;\n    height: 4.25em;\n    margin: 1em auto;\n    -webkit-transform-origin: center center;\n    -ms-transform-origin: center center;\n    transform-origin: center center;\n    position: relative;\n    text-decoration: none;\n    cursor: pointer;    \n    transition: .15s cubic-bezier(.25,.46,.45,.94) .1s;\n    \n    .slice:nth-child(1) {\n        transform: rotateZ(60deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .48s;\n    }\n    .slice:nth-child(2) {\n        transform: rotateZ(120deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .4s;\n    }\n    .slice:nth-child(3) {\n        transform: rotateZ(180deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .32s;\n    }\n    .slice:nth-child(4) {\n        transform: rotateZ(240deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .24s;\n    }\n    .slice:nth-child(5) {\n        transform: rotateZ(300deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .16s;\n    }\n    .slice:nth-child(6) {\n        transform: rotateZ(360deg) rotateY(-90deg) rotateX(0deg);\n        transition: .15s cubic-bezier(.25,.46,.45,.94) .08s;\n    }\n\n    &:hover, &:focus, &.hovered {\n        transform: scale(1);\n        transition: .4s transform cubic-bezier(.6,-.28,.735,.045) .5s,.6s height cubic-bezier(.77,0,.175,1) 0s;\n\n        .slice:nth-child(1) {\n            transform: rotateZ(60deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .08s;\n        }\n        .slice:nth-child(2) {\n            transform: rotateZ(120deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .16s;\n        }\n        .slice:nth-child(3) {\n            transform: rotateZ(180deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .24s;\n        }\n        .slice:nth-child(4) {\n            transform: rotateZ(240deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .32s;\n        }\n        .slice:nth-child(5) {\n            transform: rotateZ(300deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .4s;\n        }\n        .slice:nth-child(6) {\n            transform: rotateZ(360deg) rotateY(0deg) rotateX(0deg);\n            transition: .15s cubic-bezier(.25,.46,.45,.94) .48s;\n        }\n        .hexagon-button-label {\n            transform: translateY(-50%) scale(1);\n        }\n    }\n"]);return c=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u=a.c.div(c(),(function(e){return e.color||e.theme.lightest}),(function(e){return e.fontSize+"px"||!1})),d=a.c.span(s(),(function(e){return e.bgColor||e.theme.darkest})),f=a.c.div(i());function p(e){var t=e.children,n=e.bgColor,r=e.fontColor,a=e.onClick,i=e.active,s=e.fontSize;return o.a.createElement(u,{className:"hexagon-button ".concat(i?"hovered":""),fontColor:r,fontSize:s,onClick:a},o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(d,{className:"slice",bgColor:n}),o.a.createElement(f,{className:"hexagon-button-label"},t))}},427:function(e){e.exports=JSON.parse('[{"title":"Sushi Koju","subtitle":"Food Ordering App","description":"Sushi Koju is an web application made for ordering preset sushi platters. I made this app for a Citymarket sushi buffet. The owner wanted to have specific designs and functionality. The app also includes a page to view all the orders, sorted and categorized. That page can be visited here:","demoLink":"http://13.53.174.170:3001/","sourceCodeLink":null,"otherLinks":[{"label":"Staff Member Page","faIcon":"fa fa-user","url":"http://13.53.174.170:3001/login","note":["Username: sushi","Password: sushi123","*Most of the orders there are randomly generated fake orders"]}],"banner":"./images/sushi-banner1.jpg","tech":{"frontend":["React","React Hooks","MaterialUI","React Router"],"backend":["NodeJs","express","mongo","JWT"],"other":[]},"motivation":["Try use Context store instead of Redux.","Get more practice on backend development.","Learn more about authentication services. Implement access token, refresh token, encryption from scratch","Implement my own pagination system for infinite scrolling."],"scope":["Design and develop a web application for ordering sushi platters.","Create an administration page behind an authorization system to manage received orders.","Sort and filter orders."],"futureDevelopment":["Design and develop a web application for ordering sushi platters.","Create an administration page behind an authorization system to manage received orders","Sort and filter orders."],"previews":[],"extraSections":[]},{"title":"TK-Recipes","subtitle":"Cook Book App","description":"TK-MovieDatabase is a responsive React app that uses The Movie Database (TMDb) API.","demoLink":"https://tungkhuat.herokuapp.com/","sourceCodeLink":"https://github.com/Tung-Khuat/TKMovieDatabaseApp","otherLinks":[],"banner":"./images/recipe-banner3.jpg","tech":{"frontend":["React","Redux","Sass","React Router"],"backend":["The Movie Database (TMDb)"],"other":[]},"motivation":["Practice building a frontend application with React and Redux.","Practice API calls and manage data.","Learn how to host a React app."],"scope":["Design and develop a web application for searching movies using TMDb.","Create sliders for popular, trending, top rated and upcoming movies."],"futureDevelopment":[],"previews":[],"extraSections":[]},{"title":"TK-Movies","subtitle":"Movie Database App","description":"TK-Movies is a React app that uses The Movie Database (TMDb) API.","demoLink":"https://tungkhuat.herokuapp.com/","sourceCodeLink":"https://github.com/Tung-Khuat/TKMovieDatabaseApp","banner":"https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","otherLinks":[],"tech":{"frontend":["React","Redux","Sass","React Router"],"backend":["The Movie Database (TMDb)"],"other":[]},"motivation":["Practice building a frontend application with React and Redux.","Practice API calls and manage data.","Learn how to host a React app."],"scope":["Design and develop a web application for searching movies using TMDb.","Create sliders for popular, trending, top rated and upcoming movies."],"futureDevelopment":[],"previews":[],"extraSections":[]}]')},445:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(40),i=n(421),s=n(427),c=n(422),l=n(127);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"default",(function(){return m}));var f=o.a.lazy((function(){return n.e(8).then(n.bind(null,442))})),p=o.a.lazy((function(){return n.e(7).then(n.bind(null,446))}));function m(){var e=Object(r.useContext)(a.a),t=u(Object(r.useState)(!1),2),n=t[0],d=t[1],m=u(Object(r.useState)(),2),h=m[0],b=m[1];function g(e,t){var n=function(e,t){t&&document.querySelector(t);var n=e.getBoundingClientRect();return Boolean(n.top<0&&n.bottom>window.innerHeight)}(e);b(t),n?d(!0):setTimeout((function(){d(!0)}),100)}function v(){document.getElementById("portfolio").scrollIntoView(!0),setTimeout((function(){d(!1)}),400)}return o.a.createElement(i.a,{title:"Portfolio",titleBackground:e.theme.darkest,titleFontColor:e.theme.lightest,underlineColor:e.theme.lightest,navFontColor:e.theme.highlight,expanded:n,noPadding:!0,middleElement:n?o.a.createElement(c.a,{onClick:v,active:n,fontSize:13,bgColor:e.theme.highlight},o.a.createElement("i",{class:"fas fa-times",style:{fontSize:"19px"}})):null},s&&s.map((function(e,t){return o.a.createElement(f,{project:e,expandProject:g,collapseProject:v,expanded:n,index:t,checkUnselected:function(){return function(e){return e!==h}(t)}})})),o.a.createElement(r.Suspense,{fallback:o.a.createElement(l.a,null)},s[h]&&n&&o.a.createElement(p,{project:s[h]})))}}}]);