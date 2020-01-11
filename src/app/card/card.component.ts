import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  clickMe() {
    var cardo = document.getElementById("card");
    var cardoFliped = document.getElementById("cardFliped");
    cardo.classList.add("fliped");
    cardoFliped.classList.add(".true");
    cardoFliped.classList.remove(".cardFlip")
  }


  constructor() {
    
   }

  ngOnInit() {
  }
  

}

