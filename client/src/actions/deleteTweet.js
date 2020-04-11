export default function(id){
    return dispatch=>{
        fetch(`http://localhost:3001/tweets/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(()=>dispatch({type:'DELETE_TWEET', id}))
    }
  
}