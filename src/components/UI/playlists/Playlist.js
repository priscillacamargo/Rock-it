import React from 'react';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { Input } from 'baseui/input';
import { v4 as uuidv4 } from 'uuid';
import { ListItem, ListItemLabel } from 'baseui/list';
import Delete from 'baseui/icon/delete';

import TriangleRight from 'baseui/icon/triangle-right';

import { useApiState } from '../../helpers/apiContext';

/* TODO: Add button and loading states */
const PlaylistManager = () => {
  const [listName, setListName] = React.useState('');
  const [playlists, setPlaylists] = React.useState([]);
  const { artists } = useApiState();

  const handleChange = event => {
    setListName(event.target.value);
  };

  const addList = () => {
    const newPlaylists = [...playlists, listName];
    setPlaylists(newPlaylists);
  };

  return (
    <div className="playlist-section">
      <Input type="text" placeholder="Name your list" onChange={handleChange} />
      <Button
        onClick={() => addList()}
        endEnhancer={() => (
          <div>
            <TriangleRight className="section__icon--margin" />
            <TriangleRight />
          </div>
        )}
        overrides={{
          BaseButton: {
            style: {
              width: '100%',
              backgroundColor: 'rgb(255, 233, 0)',
              color: 'black'
            }
          }
        }}
      >
        <strong>Add New Playlist</strong>
      </Button>
      {playlists.map(item => (
        <div className="playlist-section__list" key={uuidv4()}>
          <ListItem
            overrides={{
              Root: {
                style: {
                  borderBottom: '1px solid #E2E2E2'
                }
              }
            }}
          >
            <ListItemLabel>
              <strong>{item}</strong>
            </ListItemLabel>
            <div>
              <TriangleRight className="section__icon--margin" />
              <TriangleRight />
            </div>
          </ListItem>
          <Button size={SIZE.compact}>
            <Delete />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistManager;
