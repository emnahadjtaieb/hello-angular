import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { NewsComponent } from './pages/news/news.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';



const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'posts', component: PostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
