import { COUNTER_STATE_NAME } from './components/counter/store/counter.selectors';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter/counter.component';
import { counterReducer } from './components/counter/store/counter.reducer';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
