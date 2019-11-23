import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardNavigationComponent } from './dashboard-navigation.component';
import { DashboardOverviewNavigationComponent } from './overview/dashboard-overview-navigation.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardNavigationComponent,
		children:[
			{
				path: '',
				redirectTo: 'overview'
			},
			{
				path: 'overview',
				component: DashboardOverviewNavigationComponent
      },
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardNavigationRoutingModule { }
