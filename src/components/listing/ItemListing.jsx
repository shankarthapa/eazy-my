import React, { Component } from 'react';
import ListItem from './listitem/ListItem';
import { connect } from 'react-redux';
import * as ActionTypes from '../../actions/ActionTypes';
import './ItemListing.scss';

/**
 * component will be listing all the times
 */
class ItemListing extends Component {

  componentDidMount() {
    // request item list from rest API
    this.props.dispatch({
      type: ActionTypes.FETCH_ITEM_LIST
    });
  }

  /**
   * render all items in responsive grid system
   */
  renderItems() {
    return this.props.list.map((item) => {
      return (
        <ListItem key={item.key} item={item}></ListItem>
      );
    });
  }

  render() {
    return (
      <div className="item-container">
        <div className="listing">
          <span>LISTING</span>
        </div>

        <div className="row text-center text-lg-left">
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.itemList.list,
  }
};

export default connect(
  mapStateToProps
)(ItemListing);
