const express = require("express");
const router= require("./routes/recipiesRoute");
const app = express();
const PORT = 4000;
const cors=require("cors")

// TODO - add additional route handlers as necessary

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/menuItems",router)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
