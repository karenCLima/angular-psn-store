import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  imageURls:string[] = ['assets/bt-1.jpg','assets/bt-4.jpg','assets/bt-5.jpg','assets/ac-cover.jpg','assets/bt-bad-company-2.jpg','assets/bt-hardline.jpg']
  @Input()
  titleCards:string[] = ['Play it Now!', 'Buy it Now!','Play it Now!', 'Buy it Now!','Play it Now!', 'Buy it Now!']
  @Input()
  consoles:string[] = ['FULL GAME|PS4', 'FULL GAME|PS4', 'DIGITAL GAME|PS4|PS3', 'PS4|PS3|PS  VITA','FULL GAME|PS4', 'DIGITAL GAME|PS4|PS3']
  @Input()
  prices:string[] = ['R$ 299,99','R$ 169,99','R$ 99,90','R$ 199,90','R$ 299,99','R$ 149,99']
  @Input()
  labelTitles: string[] = ['EXCLUSIVE', 'DIGITAL','CROSS BUY','EXCLUSIVE', 'DIGITAL','CROSS BUY']
  

}
