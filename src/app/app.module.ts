import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { AsideComponent } from './aside/aside.component';
import { InformationsService } from './informations.service';


@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    AsideComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [InformationsService],
  bootstrap: [AppComponent],
})
export class AppModule { }

