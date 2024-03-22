let name = document.querySelector('#name')
let heading = document.querySelector('.heading')
let age = document.querySelector('#age')
let button = document.querySelector('#btn')



button.addEventListener("click",(e)=>{
  e.preventDefault()
  let user_name = name.value;
  let user_age  = age.value;

  if(user_name && user_age){
    const year = new Date()
    const age = year.getFullYear()
    const result  = (age - user_age);
    
    if(result >=21){
   heading.innerHTML = `<h2>Welcome ${user_name},You are eligible for marriage</h2>
   <img src="https://tenor.com/view/gastimarce2020-wedding-marce-and-gasti-nos-casamos-heart-gif-15506331/>`
   }else{
     heading.innerHTML= `<h2> ${user_name} apnar biyer boyos hoyni</h2>
      <img src="https://i.pinimg.com/originals/3a/78/7b/3a787b8a089c6c74da1a0fce6693f547.gif/>
     `
   }
  }else{
    heading.innerHTML= `<h2 style="color:red">All field are required</h2>`
  }
  

  

})