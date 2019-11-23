import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cascaron, CASCAS } from './cascas';

@Component({
  selector: 'app-dashboard-overview-navigation',
  templateUrl: './dashboard-overview-navigation.component.html',
  styleUrls: ['./dashboard-overview-navigation.component.scss']
})
export class DashboardOverviewNavigationComponent implements OnInit {

  cascas: Cascaron[] = CASCAS;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {}

  /**
   * 
   * @param _newSlideIndex zero-indexed
   */
  accountSlideChanged(_newSlideIndex?: number) {
  }

  onTabChange(_index?: number) {
  }

  xyz(_event?) {}

}
