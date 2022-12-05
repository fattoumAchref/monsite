import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  @Input()com!:Comments
  ngOnInit(): void {
  }

}
