const express=require("express");
const app=express();
const path=require("path");
const port= process.env.PORT || 3000;

require("./db/conn");

const Registerstu=require("./model/schema"); 

const hbs=require("hbs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//const staticpath=path.join(__dirname,"../public");
const publicDirectoryPath = path.join(__dirname,'../templatess/views')
app.use(express.static(publicDirectoryPath));
const partialpath=path.join(__dirname,"../templatess/partials");
hbs.registerPartials(partialpath);


const templatepath=path.join(__dirname,"../templatess/views")
//app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templatepath);


app.get("/",(req,res)=>{
    res.render("register");
})


app.post("/register",(req,res)=>{
try{
   const studentdata=new Registerstu({
    First_Name:req.body.First_Name,
    Last_Name:req.body. Last_Name,
    Email_Id :req.body.Email_Id,
    Mobile_Number  :req.body.Mobile_Number,
    Gender :req.body.Gender,
    Batch:req.body.Batch,
    Branch:req.body.Branch,
    Locallite:req.body.Locallite
   })

   const datasave=studentdata.save();
   console.log(studentdata);
   res.status(201).render("successfull");
   


}catch(error){
    res.status(400).send(error);
}
})


app.listen(port,()=>{
    console.log("server is running");
});