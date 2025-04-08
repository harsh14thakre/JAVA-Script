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