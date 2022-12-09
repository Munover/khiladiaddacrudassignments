const express = require("express")
require("./dbConnect")
const User = require("./models/User")
const hbs = require("hbs") 
const path = require("path")
const bodyParser = require("body-parser")
const async = require("hbs/lib/async")

const app = express()
const encoder = bodyParser.urlencoded()

app.set('views', './views')
app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname,"./views/partials"))
app.use(express.static(path.join(__dirname,"./views/public")))



app.get("/",async(req,res)=>{
    var data = await User.find()
    res.render("index",{"data":data})
})
app.get("/add",(req,res)=>{
    res.render("add")
})
app.post("/add",encoder,async(req,res)=>{
    var data = new User(req.body)
    await data.save()
    res.redirect("/")
})
app.get("/delete/:_id",async(req,res)=>{
    await User.deleteOne({_id:req.params._id})
    res.redirect("/")
})

app.get("/update/:_id",async(req,res)=>{
    const data = await User.findOne({_id:req.params._id})
    res.render("update",{data:data})
})
app.post("/update/:_id",encoder,async(req,res)=>{
    var data = await User.findOne({_id:req.params._id})
    data.name=req.body.name
    data.phone=req.body.phone
    await data.save()
    res.redirect("/")
})


app.listen(8000,()=>{
    console.log("Server is Running at PORT 8000.....");
})