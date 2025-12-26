import type { ServiceType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  services: ServiceType[] = [
    {
      id: 1,
      icon: 'assets/img/icons/service-icon11.svg',
      title: 'Application Security',
      description:
        'Our application security solutions protect software from vulnerabilities, ensuring safe data, access control, and threat prevention.',
      link: '/services/web-application-security-testing',
    },
    {
      id: 2,
      icon: 'assets/img/icons/service-icon12.svg',
      title: 'Infrastructure Security',
      description:
        'Our infrastructure security solutions safeguard servers, networks, and cloud environments against breaches and operational risks.',
      link: '/services/internal-network-penetration-testing',
    },
    {
      id: 3,
      icon: 'assets/img/icons/service-icon13.svg',
      title: 'Cloud Security',
      description:
        'Our cloud security solutions protect data, applications, and infrastructures in the cloud from threats and unauthorized access.',
      link: '/services/cloud-configuration-reviews',
    },
    {
      id: 4,
      icon: 'assets/img/icons/service-icon14.svg',
      title: 'Digital Marketing',
      description:
        'Our digital marketing services help businesses increase online visibility, engage customers, and drive growth through targeted strategies.',
      link: '/services/search-engine-optimization',
    },
    {
      id: 5,
      icon: 'assets/img/icons/service-icon15.svg',
      title: 'Wireless Network Security',
      description:
        'Our wireless network security services protect wireless networks from unauthorized access, interference, and attacks.',
      link: '/services/wireless-network-penetration-testing',
    },
    {
      id: 6,
      icon: 'assets/img/icons/service-icon16.svg',
      title: 'IT Development',
      description:
        'Our IT development services deliver scalable, secure, and high-performance solutions tailored to business needs.',
      link: '/services/web-app-development',
    },
  ];
}
