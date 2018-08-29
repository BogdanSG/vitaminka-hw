import {Component, Input, OnInit} from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { IOffset } from '../../../interface/ioffset';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit , IOffset {

  news : Array<any>;

  @Input()
  offset: number;

  constructor(private NewsService : NewsService) {

    this.news = [];

    this.offset = 4;

    this.NewsService.getNews().then(news => {

      if(Array.isArray(news)){

        this.news = news;

      }//if

    });

  }//constructor

  addOffset() {

    if(this.news.length > this.offset)
      this.offset += 4;

  }//addOffset

  ngOnInit() {

  }//ngOnInit

}//NewsComponent
