import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PostComponent } from './pages/post/post.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

registerLocaleData(en);

import { DemoNgZorroAntdModule } from './modules/ng-zorro-antd.module';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { NewsComponent } from './pages/news/news.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { AddPostComponent } from './components/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostComponent,
    PostDetailsComponent,
    NewsComponent,
    ListNewsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoNgZorroAntdModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
