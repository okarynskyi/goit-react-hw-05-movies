"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,n){n.r(t);var r=n(885),a=n(739),c=n(791),i=n(197),h=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],o=n[1],l=(0,c.useState)(null),u=(0,r.Z)(l,2),p=u[0],f=u[1];(0,c.useEffect)((function(){(0,i.M1)(e).then((function(e){return o(e.cast)})).catch((function(e){return f(e.message)}))}),[e]);var d=0===s.length||p;return(0,h.jsxs)("div",{children:[d&&(0,h.jsx)("p",{children:"We don't have any actors information for this movie"}),(0,h.jsx)("ul",{children:s.map((function(e){return(0,h.jsxs)("li",{children:[e.profile_path?(0,h.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:"100"}):(0,h.jsx)("p",{children:"No photo"}),(0,h.jsx)("h4",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=115.d0ecd5fa.chunk.js.map