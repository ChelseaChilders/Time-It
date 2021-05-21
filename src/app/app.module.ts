import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
