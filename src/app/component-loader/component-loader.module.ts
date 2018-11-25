import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouteModel } from './models/route.model';
import { ROUTES } from '@angular/router';
import { COMPONENT_ROUTE_LIST } from './tokens/tokens';
import { ComponentLoaderService } from './shared/services/component-loader.service';

@NgModule()

export class ComponentLoaderModule { 
	
	static forRoot(compRouteList: RouteModel[]) : ModuleWithProviders {
		return {
			ngModule: ComponentLoaderModule,
			// providers: [
			// 	ComponentLoaderService,
			// 	{provide: ROUTES, useValue: compRouteList, multi: true},
			// 	{provider: COMPONENT_ROUTE_LIST, useValue: compRouteList}
			// ]
		}
	}

}
