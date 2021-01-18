// import './App.css';
import './sass/App.css';
import Popup from './components/Popup';
import React, { useState } from 'react';
import ItemsList from './components/ItemsList';

function App() {
  const [inputText, setInputText] = useState('');

  const [items, setItems] = useState([
    // { text: 'Age 40+', id: '1fdffa8f-4867-490a-b63a-0c81e2b54762' },
    // { text: 'Ethnicity', id: '1fdffa8f-4867-490a-b63a-0c81e2b54987' },
    // {
    //   text: 'Income yearly 45k USD+',
    //   id: '1fdffa8f-4867-490a-b63a-0c81e2b54997',
    // },
  ]);

  const [specialItems, setSpecialItems] = useState([
    // { text: 'Black', id: '1fdffa8f-4867-490a-b63a-0c81e2b54762' },
    // { text: 'Hispanic', id: '1fdffa8f-4867-490a-b63a-0c81e2b54987' },
  ]);

  const [activePopUp, setActivePopUp] = useState(false);
  const [specialPopUp, setSpecialPopUp] = useState(true);

  const handleClick = () => {
    setActivePopUp(true);
    setSpecialPopUp(false);
  };

  return (
    <>
      {activePopUp ? (
        <>
          {specialPopUp ? (
            <Popup
              items={specialItems}
              setItems={setSpecialItems}
              inputText={inputText}
              setInputText={setInputText}
              setActivePopUp={setActivePopUp}
            />
          ) : (
            <Popup
              items={items}
              setItems={setItems}
              inputText={inputText}
              setInputText={setInputText}
              setActivePopUp={setActivePopUp}
            />
          )}
        </>
      ) : (
        <div className='App'>
          <div className='shadow'></div>
          <p className='title'>People</p>
          <ItemsList
            items={items}
            setItems={setItems}
            specialItems={specialItems}
            setSpecialItems={setSpecialItems}
            setActivePopUp={setActivePopUp}
            setSpecialPopUp={setSpecialPopUp}
          />
          <button className='positiveButton' onClick={handleClick}>
            <div className='minus'></div>
            <div className='plus'></div>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
