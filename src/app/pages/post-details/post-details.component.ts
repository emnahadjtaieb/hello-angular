import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { NumericUtils } from 'src/app/utils/NumericUtils';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }


  getPost() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (NumericUtils.isNotNumber(id)) {
      console.error('not valid id query param: ' + id);
      return;
    }
    return this.postService.getById(Number(id)).subscribe(data => this.post = data);
  }

}
