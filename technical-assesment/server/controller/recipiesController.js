const recepies=require('../model/recipiesModel')

const getrecepie = (req, res) => {
  recepies.getAll(function(err,rslt){
  if (err) res.status(500).send(err)
  else res.json(rslt)
})
};

module.exports = {
  getrecepie,
};
