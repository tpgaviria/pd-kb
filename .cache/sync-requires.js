const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tgaviria/Desktop/Projects/pd-kb/.cache/dev-404-page.js"))),
  "component---src-components-article-template-js": hot(preferDefault(require("/Users/tgaviria/Desktop/Projects/pd-kb/src/components/article-template.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tgaviria/Desktop/Projects/pd-kb/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tgaviria/Desktop/Projects/pd-kb/src/pages/index.js")))
}

