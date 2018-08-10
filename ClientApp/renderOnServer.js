process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');

const prerendering = require('aspnet-prerendering');

const filePath = path.join(__dirname, '../wwwroot/dist/main-server.js')
const code = fs.readFileSync(filePath, 'utf8');

const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);

module.exports = prerendering.createServerRenderer(function (params) {
  console.log(params);
  return new Promise(function (resolve, reject) {
    const context = { url: params.url };  
    
    console.log("--- ssr ---", params.url);
    bundleRenderer.renderToString(context, (err, resultHtml) => {
      if (err) {
        console.error("--- ssr ---", err.message);
        reject(err.message);
      }
      resolve({
        html: resultHtml,
        globals: {
          __INITIAL_STATE__: context.state,
          __USER_DATA: params.data
        }
      });
    });
  });
});