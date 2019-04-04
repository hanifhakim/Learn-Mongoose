const mongoose = require("mongoose")
const validator = require('validator/lib/isEmail')

const userSchema = new mongoose.Schema({//membuat collection di mongoose, nama user akan dirubah toLowerCase dan dibuat plural (tambah s) oleh mongoose scr otomatis
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
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password tidak boleh mengandung 'password'")
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User