const express = require('express')  //serve request and give response
const mongoose = require('mongoose') //access db mongodb

mongoose.connect('mongodb://127.0.0.1:27017/nyobaMongoose',{//connect to db
    useNewUrlParser: true, //parsing url
    useCreateIndex: true, //auto create id
})

const app = express()
const port = 2020




const user = new User ({name:"Hanif", email:"hanif@ha.com", age:19})
// user.save()
console.log(user);

const task = new Task({description:"Halo"})
// task.save()



app.listen(port, ()=>{
    console.log("API running on port", port);
    
})