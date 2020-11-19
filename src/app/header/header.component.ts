import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuMobile: boolean;

  toggleMenuMobile() : void {
    this.menuMobile = !this.menuMobile;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
