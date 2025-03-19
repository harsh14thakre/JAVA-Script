// let arr=[1,2,3,4,5,6]
// arr.push("last element","50")   

// // add elements in the last
// console.log(arr)

// arr.unshift("first element","5","20") // add elements from begginiing
// console.log(arr)

// arr.pop()                     //removes last element
//     console.log(arr)

// arr.shift()                  // delete element in the beggining
// console.log(arr)

// let arr1=["Raghav",24,12345,"Bhopal","FSD"]
// let part=arr.slice(1,4)
// console.log(part)



// let arr2=[1,2,3,45,6,7,5,89,10,34,76,87]

// let interval=arr2.slice(2,11)


// for(let i=0; i<10; ++i)
// {
//     if(interval[i]%2==0)
//     {
//         console.log(interval[i])
//     }
// }





// Splice function is used to remove any element from anywhere of array

// let arr3=["Cybrom",26,"Milan",46]

// arr4.splice(2,1)   // 2 is a indexing and 1 is the number of element
// console.log(arr3)


let arr4=["Cybrom",26,"Milan",46]

arr4.splice(2,1,"Manohar")  
console.log(arr4)

//Destructuring of array 

let [name,age,shop,contact]=["Cybrom",26,"Milan",46]
console.log(shop)

let arr5=[name,age,shop,contact]   
let arr6=["Cybrom",26,"Milan",46]
let arr7=[arr5,arr6]
console.log(arr7)

//Spread operator/rest operator it merges multiple arrays

let arr8=[name,age,shop,contact]
let arr9=["Cybrom",26,"Milan",46]
let arr10=[...arr8,...arr9]
console.log(arr10)


