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
  public countries2 = [
    {
      name: 'ShangHai',
      landArea: 675,
      country: 'China'

    },
    {
      name: 'New york',
      landArea: 783,
      country: 'USA'
    },
    {
      name: 'TP.HCM',
      landArea:  2095,
      country: "VN"
    },
    {
      name: 'Seoul',
      landArea: 605,
      country: 'Korea'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

  public resetName(): void{
    console.log('resetName');
    this.name = '';
  }

}
