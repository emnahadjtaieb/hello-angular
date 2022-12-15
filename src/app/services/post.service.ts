import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<[Post]> {
    return this.httpClient.get<[Post]>(environment.API_URL + '/posts');
  }

  getById(id: any): Observable<Post> {
    return this.httpClient.get<Post>(environment.API_URL + '/posts/' + id);
  }

  public save(post: Post) {
    return this.httpClient.post(environment.API_URL + '/posts/', post);
  }
  
}
