import { NgModule } from '@angular/core';
import { ViewProfileComponent } from './view-profile.component';
import { ViewProfileRoute } from './view-profile.route';

import { ViewProfileCoreModule } from 'zed-component-loader/src/profile/view-profile/view-profile.module';
import { ViewProfileCustomComponent } from './view-profile-custom.component';

@NgModule({
    declarations: [
        ViewProfileComponent,
        ViewProfileCustomComponent
    ],
    imports: [
        ViewProfileRoute,
        ViewProfileCoreModule
    ],
    entryComponents: [
        ViewProfileCustomComponent
    ]
})

export class ViewProfileModule {

}