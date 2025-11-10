import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-external-network-penetration-testing',
  templateUrl: './external-network-penetration-testing.component.html',
  styleUrls: ['./external-network-penetration-testing.component.scss'],
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
export class ExternalNetworkPenetrationTestingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Optional scroll to top
    // window.scrollTo(0, 0);
  }
}
