import { memo, useCallback } from "react"
import { useParams } from "react-router-dom"
import { format, formatDistance } from "date-fns"
import useStore from "../store"

const RepoDetails = () => {
  const { repoId } = useParams()
  const repoInfo = useStore(
    useCallback(
      (state) => state.gitHubRepos.find((repo) => repo.id === Number(repoId)),
      [repoId]
    )
  )
  console.log(repoInfo)
  const lastUpdatedAt = format(new Date(repoInfo.updated_at), "d MMM yyyy")
  const dispLang = repoInfo.language ? (
    <>
      <i className="fa-solid fa-code"></i> {repoInfo.language} &nbsp;
    </>
  ) : (
    ""
    )
    
    const lastUpdatedTimeLapse = formatDistance(new Date(repoInfo.updated_at), new Date(), {
        addSuffix: true,
      })
  return (
    <div>
      <div className="git__name">{repoInfo.name}</div>
      <div className="git__desc">
        <p>{repoInfo.description}</p>
        <p>
          <i className="fa-brands fa-github"></i> {repoInfo.git_url}
        </p>
        <p>
          {dispLang} &nbsp; &nbsp; &nbsp;
          <i className="fa-solid fa-code-fork"></i> {repoInfo.forks}
        </p>
        <p>
          Last updated: {lastUpdatedAt} ({lastUpdatedTimeLapse})
        </p>
      </div>
    </div>
  )
}

export default memo(RepoDetails)
