const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const buttons = document.querySelectorAll("button");

try {
let str = "";
let arr = Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            display2.value = eval(str);
        }

         else if (e.target.innerHTML == "C") {
            str = "";
            display1.value = "";
            display2.value = "";
        } 
        
        else if (e.target.innerHTML == "%") {
            display1.value = str;
            display2.value = eval(str) / 100;
        } 

        else if (e.target.innerHTML == "D") {
            str = str.slice(0, -1);
            display1.value = str;
        } 

        else {
            str += e.target.innerHTML;
            display1.value = str;
        }});
});
} catch (error) {
    console.log(error);
}
