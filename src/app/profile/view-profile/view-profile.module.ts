import { NgModule } from '@angular/core';
import { ViewProfileComponent } from './view-profile.component';
import { ViewProfileRoute } from './view-profile.route';

import { CoreProfileModule } from 'zed-component-loader/src/profile/core-profile.module';
import { ViewProfileCustomComponent } from './view-profile-custom.component';

@NgModule({
    declarations: [
        ViewProfileComponent,
        ViewProfileCustomComponent
    ],
    imports: [
        ViewProfileRoute,
        CoreProfileModule
    ],
    entryComponents: [
        ViewProfileCustomComponent
    ]
})

export class ViewProfileModule {

}