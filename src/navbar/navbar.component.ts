import { CommonModule } from "@angular/common";
import {
    AfterContentChecked,
    Component,
    EventEmitter,
    Input,
    NgModule,
    OnInit,
    Output,
    ViewEncapsulation
} from "@angular/core";
import { IgxButtonModule } from "../button/button.directive";
import { IgxIconModule } from "../icon/icon.component";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "igx-navbar",
    styleUrls: ["./navbar.component.scss"],
    templateUrl: "navbar.component.html"
})
export class IgxNavbar {
    private static NEXT_ID: number = 1;

    /**
     * The IgxNavbar action button visual state state
     * @type {boolean}
     */
    @Input()
    public isActionButtonVisible: boolean = false;

    /**
     * The IgxNavbar action button actionButtonIcon
     * @type {string}
     */
    @Input() public actionButtonIcon: string;

    /**
     * The IgxNavbar title
     * @type {string}
     */
    @Input() public title: string;

    /**
     * The event that will be thrown when the action is executed,
     * provides reference to the IgxNavbar component as argument
     * @type {EventEmitter}
     */
    @Output() public onAction = new EventEmitter();

    @Input()
    public titleId = `igx-navbar-${IgxNavbar.NEXT_ID++}`;

    public _triggerAction() {
        this.onAction.emit(this);
    }
}

@NgModule({
    declarations: [IgxNavbar],
    exports: [IgxNavbar],
    imports: [IgxButtonModule, IgxIconModule, CommonModule]
})
export class IgxNavbarModule {
}
