const express=require("express");
const { default: mongoose } = require("mongoose");

const men=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true

    },
    tech:{
        type:String,
        required:true,
        trim:true
    }


})

const Men=new mongoose.model("Men",men);

module.exports=Men;
