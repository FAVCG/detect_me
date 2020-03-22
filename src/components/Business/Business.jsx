import React from 'react';
import './Business.css';


class Business extends React.Component {
  render() {
    /*since we removed the business object we then have to access the business
    info. differently because for ex. the business.imageSrc does not exist. We
    have to access that info via the business prop (this.props) we set in
    businessList file. An easier way to do this is just set a variable and its
    value = this.props.*/
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{Business.rating} stars</h3>
            <p>{business.reviewCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
