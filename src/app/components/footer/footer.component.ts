import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type FooterItem = {
  label: string;
  link?: string;
  icon?: string;
};

export type FooterSection = {
  title: string;
  items: FooterItem[];
};

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  @Input() logo: string = 'assets/img/logo/logo2.png';
  @Input() containerClass: string = 'vl-footer1-section-area';
  @Input() topSpace: boolean = false;

  currentYear = new Date().getFullYear();

  footerLinks: FooterSection[] = [
    {
      title: 'Quick Links',
      items: [
        { label: 'About Us', link: '/pages/about' },
        { label: 'It Solution', link: '/services' },
        { label: 'Our Blog', link: '/blogs/one' },
        { label: 'Pricing Plan' },
        { label: 'Contact Us', link: '/pages/contact' },
      ],
    },
    {
      title: 'Our Services',
      items: [
        { label: 'Cyber Security Solution' },
        { label: 'Scalable Cloud Solutions' },
        { label: 'Data Protection Services' },
        { label: 'Optimization Management' },
        { label: 'Software Development' },
      ],
    },
    {
      title: 'Contact Us',
      items: [
        {
          label: '+91-7838819230 ',
          link: 'tel:+917838819230',
          icon: 'assets/img/icons/phn1.svg',
        },
        {
          label:
            '1869/15 First floor, govindpuri extension,  kalkaji, new delhi-110019, India',
          icon: 'assets/img/icons/location1.svg',
        },
        {
          label: 'info@omnglobal.org',
          link: 'mailto:info@omnglobal.org',
          icon: 'assets/img/icons/email1.svg',
        },
        { label: 'omnglobal.org', icon: 'assets/img/icons/global1.svg' },
      ],
    },
  ];
}
