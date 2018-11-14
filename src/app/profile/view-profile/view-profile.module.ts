import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent} from './view-profile.component';
import { ViewProfileRoute } from './view-profile.route';

import { MainModule } from 'dss-component-loader';
import { componentList } from '../../../environments/component-list';
 
@NgModule({
    imports: [
        CommonModule,
        ViewProfileRoute,
        MainModule.forRoot({AppConfig: componentList})
    ],
    declarations: [
        ViewProfileComponent
    ],
    entryComponents: []
})

export class ViewProfileModule {}