import axios from 'axios';

export const GetPostList = () => async dispatch => {
  try {
    dispatch({
      type: 'POST_LIST_LOADING'
    });
   
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`);
    
    dispatch({
      type: 'POST_LIST_SUCCESS',
      payload:  res.data
      
    });

  }  catch(e) {
    dispatch({
      type: 'POST_LIST_FAILURE',
      error: ''
    });
  }

}