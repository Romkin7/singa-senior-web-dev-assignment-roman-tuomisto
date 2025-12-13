import type { AsyncData, NuxtError } from "#app";

function stringifyQueryParams(pageSize: number, name: string | undefined) {
  let queryString = `page_size=${pageSize}`;
  if (name) {
    queryString = `${queryString}&name=${name}`;
  }
  return queryString;
}

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
 * @param {Ref<string>} queryString
 * @param {number|undefined} pageSize
 * @returns {PromiseAsyncData<unknown, NuxtError<unknown> | undefined>}
 */
export const useGenres = (
  apiBaseUri: string,
  queryString?: Ref<string> | string,
  pageSize: number = 38
): AsyncData<unknown, NuxtError<unknown> | undefined> => {
  // Get value of queryString using computed
  const queryStringValue = computed(() =>
    typeof queryString === "string" ? queryString : queryString?.value || ""
  );

  return useAsyncData(
    "singa-genres",
    (_nuxtApp, { signal }) =>
      $fetch(
        `${apiBaseUri}/genres?${stringifyQueryParams(
          pageSize,
          queryStringValue.value
        )}`,
        {
          signal,
        }
      ),
    {
      // Watch for the updates on queryStringValue to automatically re-fetch results.
      watch: [queryStringValue],
    }
  );
};
