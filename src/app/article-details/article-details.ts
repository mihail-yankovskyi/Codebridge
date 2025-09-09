import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadArticle } from '../store/actions/app.actions';
import { selectSelectedArticle } from '../store/selectors/app.selectors';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-details',
  imports: [AsyncPipe, MatIconModule],
  templateUrl: './article-details.html',
  styleUrl: './article-details.scss'
})
export class ArticleDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private router = inject(Router);

  selectedArticle$ = this.store.select(selectSelectedArticle);

  ngOnInit(): void {
    this.loadArticle();
  }

  loadArticle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadArticle({id}));
  }

  onBackClick(): void {
    this.router.navigate(['/articles']);
  }
}
