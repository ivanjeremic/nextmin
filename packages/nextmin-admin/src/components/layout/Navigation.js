import React from 'react';
import { ListBox, Item, Section } from '@adobe/react-spectrum';

function Navigation() {
  let options = [
    {
      name: 'Pages',
      children: [
        { id: 2, name: 'Koala' },
        { id: 3, name: 'Kangaroo' },
        { id: 4, name: 'Platypus' },
      ],
    },
    {
      name: 'API',
      children: [
        { id: 6, name: 'Bald Eagle' },
        { id: 7, name: 'Bison' },
        { id: 8, name: 'Skunk' },
      ],
    },
  ];
  let [selected, setSelected] = React.useState(new Set());

  return (
    <ListBox
      aria-label='Pick an animal'
      items={options}
      selectedKeys={selected}
      selectionMode='single'
      onSelectionChange={setSelected}
      width='size-2400'
    >
      {(item) => (
        <Section key={item.name} items={item.children} title={item.name}>
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}

export default Navigation;
