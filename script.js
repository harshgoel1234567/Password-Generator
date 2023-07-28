// handleslider() default value=10;
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".btn");

const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password="";
let passwordLength=10;
let checkcount=1;
//set circle color to grey

//set passwordlength to 10
handleSlider();
function handleSlider()
{
    inputSlider.value=passwordLength;
    lengthDisplay.innerHTML=passwordLength
}

function setIndicator(color)
{

}

function getrandomInteger(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}
function generateRandomNumber()
{
    return  getrandomInteger(0,10);
}
function getUpperCase()
{
    return  String.fromCharCode(getrandomInteger(65,91));
}
function getLowerCase()
{
    return   String.fromCharCode(getrandomInteger(97,123));
}
function generateSymbol()
{
return symbols.charAt(getrandomInteger(0,symbols.length+1));

}
async function copyContent()
{
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        if(passwordDisplay.value)
        copyMsg.innerHTML='copied';
        else
        copyMsg.innerHTML='';
    }
    catch(e)
    {
        copyMsg.innerHTML='failed';
    }
    copyMsg.classList.add("active");

    setTimeout(()=>
    {
        copyMsg.classList.remove("active");
        copyMsg.innerHTML='';
    },1500);
}
allCheckBox.forEach((checkbox)=>
{
    
})
inputSlider.addEventListener('input',()=>
{


    passwordLength=inputSlider.value;
    handleSlider();
});
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to shuffle the password string
  function shufflePassword(password) {
    const passwordArray = password.split(''); // Convert the string to an array of characters
    const shuffledArray = shuffleArray(passwordArray); // Shuffle the array
    const shuffledPassword = shuffledArray.join(''); // Convert the shuffled array back to a string
    return shuffledPassword;
  }
generateBtn.addEventListener('click',()=>
{
    let ans="",i=0;
    if(passwordLength<4)
    passwordLength=4;
 while(i<passwordLength)
  {

 if(numbersCheck.checked &&i<passwordLength)
 {
    i++;
    ans+=generateRandomNumber();
 }
    if(lowercaseCheck.checked&& i<passwordLength)
    {
        i++;
    ans+=getLowerCase();
    }
    if(uppercaseCheck.checked && i<passwordLength)
    {
        i++;
    ans+=getUpperCase();
    }
    if(symbolsCheck.checked && i<passwordLength)
    {
        i++;
    ans+=generateSymbol();
    }
  }
  const shuffledPassword = shufflePassword(ans);
    passwordDisplay.value=shuffledPassword;
});

copyBtn.addEventListener('click',()=>
{
console.log(copyContent());
})


