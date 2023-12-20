import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommitLintsComponent } from './commit-lints/commit-lints.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitLintsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
