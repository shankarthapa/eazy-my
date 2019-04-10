import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import { Jumbotron, Container } from 'reactstrap';
import ItemListing from './components/listing/ItemListing';
import Viewitem from './components/viewitem/ViewItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.pageToRender = this.pageToRender.bind(this);
  }
  
  /**
   * 
   * @param {String} pathName 
   * pathName is the current browser param name
   * render component based upon url param name
   */
  pageToRender(pathName) {
    if (pathName.indexOf('view') === -1) {
      return (<ItemListing></ItemListing>);
    } else {
      return (<Viewitem param={pathName}></Viewitem>);
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Jumbotron fluid>
          <Container fluid>
            {this.pageToRender(window.location.pathname)}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
