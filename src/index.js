import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import dataJSON from './data.json';
import ListItem from './components/ListItem.js';
import ToJson from './components/ToJson.js';
import {ListProvider} from './components/Context.js';

function App() {
  const [data, setData] = useState(null);
  const [buttonJson, setButtonJson] = useState(false);
  
  useEffect(() => {
    setData(dataJSON);
  }, []);

  function handleButton() {
    setButtonJson(!buttonJson);
  }

  return (
    <ListProvider>
     { (data && data.root.length ? 
      <div>
        <ul>
          {data.root.map((item, index) => <li key={index}><ListItem item = {item}/></li>)}
        </ul>
        <div>
          <button onClick={handleButton}>ToJson</button>
          {buttonJson && <ToJson data = {data}/>}
        </div>
      </div> : 
        'Json-файл отсутствует')}
    </ListProvider>
      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);