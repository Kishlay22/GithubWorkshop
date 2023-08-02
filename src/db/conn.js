const mongoose=require("mongoose");
mongoose.set("strictQuery",false);
require('dotenv').config();

mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connected ")
}).catch((e)=>{
    console.log("database not connected");
});

