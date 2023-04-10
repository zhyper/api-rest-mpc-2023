module.exports = (sequelize, DataTypes) => {
    const Parametro = sequelize.define("parametro",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tipo_area: DataTypes.STRING,//` varchar(255) DEFAULT NULL,
        cod_tipo_area: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        tipo_zona: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        cod_tipo_zona: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        zona: DataTypes.STRING,//` varchar(255) DEFAULT NULL,
        cod_zona: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        usos: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        densidad_neta: DataTypes.INTEGER, //` int(11) DEFAULT NULL,
        lote_minimo: DataTypes.INTEGER, //` int(11) DEFAULT NULL,
        frente_minimo: DataTypes.INTEGER, //` int(11) DEFAULT NULL,
        altura_edifica: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        coeficiente_edifica: DataTypes.FLOAT, //` float DEFAULT NULL,
        area_edifica: DataTypes.INTEGER,//` int(11) DEFAULT NULL,
        area_libre: DataTypes.INTEGER, //` int(11) DEFAULT NULL,
        estacionamiento: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        nivel_servicio: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        lote_frente_minimo: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        residencial_compatible: DataTypes.STRING, //` varchar(255) DEFAULT NULL,
        agno_aprobacion: DataTypes.STRING//` varchar(255) DEFAULT NULL
    },{
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        timestamps: false,

  // define the table's name
        tableName: 't_parametro_urbano_pdu'
    });

    return Parametro;
}