import { Routes } from '@angular/router';
import { ApiPenetrationTestingComponent } from '@app/components/our-services/components/api-penetration-testing-component/api-penetration-testing-component.component';
import { WebApplicationSecurityTestingComponent } from '@app/components/our-services/components/web-application-security-testing/web-application-security-testing.component';

export const routes: Routes = [
  {
    path: 'web-application-security-testing',
    component: WebApplicationSecurityTestingComponent,
  },
  {
    path: 'api-security-testing',
    component: ApiPenetrationTestingComponent,
  },
];

export const SERVICES_ROUTES = routes;
