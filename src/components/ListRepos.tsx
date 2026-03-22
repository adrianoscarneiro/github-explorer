import type { GitHubReposPreview } from "../types/github";

function ListRepos({
  id,
  name,
  description,
  watchers_count,
}: GitHubReposPreview) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{watchers_count}</td>
    </tr>
  );
}

export default ListRepos;
