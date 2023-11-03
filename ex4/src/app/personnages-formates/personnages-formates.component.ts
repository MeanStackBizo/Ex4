import { Component } from '@angular/core';

@Component({
  selector: 'app-personnages-formates',
  templateUrl: './personnages-formates.component.html',
  styleUrls: ['./personnages-formates.component.css']
})
export class PersonnagesFormatesComponent {

    tabPersonnages = [
        {nom:'blink', Image:'assets/emoji1.jpg', nb: 44, majeur:true},
        {nom:'crazy', Image:'assets/emoji2.jpg', nb: 16, majeur:true},
        {nom:'cool', Image:'assets/emoji4.jpg', nb: 12, majeur:false},
    ];


    getNbrMajeur(){
      var count=0;
      this.tabPersonnages.forEach((val)=>{
         count+=val.nb;
      })
      return count;
    }

}
