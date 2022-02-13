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