import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {BlogService} from '../../../services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  singleBlog: any;

  constructor(private ActivatedRoute : ActivatedRoute, private BlogService : BlogService) {

    let param = this.ActivatedRoute.snapshot.params['singleBlogID'];

    if(param){

      this.BlogService.getBlogByID(param).then(blog => {

        this.singleBlog = blog;

      });

    }//if

  }//constructor

  ngOnInit() {

  }//ngOnInit

}//ArticleComponent
