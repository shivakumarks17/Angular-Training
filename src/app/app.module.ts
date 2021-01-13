import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, PropertyBindingComponent, TemplateReferenceVariableComponent, TwoWayDatabindingComponent, StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
