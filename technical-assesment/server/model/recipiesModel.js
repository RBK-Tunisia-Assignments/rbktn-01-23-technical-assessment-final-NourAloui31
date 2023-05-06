const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
//const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const sql=`SELECT * FROM RECEPIE`
    connection.query(sql, function(err,rslt){
        callback(err,rslt)
    })
};

const add=(newRecepie,callback)=>{
    const sql=`INSERT INTO RECEPIE SET
    Cook_Time=${newRecepie.cookT},
    Prep_Time=${newRecepie.prepT},
    recepie_Name='${newRecepie.name}',
    Serves=${newRecepie.serves},
    categorie='${newRecepie.category}',
    recepie_Image='${newRecepie.image}',
    recepie_Description='${newRecepie.description}',
    recepie_Ingredients='${newRecepie.ingredients}',
    users_user_Id=1`
    connection.query(sql,function(err,rslt){
        callback(err,rslt)
    })
}

module.exports = { getAll , add};
