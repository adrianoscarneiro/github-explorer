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
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      {data.status === "idle" && <p>Enter a username</p>}
      {data.status === "error" && <p>Not Found</p>}
      {data.status === "loading" && <p>Loading...</p>}
      {data.status === "success" && (
        <UserCard
          login={data.data.login}
          bio={data.data.bio}
          avatar_url={data.data.avatar_url}
          followers={data.data.followers}
          html_url={data.data.html_url}
        />
      )}

      {repos.status === "success" && (
        <table className="list">
          <thead>
            List of Repositories
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>WACTHERS</th>
            </tr>
          </thead>
          <tbody>
            {repos.data.map((repo) => {
              return (
                <ListRepos
                  key={repo.id}
                  id={repo.id}
                  name={repo.name}
                  description={repo.description}
                  watchers_count={repo.watchers_count}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchBar;
