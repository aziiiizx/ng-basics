import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input()
 testo: string = '';

 eta:number = 25
 anni:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
