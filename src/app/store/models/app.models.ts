import { IArticle } from "../../shared/interfaces/article.interface";

export interface AppState {
  loading: boolean;
  error: string | null;
  articles: IArticle[];
}

export const initialAppState: AppState = {
  loading: false,
  error: null,
  articles: []
};
