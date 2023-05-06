const recepies=require('../model/recipiesModel')

const getRecepie = (req, res) => {
  recepies.getAll(function(err,rslt){
  if (err) res.status(500).send(err)
  else res.json(rslt)
})
};

const addRecepie=(req,res)=>{
    const newRecepie=req.body
  recepies.add(newRecepie,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
}

module.exports = {
  getRecepie,
  addRecepie
};
