import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';
import { RxListComponent } from './rxlist/rxlist.component';
import { RxWordComponent } from './rxlist/rx-word.component';
import { ChildComponent } from './playground/child.component';
import { ParentComponent } from './playground/parent.component';

// create store here
import { StoreModule } from '@ngrx/store';
import { reducer } from './rxlist/reducer';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ListComponent,
    ChildComponent,
    ParentComponent,
    RxListComponent,
    RxWordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
