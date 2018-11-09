import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-hk',
  templateUrl: './profile-hk.component.html',
  styleUrls: ['./profile-hk.component.scss']
})

export class ProfileHkComponent implements OnInit {

  data: any = null;

  constructor() { }

  ngOnInit() {
      console.log('ProfileHkComponent - data => ', this.data);
  }

}
