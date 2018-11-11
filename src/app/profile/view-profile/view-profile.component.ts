import { Component, OnInit } from '@angular/core';
import { ViewProfileCustomComponent } from './view-profile-custom.component';

@Component({
    selector: 'dss-view-profile',
    template: `<core-view-profile [useThisComponent]="useThisComponent"></core-view-profile>`
})

export class ViewProfileComponent implements OnInit {

    useThisComponent: any = null;

    constructor() {}

    ngOnInit() {
        //this.useThisComponent = ViewProfileCustomComponent;
    }
}