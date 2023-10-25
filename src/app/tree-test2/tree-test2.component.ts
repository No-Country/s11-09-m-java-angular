import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, MarginModel, ShapeStyleModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-tree-test2',
  templateUrl: './tree-test2.component.html',
  styleUrls: ['./tree-test2.component.scss']
})
export class TreeTest2Component {
  @ViewChild("diagram")
  public diagram?: DiagramComponent;
  public getNodeDefaults(node: NodeModel): NodeModel {
      node.height = 100;
      node.width = 100;
      ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
      ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
      return node;
  }
  public children?: string[];
  public padding: MarginModel = {left:10,right:10,top:10,bottom:10}
  ngOnInit(): void {
      this.children = ['node1', 'node2']
  }
  public created(args: Object): void {
      (this.diagram as DiagramComponent).selectAll();
      // Adding the third node into the existing group
      (this.diagram as DiagramComponent).group();
  }
}
