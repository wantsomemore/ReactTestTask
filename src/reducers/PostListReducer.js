const initialState = {
  loading: true,
  data: [],
  errorMsg: ''
};

const PostListReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'POST_LIST_LOADING':
      return  {
        ...state,
        loading: true
      };
    case 'POST_LIST_SUCCESS':
      return  {
          ...state,
          loading: true,
          data: action.payload
      };
    case 'POST_LIST_FAILURE':
      return  {
            ...state,
            loading: false,
            errorMsg: 'Error! Unable to get this post'
      };

    default: 
      return state;
  }
};
export default PostListReducer;