import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})

export class CardPricingComponent {
  @Input()
  titleCard:string = ""
  @Input()
  console:string = ""
  @Input()
  price:string = ""

}
