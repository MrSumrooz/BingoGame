// Excercise 223 js
let x = "Johan"
let y = "Doe"
console.log(x+"<>"+ y)

// excercise 24 js

let student = {
  name : "Sumrooz",
  surname : "Zia",
  eMail :"Sumrooz.zia@gmail.com", 

}

console.log(student)

// Excer 25 js

delete student.eMail

console.log(student)

// exercise 26 js

let carsArray = ["Ford","BMW ","Audi","Hondai","Suzuki","Tayota","Mercedis","Aqua","Honda","Farrari"]

console.log(carsArray)

// exercise 27  and 28 js

let randomArray = []

for (let i=0, array=100; i<array; i++) {
    randomArray.push(Math.round(Math.random() * array))
     
}
console.log(randomArray)

let maxArrayNum =function() {

    
    let random = Math.floor(Math.random() * 10) + 1;


}




// max number and Min number 

console.log(Math.max(...randomArray));
console.log(Math.min(...randomArray));


// 
 /*  let  ArrayNew= ['1","2","3","4',"5","6","7","8","9","10"];
    while(ArrayNew.length < 10){
        let  random = Math.floor(Math.random() * 10) + 1;
        if(arrRand.indexOf(random) === -1) arrRand.push(random);
    }
    console.log(arrRand);    
   */ 



    // exercicse 31


    let ContainnerNode = function(){

        let containnerN = document.getElementById("container")
        containnerN.innerText = "hi this a contain with js"
    }





