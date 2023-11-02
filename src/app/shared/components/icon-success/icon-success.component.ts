import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-success.component.html',
  styleUrls: ['./icon-success.component.scss']
})
export class IconSuccessComponent {
  @Input() success =false;

}
