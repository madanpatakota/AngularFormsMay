import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
