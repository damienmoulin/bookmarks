import {FunctionComponent, useState} from "react";
import BookmarkForm from "./form/BookmarkForm";
import {BookmarkInterface} from "../../domain/Bookmark";
import BookmarkItem from "./BookmarkItem";

const Bookmark: FunctionComponent = () => {

  const [bookmarks, setBookmarks] = useState<BookmarkInterface[]>([]);

  const addBookmark = (bookmark: BookmarkInterface) => {
    setBookmarks(bookmarks => [...bookmarks, bookmark])
  }

  const delBookmark = (bookmark: BookmarkInterface) => {

    setBookmarks(bookmarks.filter((item) => {
      return item.id !== bookmark.id
    }))
  }

  return (<>
    <BookmarkForm callback={addBookmark} />
    <hr />
    {bookmarks.map((bookmark, index) => {
      return <BookmarkItem key={index} bookmark={bookmark} deleteCallback={delBookmark}/>
    })}
  </>)
}

export default Bookmark
