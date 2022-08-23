import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() titre1 :string='';
  @Input() titre2 :string='';
  @Input() name :string='';
  @Output() val= new EventEmitter <number>()
  constructor() { }

  ngOnInit(): void {


}
getValeur($event:any , i:number)
{
  // console.log(i);
  this.val.emit(i);

}
}