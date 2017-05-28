import { Directive, Input, HostBinding } from "@angular/core";

@Directive({ selector: "code.prism" })
export class PrismDirective {

    @Input() language: string;
    @Input() code: string;

    @HostBinding("innerHTML")
    get html(): string {
        if (this.code != null && window.Prism.languages[this.language] != null) {
            return window.Prism.highlight(this.code, window.Prism.languages[this.language]);
        }
        return "";
    }

}
