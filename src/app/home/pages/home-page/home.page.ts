import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeHeaderComponent} from "../../layouts/home-header/home-header.component";
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {RoleDeckComponent} from "../../layouts/role-deck/role-deck.component";
import {TestDeckComponent} from "../../layouts/test-deck/test-deck.component";
import {AppFacade} from "../../../shared/store/facades/app.facade";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HomeHeaderComponent, CardRoleComponent, RoleDeckComponent, TestDeckComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    this.appFacade.updateTopics()
  }


  constructor(private appFacade: AppFacade) {


  }


}
