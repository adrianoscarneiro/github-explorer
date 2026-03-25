import type { GitHubReposPreview } from "../types/github";

function ListRepos({
  language,
  name,
  description,
  stars,
  html_url,
}: GitHubReposPreview) {
  return (
    <tr className="bg-[#21262d] text-[#e6edf3] text-[clamp(0.8rem,1vw,1.5rem)]">
      <td className="py-1 px-1 rounded-sm whitespace-normal wrap-break-words">
        {language}
      </td>
      <td className="py-1 px-1 rounded-sm  whitespace-normal wrap-break-words">
        <a href={html_url} className="wrap-break-word">
          {name}
        </a>
      </td>
      <td className="py-1 px-1 rounded-sm whitespace-normal wrap-break-words">
        {description}
      </td>
      <td className="py-1 px-1 rounded-sm">{stars}</td>
    </tr>
  );
}

export default ListRepos;
