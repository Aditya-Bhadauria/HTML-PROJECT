function myFunction() {
    if(confirm("we have detected that you dont have an account with us, please create one to use our services") ==true){
      window.location.replace("./signin.html")
    }
  }
  function myFunction1() {
    if(confirm("Should we confirm your request") ==true){
      window.location.replace("./index.html")
      alert("Your request has been successfully recorded")
      
    }
  }
  function myFunction2() {
    location.reload()
    }
  
  function myFunction3() {
    if(confirm("Do you want to Know about the developers") ==true){
      window.open('https://www.linkedin.com/in/adityabhadauria/','_blank')
      window.open('https://www.linkedin.com/in/mayank-gahlot/','_blank')
        
    }
  }