

        // function is a block of code and set of instructions 
        // used for reuseability
        // and divid our code in sub programs




        //------------------------------------------Functions---------------------------------------



        // function Sum()
        // {
        //   let a=5
        //   let b=10
        //   document.write(a+b)
        // }
        // Sum()
        // Sum()
        // Sum()


        // We can call function mutiple times it defines is reusability



        //Q.Take a number from the user and print table by using for loop.



        function Table()
        {
          let n=parseInt(prompt("Enter a number"))


          for(let a=1; a<=10; ++a)
          {
            document.write(n*a+"<br>")
          }
        }
        Table()
