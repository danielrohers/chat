'use strict';

module.exports = app => {

    const routes = require('../app/routes/index');
    const chat = require('../app/routes/chat');

    app.use('/', routes);
    app.use('/chat', chat);

    // catch 404 and forward to error handler
    app.use( (req, res, next) => {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers
    app.use( (err, req, res, next) => {
        res.status(err.status || 500).render('error', {
            message: err.message,
            error: app.get('env') === 'development' ? err : {}
        });
    });

}
