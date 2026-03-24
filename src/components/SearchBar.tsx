import { useState } from "react";
import { useGitHubUser } from "../hooks/useGitHubUser";
import UserCard from "./UserCard";
import ListRepos from "./ListRepos";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const data = useGitHubUser(search);
  const repos = useGitHubRepos(search);

  const handleClick = () => {
    setSearch(inputValue);
  };
  return (
    <div className="min-h-screen text-[#8b949e] container justify-items-center flex flex-col w-full p-2">
      <div className="mt-4 mb-4">
        <h1 className="text-white text-3xl font-bold text-center">
          GitHub Explorer
        </h1>
        <p className="text-gray-400 text-xs text-center mb-1 ms-1 me-1">
          Search for GitHub profiles and repositories.
        </p>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-[#21262d] rounded-lg w-50 text-[#8b949e] box-border border text-sm mt-2 mb-2 ms-1 me-1 ps-2 py-0.5"
          place-holder="Enter a username"
        />
        <button
          onClick={handleClick}
          className="bg-[#45515f] rounded-lg w-20 text-[#8b949e]"
        >
          Search
        </button>
      </div>

      {data.status === "idle" || repos.status === "idle"}
      {data.status === "error" ||
        (repos.status === "error" && <p>Not Found</p>)}
      {data.status === "loading" ||
        (repos.status === "loading" && <p>Loading...</p>)}
      {data.status === "success" && repos.status === "success" && (
        <div className="flex flex-row bg-[#161b22] rounded-2xl w-full h-auto h-max-auto my-2 p-4">
          <UserCard
            login={data.data.login}
            bio={data.data.bio}
            avatar_url={data.data.avatar_url}
            followers={data.data.followers}
            html_url={data.data.html_url}
          />

          <div className=" text-[#8b949e] rounded-2xl my-2 px-2 w-full">
            <h2 className="text-[#acb8c5] text-lg font-bold bg-[#21262d] rounded-sm">
              Repositories
            </h2>
            <div className="overflow-y overflow-y-scroll h-100 no-scrollbar">
              <table className="text-center table border-separate border-spacing-y-1 border-spacing-x-1 w-full">
                <thead className="text-center content-center text-xs text-[#21262d] bg-[#E5F0FF] sticky top-0">
                  <tr>
                    <th>Language</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stars</th>
                  </tr>
                </thead>

                <tbody className="">
                  {repos.data.map((repo) => {
                    return (
                      <ListRepos
                        key={repo.id}
                        language={repo.language}
                        name={repo.name}
                        description={repo.description}
                        stars={repo.stargazers_count}
                        html_url={repo.html_url}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
