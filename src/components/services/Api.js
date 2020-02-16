import axios from 'axios';

class Api {
  /* TODO: test it */
  _serializeData = apiResponse => {
    let data = apiResponse.data;

    return data;
  };

  get artists() {
    return axios
      .get('http://localhost:3004/artists')
      .then(this._serializeData)
      .catch(error => console.log(error));
  }

  get songs() {
    return axios
      .get('http://localhost:3004/songs')
      .then(this._serializeData)
      .catch(error => console.log(error));
  }
}

export default Api;
