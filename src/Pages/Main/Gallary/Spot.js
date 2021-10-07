import React from 'react';
import { Link } from 'react-router-dom';

class Spot extends React.Component {
  render() {
    const { x, y, en, kr, explain, price } = this.props.item;
    const spot = { bottom: `${x}%`, left: `${y}%` };
    return (
      <Link className="Spot" style={spot} to="">
        <div className="box">
          <div className="text">
            <span style={{ color: 'orange' }}>New</span>
            <span className="name">{`${en} ${kr}`}</span>
            <span className="explain">{explain}</span>
            <span className="price">{`₩ ${price}`}</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <button className="spotBotton"></button>
      </Link>
    );
  }
}

export default Spot;
