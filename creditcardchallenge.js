var username=prompt("Enter your I.D");
var password=prompt("Enter your password");

// function prompt('Description'){
  //takes input
  //returns input
//}



function notSame(user,pass){
 return user!==pass;
}

function leastSix(user,pass){
if (user.length >=6 && pass.length >=6){
  alert("Length of username and password is okay");
  return true;
}
   else{
  alert("Length of username or password is too short, check again")   ;
  return false;
   }
}

function nochar(user){
  if (user.includes("!") || user.includes("#") || user.includes("$")){
  alert("you included !#$, check again");
  return false;
  }
  else {
    alert("Your username looks fiiiiiiiine ")
    return true;
  }
}

function secretpassword (pass){
  if (pass.includes("!") || pass.includes("#") || pass.includes("$")){
    alert("password looks correct");
    return true;

  }
  else{
    alert("Password is incorrect, please try again");
    return false;
  }
}

function samePassword(pass){
  if (pass.includes("password")){
    alert("password cannot be password");
    return false;
  }
  else{
    return true;
  }
}

// alert(username);
// alert(password);


if (notSame(username, password) === true && leastSix(username,password) === true && nochar(username) === true && secretpassword(password)===true && samePassword(password) ===true){
  alert("everything is true")
}
else{
  alert("Something went wrong")
}
