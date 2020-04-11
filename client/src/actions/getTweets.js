export default function (){
    return dispatch=>{
        fetch('https://localhost:3001/tweets', {
            credentials: 'include'})
            .then(res=>res.json())
            .then(tweets=>{
                dispatch({type:'GET_TWEETS', tweets})
            })
    }
}