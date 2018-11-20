import { Component, OnInit } from '@angular/core';

@Component({
    template: `<ng-template componentLoader></ng-template>`
})

export class RunViewProfileComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
    
}

@Component({
    selector: 'custom-profile-view',
    template: `<h1>Custom View Profile</h1>`
})

export class ViewProfileComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
    
}