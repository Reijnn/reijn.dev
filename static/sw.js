if(!self.define){let e,f={};const n=(n,a)=>(n=new URL(n+".js",a).href,f[n]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=f,document.head.appendChild(e)}else e=n,importScripts(n),f()})).then((()=>{let e=f[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(f[d])return;let o={};const r=e=>n(e,d),s={module:{uri:d},exports:o,require:r};f[d]=Promise.all(a.map((e=>s[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-85135f18"],(function(e){"use strict";e.setCacheNameDetails({prefix:"reijn.dev"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/bundle.min.205d491810c28f95aa953fae884e1c27abe13fdf93ec63b882d0036b248d4a6282eb2d134e4e7225c6ad6e86db87b08488a361ca4a7383d01fcff43f3d57b9c3.js",revision:"20af2422b17de3de76023d0c20ca3810"},{url:"/css/flag-icons.min.css",revision:"d5dc894c59fda2214fed1ecf6f70b7e9"},{url:"/fonts/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/main.10ee41d0d2684794b51b3d4267727f5e6f95d010560d4c8dc0af5607658b6b43.css",revision:"db9b952bd8a6b0e65b8c2cd1d646167d"},{url:"/sw.js",revision:"017cad3f48056abaff0325ae3ccb007d"},{url:"/workbox-85135f18.js",revision:"8fddcaa73cbe85682f47a7d84abc434f"}],{ignoreURLParametersMatching:[/./]}),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=sw.js.map
