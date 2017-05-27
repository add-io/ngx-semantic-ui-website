import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectValue: number;
  searchDropdown: string;
  multipleSelectValue: string[];
  multipleSearchSelectValue: string[];
  specialSelectValue: string[] = ["af"];
  embeddedSearchValue: string;

  constructor() { }

  ngOnInit() {
  }

  printMulti() {
    return JSON.stringify(this.multipleSelectValue, null, 2);
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }
}
