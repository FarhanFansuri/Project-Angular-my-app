import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { ParagraphComponent } from './paragraph.component';

@NgModule({
  declarations: [
    HelloComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent,ParagraphComponent]
})
export class AppModule { }
