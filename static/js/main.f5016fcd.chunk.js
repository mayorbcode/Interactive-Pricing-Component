(this.webpackJsonppricing=this.webpackJsonppricing||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t(4),a=t.n(n),i=t(0),l=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{children:"Simple, traffic-based pricing"}),Object(i.jsx)("p",{children:"Sign-up for our 30-day trial. No credit card required."})]})},r=t(2),j=function(e){var c=e.checked,t=e.handleChecked;return Object(i.jsxs)("label",{className:"label ".concat(c&&"green"),children:[Object(i.jsx)("span",{className:"ball ".concat(c?"move-right":"move-left")}),Object(i.jsx)("input",{className:"checkbox",type:"checkbox",checked:c,onChange:t})]})},d=[8,12,16,24,36],b=["10K","50K","100K","500K","1M"],o=function(){var e=Object(s.useState)("2"),c=Object(r.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(!1),l=Object(r.a)(a,2),o=l[0],h=l[1],O=Object(s.useState)(50),u=Object(r.a)(O,2),x=u[0],p=u[1],m=Object(s.useCallback)((function(e){n(e.target.value)}),[]),g=Object(s.useMemo)((function(){return console.log("i ran"),o?(.75*d[t]).toFixed(2):d[t].toFixed(2)}),[t,o]);return Object(s.useEffect)((function(){p(t/4*100)}),[t]),console.log(x),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("div",{className:"top",children:[Object(i.jsxs)("div",{className:"heading",children:[Object(i.jsxs)("p",{className:"page-views",children:["$",b[t]," PAGEVIEWS"]}),Object(i.jsxs)("p",{children:[Object(i.jsxs)("span",{children:["$",g]})," / month"]})]}),Object(i.jsx)("input",{style:{background:"linear-gradient(to right, hsl(174, 77%, 80%) ".concat(x,"%, hsl(224, 65%, 95%) 0%)")},className:"slider",type:"range",min:"0",max:"4",step:"1",value:t,onChange:m}),Object(i.jsxs)("div",{className:"billing",children:[Object(i.jsx)("p",{children:"Monthly Billing"}),Object(i.jsx)(j,{checked:o,handleChecked:function(e){h(e.target.checked)}}),Object(i.jsxs)("div",{className:"yearly",children:[Object(i.jsx)("p",{children:"Yearly Billing"}),Object(i.jsx)("p",{className:"discount",children:"25% discount"})]})]})]}),Object(i.jsxs)("div",{className:"bottom",children:[Object(i.jsxs)("div",{className:"features",children:[Object(i.jsx)("p",{children:"Unlimited Websites"}),Object(i.jsx)("p",{children:"100% data ownership"}),Object(i.jsx)("p",{children:"Email reports"})]}),Object(i.jsx)("button",{children:"Start my trial"})]})]})},h=(t(10),function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)(o,{})]})});a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f5016fcd.chunk.js.map