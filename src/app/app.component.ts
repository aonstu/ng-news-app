import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'news-app';
  mArticles: [];
  mSources: [];


  constructor(private newsService: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {

    // load articles
    this.newsService.initArticles().subscribe(
      (data: any) => {
        this.mArticles = data.articles;
      }
    )

    // load sources
    this.newsService.initSources().subscribe(
      (data: any) => {
        this.mSources = data.sources;
      }
    );

  }

  // search articles
  searchArticles(source) {
    this.newsService.getArticlesById(source).subscribe(
      (data: any) => {
        this.mArticles = data.articles;
      }
    )
  }

}
