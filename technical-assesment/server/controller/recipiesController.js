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

const deleteRecepie=(req,res)=>{
  const id=req.params.id
  recepies.deleteR(id,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })
}

const updateRecepie=(req,res)=>{
  const id=req.params.id
  const newR=req.body
  recepies.updateR(id,newR,function(err,rslt){
    if (err) res.status(500).send(err)
    else res.json(rslt)
  })

}

module.exports = {
  getRecepie,
  addRecepie,
  deleteRecepie,
  updateRecepie
};
