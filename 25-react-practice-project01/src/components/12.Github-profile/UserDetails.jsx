import React from "react";

const UserDetails = ({ details }) => {
  console.log(details);
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
    created_at,
  } = details;
  const createdDate = new Date(created_at)
  return <div>
    <img src={avatar_url} alt="avatar" />
    <a href={html_url}>{name || login}</a>
    <p>Public Repos: {public_repos}</p>
    <p>Follower: {followers}</p>
    <p>Following: {following}</p>
  <p>Create at {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
    month:'short',
  })} ${createdDate.getFullYear()}`}</p>
  </div>;
};

export default UserDetails;
