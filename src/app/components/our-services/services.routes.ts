import { Routes } from '@angular/router';
import { InternalNetworkPenetrationTestingComponent } from '@app/components/our-services/components/internal-network-penetration-testing/internal-network-penetration-testing.component';
import { MobileApplicationPenetrationTestingComponent } from '@app/components/our-services/components/mobile-application-penetration-testing/mobile-application-penetration-testing.component';
import { WebApplicationSecurityTestingComponent } from '@app/components/our-services/components/web-application-security-testing/web-application-security-testing.component';

export const routes: Routes = [
  {
    path: 'web-application-security-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/web-application-security-testing/web-application-security-testing.component'
      ).then((m) => m.WebApplicationSecurityTestingComponent),
  },
  {
    path: 'mobile-application-penetration-testing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/mobile-application-penetration-testing/mobile-application-penetration-testing.component'
      ).then((m) => m.MobileApplicationPenetrationTestingComponent),
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
  {
    path: 'mobile-app-development',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/mobile-app-development/mobile-app-development.component'
      ).then((m) => m.MobileAppDevelopmentComponent),
  },
  {
    path: 'web-app-development',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/web-app-development/web-app-development.component'
      ).then((m) => m.WebAppDevelopmentComponent),
  },
  {
    path: 'saas-development',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/saas-development/saas-development.component'
      ).then((m) => m.SaasDevelopmentComponent),
  },
  {
    path: 'blockchain-development',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/blockchain-development/blockchain-development.component'
      ).then((m) => m.BlockchainDevelopmentComponent),
  },
  {
    path: 'progressive-web-app',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/progressive-web-app/progressive-web-app.component'
      ).then((m) => m.ProgressiveWebAppComponent),
  },
  {
    path: 'search-engine-optimization',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/search-engine-optimization/search-engine-optimization.component'
      ).then((m) => m.SeoComponent),
  },
  {
    path: 'pay-per-click',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/ppc-sem/ppc-sem.component'
      ).then((m) => m.PpcSemComponent),
  },
  {
    path: 'social-media-marketing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/social-media-marketing/social-media-marketing.component'
      ).then((m) => m.SocialMediaMarketingComponent),
  },
  {
    path: 'online-reputation-management',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/online-reputation-management/online-reputation-management.component'
      ).then((m) => m.OnlineReputationManagementComponent),
  },
  {
    path: 'email-marketing',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/email-marketing/email-marketing.component'
      ).then((m) => m.EmailMarketingComponent),
  },
  {
    path: 'analytics-conversion-rate-optimization',
    loadComponent: () =>
      import(
        '@app/components/our-services/components/analytics-cro/analytics-cro.component'
      ).then((m) => m.AnalyticsCroComponent),
  },
];

export const SERVICES_ROUTES = routes;
