import React from 'react';
import Item from './Item';

const ListOfEth = ({ specialItems, setSpecialItems }) => {
  return (
    <div className='ethList'>
      {specialItems.map((item) => (
        <Item
          key={item.id}
          items={specialItems}
          setItems={setSpecialItems}
          text={item.text}
          id={item.id}
          special={true}
        />
      ))}
    </div>
  );
};

export default ListOfEth;
