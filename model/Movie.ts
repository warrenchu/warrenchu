import * as internal from "stream";
import { Awards } from "./Awards";
import { Imdb } from "./Imdb";
import { Tomatoes } from "./Tomatoes";

export class Movie{
    plot?: string;
    genres?: string[];
    runtime?: number;
    cast?: string[]
    title?: string[];
    fullplot?: string;
    languages?: string;
    released?: Date;
    directors?: string[];
    rating?: string;
    rated?: string;

    year?: number;
    metacritic?: number;
    writers?: string[];
    awards?: Awards;
    lastUpdated?: string;
    imdb?: Imdb;
    countries?: string[];
    type?: string;
    tomatoes?: Tomatoes;
    num_mflix_comments?: number;


}