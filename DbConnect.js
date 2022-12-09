const mongoose = require("mongoose")

async function connection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/crudassignment")
        console.log("Database is Connected");
    }
    catch(error){
        console.log(error);
    }
}
connection()