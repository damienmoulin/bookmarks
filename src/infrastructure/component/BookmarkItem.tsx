import {FunctionComponent} from "react";
import {BookmarkInterface} from "../../domain/Bookmark";
import Vimeo, {VIMEOPROVIDER} from "./Media/Vimeo";
import Flickr, {FLICKRPROVIDER} from "./Media/Flickr";
import {formatDateDiff} from "../utils/dateFormat";

type Props = {
  bookmark: BookmarkInterface,
  deleteCallback: (bookmark: BookmarkInterface) => void
}
const BookmarkItem: FunctionComponent<Props> = ({bookmark, deleteCallback}) => {
  return (<div className="item">
    <h2>{bookmark.data.title} <small>ajoutée il y a {formatDateDiff(new Date(), bookmark.created_at)}</small></h2>
    <div className="item-content">
      {bookmark.data.provider_name === VIMEOPROVIDER &&
        <Vimeo bookmark={bookmark} deleteCallback={deleteCallback} />
      }
      {bookmark.data.provider_name === FLICKRPROVIDER &&
        <Flickr bookmark={bookmark} deleteCallback={deleteCallback} />
      }
    </div>
  </div>)
}

export default BookmarkItem
