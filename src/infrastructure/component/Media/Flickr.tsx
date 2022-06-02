import {FunctionComponent} from "react";
import {BookmarkInterface} from "../../../domain/Bookmark";
import {formatDate} from "../../utils/dateFormat";

type Props = {
  bookmark: BookmarkInterface,
  deleteCallback: (bookmark: BookmarkInterface) => void
}

export const FLICKRPROVIDER = 'Flickr';

const BookmarkItem: FunctionComponent<Props> = ({bookmark, deleteCallback}) => {

  return (
    <div className="item-content">
      <div className="video" dangerouslySetInnerHTML={{__html: bookmark.data.html}}></div>
      <div className="data">
        <table>
          <tbody>
            <tr>
              <td>Auteur</td>
              <td>{bookmark.data.author_name}</td>
            </tr>
            <tr>
              <td>Url</td>
              <td><a target="_blank" href={bookmark.data.url}>{bookmark.data.url}</a></td>
            </tr>
            <tr>
              <td>Taille</td>
              <td>{bookmark.data.width } x {bookmark.data.height}</td>
            </tr>
            <tr>
              <td>Publiée le</td>
              {bookmark.data.upload_date && formatDate(bookmark.data.upload_date)}
            </tr>
            <tr>
              <td><button onClick={() => deleteCallback(bookmark)}>Supprimer</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookmarkItem
