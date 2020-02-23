import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class Api {
  /* TODO: test it */
  _serializeData = apiResponse => {
    let data = apiResponse.data;

    return data;
  };

  /* TODO: handle errors properly */
  get artists() {
    return axios
      .get('http://localhost:3004/artists')
      .then(this._serializeData)
      .catch(error => console.log(error));
  }

  /* TODO: handle errors properly */
  get songs() {
    return axios
      .get('http://localhost:3004/songs')
      .then(this._serializeData)
      .catch(error => console.log(error));
  }

  playlists(data) {
    return axios
      .post('http://localhost:3004', { id: uuidv4(), listName: data })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Api;
