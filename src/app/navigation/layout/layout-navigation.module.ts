import { NgModule } from '@angular/core';
import { ViewCommonModule } from 'src/app/view/common/view-common.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LayoutOverviewNavigationComponent } from './overview/layout-overview-navigation.component';
import { LayoutNavigationComponent } from './layout-navigation.component';
import { LayoutNavigationRoutingModule } from './layout-navigation-routing.module';

@NgModule({
  declarations: [
    LayoutNavigationComponent,
    LayoutOverviewNavigationComponent,
    
  ],
  imports: [
    ViewCommonModule,
    LayoutNavigationRoutingModule,
    MatCarouselModule,
    ZXingScannerModule
  ],
  exports: [
    ViewCommonModule
  ],
})
export class LayoutNavigationModule { }
