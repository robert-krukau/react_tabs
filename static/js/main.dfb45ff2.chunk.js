(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(4),i=n(5),b=n(7),l=n(6),o=n(1),r=n.n(o),d=(n(12),n(0)),u=function(t){var e=t.tabs,n=t.selectedTabId,a=t.onTabSelected,c=e.find((function(t){return t.id===n}));return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("ul",{className:"tabs__list",children:e.map((function(t,e){return Object(d.jsx)("li",{className:"tabs__list__item",children:Object(d.jsx)("button",{type:"button",className:n===t.id?"tabs__list__button tabs__list__button--active":"tabs__list__button",onClick:function(){return a(e)},children:t.title})},t.id)}))}),Object(d.jsx)("p",{className:"tabs__content",children:null===c||void 0===c?void 0:c.content})]})},j=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),_=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.onTabSelected=function(e){t.setState({selectedTab:j[e]})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab,e=t.id,n=t.title;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Selected tab is ".concat(n)}),Object(d.jsx)(u,{tabs:j,selectedTabId:e,onTabSelected:this.onTabSelected})]})}}]),n}(r.a.Component);c.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dfb45ff2.chunk.js.map