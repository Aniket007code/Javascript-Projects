const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~`!@#$%^&*()_-=+<>/?"

const getRandomData = (dataset) =>{
    // console.log(dataset[Math.floor(Math.random()+ dataset.length)]);
       return dataset[Math.floor(Math.random() *  dataset.length)]
}

//selectors
const inputText = document.getElementById("inputText")
const totalChar = document.getElementById("passwordLength")
const upperInput = document.getElementById("uppercaseCheckbox")
const lowerInput = document.getElementById("lowerCaseCheckbox")
const numberInput = document.getElementById("numberCheckbox")
const symbolInput = document.getElementById("symbolCheckbox")


const generatePassword = (password = "") =>{
    if(upperInput.checked){
       password = password + getRandomData(upperSet);
    }

    if(lowerInput.checked){
        password = password + getRandomData(lowerSet);
    }

    if(numberInput.checked){
        password = password + getRandomData(numberSet);
    }

    if(symbolInput.checked){
        password = password + getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }

     const newPassword = truncateString(password, totalChar.value);
    inputText.value = newPassword;
    console.log(newPassword);
    

}
const btn1 = document.getElementById("btn1")
btn1.addEventListener(
    'click',
    function(){
        generatePassword();
    }
)


function truncateString(str, maxLength) {  
    if (str.length>maxLength) {  
    return str.substring(0, maxLength) ;  
    } else {  
    return str;  
    }  
    } 