import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';

@Component({
  selector: 'app-threat-modeling',
  templateUrl: './threat-modeling.component.html',
  styleUrls: ['./threat-modeling.component.scss'],
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
export class ThreatModelingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Optional: Scroll to top or perform analytics setup
    // window.scrollTo(0, 0);
  }
}
