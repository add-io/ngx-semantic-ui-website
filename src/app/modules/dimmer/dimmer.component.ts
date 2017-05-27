import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimmer',
  templateUrl: './dimmer.component.html',
  styleUrls: ['./dimmer.component.css']
})
export class DimmerComponent implements OnInit {

  saving: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
    }, 2000);
  }
}
