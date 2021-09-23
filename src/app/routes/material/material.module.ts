import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { AutocompleteSectionModule } from './sections/autocomplete-section/autocomplete-section.module';


@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    AutocompleteSectionModule
  ]
})
export class MaterialModule { }
