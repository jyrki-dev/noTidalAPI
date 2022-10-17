export interface Album {
  id: string,
  name: string,
  artist: string,
  trackCount: number,
  lenght?: number | string | Date,
  cover?: BinaryType | URL,
  artists?: string[],
  duration?: number | string | Date,
  releaseDate?: Date
}