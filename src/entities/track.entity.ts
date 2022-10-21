import { Artist } from './artist.entity';

export class Track {
  id: string;
  name: string;
  artist: Artist;
  featuring: Artist[];
  length: number;
  genre?: string;
}
