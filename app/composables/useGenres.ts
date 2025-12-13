import type { AsyncData, NuxtError } from "#app";

/**
 * useGenres composable that,
 * takes in apiBaseUri and pageSize as optional parameter,
 * that defaults to 38 items,
 * fetches data from Singa api.
 *
 * Uses /genres as hardcoded path,
 * because this composable is specifically meant to fetch Singa Genres,
 * as it's name also states.
 *
 * ApiBseUri is not hardcoded, because it can differ based on the environment,
 * thus it's better to configure it in nuxt.config.ts.
 * @param {string} apiBaseUri
 * @param {number|undefined} pageSize
 * @returns {PromiseAsyncData<unknown, NuxtError<unknown> | undefined>}
 */
export const useGenres = (
  apiBaseUri: string,
  pageSize: number = 38
): AsyncData<unknown, NuxtError<unknown> | undefined> => {
  return useAsyncData("singa-genres", (_nuxtApp, { signal }) =>
    $fetch(`${apiBaseUri}/genres?page_size=${pageSize}`, { signal })
  );
};
