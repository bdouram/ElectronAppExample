import React from 'react';
import Header from '../Header';

const App = ({ t }) => (
  <div className="App">
    <Header t={t} />
    <div className="body">
      <div className="content" />
      <div className="sidebar" />
    </div>
    <div className="footer" />
  </div>
);

export default App;
