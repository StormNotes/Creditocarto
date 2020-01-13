import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  username = document.getElementById('username')

  if(username){

  }



  clickMe() {
    let cardo = document.getElementById("card");
    let cardBack = document.getElementById("cardFliped")
    cardo.classList.toggle("frontFliped");
    cardBack.classList.toggle("backFliped")
  }


  constructor() {
    
   }

  ngOnInit() {
  }
  

}

