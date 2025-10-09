export interface Movie {
  id: number;
  title: string;
  year: number;
  posterUrl: string;
  director?: string;
  description?: string;
  genre?: string;
  rating?: number;
  language?: string;
  duration?: number;
  releaseDate?: string;
  favorite: boolean;
}
