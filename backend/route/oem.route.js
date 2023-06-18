const express = require("express");
const { OemModel } = require("../models/oem.model");

const OemRoutes = express.Router();

OemRoutes.post('/search', async (req, res) => {
    const searchTerms = req.body 
    try {
        const cars = await OemModel.find({
            Make: { $regex: searchTerms[0],$options:'i' },
            Year: Number(searchTerms[2]) ,
            Model: { $regex: searchTerms[1] ,$options:'i'}
          })

      res.send(cars);
    } catch (error) {
        console.log(error)
    }
    
    }) 


  module.exports={
    OemRoutes
  }