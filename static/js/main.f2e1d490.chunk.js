(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{71:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c),s=n(9),i=n.n(s),o=(n(71),n(14)),u=n(32),l=n(11),j=n(37),b=n(2),d=Object(c.createContext)();function h(){return Object(c.useContext)(d)}var m=function(e){var t=e.component,n=Object(b.a)(e,["component"]),c=h().authTokens;return Object(a.jsx)(l.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return c?Object(a.jsx)(t,Object(j.a)({},e)):Object(a.jsx)(l.a,{to:{pathname:"/login",state:{referer:e.location}}})}}))},p=n(136),O=n(132),f=n(134),x=n(129),g=n(140),v=n(135),S=n(35),w=n.n(S),k=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function C(e){var t=k(),n=Object(c.useState)(!1),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(!1),j=Object(o.a)(u,2),b=j[0],d=j[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),S=x[0],C=x[1],y=Object(c.useState)(""),T=Object(o.a)(y,2),I=T[0],N=T[1],W=h().setAuthTokens,F=e.location.state&&e.location.state.referer||"/home";return s?Object(a.jsx)(l.a,{to:F}):Object(a.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(f.a,{}),Object(a.jsxs)("div",{className:t.paper,children:[Object(a.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("div",{className:t.form,children:[Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return C(e.target.value)}}),Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return N(e.target.value)}}),Object(a.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){w.a.get("https://swapi.dev/api/people/").then((function(e){200===e.status&&e.data.results.find((function(e){return e.name===S&&e.birth_year===I}))?(W("some_token_string"),i(!0)):d(!0)})).catch((function(e){d(!0)}))},children:"Sign In"})]}),b&&Object(a.jsx)("div",{style:{backgroundColor:"red"},children:"The username or password provided were incorrect!"})]})]})}var y=n(137),T=n(138),I=n(139),N=n(55),W=n.n(N),F=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function A(){var e=F();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(y.a,{position:"static",children:Object(a.jsxs)(T.a,{variant:"dense",children:[Object(a.jsx)(I.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(v.a,{variant:"h6",color:"inherit",children:"Star Wars"})]})})})}var B=n(98);n(96);function P(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)(B.a,{className:"custom-paper",children:[Object(a.jsx)(g.a,{id:"outlined-search",label:"Search field",type:"search",variant:"outlined",fullWidth:!0,value:n,onChange:function(e){r(e.target.value),w.a.get("https://swapi.dev/api/planets/?search=".concat(e.target.value)).then((function(e){200===e.status?l(e.data.results):l([])})).catch((function(e){l([])}))}}),u&&Object(a.jsx)("ul",{children:u.map((function(e){return Object(a.jsx)("li",{style:{fontSize:"unknown"===e.population?12:parseInt("1".concat(e.population.charAt(0)))},children:e.name},e.name)}))})]})})}var J=function(e){var t=Object(c.useState)(),n=Object(o.a)(t,2),r=n[0],s=n[1];return!r&&sessionStorage.getItem("tokens")&&s(sessionStorage.getItem("tokens")),Object(a.jsx)(d.Provider,{value:{authTokens:r,setAuthTokens:function(e){sessionStorage.setItem("tokens",JSON.stringify(e)),s(e)}},children:Object(a.jsx)(u.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(l.b,{exact:!0,path:"/",component:C}),Object(a.jsx)(l.b,{path:"/login",component:C}),Object(a.jsx)(m,{path:"/home",component:P})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),_()}},[[97,1,2]]]);
//# sourceMappingURL=main.f2e1d490.chunk.js.map