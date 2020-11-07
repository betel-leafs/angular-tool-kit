import { Component, OnInit } from "@angular/core";
import { from, Observable, of, zip } from "rxjs";
import data from "../../data/search-data.json";
import { groupBy, mergeMap, toArray, map, startWith } from "rxjs/operators";
import { IGroup, IOption } from "src/app/models/search";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchControl=new FormControl();
  filterData:Observable<IOption[]>;
  apiData:IOption[]=[	{
    FieldName: "All",
    Value: "*",
    Type: null,
    Count: 1080,
    SearchRanking: 5000,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='All',Value='*')/Search?$orderby=SearchRanking%20desc&$top=1080&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='All',Value='*')/Tags?$top=1080&q="
  },
  {
    FieldName: "keywords",
    Value: "thiruheighttile",
    Type: "",
    Count: 6,
    SearchRanking: 4000,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='thiruheighttile')/Search?$orderby=SearchRanking%20desc&$top=6&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='thiruheighttile')/Tags?$top=6&q="
  },
  {
    FieldName: "keywords",
    Value: "EngUnit",
    Type: "",
    Count: 3,
    SearchRanking: 3999,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='EngUnit')/Search?$orderby=SearchRanking%20desc&$top=3&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='EngUnit')/Tags?$top=3&q="
  },
  {
    FieldName: "keywords",
    Value: "dashboard1",
    Type: "",
    Count: 2,
    SearchRanking: 3998,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='dashboard1')/Search?$orderby=SearchRanking%20desc&$top=2&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='dashboard1')/Tags?$top=2&q="
  },
  {
    FieldName: "keywords",
    Value: "New",
    Type: "",
    Count: 1,
    SearchRanking: 3997,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='New')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='New')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "Psd",
    Type: "",
    Count: 1,
    SearchRanking: 3996,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='Psd')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='Psd')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "broken",
    Type: "",
    Count: 1,
    SearchRanking: 3995,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='broken')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='broken')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "combo",
    Type: "",
    Count: 1,
    SearchRanking: 3994,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='combo')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='combo')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "discrete",
    Type: "",
    Count: 1,
    SearchRanking: 3993,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='discrete')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='discrete')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "gantt",
    Type: "",
    Count: 1,
    SearchRanking: 3992,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='gantt')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='gantt')/Tags?$top=1&q="
  },
  {
    FieldName: "keywords",
    Value: "limitline",
    Type: "",
    Count: 1,
    SearchRanking: 3991,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='limitline')/Search?$orderby=SearchRanking%20desc&$top=1&q=",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='keywords',Value='limitline')/Tags?$top=1&q="
  },
  {
    FieldName: "source",
    Value: "Tier1Historian",
    Type: "Tag",
    Count: 848,
    SearchRanking: 3000,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='Tier1Historian')/Search?$orderby=SearchRanking%20desc&$top=848&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='Tier1Historian')/Tags?$top=848&q="
  },
  {
    FieldName: "source",
    Value: "$MES",
    Type: "Tag",
    Count: 82,
    SearchRanking: 2999,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='%252524MES')/Search?$orderby=SearchRanking%20desc&$top=82&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='%252524MES')/Tags?$top=82&q="
  },
  {
    FieldName: "source",
    Value: "IntouchApp",
    Type: "Tag",
    Count: 32,
    SearchRanking: 2998,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='IntouchApp')/Search?$orderby=SearchRanking%20desc&$top=32&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='IntouchApp')/Tags?$top=32&q="
  },
  {
    FieldName: "source",
    Value: "OPC Server",
    Type: "Tag",
    Count: 26,
    SearchRanking: 2997,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='OPC%252bServer')/Search?$orderby=SearchRanking%20desc&$top=26&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='source',Value='OPC%252bServer')/Tags?$top=26&q="
  },
  {
    FieldName: "engunit",
    Value: "EU1",
    Type: "Tag",
    Count: 427,
    SearchRanking: 2996,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='EU1')/Search?$orderby=SearchRanking%20desc&$top=427&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='EU1')/Tags?$top=427&q="
  },
  {
    FieldName: "engunit",
    Value: "",
    Type: "Tag",
    Count: 404,
    SearchRanking: 2995,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='')/Search?$orderby=SearchRanking%20desc&$top=404&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='')/Tags?$top=404&q="
  },
  {
    FieldName: "engunit",
    Value: "percent",
    Type: "Tag",
    Count: 50,
    SearchRanking: 2994,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='percent')/Search?$orderby=SearchRanking%20desc&$top=50&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='percent')/Tags?$top=50&q="
  },
  {
    FieldName: "engunit",
    Value: "None",
    Type: "Tag",
    Count: 49,
    SearchRanking: 2993,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='None')/Search?$orderby=SearchRanking%20desc&$top=49&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='None')/Tags?$top=49&q="
  },
  {
    FieldName: "engunit",
    Value: "minutes",
    Type: "Tag",
    Count: 24,
    SearchRanking: 2992,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='minutes')/Search?$orderby=SearchRanking%20desc&$top=24&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='minutes')/Tags?$top=24&q="
  },
  {
    FieldName: "engunit",
    Value: "Count",
    Type: "Tag",
    Count: 8,
    SearchRanking: 2991,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='count')/Search?$orderby=SearchRanking%20desc&$top=8&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='count')/Tags?$top=8&q="
  },
  {
    FieldName: "engunit",
    Value: "liters",
    Type: "Tag",
    Count: 7,
    SearchRanking: 2990,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='liters')/Search?$orderby=SearchRanking%20desc&$top=7&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='liters')/Tags?$top=7&q="
  },
  {
    FieldName: "engunit",
    Value: "DegC",
    Type: "Tag",
    Count: 6,
    SearchRanking: 2989,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='DegC')/Search?$orderby=SearchRanking%20desc&$top=6&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='DegC')/Tags?$top=6&q="
  },
  {
    FieldName: "engunit",
    Value: "M3",
    Type: "Tag",
    Count: 4,
    SearchRanking: 2988,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='M3')/Search?$orderby=SearchRanking%20desc&$top=4&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='M3')/Tags?$top=4&q="
  },
  {
    FieldName: "engunit",
    Value: "Step",
    Type: "Tag",
    Count: 3,
    SearchRanking: 2987,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='Step')/Search?$orderby=SearchRanking%20desc&$top=3&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='Step')/Tags?$top=3&q="
  },
  {
    FieldName: "engunit",
    Value: "none",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2986,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='none')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='none')/Tags?$top=2&q="
  },
  {
    FieldName: "engunit",
    Value: "°C",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2985,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='%2525c2%2525b0C')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='%2525c2%2525b0C')/Tags?$top=2&q="
  },
  {
    FieldName: "engunit",
    Value: "M/mn",
    Type: "Tag",
    Count: 1,
    SearchRanking: 2984,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='M%25252fmn')/Search?$orderby=SearchRanking%20desc&$top=1&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='M%25252fmn')/Tags?$top=1&q="
  },
  {
    FieldName: "engunit",
    Value: "Units",
    Type: "Tag",
    Count: 1,
    SearchRanking: 2983,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='Units')/Search?$orderby=SearchRanking%20desc&$top=1&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='engunit',Value='Units')/Tags?$top=1&q="
  },
  {
    FieldName: "name",
    Value: "Austin Plant",
    Type: "Asset",
    Count: 4,
    SearchRanking: 2982,
    "Location": "/Texas/Austin Plant/",
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Austin%252bPlant')/Search?$orderby=SearchRanking%20desc&$top=4&q=&Type=Asset",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Austin%252bPlant')/Tags?$top=4&q="
  },
  {
    FieldName: "name",
    Value: "Houston Plant",
    Type: "Asset",
    Count: 4,
    SearchRanking: 2981,
    "Location": "/Texas/Houston Plant/",
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Houston%252bPlant')/Search?$orderby=SearchRanking%20desc&$top=4&q=&Type=Asset",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Houston%252bPlant')/Tags?$top=4&q="
  },
  {
    FieldName: "name",
    Value: "Pack Area",
    Type: "Asset",
    Count: 4,
    SearchRanking: 2980,
    "Location": "/Texas/Austin Plant/Pack Area/",
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Pack%252bArea')/Search?$orderby=SearchRanking%20desc&$top=4&q=&Type=Asset",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Pack%252bArea')/Tags?$top=4&q="
  },
  {
    FieldName: "name",
    Value: "Pack Area",
    Type: "Asset",
    Count: 4,
    SearchRanking: 2979,
    "Location": "/Texas/Houston Plant/Pack Area/",
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Pack%252bArea')/Search?$orderby=SearchRanking%20desc&$top=4&q=&Type=Asset",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Pack%252bArea')/Tags?$top=4&q="
  },
  {
    FieldName: "name",
    Value: "Auto",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2978,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Auto')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Auto')/Tags?$top=2&q="
  },
  {
    FieldName: "name",
    Value: "Batch%Conc",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2977,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Batch%252525Conc')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='Batch%252525Conc')/Tags?$top=2&q="
  },
  {
    FieldName: "name",
    Value: "LKF_Plant",
    Type: "Asset",
    Count: 2,
    SearchRanking: 2976,
    "Location": "/USA\\California\\LakeForest\\Building2\\Reactor/LKF_Plant/",
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='LKF_Plant')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Asset",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='LKF_Plant')/Tags?$top=2&q="
  },
  {
    FieldName: "name",
    Value: "ProdLevel",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2975,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ProdLevel')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ProdLevel')/Tags?$top=2&q="
  },
  {
    FieldName: "name",
    Value: "ReactLevel",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2974,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ReactLevel')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ReactLevel')/Tags?$top=2&q="
  },
  {
    FieldName: "name",
    Value: "ReactTemp",
    Type: "Tag",
    Count: 2,
    SearchRanking: 2973,
    "Search@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ReactTemp')/Search?$orderby=SearchRanking%20desc&$top=2&q=&Type=Tag",
    "Tags@odata.navigationLink": "https://contentserverint-mhqa.azurewebsites.net/apis/Historian/v2/TagSuggest(FieldName='name',Value='ReactTemp')/Tags?$top=2&q="
  }];

  constructor() {
    this.filterData = this.searchControl.valueChanges
    .pipe(
      startWith(''),
      map(v => v ? this._filterData(v) : this.apiData.slice())
    );

  }
  private _filterData(value: string): IOption[] {
    const filterValue = value.toLowerCase();
    return this.apiData.filter(a => a.Value.toLowerCase().indexOf(filterValue) === 0);
  }



  ngOnInit(): void {
    // const example = source.pipe(
    //   groupBy(item => item.Type),
    //   // return each item in group as array
    //   mergeMap(group => group.pipe(toArray()))
    // );
    // const subscribe = example.subscribe(val => this.results.push(val));
    // console.log(this.results);
    // from(data.value)
    //   .pipe(
    //     groupBy((person) => person.Type),
    //     mergeMap((group) => zip(of(group.key), group.pipe(toArray())))
    //   )
    //   .subscribe((val) => this.results.push(val));

  }
}
