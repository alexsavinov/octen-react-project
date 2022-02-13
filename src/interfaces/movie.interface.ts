export interface IMovie {
    id?: number;
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: ICollection[];
    genres?: IGenre[];
    genre_ids?: [];
    original_title?: string;
    release_date?: string;
    tagline?: string;
    title?: string;
    poster_path?: string;
    overview?: string;
    runtime?: number
    vote_average?: number
    homepage?: string
    revenue?: number
    production_companies?: ICompany[]
    production_countries?: ICountry[]
    videos?: IVideoObj
    images?: IImageObj
}

export interface IGenre {
    id: number | undefined;
    name: string | undefined;
}

export interface ICollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface ICompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ICountry {
    name: string;
}

export interface IVideoObj {
    results: IVideo[];
}

export interface IVideo {
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: string;
    type: string;
    id: string;
}

export interface IImageObj {
    backdrops: IImage[];
    logos: IImage[];
    posters: IImage[];
}

export interface IImage {
    aspect_ratio: number
    height: number
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}
