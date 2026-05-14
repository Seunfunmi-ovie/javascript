function validateLogin(username,password){

const correctUsername = "Seunfunmi";
const correctPassword = "1234";
    
    if(username === correctUsername && correctPassword){
    console.log("Successful login");
    }else{
    console.log("Failed login");
    }         
}
console.log(validateLogin ("Seunfunmi","1234"));  
