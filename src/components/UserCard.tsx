import type { GitHubUserPreview } from "../types/github";

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
  location,
}: GitHubUserPreview) {
  return (
    <div className="flex flex-col flex-wrap content-center items-center max-w-screen md:p-2">
      <div>
        <img
          src={avatar_url}
          alt={`This is ${login}'s avatar`}
          className="rounded-full object-cover w-25 h-25 md:w-40 md:h-40 border-gray-700 border-5"
        />
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap text-xs text-[clamp(0.8rem,1vw,2rem)] md:flex-col">
        <div className="md:my-1">
          Username
          <div className="bg-[#E5F0FF] px-2 py-1 rounded-lg border-gray-700 border-3">
            {login}
          </div>
        </div>
        <div className="md:my-1">
          Location:{" "}
          <div className="bg-[#E5F0FF] px-2 py-1 rounded-lg border-gray-700 border-3">
            {location ? location : "Unknown"}
          </div>
        </div>
        <div className="md:my-1">
          Followers:
          <div className="bg-[#E5F0FF] px-2 py-1 rounded-lg border-gray-700 border-3">
            {followers}
          </div>
        </div>
        <div className="md:my-1">
          Profile:{" "}
          <div className="bg-[#E5F0FF] px-2 py-1 rounded-lg border-gray-700 border-3">
            <a href={html_url}>{html_url}</a>
          </div>
        </div>
        <div className="m-1 md:my-1">
          Bio:{" "}
          <div className="bg-[#E5F0FF] p-1 rounded-lg w-auto border-gray-700 border-3">
            {bio ? bio : "No content"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
