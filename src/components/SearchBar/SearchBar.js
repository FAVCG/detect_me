import React from 'react';
import './SearchBar.css'
// import SearchBar from '../SearchBar/SearchBar';

const sortByOptions = {
  // you have to get the correct naming convention on the values.
  // https://www.yelp.com/developers/documentation/v3/business_search
  // You can view these values on the
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  // The purpose of this method is to dynamically create the list items needed
  // to display the sort options (Best Match, Highest Rated, Most Reviewed).
  // This is to help future proof against potential changes to the Yelp API.
  renderSortByOptions() {
  // this will return an array of all the keys
  /*inside our map method we pass a callback function. This returns a new array
  with each element inside*/
    return
      Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}<li>;
    });
  }
    render() {
      return (
  <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
//<!-- Using .renderSortByOptions() sorts the businesses by their options. -->
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
  </div>
   )
  }
}

export default SearchBar;



