import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';
import { StringUtils } from 'src/app/utils/StringUtils';


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  listNews: News[] = [];
  isLoading = false;
  totalResults: number = 0;
  defaultNewsImageIndex = 1;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.getNews(0);
  }

  getNews(pageIndex: number) {
    this.isLoading = true;
    return this.newsService.getAll(pageIndex).subscribe(
      data => {
        this.totalResults = data['totalResults'];
        this.listNews = this.getData(data['results']);
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      })
  }

  onPageNews(pageIndex: number) {
    this.getNews(pageIndex - 1);
  }

  showDetails(news: News) {
    console.log(news);
    const data = window.btoa(unescape(encodeURIComponent(JSON.stringify(news))));
    this.router.navigateByUrl('news/' + data);
  }

  getData(data: News[]) {
    for (let news of data) {
      if (StringUtils.isBlank(news.image_url)) {
        news.image_url = this.getDefautlImageNews();
      }
    }
    return data;
  }

  getDefautlImageNews() {
    const res = "/assets/images/news/news_" + this.defaultNewsImageIndex + ".jpg";
    this.defaultNewsImageIndex = this.defaultNewsImageIndex == 3 ? 1 : this.defaultNewsImageIndex + 1;
    return res;
  }

}