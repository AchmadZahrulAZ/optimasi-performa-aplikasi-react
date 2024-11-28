import React from 'react';
import { FixedSizeList as List } from 'react-window';

export default function ListVirtualization() {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  return (
    <>
      <h1>List Virtualization</h1>
      <ul>
        <List height={300} itemCount={items.length} itemSize={35} width="100%">
          {({ index, style }) => <li style={style}>{items[index]}</li>}
        </List>
      </ul>
    </>
  );
}
