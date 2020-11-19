import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from '../api/portfolios';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  modalShow: boolean;
  modalSrc: string;
  modalCaption: string;
  modalTitle: string;
  portfolios = PORTFOLIOS;

  nbItems = 4;

  tab = [];

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<this.portfolios.length; i+=this.nbItems){
      this.tab.push(this.portfolios.slice(i,i+this.nbItems));
    }
  }

}
