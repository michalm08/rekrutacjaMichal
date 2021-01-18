import React from 'react';
import Item from './Item';
import SpecialItem from './SpecialItem';

const ItemsList = ({
  items,
  setItems,
  specialItems,
  setSpecialItems,
  setActivePopUp,
  setSpecialPopUp,
}) => {
  return (
    <>
      {items.map((item) => {
        if (item.text !== 'Ethnicity') {
          return (
            <>
              <Item
                key={item.id}
                text={item.text}
                id={item.id}
                items={items}
                setItems={setItems}
              />
            </>
          );
        } else {
          return (
            <SpecialItem
              key={item.id}
              text={'Ethnicity'}
              id={item.id}
              items={items}
              setItems={setItems}
              specialItems={specialItems}
              setSpecialItems={setSpecialItems}
              setSpecialPopUp={setSpecialPopUp}
              setActivePopUp={setActivePopUp}
            />
          );
        }
      })}
    </>
  );
};

export default ItemsList;
