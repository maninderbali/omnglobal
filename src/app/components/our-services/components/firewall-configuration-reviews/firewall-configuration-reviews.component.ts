import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-firewall-configuration-reviews',
  templateUrl: './firewall-configuration-reviews.component.html',
  styleUrls: ['./firewall-configuration-reviews.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaComponent,
    GsapRevealDirective,
  ],
})
export class FirewallConfigurationReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Optional: window.scrollTo(0, 0);
  }
}
