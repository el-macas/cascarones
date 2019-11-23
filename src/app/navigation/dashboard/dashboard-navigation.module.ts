import { NgModule } from '@angular/core';
import { ViewCommonModule } from 'src/app/view/common/view-common.module';
import { DashboardNavigationComponent } from './dashboard-navigation.component';
import { DashboardOverviewNavigationComponent } from './overview/dashboard-overview-navigation.component';
import { DashboardNavigationRoutingModule } from './dashboard-navigation-routing.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DashboardNavigationComponent,
    DashboardOverviewNavigationComponent,
  ],
  imports: [
    ViewCommonModule,
    DashboardNavigationRoutingModule,
    MatCarouselModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ViewCommonModule,
  ],
})
export class DashboarNavigationModule { }
