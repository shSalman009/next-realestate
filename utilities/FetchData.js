import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function FetchData(url) {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0be175a32bmshbb0775e9420009dp1ff68ajsnd08c8154270a",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
}
