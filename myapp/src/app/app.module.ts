import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';//引入@angular/forms库中的formsmodule符号
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //将引入的符号添加到这个数组
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
