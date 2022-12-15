import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  listposts: Post[] = [];
  isLoading = false;
 
  constructor( private postService : PostService, private router :Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading=true;
    return this.postService.getAll().subscribe( 
      (data) => {
        this.listposts = data;
        setTimeout(() => { 
          this.isLoading = false
        }, 2000)
      })
    }

}
