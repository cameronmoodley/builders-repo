import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// imports for various pages go here
import { AppComponent } from './app.component';
import { contactFormComponent } from './contact-form/contact-form.component';
import { comicApiComponent } from './comic-api/comic-api.component';


// paths for various pages go here
const appRoutes: Routes = [
    {path: 'contact-form', component: contactFormComponent },
    {path: 'comic-list', component: comicApiComponent }
]


@NgModule({
  // declare component for routing here
  declarations: [
    AppComponent,
    contactFormComponent,
    comicApiComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
