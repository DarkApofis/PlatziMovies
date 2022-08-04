import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movies, Genres, MoviesByGenrer, MovieDetail } from '../../types'


const apiKey = import.meta.env.VITE_APP_APIKEY

export const apiData = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
    endpoints(builder){
        return {
            fetchTrendMovies: builder.query<Movies, string|void> ({
                query(apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `trending/movie/day?api_key=${apiKey}`
                }
            }),
            fetchCategories: builder.query<Genres, string|void>({
                query(apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `genre/movie/list?api_key=${apiKey}`
                }
            }),
            fetchMovieByCategory: builder.query<MoviesByGenrer, string|void>({
                query(id, apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `discover/movie?api_key=${apiKey}&with_genres=${id}`
                }
            }),
            fetchMovieDetail: builder.query<MovieDetail, string|void>({
                query(id, apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `movie/${id}?api_key=${apiKey}`
                }
            }),
            fetchRecommendedMovies: builder.query<Movies, string|void>({
                query(id, apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `movie/${id}/recommendations?api_key=${apiKey}`
                }
            }),
            fetchSearchMovie: builder.query<Movies, string|void>({
                query(query, apiKey = import.meta.env.VITE_APP_APIKEY){
                    return `search/movie?api_key=${apiKey}&query=${query}`
                }
            })
        }
    }
})

export const { 
    useFetchTrendMoviesQuery, 
    useFetchCategoriesQuery, 
    useFetchMovieByCategoryQuery,
    useFetchMovieDetailQuery,
    useFetchRecommendedMoviesQuery,
    useFetchSearchMovieQuery,
} = apiData