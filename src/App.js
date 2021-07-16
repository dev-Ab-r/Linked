import React from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
