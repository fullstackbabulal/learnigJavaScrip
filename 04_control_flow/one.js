const score = 300;

// This is simple if condition without else part, if condition is true then code will be execute here
if(score > 250){
  console.log(`Your Score is greater than 250`);
}

// This is simple if condition, if condition is true then code will be execute here otherwise else part will be execute automaticaly
if(score <400){
  console.log(`Your Score is less than 400`);
}else{
  console.log(`Your Score is greater that 400`);
}

// here we are checking multiple condition through && if both condition is true then code wil be execute
if(score >= 300 && score <= 200){
  console.log(`Your score is greater than equal to 300 and score less than equal to 200`);
}else if(score >=200 && score <= 400){
  console.log(`your score is greater than equal to 200 and score is less than equal to 400`);
}else{
  console.log(`This is execute from else part`);
}

// here we are checking multiple condition through || if one condition is true from both condition then code will be execute here
if(score >=200 || score <=2050){
  console.log(`you score is greater than equal to 200 or score less than equal to 2050`);
}else{
  console.log(`Code is execute from else part`);
}
// This is switch case condition
let weekedDay = 5;

switch (weekedDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    break;
}
