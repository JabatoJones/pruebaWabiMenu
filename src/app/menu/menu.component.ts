import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MenuItem } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild("menu", {static: true}) menu: MatMenu;
  @Input() items: MenuItem[];

  constructor() { }

}
