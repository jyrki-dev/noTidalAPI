import { Playlist } from './playlist.entity';
export class User {
  id: string;
  name: string;
  createdPlaylists?: Playlist[];
}
