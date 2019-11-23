import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutNavigationComponent } from './layout-navigation.component';
import { LayoutOverviewNavigationComponent } from './overview/layout-overview-navigation.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutNavigationComponent,
		children: [
			{
				path: '',
				redirectTo: 'overview'
			},
			{
				path: 'overview',
				component: LayoutOverviewNavigationComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutNavigationRoutingModule { }
