// let ob = {
//     name : "Harsh",
//     contact : 5655,
//     obfun : function()
//     {
//         alert("Working")
//     },
//     car : ["BMW" , "Audi" , "Maruti"]
// }
// ob.obfun()
// console.log(ob.car[1])



// let ob1 = {
//     name: "Harsh", age: 20, contact: 123 
// }

// let ob2 ={
//      city: "Bpl", state: "MP"
// }
// // let ob3 ={...ob1,...ob2}

// ob2.email="harsh14thakre@gmail.com"
// ob2.city="Indore"

// delete ob2.state
// console.log(ob2);



let person ={
    name : "Harsh",
    city : "Bhopal",
    contact : 123456789

}
for(let k in person)
{
    console.log(person[k]);
}


let k= Object.keys(person)
console.log(k[0]);

let {name,age,contact}={name : "Harsh", age:20, contact:456}

console.log(name);

//                 Object does not support for of loop

// for print the values of keys using for in loop
//Syntax console.log(obj1[v])

//



