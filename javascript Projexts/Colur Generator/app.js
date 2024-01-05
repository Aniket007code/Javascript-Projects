const getColor = ()=>{
    const randomNumber = Math.floor(Math.random() * "16777215")
    const hexCode = "#" + randomNumber.toString(16);
    console.log(randomNumber,hexCode);
    document.body.style.backgroundColor = hexCode
    const text = document.getElementById("colorText")
    text.innerHTML = hexCode;
}



document.getElementById("btn1").addEventListener(
    "click",
    getColor
)