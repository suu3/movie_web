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
