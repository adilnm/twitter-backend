import React, { Component } from 'react'
import { connect } from 'react-redux';
import getTweets from './actions/getTweets';
import deleteTweet from './actions/deleteTweet';


class Home extends Component {
    
    handleDelete=(e)=>{
        let id=e.target.parentElement.id
        this.props.deleteTweet(id)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.tweets.map((item, index)=><li id={item.id}>{item.body}<button onClick={this.handleDelete}>X</button></li>)}
                </ul>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        tweets: state.tweets
    }
}
export default connect(mstp, { getTweets, deleteTweet})(Home)
