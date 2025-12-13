import type { SingaGenre } from "./singaGenre";

export interface SingaGenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingaGenre[];
}
