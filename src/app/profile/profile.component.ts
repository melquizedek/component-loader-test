import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dss-profile',
  template: '<h1>Profile Route View</h1><router-outlet></router-outlet>',
})
export class ProfileComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
  }

}