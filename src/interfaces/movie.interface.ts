export interface IMovie {
    id?: number;
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: ICollection[];
    genres?: IGenre[];
    genre_ids?: [];
    original_title?: string;
    // release_date: "2021-12-15"
    release_date?: string;
    // tagline: "The Multiverse unleashed."
    // title: "Spider-Man: No Way Home"
    // poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    // overview: "Peter Parker is unma........"
    // backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
    // runtime: 148
    // vote_average: 8.4
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
    videos?: IVideo[]
    images?: IImage[]

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

export interface IVideo {
    results: IVideoResult[];
}

export interface IVideoResult {
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: string;
    type: string;
    id: string;
}

export interface IImage {
    backdrops: IVideoResult[];
    logos: IVideoResult[];
    posters: IImageResult[];
}

export interface IImageResult {
    aspect_ratio: number
    height: number
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

// "adult": false,
// "backdrop_path": "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
// "belongs_to_collection": {
//   "id": 8945,
//   "name": "Mad Max Collection",
//   "poster_path": "/cNzCJnG4wstosen59BhydnUkaZJ.jpg",
//   "backdrop_path": "/gwYe803SFwKlCF5y71OicWHUnVD.jpg"
// },
// "budget": 150000000,
// "genres": [
//   {
//     "id": 28,
//     "name": "Action"
//   },
// ],
// "homepage": "https://www.warnerbros.com/movies/mad-max-fury-road",
// "id": 76341,
// "imdb_id": "tt1392190",
// "original_language": "en",
// "original_title": "Mad Max: Fury Road",
// "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
// "popularity": 96.908,
// "poster_path": "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
// "production_companies": [
//   {
//     "id": 2537,
//     "logo_path": null,
//     "name": "Kennedy Miller Productions",
//     "origin_country": "AU"
//   },
//   {
//     "id": 174,
//     "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//     "name": "Warner Bros. Pictures",
//     "origin_country": "US"
//   },
//   {
//     "id": 41624,
//     "logo_path": "/wzKxIeQKlMP0y5CaAw25MD6EQmf.png",
//     "name": "RatPac Entertainment",
//     "origin_country": "US"
//   },
//   {
//     "id": 79,
//     "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
//     "name": "Village Roadshow Pictures",
//     "origin_country": "US"
//   }
// ],
// "production_countries": [
//   {
//     "iso_3166_1": "AU",
//     "name": "Australia"
//   },
//   {
//     "iso_3166_1": "US",
//     "name": "United States of America"
//   },
//   {
//     "iso_3166_1": "ZA",
//     "name": "South Africa"
//   }
// ],
// "release_date": "2015-05-13",
// "revenue": 378858340,
// "runtime": 121,
// "spoken_languages": [
//   {
//     "english_name": "English",
//     "iso_639_1": "en",
//     "name": "English"
//   }
// ],
// "status": "Released",
// "tagline": "What a Lovely Day.",
// "title": "Mad Max: Fury Road",
// "video": false,
// "vote_average": 7.5,
// "vote_count": 18986,
// "videos": {
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Retaliate Trailer [HD]",
//       "key": "MonFNCgK4WE",
//       "published_at": "2015-04-29T16:00:36.000Z",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "id": "5bcd2702c3a3682863018582"
//     },
//     {