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
    <div className="text-[#8b949e] justify-items-center flex flex-col w-full px-1">
      <div className="mt-4 mb-4 flex flex-col items-center h-auto md:m-15 md:mb-4">
        <h1 className="text-white animate-pulse text-3xl font-bold text-center text-[clamp(2rem,4vw,4rem)] text-bold tracking-widest subpixel-antialiased">
          Git Explorer
        </h1>
        <p className="text-gray-400 font-light text-center ms-1 me-1 text-[clamp(0.8rem,3vw,2rem)] md:text-[clamp(1rem,1vw,2rem)]">
          Search for GitHub profiles and repositories.
        </p>
        <div className="flex flex-col w-full items-center sm:flex-row sm:justify-center lg:flex-row lg:justify-center">
          <input
            type="search"
            aria-label="search"
            aria-invalid="false"
            autoCapitalize="none"
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-[#21262d] rounded-lg w-70 text-[#8b949e] box-border border-1/2 text-sm mt-2 mb-2 ms-1 me-1 ps-2 py-0.5 text-[clamp(0.8rem,3vw,1rem)] placeholder:text-xs focus:outline-none "
            placeholder="Enter a username"
            spellCheck="false"
          />
          <button
            onClick={handleClick}
            className="bg-[#45515f] rounded-lg w-18 py-1 text-[#8b949e] text-[clamp(0.6rem,1vw,1.5rem)]"
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
        <div className="md:flex md:flex-row md:w-full md:h-screen">
          <div className="flex flex-col bg-[#161b22] rounded-2xl w-full h-auto h-max-screen my-2 py-2 md:flex-row md:w-1/4 md:my-0 md:justify-center md:items-center">
            <UserCard
              login={data.data.login}
              bio={data.data.bio}
              avatar_url={data.data.avatar_url}
              followers={data.data.followers}
              html_url={data.data.html_url}
              location={data.data.location}
            />
          </div>
          <div className="bg-[#161b22] rounded-2xl w-full h-auto h-max-screen mb-2 md:w-3/4 md:mb-0 md:ms-1 md:h-screen">
            <div className=" text-[#8b949e] rounded-2xl w-full">
              <div className="text-[#acb8c5] font-light text-[clamp(1rem,1vw,1.5rem)] py-1 mb-1 md:w-full md:py-0 md:mb-0 md:mt-2">
                Repositories
              </div>
              <div className="overflow-y overflow-y-scroll overflow-x-hidden sm:h-100 w-full max-h-screen rounded-lg px-1 no-scrollbar md:min-h-screen md:pb-1">
                <table className="text-center table-fixed w-full h-auto table border-separate border-spacing-y-[0.1rem] border-spacing-x-[0.1rem] pb-1 rounded-2xl">
                  <thead className="text-center content-center text-[clamp(0.8rem,2vw,1.5rem)] text-[#b1b1b1] md:text-[clamp(0.8rem,1vw,1.5rem)]">
                    <th className="whitespace-normal wrap-break-words w-1/5 font-semibold">
                      Language
                    </th>
                    <th className="wrap-break-words w-1/5 text-break-all font-semibold">
                      Name
                    </th>
                    <th className="whitespace-normal wrap-break-words w-1/2 text-break-all font-semibold">
                      Description
                    </th>
                    <th className="whitespace-normal wrap-break-words w-1/10 font-semibold">
                      Stars
                    </th>
                  </thead>

                  <tbody className="md:max-h-100">
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
        </div>
      )}
    </div>
  );
}

export default SearchBar;
