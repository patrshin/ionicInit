import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = '';
  name2 = '';

  get score() {
    var i = 0;
    var score1 = 0;
    var j = 0;
    var score2 = 0;
    for (i = 0; i < this.name1.length; i++) {
      score1 += this.name1.charCodeAt(i) - 50;
    }
    score1 /= this.name1.length

    for (j = 0; j < this.name2.length; j++) {
      score2 += this.name2.charCodeAt(j) - 50;
    }
    score2 /= this.name2.length

    return (score2 > score1 ? score1/score2*100 : score2/score1*100);

  }
}
