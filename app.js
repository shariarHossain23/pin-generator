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
            const displayInput =  document.getElementById("calc-display");
            displayInput.value = displayInput.value.slice(0,-1)
        }
    }
    else{
        calcDisplay.value += e.target.innerText;
    }
})

//  matching generate pin with calc
document.getElementById("submit-btn").addEventListener("click",function(){
    const pinInput = document.getElementById("show-pin").value;
    const calcInput= document.getElementById("calc-display").value;
    const successMessage = document.getElementById("done")
    const errorMessage = document.getElementById("wrong-text")
    if(calcInput == ""){
        alert("dont match ")
    }
    else if(pinInput == calcInput){
        successMessage.style.display = "block"
        errorMessage.style.display = "none"
    }
    else{
        errorMessage.style.display = "block"
        successMessage.style.display = "none"
    }
    document.getElementById("show-pin").value = "";
    document.getElementById("calc-display").value = "";
})