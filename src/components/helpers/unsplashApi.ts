import axios from "axios";
import { Image } from "../App.types";
const ACCESS_KEY = "wI1w2RVgUvjuJb0J1gHe4ygdTOtGE6Jz3bmKWX5CLQc";
axios.defaults.baseURL = "https://api.unsplash.com";

interface SearchResponce {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchImagesByQuery = async (
  query: string,
  page: number = 1
): Promise<Image[]> => {
  const response = await axios.get<SearchResponce>("/search/photos", {
    params: {
      query,
      page,
      client_id: ACCESS_KEY,
      per_page: 12,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
};
