const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/pages/about.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/pages/elements.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/pages/tags.js"))),
  "component---src-templates-product-details-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/templates/product-details.js"))),
  "component---src-templates-tag-page-js": hot(preferDefault(require("/Users/tiffanyabraham/Development/2021/tobaccohut/tobacco-hut-website/src/templates/tag-page.js")))
}

