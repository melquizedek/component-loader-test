import { Component, OnInit } from '@angular/core';
import { componentList } from '../../../environments/component-list';

@Component({
    selector: 'profile',
    //template: `<h1>Profile</h1><ng-template [componentLoader]=componentToUsed></ng-template>`
    template: '<ui-loader-profile [useThisComponent]="componentToUsed"></ui-loader-profile>'
})

export class ProfileComponent implements OnInit {

    componentToUsed: any = null

    constructor() { }

    ngOnInit() {
        //this.componentToUsed = componentList['ProfileHkComponent'];
        //this.componentToUsed = componentList['ProfileThaiComponent'];
    }

}