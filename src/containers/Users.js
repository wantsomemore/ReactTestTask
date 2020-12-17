import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import _ from 'lodash';
import { GetUsersList } from '../actions/usersListAction';
import PostsButton from '../buttons/PostsButton';

const  Users = () => {  
  
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.UsersList);
  useEffect(() => {
    fetchData(1)
  },[]);
  
  const fetchData = (page = 1) => {
    dispatch(GetUsersList(page))
  }

  const showData = () => {
  
    if(!_.isEmpty(usersList.data)) {
      return  usersList.data.map(el => {
        const newEl = Object.keys(el);
        return (
          <div>
            <table className='users-table'>
              <thead>
                <tr className='users-table header-row'>
                  {newEl.map(attr => <th key={attr}>{attr.toUpperCase()}</th>)}
                  <th>Posts</th>
                </tr>
              </thead>
              <tbody>
              <tr className='users-table body-row'>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.address.city},{el.address.street}</td>
                <td>{el.phone}</td>
                <td>{el.website}</td>
                <td>{el.company.name}</td>
                <td><PostsButton/></td>
              </tr>
              </tbody>
            </table>
          </div>
        )
      })
        
      
    }

    if(usersList.loading) {
      return <p>Loading...</p>
    }
    
    if(usersList.errorMsg !== '') {
      return <p>{usersList.errorMsg}</p>
    }

    return <p>Unable to get List of Users</p>
  }

  return (
    <div>
      
      {showData()}
    </div>
      
    
  )
}

export default Users;
