import { NgModule } from "@angular/core";
import { IgxComponentsModule, IgxDirectivesModule } from "../../lib/main";
import { PageHeaderModule } from "../pageHeading/pageHeading.module";
import { BadgeSampleComponent } from "./sample.component";

@NgModule({
    declarations: [BadgeSampleComponent],
    imports: [IgxComponentsModule, IgxDirectivesModule, PageHeaderModule]
})
export class BadgeSampleModule { }
