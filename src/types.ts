export interface Result {
    id: number;
    title: string;
    poster_path: string;
}

export interface Movies {
    page: number
    results: Result[]
}

export interface Category {
    id: number,
    name: string
}

export interface Genres {
    genres: Genre[];
}

export interface Genre {
    id:   number;
    name: string;
}

export interface MoviesByGenrer {
    page:    number;
    results: Result[];
}

export interface Result {
    genre_ids:   number[];
    id:          number;
    poster_path: string;
    title:       string;
}

export interface MovieDetail {
    genres:       Genre[];
    id:           number;
    overview:     string;
    poster_path:  string;
    title:        string;
    vote_average: number;
}