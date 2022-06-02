import {MediaDataInterface} from "../domain/MediaData";

export default class MediaDataGateway {

  getDataOfMedia(url: string): Promise<MediaDataInterface|Error> {
    return fetch(`https://noembed.com/embed/embed?url=${url}`)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.error) {
          return new Error(result.error)
        }

        return result
      },
      (error) => {
        return error
      }
    )
  }
}
