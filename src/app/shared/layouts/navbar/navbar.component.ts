import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {IconLogoComponent} from "../../components/icon-logo/icon-logo.component";
import {AppFacade} from "../../store/facades/app.facade";
import {SearchInputComponent} from "../../components/search-input/search-input.component";
import {ProfileImageComponent} from "../../components/profile-image/profile-image.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, IconLogoComponent, SearchInputComponent, ProfileImageComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private appFacade: AppFacade) {
  }

  ngOnInit(): void {
    this.appFacade.getUser().subscribe(value => {
        console.log(value)
        this.isAuthenticated = value != null;
      }
    )
  }


}
