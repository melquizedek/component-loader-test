import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-profile',
  template: `<h1>Profile</h1><router-outlet></router-outlet>`
})
export class CoreProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
