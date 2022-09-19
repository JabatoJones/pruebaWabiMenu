import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as data from '../assets/menu-data'
import { MenuItem } from './menu/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pruebaWabiMenu';
  @Input('items') items : any;

  categoriesOrdered: MenuItem[];
  categories: MenuItem[];
  menuLiteral:string = "Menu";

  ngOnInit(): void {
    this.categories = data.MenuData;
    this.addSubMenuOption();
    this.createMenuBasedOnParentId();
  }

  /**
   * Añade property subMenu a todos los elementos
   */
   addSubMenuOption() {
    this.categories.map(element => {
      element.subMenu = [];
    })
  }

  /**
   * Este método busca entre cada una de las categorias
   * que elemnto que recorre tenga un parentId que coincida con el
   * id del array, si coincide lo añade a el array de subMenu
   */
  createMenuBasedOnParentId() {
    this.categories.forEach((element) => {
      this.categories.forEach(elementFinder => {
        if (element.parentId === elementFinder.id) {
          elementFinder.subMenu.push(element);
        }
      });
    });
    this.deleteIfIsntPrimaryLevelMenu();
  }

  /**
   * Este método elimina todos los elementos del arbol que no
   * tengan parentId asi quedan solamente los elementos primarios
   * que tienen dentro elemntos secundarios,terciarios etc y lo devuelve
   * en un nuevo objeto.
   */
  deleteIfIsntPrimaryLevelMenu() {
    this.categoriesOrdered = this.categories.filter(element => {
      return !element.parentId;
    })
  }
}
