(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("I am copy");var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra spaces removed!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview it here")))}s.defaultProps={title:"Set title here",aboutText:"About"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,null)))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.95860843.chunk.js.map