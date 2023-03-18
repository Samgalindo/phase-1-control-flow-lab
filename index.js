function scuberGreetingForFeet(feet){
  // Write your code here! 
  let message
  if (feet <= 400) {
    message = `This one is on me!`
    return message
  }
  else if (feet > 400 && feet <= 2000 ){
    message = `That will be twenty bucks.`
    return message 
  }
  else if (feet > 2000 && feet <= 2500) {
    message = `I will gladly take your thirty bucks.`
    return message 
  }
  else message = `No can do.`
  return message
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case `generous`:
      message = `Thank you so much.`
      break;
    case `not as generous`:
      message = `Thank you.`
      break;
    default: 
    message = `Bye.`
  }
  return message 
}