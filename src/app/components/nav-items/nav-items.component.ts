import type { MenuItem } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-items',
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {
  @Input() themeBtn: string = '';
  @Input() arrow?: boolean = false;
  @Input() arrow2?: boolean = false;
  @Input() btnSpace?: boolean = false;

  menuItems: MenuItem[] = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Pages',
      icon: 'fa-solid fa-angle-down',
      subMenu: [
        { title: 'About Us', link: '/about' },
        { title: 'Our Team', link: '/our-team' },
        { title: 'Testimonials', link: '/testimonials' },
        { title: 'Contact Us', link: '/contact' },
        { title: 'FAQ', link: '/faq' },
      ],
    },
    {
      title: 'Services',
      icon: 'fa-solid fa-angle-down',
      subMenu: [
        {
          title: 'Application Security',
          subMenu: [
            {
              title: 'Web Application Security Testing',
              link: '/services/web-application-security-testing',
            },
            {
              title: 'API Penetration Testing',
              link: '/services/api-penetration-testing',
            },
            {
              title: 'Mobile Application Penetration Testing',
              link: '/services/mobile-application-penetration-testing',
            },
            {
              title: 'Source Code Review',
              link: '/services/source-code-review',
            },
            { title: 'Threat Modeling', link: '/services/threat-modeling' },
          ],
        },
        {
          title: 'Infrastructure Security',
          subMenu: [
            {
              title: 'Internal Network Penetration Testing',
              link: '/services/internal-network-penetration-testing',
            },
            {
              title: 'External Network Penetration Testing',
              link: '/services/external-network-penetration-testing',
            },
            {
              title: 'Active Directory Security Assessments',
              link: '/services/active-directory-security-assessments',
            },
            {
              title: 'Wireless Network Penetration Testing',
              link: '/services/wireless-network-penetration-testing',
            },
            {
              title: 'Firewall Configuration Reviews',
              link: '/services/firewall-configuration-reviews',
            },
          ],
        },
        {
          title: 'Cloud Security',
          link: '/our-services',
          subMenu: [
            {
              title: 'Cloud Configuration Reviews',
              link: '/services/cloud-configuration-reviews',
            },
            {
              title: 'Cloud Penetration Testing',
              link: '/services/cloud-penetration-testing',
            },
          ],
        },
        { title: 'Cyber Forensics', link: '/our-services' },
        { title: 'Cyber Investigation', link: '/our-services' },
        {
          title: 'Digital Marketing',
          subMenu: [
            {
              title: 'Search Engine Optimization',
              link: '/services/search-engine-optimization',
            },
            {
              title: 'Social Media Optimization',
              link: '/services/social-media-optimization',
            },
            {
              title: 'Pay Per Click',
              link: '/services/pay-per-click',
            },
            {
              title: 'Online Reputation Management',
              link: '/services/online-reputation-management',
            },
          ],
        },
        {
          title: 'IT Development',
          subMenu: [
            {
              title: 'Website Development',
              link: '/services/website-development',
            },
            {
              title: 'App Development',
              link: '/services/app-development',
            },
          ],
        },
        // {
        //   title: 'Service Details',
        //   subMenu: [
        //     { title: 'Service  Left', link: '/services/left' },
        //     { title: 'Service  Right', link: '/services/right' },
        //     { title: 'Service Single', link: '/services/single' },
        //   ],
        // },
      ],
    },
    {
      title: 'Case Study',
      icon: 'fa-solid fa-angle-down',
      subMenu: [
        { title: 'Case Study', link: '/case-study' },
        {
          title: 'Case Details',
          subMenu: [
            { title: 'Case Details Left', link: '/case-details/left' },
            { title: 'Case Details Right', link: '/case-details/right' },
            { title: 'Case Single', link: '/case-details/single' },
          ],
        },
      ],
    },
    {
      title: 'Blogs',
      icon: 'fa-solid fa-angle-down',
      subMenu: [
        {
          title: 'Our Blogs',
          link: '/our-blogs',
        },
        // {
        //   title: 'Blog Sidebar',
        //   subMenu: [
        //     { title: 'Blog Left V1', link: '/blog-sidebar/left-1' },
        //     { title: 'Blog Left V2', link: '/blog-sidebar/left-2' },
        //     { title: 'Blog Right V1', link: '/blog-sidebar/right-1' },
        //     { title: 'Blog Right V2', link: '/blog-sidebar/right-2' },
        //   ],
        // },
        // {
        //   title: 'Blog Details',
        //   subMenu: [
        //     { title: 'Blog  Left', link: '/blog-details/left' },
        //     { title: 'Blog  Right', link: '/blog-details/right' },
        //     { title: 'Blog Single', link: '/blog-details/single' },
        //   ],
        // },
      ],
    },
    { title: 'Contact', link: '/contact' },
  ];
}
