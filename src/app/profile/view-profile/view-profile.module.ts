import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent} from './view-profile.component';
import { ViewProfileRoute } from './view-profile.route';
import { ViewProfileCoreComponent } from 'dss-component-loader';

@NgModule({
    imports: [
        CommonModule,
        ViewProfileRoute
    ],
    declarations: [
        ViewProfileComponent, ViewProfileCoreComponent
    ]
})

export class ViewProfileModule {}