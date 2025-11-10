import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-internal-network-penetration-testing',
  templateUrl: './internal-network-penetration-testing.component.html',
  styleUrls: ['./internal-network-penetration-testing.component.scss'],
  imports: [
    RouterLink,
    CommonModule,
    HeaderComponent,
    PageHeaderComponent,
    FooterComponent,
    CtaComponent,
    GsapRevealDirective,
  ],
})
export class InternalNetworkPenetrationTestingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Optionally scroll to top or track page analytics
    // window.scrollTo(0, 0);
  }
}
