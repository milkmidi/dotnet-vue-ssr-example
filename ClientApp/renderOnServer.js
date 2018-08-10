process.env.VUE_ENV = 'server';

const fs = require('fs');
const path = require('path');

const prerendering = require('aspnet-prerendering');

const filePath = path.join(__dirname, '../wwwroot/dist/main-server.js')
const code = fs.readFileSync(filePath, 'utf8');

const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);

module.exports = prerendering.createServerRenderer(function (params) {
  return new Promise(function (resolve, reject) {
    const context = { url: params.url };  
    
    bundleRenderer.renderToString(context, (err, resultHtml) => {
      console.log(resultHtml);
      if (err) {
        reject(err.message);
      }
      resolve({
        html: resultHtml,
        globals: {
          __INITIAL_STATE__: context.state
        }
      });
    });
  });
});