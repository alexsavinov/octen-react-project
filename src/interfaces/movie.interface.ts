export interface IGenre {
    id: number | undefined;
    name: string | undefined;
}

export interface IMovie {
    id?: number;
    genres?: IGenre[];
    genre_ids?: [];
    original_title?: string;
    release_date?: string;
    title?: string;
    poster_path?: string;
    overview?: string;
    vote_average?: number
    homepage?: string
    revenue?: number
    videos?: IVideoObj
    images?: IImageObj
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

export interface IVideoObj {
    results: IVideo[];
}

export interface IImage {
    aspect_ratio: number
    height: number
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface IImageObj {
    backdrops: IImage[];
    logos: IImage[];
    posters: IImage[];
}
