!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===C.call(t)}function o(t){return"[object ArrayBuffer]"===C.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===C.call(t)}function d(t){return"[object File]"===C.call(t)}function p(t){return"[object Blob]"===C.call(t)}function h(t){return"[object Function]"===C.call(t)}function m(t){return f(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function x(t,e,n){return w(e,function(e,r){t[r]=n&&"function"==typeof e?E(e,n):e}),t}var E=n(3),T=n(10),C=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:T,isFormData:i,isArrayBufferView:s,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:l,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:w,merge:b,extend:x,trim:y}},function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(0),i=n(13),s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(4):void 0!==e&&(t=n(4)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(s)}),t.exports=u}).call(e,n(12))},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";var r=n(0),o=n(14),i=n(16),s=n(17),u=n(18),a=n(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);t.exports=function(t){return new Promise(function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||u(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";d.Authorization="Basic "+c(v+":"+y)}if(p.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,i),p=null}},p.onerror=function(){f(a("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(20),w=(t.withCredentials||u(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(d[t.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},function(t,e,n){"use strict";var r=n(15);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),u=(r(s),n(28)),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),c=n(29),f=r(c),l=n(30),d=r(l),p="https://todo-simple-api.herokuapp.com/todos",h=new f.default,m=new d.default,v=void 0,y=void 0;new(function(){function t(){var e=this;o(this,t),document.getElementsByTagName("body")[0].appendChild(h.divouter),a.get(p).then(function(t){t.data.data.forEach(function(t){e.createDiv(t)}),document.getElementsByTagName("body")[0].appendChild(m.divouterform)}),m.submitButton.onclick=function(t){t.preventDefault(),alert("press ok to submit"),a.post(p,{title:m.formtitle.value,description:m.formdescription.value,isComplete:!1}).then(function(t){v=t.data.data.id,console.log(v),y={id:v,title:m.formtitle.value,isComplete:!1},e.createDiv(y)})}}return i(t,[{key:"createDiv",value:function(t){var e=this;this.div=document.createElement("div"),this.div.setAttribute("class","main-div clearfix"),this.div.setAttribute("id",t.id),this.divleft=document.createElement("div"),this.divleft.setAttribute("class","main-div-left"),this.divleft.style.marginRight="50px",this.divleft.innerHTML=t.title,this.divid=document.createElement("div"),this.divid.setAttribute("class","main-div-left"),this.divid.innerHTML=t.id,this.divid.style.marginRight=10,this.divright=document.createElement("button"),this.divright.setAttribute("class","main-div-right"),this.divright.innerHTML="delete",this.divright.onclick=function(){e.delete(t.id),h.divouter.removeChild(document.getElementById(t.id))},this.div.appendChild(this.divid),this.div.appendChild(this.divleft),this.div.appendChild(this.divright),h.divouter.appendChild(this.div)}},{key:"delete",value:function(t){alert("delete"),a.remove(p,t)}}]),t}())},function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(0),i=n(3),s=n(11),u=n(1),a=r(u);a.Axios=s,a.create=function(t){return r(o.merge(u,t))},a.Cancel=n(7),a.CancelToken=n(26),a.isCancel=n(6),a.all=function(t){return Promise.all(t)},a.spread=n(27),t.exports=a,t.exports.default=a},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(1),i=n(0),s=n(21),u=n(22),a=n(24),c=n(25);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url));var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&u())}function u(){if(!m){var t=o(s);m=!0;for(var e=h.length;e;){for(p=h,h=[];++v<e;)p&&p[v].run();v=-1,e=h.length}p=null,m=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,h=[],m=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new a(t,e)),1!==h.length||m||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),s="",u=0,a=i;o.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&e>>8-u%1*8)){if((n=o.charCodeAt(u+=.75))>255)throw new r;e=e<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var u=[];u.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(23),s=n(6),u=n(1);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";function r(t){return(0,u.default)({method:"GET",url:t})}function o(t,e){return(0,u.default)({method:"POST",url:t,data:e})}function i(t,e){return(0,u.default)({method:"delete",url:t+"/"+e})}Object.defineProperty(e,"__esModule",{value:!0}),e.get=r,e.post=o,e.remove=i;var s=n(2),u=function(t){return t&&t.__esModule?t:{default:t}}(s)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function t(){r(this,t),this.divouter=document.createElement("div"),this.divouter.setAttribute("class","outer"),this.topic=document.createElement("div"),this.topic.innerHTML="List of Todos",this.divouter.appendChild(this.topic)};e.default=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function t(){r(this,t),this.divouterform=document.createElement("div"),this.divouterform.setAttribute("class","main-div-form"),this.formtitle=document.createElement("input"),this.formtitle.setAttribute("type","text"),this.formtitle.setAttribute("placeholder","title"),this.divouterform.appendChild(this.formtitle),this.formdescription=document.createElement("input"),this.formdescription.setAttribute("class","formdescription"),this.formdescription.setAttribute("type","text"),this.formdescription.setAttribute("placeholder","Description"),this.divouterform.appendChild(this.formdescription),this.submitButton=document.createElement("button"),this.submitButton.innerHTML="SUBMIT",this.divouterform.appendChild(this.submitButton)};e.default=o}]);