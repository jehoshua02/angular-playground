import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteSectionComponent } from './autocomplete-section.component';
import { AutocompleteExampleOneModule } from './examples/autocomplete-example-one/autocomplete-example-one.module';



@NgModule({
  declarations: [
    AutocompleteSectionComponent
  ],
  imports: [
    CommonModule,
    AutocompleteExampleOneModule
  ],
  exports: [
    AutocompleteSectionComponent
  ]
})
export class AutocompleteSectionModule { }
