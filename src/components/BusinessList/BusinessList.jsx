import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.jsx';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
    {/*  we manually did this in the BusinessList component so that we can
    simulate a list of returned business.This will be refactored in order to
    remove repetition.*/}
     {/*<Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />*/}
    {/*Here we removed the repetition and accessed the businesses prop and
    called the map method on it.Then we passed a callback function with one
    parameter of business that returns a business component with a property
    called business equal to the parameter of the callback function.*/}
        {
          this.props.businesses.map((business) => {
          return <Business business={business} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;
