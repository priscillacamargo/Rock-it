import React from 'react';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Card } from 'baseui/card';

const ArtistsList = () => {
  return (
    <Card>
      <ListItem>
        <ListItemLabel>Pantera</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel>Metallic</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel>Slayer</ListItemLabel>
      </ListItem>
    </Card>
  );
};

export default ArtistsList;
