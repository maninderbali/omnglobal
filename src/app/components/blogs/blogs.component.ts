import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { PaginationComponent } from '@app/components/pagination/pagination.component';

@Component({
  selector: 'app-blogs',
  imports: [
    PageHeaderComponent,
    CommonModule,
    PaginationComponent,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './blogs.component.html',
  styles: ``,
})
export class BlogsComponent {
  blogs = blogs2;
}
