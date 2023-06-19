const express = require("express");
const { OemModel } = require("../models/oem.model");

const OemRoutes = express.Router();

OemRoutes.post('/search', async (ask, give) => {
    const searchTerms = ask.body 
    try {
        const cars = await OemModel.find({
            Make: { $regex: searchTerms[0],$options:'i' },
            Year: Number(searchTerms[2]) ,
            Model: { $regex: searchTerms[1] ,$options:'i'}
          }).limit(20)
      give.send(cars);
    } catch (error) {
        console.log(error)
    }}) 

OemRoutes.get('/years', async (ask, give) => {
    try {
        const distinctYears = await OemModel.distinct('Year')
        give.send(distinctYears);
    } catch (error) {
        console.error(error);
        give.status(500).json({ error: 'Internal server error' });
    }
});

  module.exports={
    OemRoutes
  }