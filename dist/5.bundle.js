(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{419:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(9),i=t(40),l=t(126),c=[{label:"About",href:"#about"},{label:"Portfolio",href:"#portfolio"},{label:"Contact",href:"#contact"}];function u(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0; \n    right: 0;\n    ul {\n        padding: 35px 0 50px;\n        list-style:none;\n        text-align: center;\n    }\n    ul li {\n        display: inline-block;\n        text-transform: uppercase;\n        font-size: 14px;\n        font-weight: 700;\n        font-family: Proxima Nova Bold, sans-serif;\n        color: ","; \n        &:not(:first-of-type):before {\n            content: '/';\n            padding: 0 12px 0 9px;\n        }\n    }\n    a {\n        display: inline-block;\n        position: relative;\n        &:hover:after {\n            content: ' ';\n            display: block;\n            width: 100%;\n            border-bottom: 2px solid;\n            position: absolute;\n            bottom: -0.7em;\n            border-color: ",";\n        }\n    }\n\n    "," {\n        display: ",";\n    }\n"]);return u=function(){return n},n}t.d(e,"a",(function(){return s}));var f=a.c.nav(u(),(function(n){return n.color}),(function(n){return n.underlineColor}),l.a.desktop.medium,(function(n){return n.displayOnMobile?"block":"none"}));function s(n){var e=n.textColor,t=n.underlineColor,a=(n.customNavList,n.displayOnMobile),l=n.customNavArray,u=Object(r.useContext)(i.a);return o.a.createElement(f,{displayOnMobile:a,color:e||u.darkest,underlineColor:t||u.highlight},o.a.createElement("ul",null,l&&l.map((function(n){return o.a.createElement("li",null,o.a.createElement("a",{href:n.href},n.label))})),!l&&c.map((function(n){return o.a.createElement("li",null,o.a.createElement("a",{href:n.href},n.label))}))))}},420:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(0),o=t.n(r),a=t(9),i=t(419);function l(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    background: ",";\n    color: ",";\n"]);return l=function(){return n},n}var c=a.c.section(l(),(function(n){return n.background||n.theme.lightest}),(function(n){return n.color||n.theme.darkest}));function u(n){var e=n.children,t=n.background,r=n.fontColor,a=n.navFontColor,l=n.navUnderline,u=n.sectionId,f=n.displayNavOnMobile,s=n.customNavArray;return o.a.createElement(c,{id:u&&u.toLowerCase(),background:t,color:r},e,o.a.createElement(i.a,{textColor:a,underlineColor:l,displayOnMobile:f,customNavArray:s}))}},438:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var r=t(0),o=t.n(r),a=t(9),i=t(40),l=t(420),c=t(76);function u(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n    font-family: Albertiny, Photograph-Signature;\n    font-size: 70px;\n"]);return u=function(){return n},n}var f=a.c.div(u());function s(){var n=Object(r.useContext)(i.a).theme;return o.a.createElement(l.a,{sectionId:"home",background:n.darkest,fontColor:n.lightest,navFontColor:n.highlight,navUnderline:n.lightest,displayNavOnMobile:!0},o.a.createElement(c.a,null,o.a.createElement(f,null,"Tung"),o.a.createElement(f,null,"Khuat")))}}}]);