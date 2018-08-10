import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {a} from '@angular/core/src/render3';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news : Array<any>;

  constructor(private NewsService : NewsService) {

    this.news = [];

    this.NewsService.getNews().then(news => {

      this.news = news;

    });

  }//constructor

  ngOnInit() {

  }//ngOnInit

}//NewsComponent
