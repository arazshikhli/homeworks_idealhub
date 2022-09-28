
const buttonValue=document.querySelector('.res-btn');
function getSumm(){
    buttonValue.addEventListener("click",function(event){
        const firstNumber=+document.querySelector('.first-nmb').value;
    const SecondNumber=+document.querySelector('.second-nmb').value;
    const result=+ firstNumber+SecondNumber;
        if(firstNumber===0 && SecondNumber===0){
           
            document.querySelector('.result').innerHTML=" Введите числа ";
           }
           else{
          
            document.querySelector('.result').innerHTML=" Результат сложения двух чисел: "+result+". "
           }
    })

}
getSumm();

function getLargestNumber(){
    const firstNumber=Number(prompt("Введите первое число из диапазона;")) ;
    const secondNumber=Number(prompt("Введите второе число из диапазона;")) ;
    let myArray=[];

    if(firstNumber<secondNumber){
       for(let i=0;i<=secondNumber-firstNumber;i++){
        myArray[i]=firstNumber+i;
       } 
    }
   for(let i=0;i<myArray.length;i++){
if(myArray[i]%2===0)
       console.log(myArray[i]);
   }
   
}
const  evenBtn=document.querySelector('.even-button');
evenBtn.addEventListener("click",function(){
    getLargestNumber();
})

const thirdButton=document.querySelector('.third-btn');
function getBigestNumber(){
    const firstNumber=Number(prompt("Введите первое число:")) ;
    const secondNumber=Number(prompt("Введите второе число:")) ;
    const thirdNumber=Number(prompt("Введите третье число:")) ;
    let biggestNumber=0;
    if(firstNumber>secondNumber && firstNumber>thirdNumber){
        biggestNumber=firstNumber;
    }
    else if(secondNumber>firstNumber && secondNumber>thirdNumber){
        biggestNumber=secondNumber;
    }
    else if(firstNumber===secondNumber && firstNumber>thirdNumber){
        biggestNumber=firstNumber;
    }
    else if(thirdNumber===secondNumber && firstNumber<thirdNumber){
        biggestNumber=thirdNumber;
    }
    else if(thirdNumber===firstNumber && firstNumber<secondNumber){
        biggestNumber=secondNumber;
    }
    else{
        biggestNumber=thirdNumber;
    }
    console.log(biggestNumber);
}
thirdButton.addEventListener("click",function(event){
    getBigestNumber();
})



const fullNameButton=document.querySelector('.fname_btn');
fullNameButton.addEventListener("click",function(event){
    const firstName=document.querySelector('.firstname-input').value;
const lastName=document.querySelector('.lastname-input').value;
let User={
    firstName:firstName,
    lastName:lastName,
    getFullName:function(){
     document.querySelector('.full_name').innerHTML=this.firstName+" "+this.lastName;
  
    }
}
    User.getFullName();
});
