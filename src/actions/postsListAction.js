import axios from 'axios';

export const GetPostsList = () => async dispatch => {
  try {
    dispatch({
      type: 'POSTS_LIST_LOADING'
    });
   
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    
    dispatch({
      type: 'POSTS_LIST_SUCCESS',
      payload:  res.data
      
    });

  }  catch(e) {
    dispatch({
      type: 'POSTS_LIST_FAILURE',
      error: ''
    });
  }

}