import React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Card } from 'baseui/card';
import TriangleRight from 'baseui/icon/triangle-right';

const ArtistsList = props => {
  return (
    <Card className="section-left__list">
      {props.artists !== undefined &&
        props.artists.map(artist => (
          <ListItem
            key={artist.id}
            overrides={{
              Root: {
                style: {
                  borderBottom: '1px solid #E2E2E2'
                }
              }
            }}
          >
            <ListItemLabel>
              <strong>{artist.name}</strong>
            </ListItemLabel>
            <div>
              <TriangleRight className="section-left__icon--margin" />
              <TriangleRight />
            </div>
          </ListItem>
        ))}
    </Card>
  );
};

export default ArtistsList;
