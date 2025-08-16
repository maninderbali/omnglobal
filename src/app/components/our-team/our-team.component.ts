import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '@app/components/cards/member-card/member-card.component';
import { PaginationComponent } from '@app/components/pagination/pagination.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FooterComponent } from '@app/components/footer/footer.component';

@Component({
  selector: 'app-our-team',
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CommonModule,
    MemberCardComponent,
    PaginationComponent,
  ],
  templateUrl: './our-team.component.html',
  styles: ``,
})
export class OurTeamComponent {
  teamMembers = teamMembers;
}
