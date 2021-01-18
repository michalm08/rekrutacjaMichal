import React from 'react';

const Item = ({ text, id, setItems, items, special }) => {
  const handleDelete = () => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={special ? 'special' : 'classicItem'}>
      <div className='line' />
      <span>{text}</span>
      <button className='negativeButton' onClick={handleDelete}>
        <div className='minus' />
      </button>
    </div>
  );
};

export default Item;
