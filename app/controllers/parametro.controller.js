const db = require("../models");
const Parametro = db.parametros;

exports.findAll = (req, res)=>{
    Parametro.findAll()
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}

exports.findOne = (req, res) => {
    const cod_zona = req.params.cod_zona;

    Parametro.findOne({ where: {cod_zona:cod_zona}})
    .then(data => {
        if (data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encuentra el Parametro con cod_zona=${id}.`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error trayendo el Parametro con cod_zona=" + id
        })
    })
}