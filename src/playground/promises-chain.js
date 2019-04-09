// Async Await ( ES7 ), untuk handle promise lebih mudah dan episien

// Promise
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

add(4, 5).then((res) => { // 9
    add(res, 8).then(resp => { // 17
        add(resp, 10).then(resX => { //27
             console.log(resX);  // 27
        }).catch(e => {
            console.log();
        })
    }).catch(e => {
        console.log();
    })
}).catch(e => {
    console.log(e);
})


// const getData = (arrey) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var dataX = arrey

//             if(dataX.length === 0){
//                 return reject({
//                     err: "Data tidak ditemukan",
//                     data: dataX
//                 })
//             }

//             resolve({
//                 mess: "Data berhasil ditemukan",
//                 data: dataX
//             })
//         }, 3000);
//     })
// }

// const arreyIsi = ['Senin', 'Selasa', 'Rabu', 'Kamis']
// const arreyKs = []
// getData(arreyKs).then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e);

// })

// ASYNC - AWAIT

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