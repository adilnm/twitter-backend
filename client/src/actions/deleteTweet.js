export default function(id){
    return dispatch=>{
        fetch(`/tweets/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(()=>dispatch({type:'DELETE_TWEET', id}))
    }
  
}