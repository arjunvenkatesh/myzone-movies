import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import {
  requestPageData
} from '../modules/movies/actions';

import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import List from './MovieList/List';
import Cards from './MovieCards/Cards';

class App extends Component {

  componentDidMount() {
    this.props.requestPageData();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Redirect from="/" exact to="/list" />
            <Route
              path="/list"
              render={(routeProps) => (
                <List {...routeProps} {...this.props} />
              )}
            />
            <Route
              path="/cards"
              render={(routeProps) => (
                <Cards {...routeProps} {...this.props} />
              )}
            />
          </Switch>

          <Pagination paginationData={this.props.pageData} requestPageData={this.props.requestPageData} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(appState, ownProps) {
  return {
    pageData: appState.movieActions.pageData
  }
}

function mapDispatchToProps(dispatch) {

  return {
    ...bindActionCreators({
      requestPageData
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
