let fetchData=async()=>{
    let url="http://localhost:3000/Coaching"

    let res=await fetch(url,{method:"Get"})
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
fetchData()