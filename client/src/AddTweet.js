import React, { Component } from 'react'
import addTweet from './actions/addTweet';
import { connect } from 'react-redux';

class AddTweet extends Component {
    constructor(){
        super()
        this.state={
            body:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            body:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTweet(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="tweet"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mdtp = (dispatch, ownProps) => {
    return {
        addTweet: tweet => dispatch(addTweet(tweet, ownProps)),
    };
 };

export default connect (null, mdtp)(AddTweet)
