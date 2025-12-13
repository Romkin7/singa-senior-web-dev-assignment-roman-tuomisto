import type { SingaGenresResponse } from "@/@types/singaGenresResponse";

/**
 * useGenres composable,
 * that takes in url and fetches data from Singa api
 * and returns SingaGenresResponse
 * @param {string} url
 * @returns {Promise<SingaGenresResponse>}
 */
export const useGenres = async (url: string): Promise<SingaGenresResponse> => {
  const { data } = await useAsyncData(url, () => $fetch(url));
  return data.value as SingaGenresResponse;
};
