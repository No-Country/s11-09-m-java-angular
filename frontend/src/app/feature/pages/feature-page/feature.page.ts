import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureComponent} from "../../components/feature-component/feature.component";

@Component({
  selector: 'app-feature-component-page',
  standalone: true,
  imports: [CommonModule, FeatureComponent],
  templateUrl: './feature.page.html',
  styleUrls: ['./feature.page.scss']
})
export class FeaturePage {

}
