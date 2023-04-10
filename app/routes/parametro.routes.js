module.exports = app => {
    const parametros = require("../controllers/parametro.controller");

    var router = require("express").Router();

    router.get("/", parametros.findAll);

    app.use('/api/parametros', router);
}