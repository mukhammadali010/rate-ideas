import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accardion-item',
  standalone:true,
  imports: [CommonModule ,  MatIconModule],
  templateUrl: './accardion-item.component.html',
  styles: ``
})
export class AccardionItemComponent {
  isRotated = true;
  toggleRotation(){
    this.isRotated = !this.isRotated;
  }

}
