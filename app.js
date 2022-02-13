function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

document.getElementById("generate-pin").addEventListener("click",function(){
    const showPin = document.getElementById("show-pin");
    showPin.value = getPin()
    
});

//  calc numbers
document.getElementById("calc").addEventListener("click",function(e){
    // console.log(e.target.innerText)
    const calcDisplay = document.getElementById("calc-display");
    if(isNaN(e.target.innerText)){
        if(e.target.innerText == "C"){
            document.getElementById("calc-display").value = ""
        }
        else if(e.target.innerText == "<"){
            const displayInput =  document.getElementById("calc-display").value;
            displayInput.slice(0,-1)
        }
    }
    else{
        calcDisplay.value += e.target.innerText;
    }
})