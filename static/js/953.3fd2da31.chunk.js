"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[953],{953:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c=e(861),u=e(439),i=e(757),s=e.n(i),o=e(689),p=e(791),f=e(409),d=e(168),l=e(884),h=l.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  width: 1300px;\n"]))),v=l.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),x=e(184),y=function(n){var t=n.reviews;return(0,x.jsx)(h,{children:t.map((function(n){return(0,x.jsxs)(v,{children:[(0,x.jsx)("p",{children:"Author: ".concat(n.author)}),(0,x.jsx)("p",{children:n.content})]},n.id)}))})},m=function(){var n=(0,o.UO)().id,t=(0,p.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){var t=function(){var n=(0,c.Z)(s().mark((function n(t){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.q5)(t);case 3:e=n.sent,r=e.data,a(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,n.finish(11);case 13:case"end":return n.stop()}}),n,null,[[0,8,11,13]])})));return function(t){return n.apply(this,arguments)}}();t(n)}),[n]),(0,x.jsx)("div",{children:0!==r.length?(0,x.jsx)(y,{reviews:r}):(0,x.jsx)("p",{children:"Loading..."})})}},409:function(n,t,e){e.d(t,{Df:function(){return s},GC:function(){return p},Pg:function(){return d},q5:function(){return x},yo:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="71d212db098bee809be336737b7220c9";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org"}}]);
//# sourceMappingURL=953.3fd2da31.chunk.js.map