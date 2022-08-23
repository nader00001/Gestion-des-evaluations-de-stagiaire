import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {MonserviceService} from './monservice.service';
import { ReadComponent } from './read/read.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { QuestionComponent } from './question/question.component';
import { TabComponent } from './tab/tab.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    EvaluationComponent,
    QuestionComponent,
    TabComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
