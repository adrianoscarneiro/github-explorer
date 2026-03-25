import type { GitHubUserPreview } from "../types/github";

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
}: GitHubUserPreview) {
  return (
    <div className="flex flex-col flex-wrap content-center items-center max-w-screen">
      <div className="">
        <img
          src={avatar_url}
          alt={`This is ${login}'s avatar`}
          className="rounded-full object-cover w-25 h-25 my-2 md:w-40 md:h-40 border-gray-700 border-5"
        />
      </div>

      <div className="flex flex-col content-center items-center flex-wrap text-xs text-[clamp(0.8rem,1vw,2rem)]">
        <div>
          Username
          <div className="bg-[#E5F0FF] px-2 py-1 m-1 rounded-lg border-gray-700 border-3">
            {login}
          </div>
        </div>
        <div>
          Followers:
          <div className="bg-[#E5F0FF] px-2 py-1 m-1 rounded-lg border-gray-700 border-3">
            {followers}
          </div>
        </div>
        <div>
          Profile:{" "}
          <div className="bg-[#E5F0FF] px-2 py-1 m-1 rounded-lg border-gray-700 border-3">
            <a href={html_url}>{html_url}</a>
          </div>
        </div>
        <div>
          Bio:{" "}
          <div className="bg-[#E5F0FF] p-1 m-1 rounded-lg w-auto border-gray-700 border-3">
            {bio ? bio : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
