import {Component, input, output} from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { ITabData } from '../../models/frontend/tab';

/**
 * @title Tab group with paginated tabs
 */
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls:['./tab.component.scss'],
  imports: [MatTabsModule],
})
export default class TabComponent {
  tabs = input<ITabData[]>([]);
  tabsChange = output<ITabData>()
  
  
  onTabChange(tab: MatTabChangeEvent): void{

    const selectedTab = this.tabs()[tab.index];
    

    this.tabsChange.emit(selectedTab)
  }

}
