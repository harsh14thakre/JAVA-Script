// settimeout Run only one time

// setTimeout(()=>{alert("hello")},3000)


// let a=document.querySelector()
// setTimeout(()=>{document.write(a)},3000)



let numb=0
function frmdata()
{
   
    let num1=parseInt(document.querySelector('#num1').value)
    let num2=parseInt(document.querySelector('#num2').value)
    let a=document.querySelector('#hd')
    a.innerHTML=num1+num2

    return false
}