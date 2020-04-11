import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import AddTweet from './AddTweet';
import { connect } from 'react-redux';
import getTweets from './actions/getTweets';

class App extends Component {

  componentDidMount() {
    this.props.getTweets()
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTweet} />
        </div>
      </Router>
    )
  }
}

export default connect(null,{getTweets})(App)
