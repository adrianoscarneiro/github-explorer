import type { GitHubUserPreview } from "../types/github";

function UserCard({
  login,
  avatar_url,
  bio,
  followers,
  html_url,
}: GitHubUserPreview) {
  return (
    <div className="flex flex-col flex-wrap content-center items-center">
      <div className="">
        <img
          src={avatar_url}
          alt={`This is ${login}'s avatar`}
          className="rounded-full object-cover w-20 h-20 mb-2 md:w-40 md:h-40"
        />
      </div>

      <div className="flex flex-col flex-wrap w-50 text-xs text-[clamp(0.7rem,2vw,1rem)]">
        <div>
          Username
          <div className="bg-[#E5F0FF] p-1 m-1 rounded-lg ">{login}</div>
        </div>
        <div>
          Followers:
          <div className="bg-[#E5F0FF] p-1 m-1 rounded-lg">{followers}</div>
        </div>
        <div>
          Profile:{" "}
          <div className="bg-[#E5F0FF] p-1 m-1 rounded-lg">
            <a href={html_url}>{html_url}</a>
          </div>
        </div>
        <div>
          Bio:{" "}
          <div className="bg-[#E5F0FF] p-1 m-1 rounded-lg">
            {bio ? bio : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
