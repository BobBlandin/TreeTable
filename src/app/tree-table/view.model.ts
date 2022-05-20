


export class TreeTableModel{

  constructor(columns: TreeTableColumn[]) {
  }



}


export class TreeTableColumn{

  constructor(public object:any) {
  }

  public getColumnName(): string {
    return this.object.toString();
  }

}

export class TreeTableRow{

}
