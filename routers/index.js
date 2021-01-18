module.exports = function (app, server) {

    //require('./health')(app);
    require('./mongo')(app, server);

    //require('./users/role.routes')(app);
    require('./notas.router')(app);

    require('./public')(app);

}