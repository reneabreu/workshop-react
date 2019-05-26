const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://localhost:400/orders' }));
    app.use(proxy('/api', { target: 'http://localhost:400/users' }));
    app.use(proxy('/api', { target: 'http://localhost:400/clients' }));
    app.use(proxy('/api', { target: 'http://localhost:400/services' }));
  };