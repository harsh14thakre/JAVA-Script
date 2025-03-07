// function validate()
// {
//       let name=document.querySelector('#name').value
//       let email=document.querySelector('#email').value
//       let age=document.querySelector('#age').value
//       if(name=="")
//       {
//         // alert("Please input your name")
//         let errorr=document.querySelector('#errorrname')
//         errorr.innerHTML="Please enter your name"
//         document.querySelector('#name').focus()
//         return false
//       }
//       else if(email=="")
//         {
//           alert("Please input your email")
//           document.querySelector('#email').focus()
//           return false
//         }

//         else if(!(email.includes('@')))
//         {
//             alert("Please enter valid email must have @gmail.com")
//             document.querySelector('#email').focus()
//             return false
//         }
//         else if(age=="")
//             {
//               alert("Please input your age")
//               document.querySelector('#age').focus()
//               return false
//             }

//             else if(isNaN(age))
//             {
//                 alert("Enter age in numbers")
//             }


// }


function validate()
{
    
let name=document.querySelector('#name').value
let yahoo=document.querySelector('#yahoo').value
let age=document.querySelector('#age').value
let pass=document.querySelector('#password').value
let cont=document.querySelector('#contact').value

if(name=="")
{
    alert("Enter your name")
    document.querySelector('#name').focus()
    return false
}

else if(yahoo=="")
    {
        alert("Enter your yahoo id")
        document.querySelector('#yahoo').focus()
        return false
    }
    else if(!(yahoo.includes('@yahoo.com')))
    {
        alert("Enter valid yahoo id")
        document.querySelector('#yahoo').focus()
        return false
    }
    
else if(age=="")
        {
            alert("Enter your age")
            document.querySelector('#age').focus()
            return false
        }
else if(isNaN(age))
        {
            alert("Enter age in numbers")
            return false
        }
else if(age>=100)
        {
            alert("Enter valid age")
            return false
         }

else if(password=="")
        {
            alert("Please input your password")
            document.querySelector('#password').focus()
            return false
        }
else if(!(pass.match(/[@#$%^&*]/)))
        {
             alert("Enter special characters")
             document.querySelector('#password').focus()
             return false
        }
   
else if(cont=="")
    {
        alert("Enter your contact")
        document.querySelector('#contact').focus()
        return false
    }   

 else if(isNaN(cont))
    {
            alert("Enter your contact in numbers")
            document.querySelector('#contact').focus()
            return false
    } 
 else if(cont.length>10 || cont.length<10)
        {
            alert("Please fill 10 digit number")
            document.querySelector('#contact').focus()
            return false
        }     

}








