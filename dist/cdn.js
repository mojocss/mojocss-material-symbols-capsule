var materialSymbols;!function(){"use strict";var t={d:function(e,i){for(var l in i)t.o(i,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:i[l]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};!function(){function i(){let t={type:["Outlined"],fill:!0,weight:400,grade:0,size:24,...this.options};Array.isArray(t.type)||(t.type=["Outlined"]);let e="0..1";!1===t.fill&&(e="0"),!0===t.fill&&(e="1"),t.fill=e,t.weight<100&&(t.weight=100),t.weight>700&&(t.weight=700),t.grade<-25&&(t.grade=-25),t.grade>200&&(t.grade=200),t.size<20&&(t.size=20),t.size>48&&(t.size=48);const i=[];for(let e of t.type)e=e.trim(),i.push(`family=Material+Symbols+${e}:opsz,wght,FILL,GRAD@${t.size},${t.weight},${t.fill},${t.grade}`);this.setConfig({base:{fonts:{material:{symbols:"https://fonts.googleapis.com/css2?"+i.join("&")}}}}),"0..1"===t.fill&&this.addPatterns({".symbols-filled":"font-variation-settings: 'FILL' 1;"})}t.d(e,{default:function(){return i}})}(),materialSymbols=e.default}();