import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { ServiceContentComponent } from '../service-content/service-content.component';
import { ServiceSidebarComponent } from '../service-sidebar/service-sidebar.component';
import { ViewMoreServicesComponent } from '../view-more-services/view-more-services.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';

@Component({
  selector: 'app-service-details',
  imports: [
    HeaderComponent,
    CtaComponent,
    FooterComponent,
    PageHeaderComponent,
    ServiceSidebarComponent,
    ServiceContentComponent,
    ViewMoreServicesComponent,
  ],
  templateUrl: './service-details.component.html',
  styles: ``,
})
export class ServiceDetailsComponent {}
