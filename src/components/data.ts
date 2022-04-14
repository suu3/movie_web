export interface MovieData {
  id: number;
  title: string;
  medium_cover_image: string;
  background_image: string;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
}

export const getMovies = async () => {
  const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
  try {
    const response = await fetch(url);
    const movie_data = await response.json();
    return movie_data.data.movies;
  } catch (error) {
    console.log(error);
  }
};

export interface SearchData {
  id: number;
  title: string;
  medium_cover_image: string;
  background_image: string;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
}

// export const searchMovies = async (display: number, query: string) => {
//   const url = `https://my-simple-proxy-server.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?display=${display}&genre=1&query=${query}`;
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `${process.env.REACT_APP_CLIENT_KEY}`,
//       },
//     });
//     const movie_data = await response.json();
//     return movie_data.items;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const searchMovies = async () => {
  const url = `https://my-simple-proxy-server.herokuapp.com/https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=37384`;
  try {
    const response = await fetch(url);
    const movie_data = await response.json();
    return movie_data.data;
  } catch (error) {
    console.log(error);
  }
};
