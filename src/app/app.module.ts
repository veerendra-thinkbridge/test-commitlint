import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommitLintComponent } from './commit-lint/commit-lint.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitLintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
