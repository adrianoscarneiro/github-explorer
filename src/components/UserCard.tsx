import type { GitHubUserPreview } from "../types/github";

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
}: GitHubUserPreview) {
  return (
    <div className="flex flex-col items-center my-1 w-85">
      <img
        src={avatar_url}
        alt={`This is ${login}'s avatar`}
        className="rounded-full w-40 h-40 object-cover"
      />
      <div className="flex flex-col text-xs w-auto">
        Username: <div className="bg-[#E5F0FF] p-2 m-1 rounded-lg">{login}</div>
        Followers:{" "}
        <div className="bg-[#E5F0FF] p-2 m-1 rounded-lg">{followers}</div>
        Profile:{" "}
        <div className="bg-[#E5F0FF] p-2 m-1 rounded-lg">
          <a href={html_url}>{html_url}</a>
        </div>
        Bio:{" "}
        <div className="bg-[#E5F0FF] p-2 m-1 rounded-lg">
          {bio ? bio : "N/A"}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
