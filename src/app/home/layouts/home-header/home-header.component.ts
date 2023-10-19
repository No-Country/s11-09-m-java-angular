import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchInputComponent} from "../../../shared/components/search-input/search-input.component";

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

}
