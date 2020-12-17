import {useHistory} from 'react-router-dom';

const DetailsButton = () => {
  let history = useHistory();

  const  handleClick = () => {
    history.push(`/post`);
  }
  return (
    <button className='details-btn' type="button" onClick={handleClick}>
      Details
    </button>
  );
}
export default DetailsButton;