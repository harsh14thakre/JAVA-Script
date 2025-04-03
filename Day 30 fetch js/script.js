let fetchData=async()=>{

    let url="http://localhost:3000/hotel"

    let res= await fetch(url,{method:"Get"})

    let data= await res.json()

    console.log(data);
}

fetchData()