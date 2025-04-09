let fetchData=async()=>{
    let url="http://localhost:3000/Coaching"
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data)
    let Show=document.querySelector("#showData")

    data.map((e)=>{
        Show.innerHTML+=`      
        <tr>
        <td>${e.name}</td>
        <td>${e.batch}</td>
        <td>${e.age}</td>
        <td>${e.cource}</td>
        <td>${e.college}</td>
        <td>${e.mobile_no}</td>
        <td>${e.fees}</td>
        <td onclick="Del('${e.id}')"> Delete</td>    
        </tr>           
        `
    })
}
let Del=(id)=>{
    let url=`http://localhost:3000/Coaching/${id}`

    fetch(url,{method:"DELETE"})
}
// fetchData()

let book=()=>{
    let inpname=document.querySelector('#name').value
    let inpbatch=document.querySelector('#batch').value
    let inpage=document.querySelector('#age').value
    let inpcource=document.querySelector('#cource').value
    let inpcollege=document.querySelector('#college').value
    let inpmobile=document.querySelector('#mobile').value
    let inpfees=document.querySelector('#fees').value

    let url="http://localhost:3000/Coaching"

    fetch(url,{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(
        {
            "name":inpname,
            "batch":inpbatch,
            "age":inpage,
            "cource":inpcource,
            "college":inpcollege,
            "mobile_no":inpmobile,
            "fees":inpfees

        })
    })
    
    // location.href="index.html"
    return false
}

let Upd=async(id)=>{

    let url=`http://localhost:3000/Coaching/${id}`
    let res = await fetch(url,{method:"GET"})
 
    let data=await res.json()
    console.log(data);

    let formfill=document.querySelector('#formfill')
    formfill.innerHTML=`
    
     Enter Name: <input type="text" value="${data.name}" id="upname"> <br> <br>
        Enter Batch: <input type="text" value="${data.batch}" id="upbatch"> <br> <br>
        Enter Age: <input type="text" value="${data.age}" id="upage"> <br> <br>
        Enter Cource: <input type="text" value="${data.cource}" id="upcource"> <br> <br>
        Enter College: <input type="text" value="${data.college}" id="upcollege"> <br> <br>
        Enter Mobile.no: <input type="text" value="${data.mobile_no}" id="upmobile"> <br> <br>
        Enter Fees: <input type="text" value="${data.fees}" id="upfees"> <br> <br>
        <!-- Enter Country: <select value="" id="upCountry">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="China">China</option>
        <option value="Nepal">Nepal</option>
        <option value="Russia">Russia</option>
        <option value="Switzerland">Switzerland</option> -->
        
        <!-- </select> -->
         <br>  
        <input type="submit" value="Booknow" onclick="return finalupdate('${data.id}')" >
        
    `
    
}


let finalupdate=(id)=>{

    let inpname=document.querySelector('#upname').value
    let inpbatch=document.querySelector('#upbatch').value
    let inpage=document.querySelector('#upage').value
    let inpcource=document.querySelector('#upcource').value
    let inpcollege=document.querySelector('#upcollege').value
    let inpmobile=document.querySelector('#upmobile').value
    let inpfees=document.querySelector('#upfees').value

    let url="http://localhost:3000/Coaching/${id}"

    fetch(url,{

        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(
        {
            "name":inpname,
            "batch":inpbatch,
            "age":inpage,
            "cource":inpcource,
            "college":inpcollege,
            "mobile_no":inpmobile,
            "fees":inpfees

        })
    })
    
    // location.href="index.html"
    return false


}