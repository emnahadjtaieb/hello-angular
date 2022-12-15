import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsApiResponse } from '../models/news-api-response.model';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) {

  }

  /*getAll(): Observable<News[]>{
    return this.httpClient.get<NewsApiResponse>(environment.NEWS_API_URL)
    .pipe(map(response => response.results))
  }*/

  getAll(page: number): Observable<NewsApiResponse> {
    return this.httpClient.get<NewsApiResponse>(environment.NEWS_API_URL + '&page=' + page);
  }
}
