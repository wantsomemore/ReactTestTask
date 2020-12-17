import axios from 'axios';

export const GetUsersList = () => async dispatch => {
  try {
    dispatch({
      type: 'USERS_LIST_LOADING'
    });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    dispatch({
      type: 'USERS_LIST_SUCCESS',
      payload: res.data
    });

  }  catch(e) {
    dispatch({
      type: 'USERS_LIST_FAILURE',
      error: ''
    });
  }

}