const initialState = {
  loading: true,
  data: [],
  errorMsg: ''
};

const PostsListReducer = (state = initialState, action) => {
  switch(action.type) { 
    case 'POSTS_LIST_LOADING':
      return  {
        ...state,
        loading: true
      };
    case 'POSTS_LIST_SUCCESS':
      return  {
          ...state,
          loading: true,
          data: action.payload
      };
    case 'POSTS_LIST_FAILURE':
      return  {
            ...state,
            loading: false,
            errorMsg: 'Error! Unable to get posts'
      };

    default: 
      return state;
  }
};
export default PostsListReducer;