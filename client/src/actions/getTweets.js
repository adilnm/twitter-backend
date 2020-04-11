export default function (){
    return dispatch=>{
        fetch('/tweets', {
            credentials: 'include'})
            .then(res=>res.json())
            .then(tweets=>{
                dispatch({type:'GET_TWEETS', tweets})
            })
    }
}