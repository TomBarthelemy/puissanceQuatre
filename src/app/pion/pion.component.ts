import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pion',
  templateUrl: './pion.component.html',
  styleUrls: ['./pion.component.scss']
})
export class PionComponent {

  @Input() value: 'red' | 'yellow' ;

}
