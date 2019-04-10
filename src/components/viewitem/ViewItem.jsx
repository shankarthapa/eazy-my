import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../../actions/ActionTypes';
import './ViewItem.scss';

class ViewItem extends Component {

  constructor(props) {
    super(props);
    this.generateImagePath = this.generateImagePath.bind(this);
    this.getValueByKey = this.getValueByKey.bind(this);
  }

  componentDidMount() {
    // request item list from rest API
    const viewId = this.props.param.split('=');
    this.props.dispatch({
      type: ActionTypes.FETCH_ITEM_VIEW,
      payload: {
        id: parseInt(viewId[1])
      }
    });
  }

  generateImagePath() {
    // check null as first time defaults run which returns empty
    if (!this.props.viewItem.links.image) {
      return '';
    }
    const path = this.props.viewItem.links.image.replace('.jpg', '.png');
    const finalPath = path.replace('image', '2ximg');
    return require('../../assets' + finalPath);
  }

  getValueByKey(key) {
    if (this.props.viewItem.data.attributes) {
      return this.props.viewItem.data.attributes[key];
    }
    return '';
  }

  render() {
    return (
      <div className="viewitem">
        <div className="short-nav">
          <small>
            <span><a href="/">HOME</a> > View Item</span>
          </small>
        </div>

        <div className="view-container">

          <div className="row">

            {/* left section */}
            <div className="col-sm-7 col-lg-7">
              <div className="align-top">
                <div className="view-title">
                  <span> {this.getValueByKey('title')}</span>
                </div>
                <div className="img-container">
                  <img className="img-fluid" src={this.generateImagePath()} alt=""></img>
                </div>
              </div>

              <div className="desc-title">
                <span>DESCRIPTION</span>
              </div>
              <div className="desc">
                <span>{this.getValueByKey('description')}</span>
              </div>
            </div>


            {/* right section */}
            <div className="col-sm-5 col-lg-5 right-box">
              <div className="price-row">
                <small>Price</small>
                <div className="price">{this.getValueByKey('price')}</div>
                <small>Item Condition</small>
                <span>{this.getValueByKey('condition')}</span>

                <small>Item Location</small>
                <span>{this.getValueByKey('location')}</span>

                <small>Seller Info</small>
                <span>{this.getValueByKey('seller_name')}</span>
                <span className="private">{this.getValueByKey('seller_type')}</span>

                <div className="hLine"></div>
                <small>Interested with the ad? Contact the seller</small>
                <button type="button" className="btn btn-outline-danger">{this.getValueByKey('phone')}</button>
                <button type="button" className="btn btn-outline-danger">Email</button>
                <button type="button" className="btn btn-danger">Chat</button>

              </div>
            </div>


          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    viewItem: state.itemList.viewItem
  }
};

export default connect(
  mapStateToProps
)(ViewItem);
