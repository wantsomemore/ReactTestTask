const initialState = {
  loading: true,
  data: [],
  errorMsg: ''
};

const UsersListReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'USERS_LIST_LOADING':
      return  {
        ...state,
        loading: true
      };
    case 'USERS_LIST_SUCCESS':
      return  {
          ...state,
          loading: true,
          data: action.payload
      };
    case 'USERS_LIST_FAILURE':
      return  {
            ...state,
            loading: false,
            errorMsg: 'Unable to get users list'
      };

    default: 
      return state;
  }
};
export default UsersListReducer;