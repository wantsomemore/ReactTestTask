import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPostList } from "../actions/postListAction";

const Post = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.PostList);
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = () => {
    dispatch(GetPostList());
  };
  
  const showData = () => {
    if (!_.isEmpty(postList.data)) {
      return postList.data.map((el) => {
        return (
          <div>
            <table className='post-table'>
              <thead>
                <tr className='post-table header-row'>
                  <th>PostID</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                <tr className='post-table body-row'>
                  <td>{el.postId}</td>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.body}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });
    }

    if (postList.loading) {
      return <p>Loading...</p>;
    }

    if (postList.errorMsg !== "") {
      return <p>{postList.errorMsg}</p>;
    }

    return <p>Unable to get List of Users</p>;
  };

  return <div>{showData()}</div>;
};

export default Post;
