import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit {

  code: string;
  showCode: boolean = false;

  @ViewChild("content", { read: ElementRef }) content: ElementRef;

  constructor() { }

  ngOnInit() {
    this.processHTML(this.content.nativeElement.innerHTML);
  }

  toggleCode() {
    console.log(this.showCode);
    this.showCode = !this.showCode;
  }

  private processHTML(html: string) {
    html = html.replace(/\_ngcontent[^\ ]+\ /g, '');
    html = html.split("\n").filter(x => x.trim().length > 0).join("\n");

    if (html.match(/^\ +/) !== null) {
      let startSpace = html.match(/^\ +/)[0];
      if (startSpace.length > 2) {
        html = html.split("\n").map(x => x.replace(startSpace, "")).join("\n");
      }
    }

    this.code = html;
  }
}
