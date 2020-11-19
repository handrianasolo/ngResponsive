import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PORTFOLIOS } from '../api/portfolios';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  portfolio;
  portfolios = PORTFOLIOS;

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.portfolio = this.portfolios[params.id];
      console.log(this.portfolio);
    });
  }
  
  goBack(): void {
    this.route.navigate(['/portfolios']);
  }

}
