if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return i[e]||(o=new Promise((async o=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=o}else importScripts(e),o()}))),o.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},o=(o,i)=>{Promise.all(o.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(o)};self.define=(o,n,a)=>{i[o]||(i[o]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+o.slice(1)};return Promise.all(n.map((o=>{switch(o){case"exports":return i;case"module":return s;default:return e(o)}}))).then((e=>{const o=a(...e);return i.default||(i.default=o),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Ma6Z0RAjPmGUJjrikK1xP/_buildManifest.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/Ma6Z0RAjPmGUJjrikK1xP/_ssgManifest.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/59-e394456c50b724924daf.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/675-b5c9499f253bf5e8de00.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/main-58a3b72eff9113cadb0f.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/404-06d4d39829d19d777748.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/_app-452d64e38abcf9f9ede7.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/blog-f8cfcf63090eaf5b7008.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-82e085981ead8dce39a0.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/bucket-list-012a6e2efe76cd428691.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/index-2f40f7f5d96957a94792.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/pages/the-phamous-6a3c3d2f038e2a395cf5.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/chunks/webpack-f47d69457824065d04c3.js",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/1e2e7453a6367f0c29fb.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/4c5eced3aa694692a52d.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/7b407b7e6134308251d2.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/9dd64981368d0d5a7f63.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/b98c09c6f1a991dff443.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/bc9e3f6dc979b1958b00.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/css/e2d41ced7794984ffd3a.css",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/_next/static/image/public/be-phamous.cf2ecb8dbeff1c5058cee2e7b085e04c.png",revision:"Ma6Z0RAjPmGUJjrikK1xP"},{url:"/be-phamous.png",revision:"d9ee1c139dcf67bbda7a025b7dc0b716"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-100italic.woff",revision:"0dc4c50f0241ec261f619c4725af8fe7"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-100italic.woff2",revision:"9c5de6a3504d953d0eced4f3e6ffa234"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-200.woff",revision:"caf045ea900f0f3cb16fb58869ab3201"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-200.woff2",revision:"dd0420991cc8f5a1ff098dc7473750e5"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-200italic.woff",revision:"ed3d7578d9d812ae7641c47d1dcb8f83"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-200italic.woff2",revision:"daec5f7f172bc1b9a4066d637f26c809"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-300.woff",revision:"b0cda08e9fdaa9dd5e700d3a58e19d3d"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-300.woff2",revision:"7949068d479db18a60f2cf61b6bf2756"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-300italic.woff",revision:"cffb1b2364180c90c0d7bd9512c36687"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-300italic.woff2",revision:"113256108532fb220c2b23b0a4396d0c"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-500.woff",revision:"99275686593f91cbdf1035c8216d375d"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-500.woff2",revision:"b3d75110ab515440cd8ac698f669b6d2"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-500italic.woff",revision:"17ffc400beaddd1044ec514455622481"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-500italic.woff2",revision:"3731d318ed75e843d78254d9c9d1837e"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-600.woff",revision:"d8c9603b5541819a796694260cc8b0a6"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-600.woff2",revision:"7577ca36fed1089b15c7ae5730fa3805"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-600italic.woff",revision:"01a9f59c8311cd1c4857fb261077e468"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-600italic.woff2",revision:"d78ab8c1ba8b48fb77705fbf0078d35a"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-700.woff",revision:"9d793a8d492ee02df891e473d9267325"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-700.woff2",revision:"d6ba0e99c52d53b707dbd0d00f0a4d10"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-700italic.woff",revision:"4f6a4879558ca07bf08f179b3c82b587"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-700italic.woff2",revision:"661269000c136494c15e652da3d92fc2"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-italic.woff",revision:"a1cc60361c99f033672f308f0398a6d0"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-italic.woff2",revision:"ec00892e2a475b20737a4e10b15737b5"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-regular.woff",revision:"0f03f6f8fedfdf7b895f8e633a76a511"},{url:"/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-regular.woff2",revision:"d8ab6e6b16f310580e0570584c0ce6d4"},{url:"/images/blog/animated-product-updates.jpeg",revision:"eb313c49e299751401689eaebf12b15c"},{url:"/images/blog/microsoft-teams-presence.jpeg",revision:"738b551fc8d8ed0d1e551c9c223e1e57"},{url:"/images/favicon/android-chrome-192x192.png",revision:"7c1f66f3bbf0827acb0f352ea5a783ca"},{url:"/images/favicon/android-chrome-512x512.png",revision:"5b1809e0115517e563c7c1d06457a4b3"},{url:"/images/favicon/apple-touch-icon-114x114.png",revision:"a072aa5287e4874ffc592dec2f9a0e38"},{url:"/images/favicon/apple-touch-icon-120x120.png",revision:"5349abae2859eb2dd503939bba74db5c"},{url:"/images/favicon/apple-touch-icon-144x144.png",revision:"bfe198b1f33dbac07bf53c6e8cf221a0"},{url:"/images/favicon/apple-touch-icon-152x152.png",revision:"21c8870b1de587d79736fe82e1fa5f80"},{url:"/images/favicon/apple-touch-icon-167x167.png",revision:"1880096df1d7d98e945a977ab367cd64"},{url:"/images/favicon/apple-touch-icon-180x180.png",revision:"8d83f4705163b88f02c779bb6187142a"},{url:"/images/favicon/apple-touch-icon-57x57.png",revision:"6029adb695d77890e7d6976f1c4fdce7"},{url:"/images/favicon/apple-touch-icon-60x60.png",revision:"b49a2b30b2f4d55478cd4d793f3c3f5a"},{url:"/images/favicon/apple-touch-icon-72x72.png",revision:"4984bb5a10de1a491a32e0952460b6b1"},{url:"/images/favicon/apple-touch-icon-76x76.png",revision:"1e17d2cea1fa0e8223cafbd0ffc4e79a"},{url:"/images/favicon/favicon-128x128.png",revision:"b60b4502dd0aca875db45fcd66a5f33e"},{url:"/images/favicon/favicon-16x16.png",revision:"157ca9919fd7e25a02e7472d6d987c3c"},{url:"/images/favicon/favicon-196x196.png",revision:"81094a6f0a99ae0163f7e61e58aceec7"},{url:"/images/favicon/favicon-32x32.png",revision:"6d84a75350e7b05c3524f90d4c959ee0"},{url:"/images/favicon/favicon-96x96.png",revision:"5d508b5c2c5fa39e1c460c7c278beec7"},{url:"/images/favicon/mstile-144x144.png",revision:"bfe198b1f33dbac07bf53c6e8cf221a0"},{url:"/images/favicon/mstile-150x150.png",revision:"1bfe6b21b17b4b5172c25c731bd017b1"},{url:"/images/favicon/mstile-310x150.png",revision:"8975455ddb79a9e246e1c5c825dfd073"},{url:"/images/favicon/mstile-310x310.png",revision:"7d6582efa800392a801d0280de32e120"},{url:"/images/favicon/mstile-70x70.png",revision:"be7518b28d020d234bd192dc7d63a6e4"},{url:"/images/hero.png",revision:"d1c3914769776494bfc44455f6a0f5e2"},{url:"/live-captions-privacy-policy.txt",revision:"d1a6e5dc053abe8446163806f2ef26a8"},{url:"/manifest.json",revision:"e33efec92d2cefe3189f37c941a9741d"},{url:"/strava/index.html",revision:"896e97ceca918d1423e57cd042779e4e"},{url:"/strava/index.js",revision:"68a4169cc38c23e5222f22dd35d5f40b"},{url:"/strava/interactions.js",revision:"06a725183aa510b73b9f26811185e3bc"},{url:"/strava/style.css",revision:"058618689fefd2c2b573679a29e13f82"},{url:"/strava/upload.js",revision:"8d6fe229f534651a457a563599cba4ef"},{url:"/tetris-meets-snake/index.html",revision:"8b934d311c560dc8fa5e853a3f543839"},{url:"/tetris-meets-snake/scripts/index.js",revision:"51b1cdeede06d8e221ebb7c34d5e2902"},{url:"/tetris-meets-snake/scripts/intro.js",revision:"9a2d2cd37973011bd2c8619dcbc81d75"},{url:"/tetris-meets-snake/styles/index.css",revision:"6c27916dee211cdc7376b8d3b5da8c42"},{url:"/tetris-meets-snake/styles/intro.css",revision:"ff1b67b0e27fceb02f4c176e509e53c5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:o,event:i,state:n})=>o&&"opaqueredirect"===o.type?new Response(o.body,{status:200,statusText:"OK",headers:o.headers}):o}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const o=e.pathname;return!o.startsWith("/api/auth/")&&!!o.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
