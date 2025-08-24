import { Routes } from '@angular/router';
import { AboutComponent } from '@app/components/about/about.component';
import { ContactComponent } from '@app/components/contact/contact.component';
import { HomeComponent } from '@app/components/home/home.component';
import { OurTeamComponent } from '@app/components/our-team/our-team.component';
import { TestimonialComponent } from '@app/components/testimonial/testimonial.component';
import { FaqComponent } from '@app/components/faq/faq.component';
import { OurServicesComponent } from '@app/components/our-services/services.component';
import { BlogsComponent } from '@app/components/blogs/blogs.component';
import { BlogDetailContentComponent } from '@app/components/blogs/components/blog-detail-content/blog-detail-content.component';
import { BlogDetailsComponent } from '@app/components/blogs/components/blog-details/blog-details.component';
import { ServiceDetailsComponent } from '@app/components/our-services/components/service-details/service-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialComponent, // Assuming TestimonialComponent is imported
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: 'service-details',
    component: ServiceDetailsComponent,
  },
  {
    path: 'our-blogs',
    component: BlogsComponent,
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  // },
];
