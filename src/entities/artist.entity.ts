import { Album } from './album.entity';
import { Track } from './track.entity';

export class Artist {
  id: string;
  name: string;
  tracks: Track[];
  albums: Album[];
}