webpackJsonp([0],{101:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="news: ADD_NEWS"},102:function(e,n,t){"use strict";var a=t(4),r=t(10),o=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  color: #FFF;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 1px solid #FFF;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 12px 32px;\n  position:absolute;\n  opacity: 0;\n  transition: opacity 600ms, visibility 600ms;\n  visibility: hidden;\n"],["\n  color: #FFF;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 1px solid #FFF;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 12px 32px;\n  position:absolute;\n  opacity: 0;\n  transition: opacity 600ms, visibility 600ms;\n  visibility: hidden;\n"]),i=function(e){var n=e.className;return a.default.createElement(c,{className:n},"Read More")},c=r.a.div(o);n.a=i},103:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),r=t(50),o=t(144),i=(t.n(o),t(4)),c=t(149),l=t(253),f=Object(l.a)();!function(e){Object(i.render)(a.default.createElement(o.AppContainer,null,a.default.createElement(r.a,{store:f},a.default.createElement(c.a,null))),document.querySelector('[data-js="app"]'))}(c.a)},149:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=t(4),l=t(10),f=t(156),u=t(158),s=t(250),p=t.n(s),d=t(251),m=t.n(d),y=t(252),h=(t.n(y),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),x=a(["\n@font-face {\n  font-family: 'Lato';\n  src: url(",");\n}\n\n@font-face {\n  font-family: 'OpenSans';\n  src: url(",");\n}\n\n"],["\n@font-face {\n  font-family: 'Lato';\n  src: url(",");\n}\n\n@font-face {\n  font-family: 'OpenSans';\n  src: url(",");\n}\n\n"]),b=a(["\n\n"],["\n\n"]),g=a(["\ndisplay: flex;\njustify-content: center;\nmin-width: max-content;\npadding: 76px 0 0;\n"],["\ndisplay: flex;\njustify-content: center;\nmin-width: max-content;\npadding: 76px 0 0;\n"]),w=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),h(n,[{key:"render",value:function(){return c.default.createElement(v,null,c.default.createElement(f.a,null),c.default.createElement(E,null,c.default.createElement(u.a,null)))}}]),n}(c.Component);Object(l.b)(x,p.a,m.a);var v=l.a.div(b),E=l.a.main(g);n.a=w},156:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t(4),o=t(10),i=t(157),c=t.n(i),l=a(["\n  border-bottom: 1px solid #979797;\n  display: flex;\n  justify-content: center;\n  height: 56px;\n  min-width: max-content;\n"],["\n  border-bottom: 1px solid #979797;\n  display: flex;\n  justify-content: center;\n  height: 56px;\n  min-width: max-content;\n"]),f=a(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 1400px;\n"],["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 1400px;\n"]),u=a(["\n  height: 45px;\n  margin-left: 131px;\n  width: 45px;\n"],["\n  height: 45px;\n  margin-left: 131px;\n  width: 45px;\n"]),s=a(["\n  margin-right: 146px;\n"],["\n  margin-right: 146px;\n"]),p=a(["\n  color: #3E433E;\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  margin-left: 29px;\n  text-decoration: none;\n  text-transform: uppercase;\n"],["\n  color: #3E433E;\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  margin-left: 29px;\n  text-decoration: none;\n  text-transform: uppercase;\n"]),d=function(){return r.default.createElement(m,null,r.default.createElement(y,null,r.default.createElement(h,{href:"#"},r.default.createElement("img",{src:c.a})),r.default.createElement(x,null,r.default.createElement(b,{href:"#"},"politics"),r.default.createElement(b,{href:"#"},"business"),r.default.createElement(b,{href:"#"},"tech"),r.default.createElement(b,{href:"#"},"science"),r.default.createElement(b,{href:"#"},"sports"))))},m=o.a.header(l),y=o.a.div(f),h=o.a.a(u),x=o.a.nav(s),b=o.a.a(p);n.a=d},157:function(e,n,t){e.exports=t.p+"media/logo.92a9e6a7.png"},158:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=t(4),l=t(10),f=t(50),u=t(159),s=t(246),p=t(248),d=t(249),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),y=a(["\n  width: 1400px;\n  min-width: max-content;\n"],["\n  width: 1400px;\n  min-width: max-content;\n"]),h=a(["\n  border-bottom: 1px solid #E3E3E3\n  display:flex;\n  justify-content: space-between;\n  margin: 0 131px ;\n  padding: 0 0 25px 0;\n  "],["\n  border-bottom: 1px solid #E3E3E3\n  display:flex;\n  justify-content: space-between;\n  margin: 0 131px ;\n  padding: 0 0 25px 0;\n  "]),x=a(["\ndisplay:flex;\njustify-content: space-between;\npadding: 30px 0 0 0;\nmargin: 0 131px;\n"],["\ndisplay:flex;\njustify-content: space-between;\npadding: 30px 0 0 0;\nmargin: 0 131px;\n"]),b=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),m(n,[{key:"componentWillMount",value:function(){this.props.fetchNews()}},{key:"render",value:function(){var e=this;return c.default.createElement(v,null,c.default.createElement(E,null,Object.keys(this.props.news).filter(function(n){return"big"===e.props.news[n].size}).map(function(n){return c.default.createElement(s.a,{key:e.props.news[n].id,news:e.props.news[n]})}),Object.keys(this.props.news).filter(function(n){return"medium"===e.props.news[n].size}).map(function(n){return c.default.createElement(p.a,{key:e.props.news[n].id,news:e.props.news[n]})})),c.default.createElement(j,null,Object.keys(this.props.news).filter(function(n){return"small"===e.props.news[n].size}).map(function(n){return c.default.createElement(d.a,{key:e.props.news[n].id,news:e.props.news[n]})})))}}]),n}(c.Component),g=function(e){return{fetchNews:function(){return e(Object(u.a)())}}},w=function(e){return{news:e.news}},v=l.a.div(y),E=l.a.section(h),j=l.a.section(x);n.a=Object(f.b)(w,g)(b)},159:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(160),r=t(101),o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=function(e){return{type:r.a,payload:o({},e)}},c=function(){return function(e){a.a.ref("news").on("value",function(n){var t=n.val();Object.keys(t).sort(function(e,n){return t[e].date<t[n].date?1:-1}).map(function(e,n){return 0===n?{id:e,author:t[e].author,category:t[e].category,content:t[e].content,date:t[e].date,title:t[e].title,size:"big",urlImage:t[e].urlImage}:n>=1&&n<=2?{id:e,author:t[e].author,category:t[e].category,content:t[e].content,date:t[e].date,title:t[e].title,size:"medium",urlImage:t[e].urlImage}:{id:e,author:t[e].author,category:t[e].category,content:t[e].content,date:t[e].date,title:t[e].title,size:"small",urlImage:t[e].urlImage}}).forEach(function(n){console.log(n),e(i(n))})})}}},160:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t(161),r=t.n(a);r.a.initializeApp({apiKey:"AIzaSyDsjVDF5OSiNswJ7L4kLyq8zsdKMJbkoWw",authDomain:"cheesecake-news.firebaseapp.com",databaseURL:"https://cheesecake-news.firebaseio.com",projectId:"cheesecake-news",storageBucket:"cheesecake-news.appspot.com",messagingSenderId:"402315793263"});var o=r.a.database()},246:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t(4),o=t(10),i=t(49),c=t(102),l=a(["\n  width: 555px;\n"],["\n  width: 555px;\n"]),f=a(["\n  color: #FF001F;\n  display: block;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"],["\n  color: #FF001F;\n  display: block;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"]),u=a(["\n\n"],["\n\n"]),s=a(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  &:hover "," {\n    opacity: 1;\n    visibility: visible;\n  }\n"],["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  &:hover "," {\n    opacity: 1;\n    visibility: visible;\n  }\n"]),p=a(["\n  margin-top: 8px;\n  width: 100%;\n"],["\n  margin-top: 8px;\n  width: 100%;\n"]),d=a(["\n  color: #000000;\n  font-family: Lato;\n  font-size: 29px;\n  font-weight: 600;\n  text-decoration: none;\n"],["\n  color: #000000;\n  font-family: Lato;\n  font-size: 29px;\n  font-weight: 600;\n  text-decoration: none;\n"]),m=function(e){var n=e.news;return r.default.createElement(y,null,r.default.createElement(h,{href:"#"},n.category),r.default.createElement(b,{href:"#"},r.default.createElement(x,null),r.default.createElement(g,{src:n.urlImage})),r.default.createElement(w,{href:"#"},n.title),r.default.createElement(i.a,null))},y=o.a.div(l),h=o.a.a(f),x=Object(o.a)(c.a)(u),b=o.a.a(s,x),g=o.a.img(p),w=o.a.a(d);n.a=m},247:function(e,n,t){e.exports=t.p+"media/author.be08f5fb.jpg"},248:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t(4),o=t(10),i=t(49),c=t(102),l=a(["\n  width: 262px;\n"],["\n  width: 262px;\n"]),f=a(["\n  color: #4A90E2;\n  display: block;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"],["\n  color: #4A90E2;\n  display: block;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"]),u=a(["\n  font-size: 14px;\n  padding: 9px 21px;\n"],["\n  font-size: 14px;\n  padding: 9px 21px;\n"]),s=a(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  &:hover "," {\n    opacity: 1;\n    visibility: visible;\n  }\n"],["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n\n  &:hover "," {\n    opacity: 1;\n    visibility: visible;\n  }\n"]),p=a(["\n  margin-bottom: 15px;\n  margin-top: 8px;\n  width: 100%;\n"],["\n  margin-bottom: 15px;\n  margin-top: 8px;\n  width: 100%;\n"]),d=a(["\n  color: #000000;\n  font-family: Lato;\n  font-size: 17px;\n  font-weight: 600;\n  text-decoration: none;\n"],["\n  color: #000000;\n  font-family: Lato;\n  font-size: 17px;\n  font-weight: 600;\n  text-decoration: none;\n"]),m=a(["\n  color: #686868;\n  font-family: OpenSans;\n  font-size: 14px;\n  \n"],["\n  color: #686868;\n  font-family: OpenSans;\n  font-size: 14px;\n  \n"]),y=function(e){var n=e.news;return r.default.createElement(h,null,r.default.createElement(x,{href:"#"},n.category),r.default.createElement(g,{href:"#"},r.default.createElement(b,null),r.default.createElement(w,{src:n.urlImage})),r.default.createElement(v,{href:"#"},n.title),r.default.createElement(i.a,null),r.default.createElement(E,null,n.content))},h=o.a.div(l),x=o.a.a(f),b=Object(o.a)(c.a)(u),g=o.a.a(s,b),w=o.a.img(p),v=o.a.a(d),E=o.a.p(m);n.a=y},249:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t(4),o=t(10),i=t(49),c=a(["\n  width: 360px;\n"],["\n  width: 360px;\n"]),l=a(["\n  color: #4A90E2;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"],["\n  color: #4A90E2;\n  font-family: Lato;\n  font-size: 10px;\n  line-height: 22.8px;\n  text-decoration: none;\n  text-transform: uppercase;\n"]),f=a(["\n  color: #000000;\n  display: block;\n  font-family: Lato;\n  font-size: 17px;\n  font-weight: 600;\n  text-decoration: none;\n"],["\n  color: #000000;\n  display: block;\n  font-family: Lato;\n  font-size: 17px;\n  font-weight: 600;\n  text-decoration: none;\n"]),u=a(["\n  color: #686868;\n  font-family: OpenSans;\n  font-size: 14px;\n  "],["\n  color: #686868;\n  font-family: OpenSans;\n  font-size: 14px;\n  "]),s=function(e){var n=e.news;return r.default.createElement(p,null,r.default.createElement(d,{href:"#"},n.category),r.default.createElement(m,{href:"#"},n.title),r.default.createElement(i.a,null),r.default.createElement(y,null,n.content))},p=o.a.div(c),d=o.a.a(l),m=o.a.a(f),y=o.a.p(u);n.a=s},250:function(e,n,t){e.exports=t.p+"media/Lato-Regular.7f690e50.ttf"},251:function(e,n,t){e.exports=t.p+"media/OpenSans-Regular.d7d5d458.ttf"},253:function(e,n,t){"use strict";var a=t(35),r=t(254),o=t(257),i=t.n(o);n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.initialState,t=Object(a.d)(Object(a.a)(i.a),c());return Object(a.e)(r.a,n,t)};var c=function(){return window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}}},254:function(e,n,t){"use strict";var a=t(255),r=t(35);n.a=Object(r.c)({news:a.a})},255:function(e,n,t){"use strict";function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var r=t(101),o=t(256),i=[],c=Object(o.a)(i,function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},r.a,function(e,n){return[].concat(a(e),[{id:n.payload.id,author:n.payload.author,category:n.payload.category,content:n.payload.content,date:n.payload.date,title:n.payload.title,size:n.payload.size,urlImage:n.payload.urlImage}])}));n.a=c},256:function(e,n,t){"use strict";var a=function(e,n){if(void 0===e)throw new Error("initialState should not be undefined");if("[object Object]"!==Object.prototype.toString.call(n))throw new Error("createReducer expects the second argument as an object representing reducer");return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments[1];return n.hasOwnProperty(a.type)?n[a.type](t,a):t}};n.a=a},49:function(e,n,t){"use strict";function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var r=t(4),o=t(10),i=t(247),c=t.n(i),l=a(["\n  align-items: center;\n  display: flex;\n  padding: 10px 0 0 0;\n  width: 100%;\n"],["\n  align-items: center;\n  display: flex;\n  padding: 10px 0 0 0;\n  width: 100%;\n"]),f=a(["\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n"],["\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n"]),u=a(["\n  color: #808080;\n  font-family: Lato;\n  font-size: 13px;\n  margin-left: 10px;\n  text-decoration: none;\n"],["\n  color: #808080;\n  font-family: Lato;\n  font-size: 13px;\n  margin-left: 10px;\n  text-decoration: none;\n"]),s=function(){return r.default.createElement(p,null,r.default.createElement(d,{src:c.a}),r.default.createElement(m,{href:"#"},r.default.createElement("i",null,"by Creed Bratton")))},p=o.a.div(l),d=o.a.img(f),m=o.a.a(u);n.a=s}},[103]);