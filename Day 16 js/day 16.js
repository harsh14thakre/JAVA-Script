var count=0;
function add()
{   
    if(count<4)
    {
    let a=document.createElement('input')
    let b= document.body
    b.append(a)
    count++
    }
    else{
        alert("stop")
    }
   
}


// let celement=document.createElement('<input type="text" id="ip"  placeholder="Enter your name">')