import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstInput: string;
  lastInput: string;
  emailInput: string;
  msgInput: any;

  form = new FormGroup({
    firstInput : new FormControl('', Validators.required),
    lastInput : new FormControl('', Validators.required),
    emailInput: new FormControl('', Validators.required),
    msgInput: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit( val: any): void {
    console.log('Data submitted', val);
    window.alert('Merci de nous avoir contacter. A bientôt!');
    this.form.reset();
  }

}
