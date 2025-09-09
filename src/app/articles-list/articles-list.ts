import { Component, inject } from '@angular/core';
import { ArticleItem } from "../article-item/article-item";
import { IArticle } from '../shared/interfaces/article.interface';
import {  Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectArticles, selectArticlesNumber, selectIsLoadingArticles, selectSearchRequest } from '../store/selectors/app.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-articles-list',
  imports: [ArticleItem, AsyncPipe],
  templateUrl: './articles-list.html',
  styleUrl: './articles-list.scss'
})
export class ArticlesList {
  store = inject(Store);

  articles$: Observable<IArticle[]> = this.store.select(selectArticles);
  counter$: Observable<number> = this.store.select(selectArticlesNumber);
  searchRequest$: Observable<string> = this.store.select(selectSearchRequest);
  isLoadingArticles$: Observable<boolean> = this.store.select(selectIsLoadingArticles);
}
