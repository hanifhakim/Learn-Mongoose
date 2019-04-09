const add = (a, b) => {
    return new Promise((resolve, reject) => { // resolve : then, catch: reject
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject("Number tidak boleh lebih kecil dari nol")
            }

            resolve(a+b)
        }, 2000);
    })
}

const funB = async () => {
    const sum = await add(4,5)
    const sum2 = await add(sum,5)
    const sum3 = await add(sum2,5)
    return sum3
}

funB().then(res => {
    console.log('result',res);
    
}).catch(e => {
    console.log('e', e);
    
})