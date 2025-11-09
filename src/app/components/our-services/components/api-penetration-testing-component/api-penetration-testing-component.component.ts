import { CommonModule } from '@angular/common';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-penetration-testing',
  imports: [
    RouterLink,
    CommonModule,
    HeaderComponent,
    PageHeaderComponent,
    GsapRevealDirective,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './api-penetration-testing-component.component.html',
  styleUrls: ['./api-penetration-testing-component.component.scss'],
})
export class ApiPenetrationTestingComponent {}
