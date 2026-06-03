import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterLink } from '../../../interfaces/footer-link.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  technologyLinks: FooterLink[] = [
    { label: 'Vision', route: '/' },
    { label: 'AI', route: '/' },
    { label: 'IoT', route: '/' },
    { label: 'Automation', route: '/' },
    { label: 'Digital Twins', route: '/' }
  ];

  companyLinks: FooterLink[] = [
    { label: 'Who we are', route: '/about' },
    { label: 'Success Stories', route: '/projects' },
    { label: 'Research', route: '/blog' },
    { label: 'Jobs', route: '/careers' }
  ];

  legalLinks: FooterLink[] = [
    { label: 'Privacy Policy', route: '/' }
  ];
}