module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=n(1),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t,n,r=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ip.nf/me.json");case 2:e.sent.json().then((function(e){return b(e.ip.ip)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,u){try{var o=e[a](u),l=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(l).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(l)}("next")}))},function(){return n.apply(this,arguments)}),l=(0,u.useState)(""),i=a(l,2),c=i[0],s=i[1],f=(0,u.useState)(!1),m=a(f,2),d=m[0],p=m[1],v=(0,u.useState)(""),y=a(v,2),h=y[0],b=y[1];(0,u.useEffect)((function(){r()}));return o.default.createElement("form",{className:e.formClass,onSubmit:function(t){t.preventDefault();var n="https://api.hsforms.com/submissions/v3/integration/submit/"+e.portalId+"/"+e.formId,r=document.cookie.split(";").reduce((function(e,t){var n=t.split("=").map((function(e){return e.trim()})),r=a(n,2),u=r[0],o=r[1];return e[u]=o,e}),{}),u={fields:[{name:"email",value:""+c},{name:""+e.name2,value:""+e.value2},{name:""+e.name3,value:""+e.value3},{name:""+e.name4,value:""+e.value4},{name:""+e.name5,value:""+e.value5}],context:{hutk:r.hubspotutk,pageUri:""+e.pageUri,pageName:""+e.pageName,ipAddress:""+h}};fetch(n,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log("success",e)})).catch((function(e){return console.log("error: ",e)})),p(!0),s("")}},o.default.createElement("label",{htmlFor:"email"},"Email address"),o.default.createElement("input",{className:e.inputClass,type:"email",name:"email",placeholder:"Enter your email address",onChange:function(e){s(e.target.value)},value:c,required:!0}),o.default.createElement("div",{className:"hidden"},o.default.createElement("input",{type:"text",name:e.name2,value:e.value2,readOnly:!0}),o.default.createElement("input",{type:"text",name:e.name3,value:e.value3,readOnly:!0}),o.default.createElement("input",{type:"text",name:e.name4,value:e.value4,readOnly:!0}),o.default.createElement("input",{type:"text",name:e.name5,value:e.value5,readOnly:!0})),d?o.default.createElement("p",null,e.submitMessage):o.default.createElement("input",{className:submitButton.class,value:submitButton.value,id:submitButton.id,type:"submit"}))}},function(e,t){e.exports=require("react")}]);