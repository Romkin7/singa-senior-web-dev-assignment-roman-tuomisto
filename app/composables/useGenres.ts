import type { AsyncData, NuxtError } from "#app";

function stringifyQueryParams(pageSize: number, name: string | undefined) {
  let queryString = `page_size=${pageSize}`;
  if (name) {
    queryString = `${queryString}&name=${name}`;
  }
  return queryString;
}

/**
 * useGenres composable that, in apiBaseUri and pageSize as optional parameter,
 * that defaults to 38 items,
 * fetches data from Singa api.
 *
 * Uses genres as hardcoded path,
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

  const route = useRoute();
  const genreId = computed(() => route.params.id);

  // define unique key to be used with cache, to eliminate cache collisions
  const uniqueKey = computed(() =>
    genreId.value
      ? `singa-genres-${genreId.value}`
      : queryStringValue.value
      ? `singa-genres-${pageSize}-${queryStringValue.value}`
      : `singa-genres-${pageSize}`
  );

  const url = computed(() =>
    genreId.value
      ? `${apiBaseUri}/genres/${genreId.value}`
      : `${apiBaseUri}/genres?${stringifyQueryParams(
          pageSize,
          queryStringValue.value
        )}`
  );

  return useAsyncData(
    () => uniqueKey.value,
    async (_nuxtApp, { signal }) => {
      try {
        return $fetch(url.value, {
          signal,
        });
      } catch (error: any) {
        // Centralized error handling
        if (error.response?.status === 404) {
          throw createError({
            statusCode: 404,
            statusMessage: `No genre found with ID ${genreId}`,
          });
        }

        const statusCode = error.value.statusCode || 500;
        throw createError({
          statusCode,
          statusMessage: error.value.message || "Server Error",
        });
      }
    },
    {
      // Watch for the updates on queryStringValue to automatically re-fetch results.
      watch: [queryStringValue],
      getCachedData: (key, nuxtApp) => {
        // Get default cached data from Nuxt payload
        const data = nuxtApp.isHydrating
          ? nuxtApp.payload.data[key]
          : nuxtApp.static.data[key];

        // If no cached data exists, return undefined
        if (!data) {
          return undefined;
        }

        const timeStampKey = `${key}-timestamp`;
        const timestamp = nuxtApp.payload.data[timeStampKey];

        // If no timestamp, use data
        if (!timestamp) {
          return data;
        }

        const expiryTime = 1000 * 60 * 15; // fifteen minutes
        const isExpired = Date.now() - timestamp > expiryTime;

        // if isExpred is true, return undefined.
        // Each time undefined is returned, it triggers new fetch.
        if (isExpired) return undefined;

        return data;
      },
      transform: (data) => {
        if (tryUseNuxtApp()) {
          const nuxtApp = useNuxtApp();
          nuxtApp.payload.data[`${uniqueKey.value}-timestamp`] = Date.now();
        }
        return data;
      },
    }
  );
};
