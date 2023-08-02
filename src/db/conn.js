const mongoose=require("mongoose");
mongoose.set("strictQuery",false);

mongoose.connect("mongodb+srv://kishlay455:04bM2593sqylHvgb@cluster0.0xuewuc.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connected ")
}).catch((e)=>{
    console.log("database not connected");
});

