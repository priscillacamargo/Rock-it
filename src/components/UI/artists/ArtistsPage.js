import React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Card } from 'baseui/card';
import TriangleRight from 'baseui/icon/triangle-right';

import { useApiState } from '../../helpers/apiContext';

const ArtistsPage = ({ match }) => {
  const { id: artistId } = match.params;
  const { artists, songs } = useApiState();

  const artistInfo = artists.filter(artist => JSON.stringify(artist.id) === artistId);
  const artistName = artistInfo.map(item => item.name);
  const artistSongs = songs.filter(song => song.artist === artistName[0]);

  return (
    <div className="body">
      <Card className="artist-page__card--margin">
        <h4>Artist: {artistName && artistName}</h4>
      </Card>
      <Card className="artist-page__card">
        <h4>Your {artistName && artistName} Songs:</h4>
        {artistSongs &&
          artistSongs.map(song => (
            <ListItem key={song.id}>
              <strong>
                <ListItemLabel>{song.name}</ListItemLabel>
              </strong>
              <div>
                <TriangleRight className="section__icon--margin" />
                <TriangleRight />
              </div>
            </ListItem>
          ))}
      </Card>
    </div>
  );
};

export default ArtistsPage;
