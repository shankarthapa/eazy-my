import React, { Component } from 'react';
import './ListItem.scss';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.generateImagePath = this.generateImagePath.bind(this);
  }

  generateImagePath() {
    const path = this.props.item.attributes.links.image.replace('.jpg', '.png');
    return require('../../../assets'+ path);
  }

  render() {
    return (
      <div className="col-sm-2 col-lg-6 col-md-6 col-6 item-box">
        <a href={`/view/:id=`+this.props.item.id} className="d-block">
          <img className="img-fluid" src={this.generateImagePath()} alt={this.props.item.attributes.title}></img>
        </a>
        <span className="title">{this.props.item.attributes.title}</span>
        <h5 className="price">{this.props.item.attributes.price}</h5>
      </div>
    )
  }
}
