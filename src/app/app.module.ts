import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchoolModule } from './school/school.module';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SchoolModule ],
  declarations: [ AppComponent, HelloComponent, StudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
