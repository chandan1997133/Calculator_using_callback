let buttons=Array.from(document.getElementsByClassName("button")) ;
console.log(buttons);

function show(X) {
    console.log(X);
     document.getElementById("operation").value = X;
}

function addition(num1,num2,callbac) { 
    callbac(num1+num2);
}
function sub(num1,num2,callbac) { 
    callbac(num1-num2);
}
function mul(num1,num2,callbac) { 
    callbac(num1*num2);
}
function div(num1,num2,callbac) { 
    callbac(num1/num2);
}
buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt( document.getElementById("num2").value);
        console.log(num1,num2);
            switch(e.target.innerHTML){
                case '+':
                   addition(num1,num2, show)
                    break;
                case '-':
                   sub(num1,num2, show)
                    break;
                case '*':
                    mul(num1,num2, show)
                    break;
                default:
                    div(num1,num2, show)
                }
    })
        
})
