import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { services } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '@app/components/cards/service-card/service-card.component';
import { ServiceAboutComponent } from '@app/components/our-services/service-about/service-about.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { CtaComponent } from '@app/components/cta/cta.component';

@Component({
  selector: 'app-services',
  imports: [
    HeaderComponent,
    PageHeaderComponent,
    CommonModule,
    ServiceCardComponent,
    ServiceAboutComponent,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './services.component.html',
  styles: ``,
})
export class OurServicesComponent {
  services = services;
}
