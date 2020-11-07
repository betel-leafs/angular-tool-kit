import { Interpolation } from '@angular/compiler';

export interface IGroup
{
  name:string;
  subGroups:ISubGroup[];
}

export interface ISubGroup
{
  name:string;
  count:number;
  items:IItem[];
}
export interface IItem{
  name:string;
  count:number;
}

export interface IOption{
  FieldName:string;
  Value:string;
  Type:string;
  Count:number;
  SearchRanking:number;
  Location?:string;
  "Search@odata.navigationLink":string;
  "Tags@odata.navigationLink":string;
}
