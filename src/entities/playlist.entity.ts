import { Track } from './track.entity';
import { User } from './user.entity';

export class Playlist {
  id: string;
  name: string;
  description?: string;
  createdBy?: User;
  tracks: Track[];
  trackCount: number;
  totalLength: number;
  created?: Date;
}
