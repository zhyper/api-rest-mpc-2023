module.exports = (sequelize, Sequelize) => {
    const Parametro = sequelize.define("parametro",{
        cod_zona:{
            type: Sequelize.STRING
        },
        zona:{
            type: Sequelize.STRING
        },
    });

    return Parametro;
}