import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import BusinessList from '../BusinessList/BusinessList.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>DetectMe</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;


