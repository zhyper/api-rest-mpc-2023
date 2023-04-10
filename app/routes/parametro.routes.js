module.exports = app => {
    const parametros = require("../controllers/parametro.controller");

    var router = require("express").Router();

    router.get("/", parametros.findAll);
    router.get("/:cod_zona", parametros.findOne);

    app.use('/api/parametros', router);
}