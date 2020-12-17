import {useHistory} from 'react-router-dom';

const PostsButton = () => {
  let history = useHistory();

  const  handleClick = () => {
    history.push(`/posts`);
  }
  return (
    <button  className='posts-btn' type="button" onClick={handleClick}>
      Posts
    </button>
  );
}
export default PostsButton;