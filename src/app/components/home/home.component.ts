import { Component } from '@angular/core';
import { FooterComponent } from '@app/components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HeaderComponent } from '@app/components/home/components/header/header.component';
import { ServicesComponent } from '@app/components/home/components/services/services.component';
import { WorkComponent } from '@app/components/home/components/work/work.component';
import { AboutComponent } from '@app/components/about/about.component';
import { TestimonialComponent } from '@app/components/testimonial/testimonial.component';
import { AboutContentComponent } from '@app/components/about/components/about-content/about-content.component';
import { CtaComponent } from '@app/components/cta/cta.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    CaseStudiesComponent,
    PricingComponent,
    TestimonialComponent,
    BlogsComponent,
    CtaComponent,
    FooterComponent,
    AboutContentComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
