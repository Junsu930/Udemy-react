import React, { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
    </div>
  );
}

export default App;
