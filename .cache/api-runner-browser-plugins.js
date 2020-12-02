module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-autolink-headers","options":{"elements":["h2","h3","h4"]}},{"resolve":"gatsby-remark-embed-video","options":{"width":800,"ratio":1.77,"height":400,"related":false,"noIframeBorder":true,"urlOverrides":[{"id":"youtube"}],"containerClass":"embedVideo-container"}},{"resolve":"gatsby-remark-table-of-contents","options":{"exclude":"Table of Contents","tight":false,"fromHeading":1,"toHeading":6,"className":"table-of-contents"}}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
