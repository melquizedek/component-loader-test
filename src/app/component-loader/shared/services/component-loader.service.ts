import { Injectable, Inject } from '@angular/core';
import { RouteModel } from '../../models/route.model';
import { COMPONENT_ROUTE_LIST } from '../../tokens/tokens';

@Injectable()
export class ComponentLoaderService {

  constructor(@Inject(COMPONENT_ROUTE_LIST) private compRouteList: RouteModel[]) { 
      console.log('ComponentLoaderService:compRouteList =>', compRouteList);
  }

}
