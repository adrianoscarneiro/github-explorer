import { useState } from "react";
import { useGitHubUser } from "../hooks/useGitHubUser";
import UserCard from "./UserCard";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const data = useGitHubUser(search);

  const handleClick = () => {
    setSearch(inputValue);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}>Search</button>
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
    </div>
  );
}

export default SearchBar;
