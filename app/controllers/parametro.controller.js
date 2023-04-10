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