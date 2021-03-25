// const toArray = (arg1, arg2 ,arg3)=>{
//     return[arg1, arg2, arg3]
// }


const toArray = (...args)=>{
    return args
}

console.log(toArray(1, 2, 3))