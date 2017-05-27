import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./layout/main/main.component";
import { IntroductionComponent } from "./pages/introduction/introduction.component";

import { AccordionComponent } from './modules/accordion/accordion.component';
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

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path: '', redirectTo: 'introduction', pathMatch: 'full'
      },
      {
        path: 'introduction',
        component: IntroductionComponent,
        data: { pageTitle: 'Introduction' }
      },
      {
        path: 'modules',
        children: [
          {
            path: '',
            redirectTo: 'accordion',
            pathMatch: 'full',
          },
          {
            path: 'accordion',
            component: AccordionComponent,
            data: { pageTitle: 'Accordion' }
          },
          {
            path: 'checkbox',
            component: CheckboxComponent,
            data: { pageTitle: 'Checkbox' }
          },
          {
            path: 'tab',
            component: TabComponent,
            data: { pageTitle: 'Tab' }
          },
          {
            path: 'dropdown',
            component: DropdownComponent,
            data: { pageTitle: 'DropDown' }
          },
          {
            path: 'modal',
            component: ModalComponent,
            data: { pageTitle: 'Modal' }
          },
          {
            path: 'sticky',
            component: StickyComponent,
            data: { pageTitle: 'Sticky' }
          },
          {
            path: 'rating',
            component: RatingComponent,
            data: { pageTitle: 'Rating' }
          },
          {
            path: 'progress',
            component: ProgressComponent,
            data: { pageTitle: 'Progress' }
          },
          {
            path: 'search',
            component: SearchComponent,
            data: { pageTitle: 'Search' }
          },
          {
            path: 'shape',
            component: ShapeComponent,
            data: { pageTitle: 'Shape' }
          },
          {
            path: 'dimmer',
            component: DimmerComponent,
            data: { pageTitle: 'Dimmer' }
          },
          {
            path: 'embed',
            component: EmbedComponent,
            data: { pageTitle: 'Embed' }
          }
        ]
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
