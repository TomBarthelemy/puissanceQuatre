import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  pions: any[];
  columns: number[] = [4, 3, 2, 1, 0];
  redIsNext: boolean;
  winner: any = null;
  partieEnCours: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.newGame();

  }

  
  get width(){
    return 5;
  }

  get height(){
    return 5;
  }

  get player() {
    return this.redIsNext ? 'red' : 'yellow';
  }

  newGame() {
    this.pions = Array(25).fill(null);
    this.winner = null;
    this.redIsNext = true;
    this.partieEnCours = true;
  }

  makeMove(idxColumn : number){

    for(let i = this.height; i > 0; i-- ){
      let idxCalcule = (this.width * i) - idxColumn - 1 ;
      if(!this.pions[idxCalcule]){
        this.pions.splice(idxCalcule, 1, this.player);
        this.redIsNext = !this.redIsNext;
        break;
      }
    }
    

    this.winner = this.calculateWinner();
  }


  calculateWinner() {
        const lines = [
          [  0,  1,  2,  3],
          [  5,  6,  7,  8],
          [ 10, 11, 12, 13],
          [ 15, 16, 17, 18],
          [ 20, 21, 22, 23],
          
          [  1,  2,  3,  4],
          [  6,  7,  8,  9],
          [ 11, 12, 13,  14],
          [ 16, 17, 18,  20],
          [ 21, 22, 23,  24],
          
          [  0,  5,  10,  15],
          [  1,  6,  11,  16],
          [  2,  7,  12,  17],
          [  3,  8,  13,  18],
          [  4,  9,  14,  19],
          
          [  5,  10,  15,  20],
          [  6,  11,  16,  21],
          [  7,  12,  17,  22],
          [  8,  13,  18,  23],
          [  9,  14,  19,  24],
          
          [  0,  6,  12,  18],
          [  6,  12,  18,  24],
          [  5,  11,  17,  23],
          [  1,  7,  13,  19],
          
          [  4,  8,  12,  16],
          [  8,  12,  16,  20],
          [  9,  13,  17,  21],
          [  3,  7,  11,  15]

    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        this.pions[a] &&
        this.pions[a] === this.pions[b] &&
        this.pions[a] === this.pions[c] &&
        this.pions[a] === this.pions[d]
      ) {
        return this.pions[a];
      }
    }
    return null;
  }

}
