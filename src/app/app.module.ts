import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

