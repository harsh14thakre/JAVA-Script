let count=0

function increment()
{
    let increase=document.querySelector('#num')
    increase.innerHTML=count++
}
function decrement()
{
    if(count>=0)
    {
    let decrease=document.querySelector('#num')
    decrease.innerHTML=count--
    }
}
//-----------------------------------------------Q3---------------------------------------------

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[...arr1,...arr2]
console.log(arr3)

for(let i=0; i<10; ++i)
{
    if(arr3[i]%2==0)
    {
       console.log(arr3[i])
    }
}

//----------------------------------------------Q4-----------------------------------------

function change()
{
    document.body("backgroundColor","blue")
}