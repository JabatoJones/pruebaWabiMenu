import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
