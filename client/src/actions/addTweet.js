export default function(tweet,ownProps){
    return dispatch=>{
        fetch('http://localhost:3001/tweets', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(tweet)
            
        })
        .then(res=>res.json())
        .then(tweet=>{
            dispatch({type: 'ADD_TWEET',preload: tweet})
            ownProps.history.push('/')
        })
    }
}