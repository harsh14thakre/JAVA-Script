// Array map method
// returns a new array

// let arr=[45,23,21]
// let a=arr.map((value,index,arr)=>{
//     console.log(value,index,arr)
//     return value+index
// })
// console.log(a)

// // Array filter method

// let arr2=[45,23,21,0,3,5]
// let a2=arr2.filter((value)=>{
//     return value<10
// })
// console.log(a2,arr2)

// these functions do not modify our original array




//Array reduce method
// Reduse returns a value

let arr3=[1,2,3,5,2,1]            
let newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)