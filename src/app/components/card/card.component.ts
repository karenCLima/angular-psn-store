import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  imageURl:String = ""
  @Input()
  titleCard:string = ""
  @Input()
  console:string = ""
  @Input()
  price:string = ""
  @Input()
  labelTitle: string = ""


}
