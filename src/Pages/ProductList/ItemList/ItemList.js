import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';

export default class ItemList extends Component {
  state = {
    currentCard: -1,
  };

  cardOn = e => {
    this.setState({
      currentCard: e.target.id,
    });
  };

  cardOff = e => {
    this.setState({
      currentCard: -1,
    });
  };

  render() {
    const { itemList } = this.props;
    const { currentCard } = this.state;
    const list = itemList.slice(0, -1);
    return (
      <div className="ItemList">
        {list &&
          list.map(el => (
            <Link
              key={el.product_id}
              className="Item"
              onMouseEnter={this.cardOn}
              onMouseLeave={this.cardOff}
            >
              <div id={el.product_id}>
                <input className="checkbox" type="checkbox" /> <span>비교</span>
              </div>
              <div class="imgWrapper">
                <img
                  id={el.product_id}
                  src={el.images[0]?.['product_image']}
                  alt={`${el.images[0]?.['product_image']}_img`}
                />
              </div>
              <div
                id={el.product_id}
                className="name"
              >{`${el.foreign_name} ${el.korea_name}`}</div>
              <div id={el.product_id} className="info">
                {el.information}
              </div>
              <span id={el.product_id} className="unit">
                ₩
              </span>
              <span id={el.product_id} className="price">
                {el.price}
              </span>
              {el.product_id === Number(currentCard) && (
                <i class="fas fa-shopping-bag"></i>
              )}
              <p className="option">기타 옵션</p>
              <div className="crossline"></div>
            </Link>
          ))}
      </div>
    );
  }
}
