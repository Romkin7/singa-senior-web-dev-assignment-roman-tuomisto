import type { SingaGenresResponse } from "@/@types/singaGenresResponse";

/**
 * useGenres composable that,
 * takes in apiBaseUri and pageSize as optional parameter,
 * that defaults to 38 items,
 * fetches data from Singa api
 * and returns SingaGenresResponse.
 *
 * Uses /genres as hardcoded path,
 * because this composable is specifically meant to fetch Singa Genres,
 * as it's name also states.
 *
 * ApiBseUri is not hardcoded, because it can differ based on the environment,
 * thus it's better to configure it in nuxt.config.ts.
 * @param {string} apiBaseUri
 * @param {number|undefined} pageSize
 * @returns {Promise<SingaGenresResponse>}
 */
export const useGenres = async (
  apiBaseUri: string,
  pageSize: number = 38
): Promise<SingaGenresResponse> => {
  const { data } = await useAsyncData("singa-genres", () =>
    $fetch(`${apiBaseUri}/genres?page_size=${pageSize}`)
  );
  return data.value as SingaGenresResponse;
};
