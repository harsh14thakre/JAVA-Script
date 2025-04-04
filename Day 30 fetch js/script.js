let fetchData=async()=>{
    let url="http://localhost:3000/hotel"
    let res=await fetch(url,{method:"Get"})
    let data=await res.json()
    console.log(data)
    let Show=document.querySelector("#showData")
    data.map((e)=>{
        Show.innerHTML+=`
        <tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.adharNO}</td>
            <td>${e.checkin}</td>
            <td>${e.checkout}</td>
            <td>${e.mobileno}</td>
            <td>${e.person}</td>
            <td>${e.price}</td>
        </tr>
        `
    })
}
fetchData()

// let fetchData=async()=>{
//     let url="http://localhost:3000/hotel"
//     let res= await fetch(url,{method:"Get"})
//     let data= await res.json()
//     console.log(data);

//     let Show=document.querySelector("#dataShow")

//     data.map((e)=>{
//         Show.innerHTML+=`
        
//            <tr>
//            <td>${e.name}</td>
//            <td>${e.age}</td>
//            <td>${e.adharNO}</td>
//            <td>${e.checkin}</td>
//            <td>${e.checkout}</td>
//            <td>${e.mobileno}</td>
//            <td>${e.person}</td>
//            <td>${e.price}</td>
//            </tr>
        
        
//         `
//     })
// }

// fetchData()