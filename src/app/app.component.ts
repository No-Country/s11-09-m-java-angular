import {Component, OnInit} from '@angular/core';
import {AppFacade} from "./shared/store/facades/app.facade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'roadmap';
  loading: boolean = true;

  constructor(private appFacade: AppFacade) {
  }

  ngOnInit(): void {
    this.appFacade.getIsLoading().subscribe(value => {
      this.loading = value;
    })

  }

}
