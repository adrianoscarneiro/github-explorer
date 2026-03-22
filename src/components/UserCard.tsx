import type { GitHubUserPreview } from "../types/github";
import React from "react";

const userCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: 15,
  margin: 20,
};

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
}: GitHubUserPreview) {
  return (
    <div style={userCardStyle}>
      <img src={avatar_url} alt={`This is ${login}'s avatar`} />
      <div>{login}</div>
      <div>{bio}</div>
      <div>{followers}</div>
      <div>{html_url}</div>
    </div>
  );
}

export default UserCard;
