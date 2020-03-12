import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  SET_LOADING,
  GET_REPOS,
  CLEAR_USERS
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // SEARCH USERS
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  // CLEAR USERS
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // GET USER
  const getUser = async username => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`);
    console.log(res);

    dispatch({ type: GET_USER, payload: res.data });
  };

  // GET REPOS
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:5`
    );
    console.log(res);
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
