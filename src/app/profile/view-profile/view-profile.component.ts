import { Component, OnInit } from '@angular/core';
import { ViewProfileCustomComponent } from './view-profile-custom.component';

@Component({
    selector: 'dss-view-profile',
    template: `<view-profile-core [useThisComponent]="useThisComponent"></view-profile-core>`
})

export class ViewProfileComponent implements OnInit {

    useThisComponent: any = null;

    constructor() {}

    ngOnInit() {
        this.useThisComponent = ViewProfileCustomComponent;
    }
}