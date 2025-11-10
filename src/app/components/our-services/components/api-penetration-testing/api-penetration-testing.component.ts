import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';

@Component({
  selector: 'app-api-penetration-testing',
  templateUrl: './api-penetration-testing.component.html',
  styleUrls: ['./api-penetration-testing.component.scss'],
  imports: [
    RouterLink,
    CommonModule,
    HeaderComponent,
    PageHeaderComponent,
    GsapRevealDirective,
    FooterComponent,
    CtaComponent,
  ],
})
export class ApiPenetrationTestingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Any initialization logic can go here.
    // For example, you could scroll to top on navigation or set meta tags.
    // window.scrollTo(0, 0);
  }
}
