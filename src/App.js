import './App.css';
import { BrowserRouter } from 'react-router-dom';
import A_about from './A_about';
import React from 'react';
import A_header from './A_header';
import A_URL from './A_URL';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <A_header/>
          <A_about/>
          <A_URL/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
