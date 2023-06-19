const express = require("express");
const jwt= require("jsonwebtoken")
const { MpModel } = require("../models/mp.model");

const MpRoutes=express.Router();

MpRoutes.post("/cars",async(ask,give)=>{
    let DealerId=await jwt.decode(ask.headers.authorization)
     try {
    if(DealerId.id){
let payload={
        CarId: ask.body.CarId,
        ImgUrl: ask.body.ImgUrl,
        DealerId: DealerId.id
      }
     
        let mp=new MpModel(payload)
      await mp.save()
      give.send({msg:"Listing Successfull"})
      
    }else{
        give.send({msg:"Not Authorised!"})
    }
    } catch (error) {
        console.log(error)
        give.send({msg:"Internal Server Error, Please Try Again Later"})
      }
      
})

MpRoutes.get("/cars",async())

module.exports={
    MpRoutes
}