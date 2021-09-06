const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/404.js"))),
  "component---src-pages-bio-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/bio.js"))),
  "component---src-pages-bucketlist-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/bucketlist.js"))),
  "component---src-pages-hall-of-fame-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/hall-of-fame.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/index.js"))),
  "component---src-pages-uses-js": hot(preferDefault(require("/Users/johnpham/repos/pham.codes/src/pages/uses.js")))
}

