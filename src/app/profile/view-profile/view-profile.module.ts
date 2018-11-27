import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent} from './view-profile.component';
import { ViewProfileRoute } from './view-profile.route';

@NgModule({
    imports: [
        CommonModule,
        ViewProfileRoute
    ],
    declarations: [
        ViewProfileComponent
    ]
})

export class ViewProfileModule {}