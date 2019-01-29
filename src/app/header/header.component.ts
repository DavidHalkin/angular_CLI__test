import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
	cars:any [ ]
  constructor() { }

  ngOnInit() {
  this.cars=[
  	{
  		vin:0,
  		year:2323,
  		color:'red',
  		brand: 'sdasdasd'
  	}
  ]
  }

}
