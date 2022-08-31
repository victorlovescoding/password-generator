const passwordEl = document.getElementById("password")
const numberInputEl = document.getElementById("numberInput")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const buttonEl = document.getElementById("button")
const copyBtn = document.getElementById("copyBtn")

const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseStr = "abcdefghijklmnopqrstuvwxyz"
const numbersStr = "0123456789"
const symbolsStr = "!@#$%^&*()_+=-"
numberInputEl.addEventListener('enter',(e)=>{
    e.preventDefault();
})

let getUppercase = function getUppercase(){
  return  uppercaseStr[Math.floor(Math.random()*uppercaseStr.length)]
}

let getlowercase = function getlowercase(){
    return  lowercaseStr[Math.floor(Math.random()*lowercaseStr.length)]
}

let getnumbers = function getnumbers(){
    return  numbersStr[Math.floor(Math.random()*numbersStr.length)]
}

let getsymbols = function getsymbols(){
    return  symbolsStr[Math.floor(Math.random()*symbolsStr.length)]
}

function generatePassword(){
    const numberOfPassword = numberInputEl.value;
    if(numberOfPassword>50){
        alert("Number of Characters should be less than 50")
        return
    }else if(numberOfPassword<5){
        alert("Number of Characters should be more than 5")
        return
    }
    let remainRandomArray = []
    let checkedArray = [];
    let password = "";

    // 將勾選到的條件先各產生出密碼放到checkedArray裡，同時放一份到remainRandomArray裡(拿來最後再次隨機產生剩下的密碼)
    if(uppercaseEl.checked){
        checkedArray.push(getUppercase());
        remainRandomArray.push(getUppercase)
    }
    if(lowercaseEl.checked){
        checkedArray.push(getlowercase());
        remainRandomArray.push(getlowercase)
    }
    if(numberEl.checked){
        checkedArray.push(getnumbers());
        remainRandomArray.push(getnumbers)
    }
    if(symbolEl.checked){
        checkedArray.push(getsymbols());
        remainRandomArray.push(getsymbols)
    }
    //將剩餘還沒產生的密碼隨機產生，產生後放到checkedArray
    for(let i=checkedArray.length;i<numberOfPassword;i++){
        let executeFunction = (remainRandomArray[Math.floor(Math.random() * remainRandomArray.length)]);
        executeFunction = executeFunction();
        checkedArray.push(executeFunction);
      }
      checkedArray.sort(() => Math.random() - 0.5);//打亂checkedArray原本的順序

    for(let i=0;i<checkedArray.length;i++){//將checkedArray裡每個密碼提出來放到password裡面
        password += checkedArray[i]
    }
    passwordEl.textContent = password
}

buttonEl.addEventListener('click',generatePassword)

copyBtn.addEventListener('click',copyPassword)
const forTextarea = document.getElementById("forTextarea")
const pwTextarea = document.createElement('textarea');
pwTextarea.id="pwTextarea";
function copyPassword() {
    
    pwTextarea.value = passwordEl.textContent;
    forTextarea.appendChild(pwTextarea)
  
    /* Select the text field */
    pwTextarea.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(pwTextarea.value);
  
    /* Alert the copied text */
    
  }