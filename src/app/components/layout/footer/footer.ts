import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterLink } from '../../../interfaces/footer-link.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
technologyLinks: FooterLink[] = [
  { label: 'FOOTER_LINKS.VISION', route: '/' },
  { label: 'FOOTER_LINKS.AI', route: '/' },
  { label: 'FOOTER_LINKS.IOT', route: '/' },
  { label: 'FOOTER_LINKS.AUTOMATION', route: '/' },
  { label: 'FOOTER_LINKS.DIGITAL_TWINS', route: '/' }
];

companyLinks: FooterLink[] = [
  { label: 'FOOTER_LINKS.WHO_WE_ARE', route: '/about' },
  { label: 'FOOTER_LINKS.SUCCESS_STORIES', route: '/projects' },
  { label: 'FOOTER_LINKS.RESEARCH', route: '/blog' },
  { label: 'FOOTER_LINKS.JOBS', route: '/careers' }
];

legalLinks: FooterLink[] = [
  { label: 'FOOTER_LINKS.PRIVACY_POLICY', route: '/' }
];
}
