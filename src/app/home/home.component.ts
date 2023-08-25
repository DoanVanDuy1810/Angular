import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public name = 'Urban Legend China';
  public age = 25;
  public contries = ['ShangHai', 'Wuhan', 'Bejing', 'Chongqing', 'Guangdong']

  constructor(){}

  ngOnInit(): void {
    
  }

  public resetName(): void{
    console.log('resetName');
    this.name = '';
  }

}
