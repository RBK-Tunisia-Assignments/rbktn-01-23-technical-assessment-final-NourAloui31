const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
//const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const sql=`SELECT * FROM RECEPIE`
    connection.query(sql, function(err,rslt){
        callback(err,rslt)
    })
};

module.exports = { getAll };
