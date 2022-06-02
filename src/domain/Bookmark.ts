import {MediaDataInterface} from "./MediaData";

interface BookmarkInterface {
  id: string
  url: string
  created_at: Date
  data: MediaDataInterface
}

export type {BookmarkInterface}
