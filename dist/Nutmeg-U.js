/**
 * @license
 * Copyright (c) 2016 Owen Shepherd
 * This software is open-source under the MIT license.
 * The full license can be viewed here: https://opensource.org/licenses/MIT
 *
 */
/**
  * @preserve
  * This is Nutmeg. a tiny client-side website generator.
  * Homepage: https://github.com/414owen/Nutmeg
  *
  */
function nutmeg(){function n(n,t){t.forEach(function(t){for(var e in t)n.style[e]=t[e]})}function t(n,e){switch(typeof e){case"function":n.appendChild(e.val);break;case"string":var o=r.createTextNode(e);n.appendChild(o);break;case"object":for(var i=0;i<e.length;i++)t(n,e[i]);break;default:t(n,e.toString())}}function e(n,t){t.forEach(function(t){n.classList.add(t)})}var r=document,o=window,i={};i.elify=function(r){var o=function(){return o.append(arguments),o};o.append=function(n){return t(r,n),o},o.link=function(n){return o.style([{cursor:"pointer"}]),o},o.style=function(t){var e=Array.prototype.slice.call(arguments);return e.forEach(function(t){n(r,t)}),o},o.classes=function(n){return e(r,n),o},o.attr=function(n,t){return r.setAttribute(n,t),o},o.prop=function(n,t){return r[n]=t,o},o.clear=function(){for(;r.firstChild;)r.removeChild(r.firstChild);return o},u.forEach(function(n){o[n]=function(t){return r.setAttribute(n,t),o}}),a.forEach(function(n){o[n]=function(t){return r[n]=t,o}});var i={};return f.forEach(function(n){var t=n+"funcs";i[t]={},o["rem"+n]=function(n){return delete i[t][n],o},o[n]=function(n,e){return i[t][n]=e,o},r[n]=function(){var n=i[t];for(var e in n)n[e]()}}),o.val=r,o};var c=["a","audio","b","br","button","canvas","datalist","div","em","footer","form","h1","h2","h3","h4","h5","h6","header","hr","i","input","item","label","li","menu","menuitem","meter","nav","noscript","ol","p","pre","progress","script","select","span","strong","table","tbody","td","textarea","tfoot","th","thead","tr","ul","video"],u=["alt","contenteditable","href","id","readonly","src","title","type"],a=["checked","disabled","height","selected","value","width"],f=["onblur","onchange","onclick","ondblclick","onfocus","onkeydown","onkeyup","onmousedown","onmouseout","onmouseover","onmouseup"];return i.body=function(){return i.elify(r.body).append(arguments)},c.forEach(function(n){i[n]=function(){return i.elify(r.createElement(n)).append(arguments)}}),i.mergeStyle=function(n){function t(e){void 0!==e.depends&&e.depends.forEach(function(e){t(n[e])}),o.push(e)}const e={};for(var r in n){var o=[];t(n[r]),e[r]=o}return e},i.global=function(){Object.keys(i).forEach(function(n){o[n]=i[n]})},i}