const zingRouter = require('./zing');

function route(app) {

    app.use('/api/v1', zingRouter);

}

module.exports = route;