import { Component, OnInit } from '@angular/core';

@Component({
  template: `<ng-template componentLoader></ng-template>`,
})

export class SwitchViewProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-core-view-profile',
  templateUrl: './core-view-profile.component.html',
  styleUrls: ['./core-view-profile.component.scss']
})

export class CoreViewProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
