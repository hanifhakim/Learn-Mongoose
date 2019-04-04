const express = require('express')  //serve request and give response
const mongoose = require('mongoose') //access db mongodb

mongoose.connect('mongodb://127.0.0.1:27017/nyobaMongoose',{//connect to db
    useNewUrlParser: true, //parsing url
    useCreateIndex: true, //auto create id
})

const app = express()
const port = 2020

const validator = require('validator')

const User = mongoose.model('User',{//membuat collection di mongoose, nama user akan dirubah toLowerCase dan dibuat plural (tambah s) oleh mongoose scr otomatis
    name:{
        type: String,
        required: true,//wajib diisi, akan error saat mau disave
        trim: true, //menghapus spasi dibelakang dan didepan
        validate(value){
            value = parseInt(value)
            if(!isNaN(value)){
                throw new Error ("Tidak boleh angka")
            }
        }
    },
    email:{
        type: String,
        required: true,
        validate(value){
        if(!validator.isEmail(value)){
            throw new Error ("Email tidak valid")
            }
        }
    },
    age:{
        type: Number,
        //default: 0, nilai default apabila user tdk mengisi
        required: true,
        validate(value){//without validator extention
            if(value<18){
                throw new Error ("Umur tidak valid")
            }
        }
    }
})

const user = new User ({name:"Hanif", email:"hanif@ha.com", age:19})
user.save()
console.log(user);




app.listen(port, ()=>{
    console.log("API running on port", port);
    
})