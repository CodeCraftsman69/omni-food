import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmniFoodHeroSectionComponent } from './omni-food-hero-section/omni-food-hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    OmniFoodHeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
