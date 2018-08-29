import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Array<any>;

  constructor(private BlogService : BlogService) {

    this.blog = [];

  }//constructor

  ngOnInit() {

    this.BlogService.getBlog().then(blog => {

      if(Array.isArray(blog)){

        this.blog = blog;

      }//if

    });

  }//ngOnInit

}//BlogComponent
