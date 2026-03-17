import { useGitHubUser } from "../hooks/useGitHubUser";

interface UserCardProps {
  username: string;
}

function UserCard({ username }: UserCardProps) {
  const userData = useGitHubUser(username);

  if (userData.status === "loading") return <p>Loading...</p>;
  if (userData.status === "error") return <p>{userData.message}</p>;
  if (userData.status === "idle") return <p>Enter a username</p>;

  return (
    <div>
      <img src={userData.data.avatar_url} />
      <p>{userData.data.name}</p>
      <p>{userData.data.bio}</p>
      <p>{userData.data.followers}</p>
    </div>
  );
}

export default UserCard;
