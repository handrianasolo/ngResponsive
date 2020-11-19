import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  team = [
    {​​​​​
      icon: 'assets/img/pic05.jpg',
      firstname: 'Jill',
      lastname: 'Scott',
      Status: 'Chef Patissier étoilé'
    }​​​​​,
    {​​​​​
      icon: 'assets/img/pic06.jpg',
      firstname: 'Amy',
      lastname: 'Leepong',
      Status: 'Web Marketing'
    }​​​​​,
    {
      ​​​​​icon: 'assets/img/pic03.jpg',
      firstname: 'Mike',
      lastname: 'Scott',
      Status: 'Second Chef Patissier'
    }​​​​​,
    {​​​​​
      icon: 'assets/img/pic04.jpg',
      firstname: 'Marie',
      lastname: 'Peterson',
      Status: 'Web Designer'
    }​​​​​,
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
