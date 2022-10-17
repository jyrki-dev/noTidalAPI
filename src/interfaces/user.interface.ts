import { Playlist } from './playlist.interface';
export interface User {
  id: string,
  name: string,
  createdPlaylists?: Playlist[]
}