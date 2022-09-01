const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./data");
const Men=require("./model");

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("jj");
    
})

app.post("/add",async(req,res)=>{

    try{
        const ad=new Men(req.body);
        console.log(req.body);
        const insert=await ad.save();
        res.send(insert);
        

    }catch(err){
        console.log(err);
        res.send(err);
    }


})
app.listen(8000,()=>{
console.log("successfull");

})