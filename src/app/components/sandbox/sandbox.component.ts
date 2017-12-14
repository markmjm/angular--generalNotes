import {Component} from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];
  people2 = [
    {
      firstName: 'Rick',
      lastName: 'Rick'
    },
    {
      firstName: 'Daryl',
      lastName: 'Donut'
    },
    {
      firstName: 'Glen',
      lastName: 'Glad'
    },
    {
      firstName: 'Jim',
      lastName: 'Rhee'
    }
  ];

  name: String = 'John Doe';
  showName: Boolean = false;

  greeting: Number = 1;

  imageUrl = 'http://lorempixel.com/400/200';

  isSpecial = true;
  canSave = true;

  currentClasses = {};
  currentStyles = {};
  isUnchanged: Boolean = false;


  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = .1;

  constructor() {
    this.people[2] = 'Carol';
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: this.canSave,
      special: this.isSpecial
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '48px' : '12px'
    };
  }

}
