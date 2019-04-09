const bcrypt = require('bcrypt')

const hashing =  async (password) => {
    return hashed = await bcrypt.hash(password, 8)//angka 8 dianggap balance dan efesien
    // console.log(hashed); merupakan object
    
}

const hashCheck = async (password, hashed) => {
    const isMatch = await bcrypt.compare(password, hashed)

    if(!isMatch){
        return console.log("tidak c0c0k");
        
    }
    console.log("c0c0k");
}

const password = "cocokbgt123"
const password2 = "gacocok321"
var hashed = hashing(password)
hashed = hashed.toString()