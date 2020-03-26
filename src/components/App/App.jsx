import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import BusinessList from '../BusinessList/BusinessList.jsx';
//This is the card component We moved this object from the Business file
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Faviola Pizzeria',
  address: '1801 Paddington Way',
  city: 'Flavortown',
  state: 'CA',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
/*Here we create a businesses array in order to prevent the repetition of
components in BusinessList file*/
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {

  searchYelp(term, location, sortBy) {
    console.log(`Searching for ${term}, ${location}, and ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <h1>DetectMe</h1>
        <SearchBar searchYelp={this.searchYelp}/>
      {/*Here we added a property inside a component and as a value we
      added the array*/}
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;


