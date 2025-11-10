import { Routes } from '@angular/router';
import { InternalNetworkPenetrationTestingComponent } from '@app/components/our-services/components/internal-network-penetration-testing/internal-network-penetration-testing.component';
import { MobileApplicationPenetrationTestingComponent } from '@app/components/our-services/components/mobile-application-penetration-testing/mobile-application-penetration-testing.component';
import { WebApplicationSecurityTestingComponent } from '@app/components/our-services/components/web-application-security-testing/web-application-security-testing.component';

export const routes: Routes = [
  {
    path: 'web-application-security-testing',
    component: WebApplicationSecurityTestingComponent,
  },
  {
    path: 'mobile-application-penetration-testing',
    component: MobileApplicationPenetrationTestingComponent,
  },
  {
    path: 'api-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/api-penetration-testing/api-penetration-testing.component'
      ).then((m) => m.ApiPenetrationTestingComponent),
  },
  {
    path: 'source-code-review',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/source-code-review/source-code-review.component'
      ).then((m) => m.SourceCodeReviewComponent),
  },
  {
    path: 'threat-modeling',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/threat-modeling/threat-modeling.component'
      ).then((m) => m.ThreatModelingComponent),
  },
  {
    path: 'internal-network-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/internal-network-penetration-testing/internal-network-penetration-testing.component'
      ).then((m) => m.InternalNetworkPenetrationTestingComponent),
  },
  {
    path: 'external-network-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/external-network-penetration-testing/external-network-penetration-testing.component'
      ).then((m) => m.ExternalNetworkPenetrationTestingComponent),
  },
  {
    path: 'active-directory-security-assessments',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/active-directory-security-assessments/active-directory-security-assessments.component'
      ).then((m) => m.ActiveDirectorySecurityAssessmentsComponent),
  },
  {
    path: 'wireless-network-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/wireless-network-penetration-testing/wireless-network-penetration-testing.component'
      ).then((m) => m.WirelessNetworkPenetrationTestingComponent),
  },
  {
    path: 'firewall-configuration-reviews',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/firewall-configuration-reviews/firewall-configuration-reviews.component'
      ).then((m) => m.FirewallConfigurationReviewsComponent),
  },
  {
    path: 'cloud-configuration-reviews',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/cloud-configuration-reviews/cloud-configuration-reviews.component'
      ).then((m) => m.CloudConfigurationReviewsComponent),
  },
  {
    path: 'cloud-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/cloud-penetration-testing/cloud-penetration-testing.component'
      ).then((m) => m.CloudPenetrationTestingComponent),
  },
];

export const SERVICES_ROUTES = routes;
