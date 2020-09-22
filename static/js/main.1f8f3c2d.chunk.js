(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(99),a(24)),l=a.n(s),i=a(35),u=a(15),m=a(237),f=a(238),d=a(239),p=a(231),h=a(235),v=a(87),b=a(17),E=a.n(b),g=a(240),y=a(241),x={cases:{hex:"#386eab",rgb:"rgb(154, 182, 214)",half_op:"rgb(154, 182, 214,0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgba(125,215,29)",half_op:"rgba(125,215,29,0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgba(251,68,67)",half_op:"rgba(251,68,67,0.5)",multiplier:2e3}},j=function(e){return e?"".concat(E()(e).format("0.0a")):"+0"},O=function(e){var t=Object(v.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},_=a(54),w=(a(102),a(236));var k=function(e){var t=e.title,a=(e.cases,e.isRed),n=e.active,c=e.total,o=Object(_.a)(e,["title","cases","isRed","active","total"]);return r.a.createElement(p.a,{onClick:o.onClick,className:"infoBox ".concat(n&&"infoBox--selected"," ").concat(a&&"infoBox--red")},r.a.createElement(h.a,null,r.a.createElement(w.a,{className:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!a&&"infoBox__cases--green")},c," Total")))},N=a(242),C=a(243);a(105);var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(N.a,{center:n,zoom:c},r.a.createElement(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(g.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:x[t].hex,fillColor:x[t].hex,radius:Math.sqrt(e[t])*x[t].multiplier},r.a.createElement(y.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases:",E()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered:",E()(e.recovered).format("0,0")," "),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",E()(e.deaths).format("0,0")))))}))}(t,a)))};a(106);var I=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e,t){var a=e.country,n=e.cases,c=e.countryInfo;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("div",{className:"info-fla"},r.a.createElement("img",{src:c.flag,style:{height:"26px",width:"38px"}}))),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("strong",null,E()(n).format("0,0"))))})))},W=a(86),B={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}},D={cases:{hex:"#386eab",rgb:"rgb(154, 182, 214)",half_op:"rgb(154, 182, 214,0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgba(125,215,29)",half_op:"rgba(125,215,29,0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgba(251,68,67)",half_op:"rgba(251,68,67,0.5)",multiplier:2e3}},R=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(_.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1],d=function(e){var t,n=[];for(var r in e.cases){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=d(e);f(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:c.className},(null===m||void 0===m?void 0:m.length)>0&&r.a.createElement(W.Line,{options:B,data:{datasets:[{borderColor:D[a].hex,backgroundColor:D[a].half_op,data:m}]}}))};var T=function(){return r.a.createElement("div",{style:{textAlign:"center",color:"black"}},"Made With \u2764\ufe0f by Kushagra |"," ",r.a.createElement("a",{style:{textDecoration:"none"},target:"_blank",href:"https://myportfolio-kush.netlify.app/"},"Contact Developer"))};a(203),a(204);var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldWide"),s=Object(u.a)(o,2),v=s[0],b=s[1],E=Object(n.useState)({}),g=Object(u.a)(E,2),y=g[0],x=g[1],_=Object(n.useState)([]),w=Object(u.a)(_,2),N=w[0],C=w[1],W=Object(n.useState)({lat:20.5937,lng:78.9629}),B=Object(u.a)(W,2),D=B[0],M=B[1],z=Object(n.useState)(3),A=Object(u.a)(z,2),L=A[0],J=A[1],V=Object(n.useState)([]),Y=Object(u.a)(V,2),q=Y[0],F=Y[1],K=Object(n.useState)("cases"),$=Object(u.a)(K,2),G=$[0],H=$[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){x(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=O(e);C(a),F(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldWide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){b(a),x(e),M("worldWide"===a?{lat:20.5937,lng:78.9629}:[e.countryInfo.lat,e.countryInfo.long]),J(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_left"},r.a.createElement("div",{className:"app_header"},r.a.createElement("h1",{style:{color:"#386eab",textShadow:"2px 1px lavender"}},"COVID-19 LIVE"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",onChange:P,value:v},r.a.createElement(d.a,{value:"worldWide"},"WorldWide"),a.map((function(e,t){return r.a.createElement(d.a,{key:t,value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(k,{isRed:!0,active:"cases"===G,onClick:function(e){return H("cases")},title:"Cases",cases:j(y.todayCases),total:j(y.cases)}),r.a.createElement(k,{title:"Recovered",active:"recovered"===G,onClick:function(e){return H("recovered")},cases:j(y.todayRecovered),total:j(y.recovered)}),r.a.createElement(k,{isRed:!0,active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",cases:j(y.todayDeaths),total:j(y.deaths)})),r.a.createElement(S,{casesType:G,countries:q,center:D,zoom:L})),r.a.createElement("div",{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("h3",null,"Live cases by Country"),r.a.createElement(I,{countries:N}),r.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",G),r.a.createElement(R,{className:"app__graph",casesType:G}))),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.1f8f3c2d.chunk.js.map