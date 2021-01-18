import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Popup = ({
  inputText,
  setInputText,
  setItems,
  items,
  setActivePopUp,
}) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setItems([...items, { text: inputText, id: uuidv4() }]);
    setInputText('');
    setActivePopUp(false);
  };
  return (
    <div className='popup'>
      <form action='' onSubmit={handleAdd}>
        <input value={inputText} type='text' onChange={handleChange} />
        <button>add</button>
      </form>
    </div>
  );
};

export default Popup;
