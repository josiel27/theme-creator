import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DecimalSortComponent } from './decimal-sort/decimal-sort.component';
import { ColorsHexdecimalComponent } from './colors-hexdecimal/colors-hexdecimal.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { ColorSelectedComponent } from './color-selected/color-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DecimalSortComponent,
    ColorsHexdecimalComponent,
    SelectComponentComponent,
    ColorSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
