var wrapperEle = document.body.querySelector(".Condition");

var number1=Number(prompt("Enter A Number"));
var answer=0

if(number1){
  var number2=Number(prompt("Enter A Number"));
  if(number2){
  var operator=prompt("Enter A Operator");
  if(operator=="+"){
   answer=(number1+number2)
    wrapperEle.innerHTML="answer is"+answer
  }
  else if(operator=="-"){
    answer=(number1-number2)
    wrapperEle.innerHTML="answer is"+answer
  }
  else if(operator=="*"){
    answer=(number1*number2)
    wrapperEle.innerHTML="answer is"+answer
  }
  else if(operator=="/"){
    answer=(number1/number2)
    wrapperEle.innerHTML="answer is"+answer
  }else{
      wrapperEle.innerHTML="Operator is Invalid";
    }
  }else{
    wrapperEle.innerHTML="Number2 is Invalid";
  }
 }else{
  wrapperEle.innerHTML="Number1 is Invalid";
}