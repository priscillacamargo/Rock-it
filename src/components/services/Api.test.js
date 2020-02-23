import axios from 'axios';

import Api from './Api';

jest.mock('axios');

describe('Api', () => {
  let result = [];
  let resp = {};

  it('should fetch artists', () => {
    result = new Api();

    const artists = [
      {
        id: 760,
        name: '"Weird Al" Yankovic'
      }
    ];
    resp = { data: artists };
    axios.get.mockResolvedValue(resp);

    return result.artists.then(data => expect(data).toEqual(artists));
  });

  it('get data from api', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('returns an array', () => {
    expect(resp.data).toBeInstanceOf(Array);
  });

  it('response has 1 elements', () => {
    expect(resp.data).toHaveLength(1);
  });
});
