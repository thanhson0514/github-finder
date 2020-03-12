import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { html_url, login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        alt={login}
        src={avatar_url}
        className="round-img"
        style={{ width: "80px" }}
      />
      <h3>{login}</h3>
      <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
