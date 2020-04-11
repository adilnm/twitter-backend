export default function (){
    return dispatch=>{
        fetch('http://localhost:3001/tweets', {
            credentials: 'include'})
            .then(res=>res.json())
            .then(tweets=>{
                dispatch({type:'GET_TWEETS', tweets})
            })
    }
}