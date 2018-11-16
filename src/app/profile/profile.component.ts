import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dss-profile',
  template: '<h1>Profile</h1><router-outlet></router-outlet>',
})
export class ProfileComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
  }

}