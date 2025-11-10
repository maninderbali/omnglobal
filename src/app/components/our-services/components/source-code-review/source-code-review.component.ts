import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';

@Component({
  selector: 'app-source-code-review',
  templateUrl: './source-code-review.component.html',
  styleUrls: ['./source-code-review.component.scss'],
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
export class SourceCodeReviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Scroll to top or perform SEO setup if needed
    // window.scrollTo(0, 0);
  }
}
