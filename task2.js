// program searching nama

// const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

// const callback = (name,str) => {
//     return name.toLowerCase().includes(str)
// }


// const searchName = (str,limit,callback) => {
//     let temp = names.filter((name) => callback(name, str))
//     let result=[]
    
//     for (let i = 0; i < limit; i++){
//     result.push(temp[i])
//     }
//     return result
// };



// // console.log(searchName("an",3),checkString())
// console.log(searchName("an", 3, callback))

const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(arr, cb) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        const newName = arr[i]
            result = [...result, newName]
    }
    // console.log(result)
    cb(result, 3)
}

function limit(arr, lim) {
    let result = []
    for (let i = 0; i < lim; i++){
        result = [...result, arr[i]]
    }
    console.log(result)
}

searchName(names, limit)