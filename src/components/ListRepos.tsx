import type { GitHubReposPreview } from "../types/github";

function ListRepos({
  language,
  name,
  description,
  stars,
  html_url,
}: GitHubReposPreview) {
  return (
    <tr className="bg-[#21262d] text-xs text-[#e6edf3] ">
      <td className="py-2 px-1 rounded-sm">{language}</td>
      <td className="py-2 px-1 rounded-sm">
        <a href={html_url}>{name}</a>
      </td>
      <td className="py-2 px-1 rounded-sm">{description}</td>
      <td className="py-2 px-1 rounded-sm">{stars}</td>
    </tr>
  );
}

export default ListRepos;
