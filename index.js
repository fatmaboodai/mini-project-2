function getHistory() {
   return  document.getElementById('history-value').innerText
//    to get the value inside the element that has this id
};
function printHistory(num) {
    document.getElementById('history-value').innerText= num
    // to print the value of the parameter inside the element that has this id
};
function getOutput() {
    return  document.getElementById('output-value').innerText
    // to get the value inside the element that has this id
 };
 function printOutput(num) {
     // to print the value of the parameter inside the element that has this id
     if (num == "") {
        //  if the parameter(num) is only equal to empty value
         document.getElementById('output-value').innerText = num;  // (in this case num is empty)
        //  the output that has the previous id will print the parameter num 
     }
     else{
            document.getElementById('output-value').innerText = getFormattedNumber(num);
            // the element that has the id it value will be formated (عندها خانات الوف ومئات و احاد)
     }
};
function getFormattedNumber(num){
    if(num =="-"){
        return ""
        // this is for when we backspace a negative number we dont get NaN
    }
    const n = Number(num);
    const value = n.toLocaleString("en");
    // to convert number to sting
    return value
};

// to reverse the formated number to the  original value(without comma)
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
    // to remove  the decimal comma from the number
    // we put the value that we want to change between / and /g then , "the new value"
    
}


const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
 operator[i].addEventListener('click',function(){
    if (this.id == "clear") {
        // this here refers to the element button who has id clear that received click event
        printHistory("");
        // element that has id history-value should be empty
        printOutput("");
        // the elemnt that has the output-value should be empty
    }
    if (this.id == "backspace") {
        let outPut = reverseNumberFormat(getOutput()).toString();
        // convert the number to string
        if (outPut) {
            // if output has a value
        outPut = outPut.substr(0,outPut.length-1);
// take the output value then reduce the length by 1
// but it only works with strings so because of this we converted the numbers to strings
        printOutput(outPut)  ;
        }
    }
    else {
        let outPut=getOutput();
        let history = getHistory();
        if (outPut=="" && history!="") {
            // if the output is onlu equal to empty and the history NOT equal to empty
            if (isNaN(history[history.length-1])) {
                history = history.substr(0,history.length-1)
                // to remove the last character and replace it with the new one
                // the zero is to start from the first character
            }
        }
        if (outPut!="" || history!="") {
            //if both outpot and history  dont equal to empty
        outPut = outPut==""? outPut: reverseNumberFormat(outPut);
        history = history+outPut;
        // in the history section add and print the putput and the history
        if (this.id == "=") {
            // if we clicked on the equal button
            let result = eval(history);
            // do the mathmatic operations
            printOutput(result);
            // show the result in the ouput section
            printHistory("");
            // empty the history
        }
        else {
           history=history+this.id;
        //    print in the history the number that already been clicked on then add the operator from the clicked id
           printHistory(history);
        //    print on the history
           printOutput("")
        //    clear the output after clicking on  the operator 
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
        // get the number that has the same id as the clicked one
        printOutput(outPut);
        // print the number in the output section
     }
 });
    
}


