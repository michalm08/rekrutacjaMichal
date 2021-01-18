import React from 'react';
import EthList from './EthList';

const SpecialItem = ({
  text,
  id,
  setItems,
  items,
  specialItems,
  setSpecialItems,
  setActivePopUp,
  setSpecialPopUp,
}) => {
  const handleDelete = () => {
    setItems(items.filter((item) => item.id !== id));
    setSpecialItems([]);
  };

  const handleAdd = () => {
    setActivePopUp(true);
    setSpecialPopUp(true);
  };

  return (
    <div className='specialItem'>
      <div className='line' />
      <div className='category'>
        <span className='text'>{text}</span>
        <button className='negativeButton' onClick={handleDelete}>
          <div className='minus' />
        </button>
      </div>
      <EthList specialItems={specialItems} setSpecialItems={setSpecialItems} />

      <button className='positiveButton' onClick={handleAdd}>
        <div className='minus'></div>
        <div className='plus'></div>
      </button>
    </div>
  );
};

export default SpecialItem;
