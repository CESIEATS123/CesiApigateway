"use strict";
const gateway = require('fast-gateway');
const port = 9091;
const server = gateway({
    routes: [{
            prefix: '/products',
            target: 'http://127.0.0.1:3000',
            hooks: {}
        }, {
            prefix: '/orders',
            target: 'http://127.0.0.1:3001',
            hooks: {}
        },
        {
            prefix: '/payements',
            target: 'http://127.0.0.1:3002',
            hooks: {}
        }, {
            prefix: '/livraisons',
            target: 'http://127.0.0.1:3003',
            hooks: {}
        }
    ]
});
server.get('/apigatetest', (req, res) => {
    res.send('Gateway called');
});
server.start(port).then(() => {
    console.log("Gateway is running " + port);
});
module.exports = fastgateway;
