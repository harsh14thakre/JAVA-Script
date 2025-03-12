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



let arr2=[1,2,3,45,6,7,5,89,10,34,76,87]

let interval=arr2.slice(2,11)


for(let i=0; i<10; ++i)
{
    if(interval[i]%2==0)
    {
        console.log(interval[i])
    }
}