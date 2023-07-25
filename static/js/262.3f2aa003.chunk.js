"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[262],{262:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,a,i,o,c,s,u,p,d,f,l,x,h,v,Z=e(861),m=e(439),g=e(757),b=e.n(g),w=e(689),y=e(791),k=e(409),j=e(168),P=e(884),_=P.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #fff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n"]))),z=P.ZP.img(a||(a=(0,j.Z)(["\n  width: 150px;\n  height: 225px;\n  object-fit: cover;\n  border-radius: 5px;\n"]))),U=P.ZP.div(i||(i=(0,j.Z)(["\n  flex: 1;\n  margin-left: 20px;\n"]))),C=P.ZP.h2(o||(o=(0,j.Z)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n  color: #333;\n"]))),q=P.ZP.p(c||(c=(0,j.Z)(["\n  font-size: 16px;\n  color: #555;\n"]))),G=P.ZP.div(s||(s=(0,j.Z)(["\n  margin-top: 10px;\n"]))),L=P.ZP.span(u||(u=(0,j.Z)(["\n  font-size: 14px;\n  color: #007bff;\n  margin-right: 10px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),R=e(184),S=function(n){var t=n.movie;return(0,R.jsxs)(_,{children:[(0,R.jsx)(z,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,R.jsxs)(U,{children:[(0,R.jsx)(C,{children:t.title}),(0,R.jsx)(q,{children:"User score : ".concat(t.vote_average)}),(0,R.jsx)(q,{children:t.overview}),(0,R.jsx)(G,{children:t.genres&&t.genres.map((function(n){return(0,R.jsx)(L,{children:n.name},n.id)}))})]})]})},D=e(87),E=P.ZP.div(p||(p=(0,j.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),H=(0,P.ZP)(D.rU)(d||(d=(0,j.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #007bff;\n  text-decoration: none;\n  font-size: 18px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),O=P.ZP.div(f||(f=(0,j.Z)(["\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n"]))),T=(0,P.ZP)(D.rU)(l||(l=(0,j.Z)(["\n  padding: 10px 20px;\n  color: #007bff;\n  text-decoration: none;\n  font-size: 16px;\n  border: 1px solid #007bff;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #007bff;\n    color: #fff;\n  }\n"]))),A=(0,P.ZP)(T)(x||(x=(0,j.Z)([""]))),B=(0,P.ZP)(T)(h||(h=(0,j.Z)([""]))),F=(P.ZP.div(v||(v=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),function(){var n,t,e=(0,w.UO)().id,r=(0,y.useState)({}),a=(0,m.Z)(r,2),i=a[0],o=a[1],c=(0,w.TH)(),s=null!==(n=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,y.useEffect)((function(){var n=function(){var n=(0,Z.Z)(b().mark((function n(){var t,r;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.Pg)(e);case 3:t=n.sent,r=t.data,o(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,n.finish(11);case 13:case"end":return n.stop()}}),n,null,[[0,8,11,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,R.jsxs)(E,{children:[(0,R.jsx)(H,{to:s,children:"Go back"}),i&&(0,R.jsx)(S,{movie:i}),(0,R.jsxs)(O,{children:[(0,R.jsx)(A,{to:"/movies/".concat(e,"/cast"),state:c.state,children:"Cast"}),(0,R.jsx)(B,{to:"/movies/".concat(e,"/reviews"),state:c.state,children:"Reviews"})]}),(0,R.jsx)(y.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading..."}),children:(0,R.jsx)(w.j3,{})})]})})},409:function(n,t,e){e.d(t,{Df:function(){return s},GC:function(){return p},Pg:function(){return f},q5:function(){return v},yo:function(){return x}});var r=e(861),a=e(757),i=e.n(a),o=e(243),c="71d212db098bee809be336737b7220c9";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/trending/movie/week?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",{data:r});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org"}}]);
//# sourceMappingURL=262.3f2aa003.chunk.js.map