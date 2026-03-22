import type { GitHubUserPreview } from "../types/github";

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
}: GitHubUserPreview) {
  return (
    <div>
      <img src={avatar_url} />
      <p>{login}</p>
      <p>{bio}</p>
      <p>{followers}</p>
      <p>{html_url}</p>
    </div>
  );
}

export default UserCard;
