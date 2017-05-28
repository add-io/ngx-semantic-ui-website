import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AccordionComponent } from './modules/accordion/accordion.component';
import { NgxSemanticUiModule } from "ngx-semantic-ui";
import { CheckboxComponent } from './modules/checkbox/checkbox.component';
import { DimmerComponent } from './modules/dimmer/dimmer.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';
import { EmbedComponent } from './modules/embed/embed.component';
import { ModalComponent } from './modules/modal/modal.component';
import { PopupComponent } from './modules/popup/popup.component';
import { ProgressComponent } from './modules/progress/progress.component';
import { RatingComponent } from './modules/rating/rating.component';
import { SearchComponent } from './modules/search/search.component';
import { ShapeComponent } from './modules/shape/shape.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { StickyComponent } from './modules/sticky/sticky.component';
import { TabComponent } from './modules/tab/tab.component';
import { MainComponent } from './layout/main/main.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { CodeViewerComponent } from './tools/code-viewer/code-viewer.component';
import { PrismDirective } from './tools/prism.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CheckboxComponent,
    DimmerComponent,
    DropdownComponent,
    EmbedComponent,
    ModalComponent,
    PopupComponent,
    ProgressComponent,
    RatingComponent,
    SearchComponent,
    ShapeComponent,
    SidebarComponent,
    StickyComponent,
    TabComponent,
    MainComponent,
    IntroductionComponent,
    CodeViewerComponent,
    PrismDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgxSemanticUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
