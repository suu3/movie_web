import axios from "axios";

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

export const getMovies = async (sortBy: string = "rating") => {
  const url = `https://yts-proxy.now.sh/list_movies.json?sort_by=${sortBy}`;
  try {
    const response = await fetch(url);
    const movie_data = await response.json();
    return movie_data.data.movies;
  } catch (error) {
    console.log(error);
  }
};

export interface SearchData {
  rank: string;
  movieNm: string;
  openDt: string;
  audiCnt: string;
  salesAcc: string;
}

// export const searchMovies = async (search: string) => {
//   const {
//     data: { movieListResult },
//   } = await axios.get(
//     "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json",
//     {
//       params: {
//         curPage: 1,
//         itemPerPage: 20,
//         key: process.env.REACT_APP_API_KEY,
//         movieNm: search,
//       },
//     }
//   );
//   return movieListResult;
// };
export const searchMovies = async (date: string) => {
  const {
    data: { boxOfficeResult },
  } = await axios.get(
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    {
      params: {
        itemPerPage: 20,
        key: process.env.REACT_APP_API_KEY,
        targetDt: date,
      },
    }
  );
  return boxOfficeResult;
};
// export const searchMovies = async () => {
//   const url = `https://cors.bridged.cc/https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=37384`;
//   try {
//     const response = await fetch(url);
//     const movie_data = await response.json();
//     return movie_data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
