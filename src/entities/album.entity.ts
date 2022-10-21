import { Artist } from './artist.entity';
import { Track } from './track.entity';

export class Album {
  id: string;
  name: string;
  artist: Artist;
  tracks: Track[];
  trackCount: number;
  lenght?: number | string | Date;
  cover?: BinaryType | URL;
  artists?: string[];
  duration?: number | string | Date;
  releaseDate?: Date;
}