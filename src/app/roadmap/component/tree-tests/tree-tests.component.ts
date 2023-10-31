import {Component, OnInit} from '@angular/core';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {GraphService} from "../../../core/services/graph.service";
import {AppFacade} from "../../../shared/store/facades/app.facade";

//import { NgxGraphModule } from '@swimlane/ngx-graph'

@Component({
  selector: 'app-tree-tests',
  templateUrl: './tree-tests.component.html',
  standalone: true,
  imports: [NgxGraphModule],
  styleUrls: ['./tree-tests.component.scss']
})
export class TreeTestsComponent  {

  draggingEnabled: boolean = false;





}
