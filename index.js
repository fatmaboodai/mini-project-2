function getHistory() {
   return  document.getElementById('history-value').innerText
};
function printHistory(num) {
    document.getElementById('history-value').innerText= num
};
function getOutput() {
    return  document.getElementById('output-value').innerText
 };
 function printOutput(num) {
     if (num =="") {
         document.getElementById('output-value').innerText = num;
     }
     else{
            document.getElementById('output-value').innerText = getFormattedNumber(num)
     }
};
function getFormattedNumber(num){
    if(num =="-"){
        return ""
    }
    const n = Number(num);
    const value = n.toLocaleString("en");
    return value
};

// to reverse the formated number to the  original value(without comma)
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}


const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
 operator[i].addEventListener('click',function(){
    if (this.id == "clear") {
        printHistory("");
        printOutput("");
    }
    if (this.id == "backspace") {
        let outPut = reverseNumberFormat(getOutput()).toString();
        if (outPut) {
            // if output has a value
        outPut = outPut.substr(0,outPut.length-1);
        printOutput(outPut)  
        }
    }
    else {
        let outPut=getOutput();
        let history = getHistory();
        if (outPut=="" && history!="") {
            if (isNaN(history[history.length-1])) {
                history = history.substr(0,history.length-1)
            }
        }
        if (outPut!="" || history!="") {
        outPut = outPut==""? outPut: reverseNumberFormat(outPut);
        history = history+outPut;
        if (this.id == "=") {
            let result = eval(history);
            printOutput(result);
            printHistory("");
        }
        else {
           history=history+this.id;
           printHistory(history);
           printOutput("")
        }
    }}
 });
}
const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
 number[i].addEventListener('click',function(){
     let outPut = reverseNumberFormat(getOutput());
     if (outPut != NaN) {
        //  if it was anumber
        outPut = outPut+this.id;
        printOutput(outPut);
     }
 });
    
}