import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
  
    console.log(" ");
    let suit = ['♠', '♣', '♥', '♦',];
    let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J' , 'Q' , 'K',];
   
    
    function genrateCard() {
      const suitsIndex=Math.floor(Math.random() * suit.length) 
      const numberIndex=Math.floor(Math.random() * number.length)
      
      console.log(suitsIndex)
      console.log(numberIndex)

      const suitsElement=document.getElementById("suits")
      const bottomSuitsElement=document.getElementById("suitsTwo")
      const numbersElement=document.getElementById("numbers")


      suitsElement.textContent=suit[suitsIndex]
      bottomSuitsElement.textContent=suit[suitsIndex]
      numbersElement.textContent=number[numberIndex]

    if(suit[suitsIndex]==="♥" || suit[suitsIndex]=== "♦"){
      suitsElement.style.color="red"
      bottomSuitsElement.style.color="red"
    } 



      return console.log(
        [suits[suitsIndex]],
        [number[numberIndex]]

      
      
      )
    }
    genrateCard()




    
   

};