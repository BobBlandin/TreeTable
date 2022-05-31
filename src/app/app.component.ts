import {AfterViewInit, Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'TreeTable';
  public treeGrid: any;
  Test: any;
  private grid: TGrid;


  constructor() {


    this.Test = {
      Cfg: { id:"Json", MainCol:"A", Paging:3 },
      Cols: [
        { Name:"A" },
        { Name:"B", Type:"Int", Formula:"1+1" },
        { Name:"C", Format:"d.M.yyyy" }
      ],
      RightCols: [
        { Name:"D", Type:"Date", Format:"hh:mm" }
      ],
      Def: [
        { Name:"R", CType:"Date" }
      ],
      Header: { A:"AAA" },
      Head: [
        { Kind:"Header", A:"H1" },
        { A:"H2" },
        { Kind:"Filter", B:3, BFilter:3 }
      ],
      Foot: [
        { A:"F1" }
      ],
      Body: [
        [
          { A:"R1", id:"R1", Deleted:1, C:'1/1/2000' },
          { A:"R2", id:"R2", Added:1, Items: [
              { A:"R2-1", Changed:1, AChanged:1 },
              { A:"R2-2", Items: [
                  { A:"R2-2-1", Selected:1 }
                ]}
            ]}
        ],
        { id:'B2',Count:1 }
      ]
    }
  }

  ngAfterViewInit(): void {
    this.initGrid();
    // const grid = TreeGrid({Debug:'check', Layout: { Url:"Layouts/StaticDef.js" }, Data: { Url:"Layouts/StaticData.js" } },"MyTag");

  }

  initGrid() {
    if(this.grid) {
      this.disposeGrid();
    }

    this.grid = TreeGrid({Layout:{Url:"Layouts/PleiadeDef.js"},Data:{Data:{Body:[[{id:1,A:10,B:20},{id:2,A:20,B:40}]]}}},"MyTag");
    // this.grid = TreeGrid({Layout:{Script:{Cols:[{Name:'A'},{Name:'B'}], Header: { A:"Code", B: "Description" }}},Data:{Data:{Body:[[{id:1,A:10,B:20},{id:2,A:20,B:40}]]}}},"MyTag");
    // this.grid = TreeGrid({Layout:{Script:{Cfg: { id:"Json", MainCol:"A", Paging:3 },
    //       Cols: [
    //         { Name:"A" },
    //         { Name:"B", Type:"Int", Formula:"1+1" },
    //         { Name:"C", Format:"d.M.yyyy" }
    //       ],
    //       RightCols: [
    //         { Name:"D", Type:"Date", Format:"hh:mm" }
    //       ],
    //       Def: [
    //         { Name:"R", CType:"Date" }
    //       ],
    //       Header: { A:"AAA" },
    //       Head: [
    //         { Kind:"Header", A:"H1" },
    //         { A:"H2" },
    //         { Kind:"Filter", B:3, BFilter:3 }
    //       ],
    //       Foot: [
    //         { A:"F1" }
    //       ]}},Data:{Data:{Body: [
    //         [
    //           { A:"R1", id:"R1", Deleted:1, C:'1/1/2000' },
    //           { A:"R2", id:"R2", Added:1, Items: [
    //               { A:"R2-1", Changed:1, AChanged:1 },
    //               { A:"R2-2", Items: [
    //                   { A:"R2-2-1", Selected:1 }
    //                 ]}
    //             ]}
    //         ],
    //         { id:'B2',Count:1 }
    //       ]}}},"MyTag");
    // this.grid!.AddCol("Toto", 0, 1);
    // this.grid!.AddCol("Toto", 0, 1);
    // this.grid!.AddCol("Toto", 0, 1);
  }

  disposeGrid() {
    if(this.grid) {
      this.grid.Dispose();
      this.grid = null;
    }

  }
}
