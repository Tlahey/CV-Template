import { ContactComponent } from './views/contact/contact.component';
import { SkillsComponent } from './views/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProgressComponent } from './components/progress/progress.component';
import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { AsideComponent } from './views/aside/aside.component';
import { InformationsService } from './informations.service';
import { SectionWrapperTextComponent } from './views/section-wrapper-text/section-wrapper-text.component';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { UserInformationsComponent } from './views/user-informations/user-informations.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { CoverLatterComponent } from './views/cover-latter/cover-latter.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/information', pathMatch: 'full' },
  { path: 'information', component: UserInformationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'coverLatter', component: CoverLatterComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    AsideComponent,
    SectionWrapperTextComponent,
    UserInformationsComponent,
    ProjectsComponent,
    CoverLatterComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InformationsService],
  bootstrap: [AppComponent],
})
export class AppModule { }

