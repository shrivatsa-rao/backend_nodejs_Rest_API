const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://shree:shree@cluster0.nwxz4.mongodb.net/vishnu?retryWrites=true&w=majority',()=>{
    console.log("connected to db");
});