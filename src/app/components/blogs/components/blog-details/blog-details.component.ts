import { Component } from '@angular/core';
import { BlogDetailContentComponent } from '@app/components/blogs/components/blog-detail-content/blog-detail-content.component';
import { BlogDetailSidebarComponent } from '@app/components/blogs/components/blog-detail-sidebar/blog-detail-sidebar.component';
import { ViewMoreBlogComponent } from '@app/components/blogs/components/view-more-blog/view-more-blog.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';

@Component({
  selector: 'app-blog-left',
  imports: [
    HeaderComponent,
    PageHeaderComponent,
    BlogDetailSidebarComponent,
    BlogDetailContentComponent,
    ViewMoreBlogComponent,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './blog-details.component.html',
  styles: ``,
})
export class BlogDetailsComponent {}
