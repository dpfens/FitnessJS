module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{sample,idx,pack,svg,jpg,css,html~,html,js,map,txt,json,xml}"
  ],
  "swSrc": "build/sw.js",
  "swDest": "./sw.js",
  "globIgnores": [
    "workbox-cli-config.js"
  ]
};
