import { Component, signal } from '@angular/core';
import { NavbarComponent, AccardionListComponent, ITabData } from "@shared/";
import TabComponent from "../../shared/components/tabs/tab.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, AccardionListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  tabs = signal([{ label: 'Tab 1', id: 1 }, { label: 'Tab 2', id: 2 }, { label: 'Tab 3', id: 2 }, { label: 'Tab 2', id: 2 }, { label: 'Tab 4', id: 2 }, { label: 'Tab 5', id: 2 }])

  onTabsChange(tab: ITabData): void {
    console.log('test:', tab.label);

  }
}
