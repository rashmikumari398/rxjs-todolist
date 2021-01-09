export const ADDITEM = 'ADDITEM';
export const DELETEITEM ='DELETEITEM';
export const DELETELIST ='DELETELIST';
export class Additem{
  readonly type = ADDITEM
  constructor(public item:string){}
}

export class Deleteitem{
  readonly type = DELETEITEM
  constructor(public index:number){}
}

export class Deletelist{
  readonly type = DELETELIST
  constructor(){}
}

export type ActionsCounter = Additem|Deleteitem|Deletelist;
