import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';
import { ChildComponent } from './playground/child.component';
import { ParentComponent } from './playground/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ListComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
