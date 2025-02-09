import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmniFoodHeroSectionComponent } from './components/omni-food-hero-section/omni-food-hero-section.component';
import { OmniFoodHeaderSectionComponent } from './components/omni-food-header-section/omni-food-header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    OmniFoodHeroSectionComponent,
    OmniFoodHeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
