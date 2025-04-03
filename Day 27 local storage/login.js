// <!-- local storage

// set item - save karana hai
// get item -  save hai retrieve karana hai
// remove item - particular data ko delete kaarna hai
// clear  local - function me jitna bhi data hai sabko clear karne ke kaam me ata hai -->


// local storage me data set key value ke formate me hoga 
// key value ka type string hoga

function sign(){
  let uname=document.querySelector('#uname').value
let upass=document.querySelector('#upass').value
     if(upass==""){
        alert("please Enetr the password")
        document.querySelector('#upass').focus()
        return false
      }
      else if(!(upass.match(/[@_#]/))){
        alert("please use speacial character")
        document.querySelector('#pass').focus()
        return false
      }
      localStorage.setItem("Username",uname)
      localStorage.setItem("Userpass",upass)     
location.href="./login.html"
      return false
}


function log(){
  let loginname=document.querySelector('#loginname').value
  let loginpass=document.querySelector('#loginpass').value

  let name=localStorage.getItem("Username")
  let password=localStorage.getItem("Userpass")

  if(loginname == name && loginpass==password){
    document.writeln( "<h1>🙏Login Successful 🙏😊</h1>")
  }
  else{
    alert("User Not found");
  }
 return false
}


//                      key      value
// localStorage.setItem("Username","Harsh")
// localStorage.setItem("Userage","21")
// localStorage.setItem("Usercontact","123456789")

// let name=localStorage.getItem("Username")
// console.log(name)
// let age=localStorage.getItem("Userage")
// console.log(age)

// localStorage.removeItem('Userage')  // removes perticular item
// localStorage.clear()    //removes all data




// let obj={
//     name:"Harsh", contact:123456789, city:"Bhopal"
// }
// localStorage.setItem("userdata",JSON.stringify(obj))

// let user=JSON.parse(localStorage.getItem('userdata'))
// console.log(user.city)

// function getdataa()
// {
//      let name=document.querySelector('#name')
//      let age=document.querySelector('#age')
//      let gmail=document.querySelector('#gmail')
// }

// let obj1={
    
// }






