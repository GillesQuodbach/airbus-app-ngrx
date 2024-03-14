import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent, AircraftsComponent, AircraftsNavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ airbusState: AircraftsReducer }), // spécifie le reducer
    EffectsModule.forRoot([AircraftsEffect, LoginEffects]), //spécifie les effects
    StoreDevtoolsModule.instrument(), // envoi les infos à chaque action au devtools
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
