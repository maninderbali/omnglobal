import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '@app/components/header/header.component';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { CtaComponent } from '@app/components/cta/cta.component';
import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
    PageHeaderComponent,
    FooterComponent,
    CtaComponent,
    GsapRevealDirective,
  ],
})
export class ContactComponent {
  form = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  };

  sendMail(contactForm: NgForm): void {
    if (contactForm.invalid) {
      // validation errors are shown in the template
      return;
    }

    const subject =
      `New Contact Request from ${this.form.firstName} ${this.form.lastName}`.trim();

    const body = `
Name: ${this.form.firstName} ${this.form.lastName}
Phone: ${this.form.phone}
Email: ${this.form.email}
Service: ${this.form.service || 'N/A'}

Message:
${this.form.message}
`.trim();

    const mailtoLink =
      `mailto:info@omnglobal.org` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
}
