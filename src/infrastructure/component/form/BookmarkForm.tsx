import {FormEvent, FunctionComponent, useState} from "react";
import MediaDataGateway from "../../../gateway/MediaDataGateway";
import {FLICKRPROVIDER} from "../Media/Flickr";
import {VIMEOPROVIDER} from "../Media/Vimeo";
import {BookmarkInterface} from "../../../domain/Bookmark";

type Props = {
  callback: (bookmark: BookmarkInterface) => void
}

const BookmarkForm: FunctionComponent<Props> = ({callback}) => {

  const [url, setUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [waiting, setWaiting] = useState<boolean>(false)
  const mediaDataGateway = new MediaDataGateway()
  const providers = [FLICKRPROVIDER, VIMEOPROVIDER]

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent) => {
    setError('')
    if (url) {
      setWaiting(true)
      mediaDataGateway.getDataOfMedia(url).then(
        (data) => {
          setWaiting(false)
          if (data instanceof Error) {
            setError(data.message)

            return
          }

          if (providers.includes(data.provider_name)) {
            callback({
              id: crypto.randomUUID(),
              url: url,
              created_at: new Date(),
              data: data
            })
          } else {
            setError('Url non supportée')
          }

          setUrl('')
        }
      )
    }

    e.preventDefault()
  }

  return (<>
    <div className="bookmark-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        Url: <input value={url} name="url" type="text" onChange={handleChange}/>
        <input type="submit" value="Ajouter" />
        {waiting && <small>En cours d'analyse</small>}
        <br />
        <b>{error}</b>
      </form>
    </div>
  </>)
}

export default BookmarkForm
