import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { Testimonial1Component } from './components/testimonial1/testimonial1.component';
import { Testimonial2Component } from './components/testimonial2/testimonial2.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { CtaComponent } from '@app/components/cta/cta.component';

@Component({
  selector: 'app-testimonial',
  imports: [
    HeaderComponent,
    FooterComponent,
    CtaComponent,
    PageHeaderComponent,
    Testimonial1Component,
    Testimonial2Component,
  ],
  templateUrl: './testimonial.component.html',
  styles: ``,
})
export class TestimonialComponent {}
