import { Component, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatBadgeModule],
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
  @Input() icon: string = ''; // Valor padrão 'menu'
}
