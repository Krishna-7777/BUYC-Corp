const mongoose=require("mongoose")

const schema=mongoose.Schema({
    Year: Number,
    Model: String,
    Make: String,
    Category: String
  })

const OemModel=mongoose.model("cars",schema)

module.exports={
    OemModel
}