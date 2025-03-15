


//Q1. Write a jawascript code to change the text of an HTMl element with the ID demo to "Hello", Javascript.



let a=document.querySelector('#change')
a.innerHTML="This is javascript"

// Q2. Write a script to change the background colour of div with the class box to red when a button is clicked.

    // let b=document.querySelector('.box')
    // b.style.width="300px"
    // b.style.height="300px"
    // b.style.border="20px"

    // function clr()
    // {
    //     let b=document.querySelector('.box')
    //     b.style.backgroundColor="red"
    // }

      
    //Q3. Create a function that adds a new <li> item with the text "New item" to the unordered list with the ID Mylist.

    let celement=document.createElement("li")
    celement.textContent="New item"
    let bd=document.body
    bd.append(celement)






    // ///Q5 Create five headings [laptop,mobile,tablet,camera,tv] and aside put an image ,When user hover on any heading so image will change according toheadings.



    // let lap=document.querySelector('#lap')
    // let mob=document.querySelector('#mob')
    // let tab=document.querySelector('#tab')
    // let cam=document.querySelector('#cam')
    // let tv=document.querySelector('#tv')

    function lap()
    {
       let a=document.querySelector('#image')
       a.src="laptop.jpg"
    }

    function mob()
    {
       let a=document.querySelector('#image')
       a.src="mobile.jpg"
    }

    function tab()
    {
       let a=document.querySelector('#image')
       a.src="tablete.jpg"
    }

    function cam()
    {
       let a=document.querySelector('#image')
       a.src="camera.jpg"
    }

    function tv()
    {
       let a=document.querySelector('#image')
       a.src="tv.jpg"
    }


    function hide()
    { 
    let hidenbtn=document.querySelector("#hidebtn")
    hidenbtn.innerHTML=""
    }
    














































