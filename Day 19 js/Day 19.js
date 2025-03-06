function validate()
{
      let name=document.querySelector('#name').value
      let email=document.querySelector('#email').value
      let age=document.querySelector('#age').value
      if(name=="")
      {
        // alert("Please input your name")
        let errorr=document.querySelector('#errorrname')
        errorr.innerHTML="Please enter your name"
        document.querySelector('#name').focus()
        return false
      }
      else if(email=="")
        {
          alert("Please input your email")
          document.querySelector('#email').focus()
          return false
        }

        else if(!(email.includes('@')))
        {
            alert("Please enter valid email must have @gmail.com")
            document.querySelector('#email').focus()
            return false
        }
        else if(age=="")
            {
              alert("Please input your age")
              document.querySelector('#age').focus()
              return false
            }

            else if(isNaN(age))
            {
                alert("Enter age in numbers")
            }


}



