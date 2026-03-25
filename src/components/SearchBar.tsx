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
    <div className="text-[#8b949e] container justify-items-center flex flex-col w-full p-2">
      <div className="mt-4 mb-4 flex flex-col items-center h-auto md:pt-20">
        <h1 className="text-white animate-pulse text-3xl font-bold text-center text-[clamp(2rem,4vw,4rem)] text-bold tracking-widest subpixel-antialiased">
          Git Explorer
        </h1>
        <p className="text-gray-400 text-center ms-1 me-1 text-[clamp(1.5rem,1vw,2.5rem)]">
          Search for GitHub profiles and repositories.
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:flex-row lg:justify-center">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-[#21262d] rounded-lg w-35 text-[#8b949e] box-border border text-sm mt-2 mb-2 ms-1 me-1 ps-2 py-0.5 text-[clamp(1rem,3vw,1rem)]"
            place-holder="Enter a username"
          />
          <button
            onClick={handleClick}
            className="bg-[#45515f] rounded-lg w-15 text-[#8b949e] text-[clamp(1rem,2vw,1.5rem)]"
          >
            Search
          </button>
        </div>
      </div>

      {data.status === "idle" || repos.status === "idle"}
      {data.status === "error" ||
        (repos.status === "error" && <p>Not Found</p>)}
      {data.status === "loading" ||
        (repos.status === "loading" && (
          <p className="animate-pulse">Loading...</p>
        ))}
      {data.status === "success" && repos.status === "success" && (
        <div className="flex flex-col md:flex-row bg-[#161b22] rounded-2xl w-full h-auto h-max-screen my-2 p-1">
          <UserCard
            login={data.data.login}
            bio={data.data.bio}
            avatar_url={data.data.avatar_url}
            followers={data.data.followers}
            html_url={data.data.html_url}
          />

          <div className=" text-[#8b949e] rounded-2xl my-2 w-full top-0 sticky">
            <div className="text-[#acb8c5] font-bold bg-[#21262d] text-[clamp(1rem,4vw,1.5rem)] rounded-2xl mb-1">
              Repositories
            </div>
            <div className="overflow-y overflow-y-scroll overflow-x-hidden sm:h-100 w-full max-h-screen rounded-lg">
              <table className="text-center table-fixed w-full h-auto table border-separate border-spacing-y-[0.1rem] border-spacing-x-[0.1rem]">
                <thead className="text-center content-center text-[clamp(1rem,3vw,1.5rem)] text-[#21262d] bg-[#E5F0FF] sticky top-0">
                  <tr>
                    <th className="whitespace-normal wrap-break-words w-1/4">
                      Language
                    </th>
                    <th className="wrap-break-words w-1/4 text-break-all">
                      Name
                    </th>
                    <th className="whitespace-normal wrap-break-words w-1/2 text-break-all">
                      Description
                    </th>
                    <th className="whitespace-normal wrap-break-words w-1/10">
                      Stars
                    </th>
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
