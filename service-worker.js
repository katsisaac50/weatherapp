"use strict";var precacheConfig=[["/weatherapp/index.html","f812b2f677aee421433cf0d6597738f2"],["/weatherapp/static/css/main.a827558d.css","41e9746ae88ac85edd5a15ea857b733e"],["/weatherapp/static/js/main.c7222a66.js","ecdccb589a80284e8a9c48f1c6bcd9f2"],["/weatherapp/static/media/artwork.cb59cc30.jpg","cb59cc304b0c0546c0683b506f212dad"],["/weatherapp/static/media/c.7e286ee7.svg","7e286ee7054fee2b9964f562c68be7c6"],["/weatherapp/static/media/h.6bd9a25a.svg","6bd9a25a0f6d2f9763ffbc56be6f4086"],["/weatherapp/static/media/hc.3cfae170.svg","3cfae17047d8cc4040613aa4d89fce21"],["/weatherapp/static/media/hr.e4421ea0.svg","e4421ea02ac018394df8b656a0f0476e"],["/weatherapp/static/media/lc.751f7d15.svg","751f7d15dd12489b674dd1ce1ec8f741"],["/weatherapp/static/media/lr.8d24156b.svg","8d24156b4b49ada79f6d6addd92f9c70"],["/weatherapp/static/media/s.12c99f3c.svg","12c99f3cbcde1731cef43c8a3985b354"],["/weatherapp/static/media/sl.4729dec8.svg","4729dec81dae34307d842e2e48906709"],["/weatherapp/static/media/sn.8e64c51e.svg","8e64c51e1e5b1b19ef8d6329bf2e6588"],["/weatherapp/static/media/t.0228ea65.svg","0228ea650e4f414667cead94013bf730"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/weatherapp/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});