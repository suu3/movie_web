export interface SearchData {
  rank: string;
  movieNm: string;
  openDt: string;
  audiCnt: string;
  salesAcc: string;
}

export interface MovieData {
  id: number;
  title: string;
  medium_cover_image: string;
  background_image: string;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
}

export type CommentListType = {
  [key: string | number]: string;
};
