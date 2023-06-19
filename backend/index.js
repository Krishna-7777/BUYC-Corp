const express= require("express")
const cors=require('cors')
const { connect } = require("./config/db")
const { userRoutes } = require("./route/user.route")
const { OemRoutes } = require("./route/oem.route")
const { MpRoutes } = require("./route/mp.route")

const app=express()

app.use(cors("*"));

app.use(express.json())

app.get('/',(ask,give)=>{
    give.send("Buyc Backend")
})

app.use('/',userRoutes)

app.use('/',OemRoutes)

app.use('/',MpRoutes)

app.listen(4000,()=>{
    try {
        connect
        console.log("Connected to the DB & Server is running at 4000...");
    } catch (error) {
        console.log("Error in connecting to the DB");
    }
})