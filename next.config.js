
const path = require('path')

module.exports = {
  /* config options here */
  //"distDir": "build",
  //"exportTrailingSlash": true,
  //"assetPrefix": "https://~~~",
  images: {
    loader: "imgix",
    path: "",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
}