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

const deleteR=(id,callback)=>{
    const sql=`DELETE FROM RECEPIE WHERE recepie_Id=${id}`
    connection.query(sql,function(err,rslt){
        callback(err,rslt)
    })
}

const updateR=(id,newR,callback)=>{
    const sql=`UPDATE RECEPIE SET Cook_Time=${newR.cookT},
    Prep_Time=${newR.prepT},
    recepie_Name='${newR.name}',
    Serves=${newR.serves},
    categorie='${newR.category}',
    recepie_Image='${newR.image}',
    recepie_Description='${newR.description}',
    recepie_Ingredients='${newR.ingredients}',
    users_user_Id=1 WHERE recepie_Id=${id}` 
    connection.query(sql,function(err,rslt){
        callback(err,rslt)
    })
}

module.exports = { getAll , add, deleteR, updateR};
