import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPostsList } from "../actions/postsListAction";
import DetailsButton from '../buttons/DetailsButton';
const Posts = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.PostsList);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    dispatch(GetPostsList());
  };
  
  const showData = () => {
    if (!_.isEmpty(postsList.data)) {
      return postsList.data.map((el) => {
        return (
          <div>
            <table className='posts-table'>
              <thead>
                <tr className='posts-table header-row'>
                  <th>UserID</th>
                  <th>ID of post</th>
                  <th>Title of post</th>
                  <th>Body of post</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className='posts-table body-row'>
                  <td>{el.userId}</td>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.body}</td>
                  <td><DetailsButton/></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
    }

    if (postsList.loading) {
      return <p>Loading...</p>;
    }

    if (postsList.errorMsg !== "") {
      return <p>{postsList.errorMsg}</p>;
    }

    return <p>Unable to get List of Users</p>;
  };

  return <div>{showData()}</div>;
};

export default Posts;
