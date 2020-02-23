import React from 'react';
import { Button, SIZE } from 'baseui/button';
import { Input } from 'baseui/input';
import { v4 as uuidv4 } from 'uuid';
import { ListItem, ListItemLabel } from 'baseui/list';
import Delete from 'baseui/icon/delete';

import TriangleRight from 'baseui/icon/triangle-right';
// import Api from '../../services/Api';

/* TODO: Add button states and loading states */
const PlaylistManager = () => {
  const [listName, setListName] = React.useState('');
  //ToDo: load saved playlists from localStorage and/or server
  // currently the playlists long term persistence is not implemented
  const [playlists, setPlaylists] = React.useState([]);

  const handleChange = event => {
    setListName(event.target.value);
  };

  const addList = () => {
    const listId = uuidv4();
    const newPlaylists = [...playlists, { name: listName, id: listId }];

    setPlaylists(newPlaylists);
    localStorage.setItem(listId, listName);

    //When posting via json-server I am getting a 404
    //due to time constraints I decided don't  debug it,
    //therefore the solution will be given in terms of localStorage
    //the for the post request is commented bellow
    // new Api().playlists(listName);
  };

  const deleteList = id => {
    let updatedPlaylist = [...playlists];

    updatedPlaylist = updatedPlaylist.filter(item => item.id !== id);

    setPlaylists(updatedPlaylist);
    localStorage.removeItem(id);
  };

  return (
    <div className="playlist-section">
      <Input type="text" placeholder="Name your list" onChange={handleChange} />
      <Button
        id="add-list"
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
        <div className="playlist-section__list" key={item.id}>
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
              <strong>{item.name}</strong>
            </ListItemLabel>
            <div>
              <TriangleRight className="section__icon--margin" />
              <TriangleRight />
            </div>
          </ListItem>
          <Button size={SIZE.compact} onClick={() => deleteList(item.id)}>
            <Delete />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistManager;
