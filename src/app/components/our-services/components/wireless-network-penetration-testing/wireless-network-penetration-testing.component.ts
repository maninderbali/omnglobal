import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-wireless-network-penetration-testing',
  templateUrl: './wireless-network-penetration-testing.component.html',
  styleUrls: ['./wireless-network-penetration-testing.component.scss'],
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
export class WirelessNetworkPenetrationTestingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Optional: window.scrollTo(0, 0);
  }
}
