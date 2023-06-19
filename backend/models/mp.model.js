const mongoose=require("mongoose")

const schema=mongoose.Schema({
    CarId: String,
    ImgUrl: String,
    DealerId: String
  })

const MpModel=mongoose.model("mp",schema)

module.exports={
    MpModel
}