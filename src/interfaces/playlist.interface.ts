import { User } from './user.interface';
import { Track } from './track.interface';

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  createdBy?: User;
  tracks: Track[];
  songCount: number;
  totalLength: number;
  created?: Date;
}
