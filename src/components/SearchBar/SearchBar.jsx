import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
     };

     this.handleTermChange = this.handleTermChange.bind(this);
     this.handleLocationChange = this.handleLocationChange.bind(this);
     this.handleSearch = this.handleSearch.bind(this);

     this.sortByOptions = {
      // you have to get the correct naming convention on the values.
      // https://www.yelp.com/developers/documentation/v3/business_search
      // You can view these values on the
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }
  };

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  };

  handleTermChange(event){
    this.setState({
      term: event.target.value
    });
  }
  handleLocationChange(event){
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    //method below prevents the default action of clicking a link from triggering at the end of the method.
    event.preventDefault();
  }
  // The purpose of this method is to dynamically create the list items needed
  // to display the sort options (Best Match, Highest Rated, Most Reviewed).
  // This is to help future proof against potential changes to the Yelp API.
  renderSortByOptions() {
  // this will return an array of all the keys
  /*inside our map method we pass a callback function. This returns a new array
  with each element inside*/
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
        return <li
        key={sortByOptionValue}
        className={this.getSortByClass(sortByOptionValue)}
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    });
  }
  render() {
    return(
      <div className="SearchBar">
          <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
          </div>
          <div className="SearchBar-fields">
              <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
              <input placeholder="Where?" onChange={this.handleLocationChange} />
          </div>
          <div className="SearchBar-submit">
              <a onClick={this.handleSearch}>Let's Go</a>
          </div>
      </div>
    )
  }
}

export default SearchBar;



