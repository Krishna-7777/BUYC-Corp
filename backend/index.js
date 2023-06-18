const express= require("express")
const { connect } = require("./config/db")
const { userRoutes } = require("./route/user.route")

const app=express()

app.use(express.json())

app.get('/',(ask,give)=>{
    give.send("Buyc Backend")
})

app.use('/',userRoutes)

app.listen(4000,()=>{
    try {
        connect
        console.log("Connected to the DB & Server is running at 4000...");
    } catch (error) {
        console.log("Error in connecting to the DB");
    }
})