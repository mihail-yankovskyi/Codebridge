import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadArticles, saveSearchRequest } from '../store/actions/app.actions';

@Component({
  selector: 'app-search',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})

export class Search implements OnInit {
  searchFormControl = new FormControl('');

  constructor (private store: Store) {}

  ngOnInit(): void {
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges(): void {
    this.searchFormControl.valueChanges
      .pipe(
        filter((value): value is string =>
          typeof value === 'string' && value.trim().length > 2
        ),
        map(value => value.trim().toLowerCase()),
        debounceTime(300),
        distinctUntilChanged(),
      ).subscribe((value) => {
        this.store.dispatch(saveSearchRequest({searchRequest: value}));
        this.store.dispatch(loadArticles({request: value}));
      });
  }
}
