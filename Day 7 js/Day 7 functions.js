// ---------------------------------Parameterised function--------------------------------------------


// ------------------------------------------Syntax---------------------------------------------------

// function (parameters)
// {



// }
// function(argument)

// -------------------Types of undefined functions---------------------------

//1. No argument and no return.
//2. Argument and no return.
//3. With Argument and with return.
//4. No argument and return.

//1.
// function ()
// {

// }
// function()


//2.
// function (num)
// {

//console.log(num+num)

// }
// function(20)


//Q1. Write a program to check number is even or odd using type 2 function.

//  function check(num)
//  {
//    if(num%2==0)
//    {
//     document.write("Number is even")
//    }
//    else{
//     document.write("Number is odd")
//    }
// }
// check(20)

//Q.2 Write a program by taking value from user by prompt to check number is even or odd using type 2 function.

//  function check(num)
//  {
//    if(num%2==0)
//    {
//     document.write("Number is even")
//    }
//    else{
//     document.write("Number is odd")
//    }
// }
// let num=parseInt(prompt("Enter a number"))
// check(num)



//3.-----------------------------------with argument and with return---------------------------------

// function fun(num)
// {

// return num*num

// }
// document.write(fun(20))


//Q.3 Write a program to find area of circle using type 3 with argument and with return value.

// function fun(r)
// {
// return 3.14*r*r

// }
// let r=parseInt(prompt("Enter radius of circle"))
// document.write(fun(r))

//4. ----------------------------no argument and return-------------------------------------------

function google()
{
 return "Company"
}

// document.write(google())
let a=google()
document.write(a)
google()


