import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-thai',
  templateUrl: './profile-thai.component.html',
  styleUrls: ['./profile-thai.component.scss']
})
export class ProfileThaiComponent implements OnInit {

  data: any = null;

  constructor() { }

  ngOnInit() {
      console.log('ProfileThaiComponent - data => ', this.data);
  }

}
