import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { FormsModule } from '@angular/forms';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersPipe } from './shared/pipes/filters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    EditformWorkerComponent,
    FiltersPipe,
  ],
  imports: [
    BrowserModule, 
    FormsModule,  
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
