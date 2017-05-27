import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TransitionService } from "ngx-semantic-ui";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private _transition: TransitionService;

  showMenu: boolean = false;

  @ViewChild("mainMenu", { read: ElementRef }) menu: ElementRef;

  constructor(private _renderer: Renderer2) {
    this._transition = new TransitionService(this._renderer);
  }

  ngOnInit() {
  }

  triggerShowMenu() {
    if (!this.showMenu) {
      this.showMenu = true;
      this._transition.animate(this.menu.nativeElement, "fade");
    }
  }

  triggerHideMenu() {
    if (this.showMenu) {
      this._transition.animate(this.menu.nativeElement, "fade", 200, "out").then(() => {
        this.showMenu = false;
      });
    }
  }
}
