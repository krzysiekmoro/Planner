(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[6],{404:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},405:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},406:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return function(){var t,n=r(e);if(o()){var c=r(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return a(this,t)}}n.d(t,"a",(function(){return i}))},407:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},413:function(e,t,n){"use strict";n.r(t);var r=n(404),o=n(405),c=n(407),a=n(406),i=n(0),s=n.n(i),u=n(409),l=n.n(u),f=function(e){var t=e.notifications;return s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"card z-depth-0"},s.a.createElement("div",{className:"card-content"},s.a.createElement("span",{className:"card-title"},"Notifications"),s.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement("span",{className:"pink-text"},e.user," "),s.a.createElement("span",null,e.content),s.a.createElement("div",{className:"grey-text note-date"},l()(e.time.toDate()).fromNow()))}))))))},p=function(e){var t=e.project;return s.a.createElement("div",{className:"card z-depth-0 project-summary"},s.a.createElement("div",{className:"card-content grey-text text-darken-3"},s.a.createElement("span",{className:"card-title"},t.title),s.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),s.a.createElement("p",{className:"grey-text"},l()(t.createdAt.toDate()).calendar())))},m=n(131),d=function(e){var t=e.projects;return s.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return s.a.createElement(m.b,{to:"/project/".concat(e.id),key:e.id},s.a.createElement(p,{project:e}))})))},y=n(54),b=n(29),h=n(20),E=n(21),j=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,n=e.auth,r=e.notifications;return n.uid?s.a.createElement("div",{className:"dashboard container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m6"},s.a.createElement(d,{projects:t})),s.a.createElement("div",{className:"col s12 m5 offset-m1"},s.a.createElement(f,{notifications:r})))):s.a.createElement(E.a,{to:"/signin"})}}]),n}(i.Component);t.default=Object(h.d)(Object(y.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(b.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(j)}}]);
//# sourceMappingURL=6.f26ad1b0.chunk.js.map