import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useStyletron } from 'baseui';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Input } from 'baseui/input';
import TriangleRight from 'baseui/icon/triangle-right';
import Search from 'baseui/icon/search';

const SearchableList = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.list);
  }, [props.list]);

  function filterList(event) {
    let filteredItems = items;
    filteredItems = props.list.filter(item => {
      return item.name.toLowerCase().search(event.toLowerCase()) !== -1;
    });
    setItems(filteredItems);
  }

  function Before() {
    const [css, theme] = useStyletron();
    return (
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.sizing.scale500
        })}
      >
        <Search size="18px" />
      </div>
    );
  }

  return (
    <div>
      <Input
        type="text"
        placeholder={props.placeholder}
        overrides={{
          Before
        }}
        onChange={e => filterList(e.target.value)}
      />
      <div className="section__list">
        {items.map(item => (
          <Link key={item.id} to={`/artists/${item.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchableList;
