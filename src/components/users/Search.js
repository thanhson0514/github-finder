import React, { useState, useContext } from "react";

import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const { users, clearUsers, searchUsers } = githubContext;

  const onSubmit = e => {
    e.preventDefault();
    if (!text.length) {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };
  const onClick = e => {
    clearUsers();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" onChange={onChange} />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {!!users.length && (
        <button className="btn btn-light btn-block" onClick={onClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
