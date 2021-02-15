import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    RoutingComponent,
    AppComponent,
    CounterComponent,
    RoutingComponent,
    NavbarComponent,
    ColorDirective
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
